import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Float, ContactShadows, Line } from '@react-three/drei';
import * as THREE from 'three';

// Platform with crates
function Platform({
  position,
  crateColor = '#2563EB',
  hasAlert = false,
  scale = 1,
}: {
  position: [number, number, number];
  crateColor?: string;
  hasAlert?: boolean;
  scale?: number;
}) {
  const alertRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (alertRef.current && hasAlert) {
      alertRef.current.scale.setScalar(
        1 + 0.15 * Math.sin(state.clock.elapsedTime * 2)
      );
    }
  });

  return (
    <group position={position} scale={scale}>
      {/* Platform base */}
      <mesh receiveShadow castShadow position={[0, 0, 0]}>
        <boxGeometry args={[2.2, 0.18, 1.4]} />
        <meshStandardMaterial color="#f1f5f9" roughness={0.4} metalness={0.05} />
      </mesh>

      {/* Crates stack */}
      {[0, 1, 2].map((i) => (
        <mesh key={i} castShadow position={[-0.45 + (i % 2) * 0.55, 0.28 + Math.floor(i / 2) * 0.38, (i % 2) * 0.1]}>
          <boxGeometry args={[0.42, 0.35, 0.42]} />
          <meshStandardMaterial
            color={i === 1 ? crateColor : '#e2e8f0'}
            roughness={0.5}
            metalness={0.08}
          />
        </mesh>
      ))}

      {/* Cylinder (jar) */}
      <mesh castShadow position={[0.65, 0.4, -0.1]}>
        <cylinderGeometry args={[0.12, 0.12, 0.45, 16]} />
        <meshStandardMaterial color="#dbeafe" roughness={0.3} metalness={0.1} />
      </mesh>

      {/* Sphere (bottle cap) */}
      <mesh castShadow position={[0.65, 0.68, -0.1]}>
        <sphereGeometry args={[0.09, 16, 16]} />
        <meshStandardMaterial color="#93c5fd" roughness={0.3} />
      </mesh>

      {/* Alert indicator */}
      {hasAlert && (
        <mesh ref={alertRef} position={[0.95, 0.5, 0.5]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial
            color="#B45309"
            emissive="#92400e"
            emissiveIntensity={0.8}
            roughness={0.2}
          />
        </mesh>
      )}
    </group>
  );
}

// Glowing cube traveling between platforms
function TransferCube({
  platforms,
}: {
  platforms: [number, number, number][];
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const lightRef = useRef<THREE.PointLight>(null);
  const progressRef = useRef(0);
  const pairRef = useRef<[number, number]>([0, 1]);
  const pulseRef = useRef(0);

  // Pick a new pair each cycle
  function nextPair(current: [number, number]): [number, number] {
    const options: [number, number][] = [
      [0, 1], [1, 2], [0, 2], [2, 0], [1, 0],
    ].filter(([a, b]) => !(a === current[0] && b === current[1])) as [number, number][];
    return options[Math.floor(Math.random() * options.length)];
  }

  useFrame((_, delta) => {
    if (!meshRef.current || !lightRef.current) return;

    progressRef.current = Math.min(progressRef.current + delta * 0.45, 1);

    const [fromIdx, toIdx] = pairRef.current;
    const from = new THREE.Vector3(...platforms[fromIdx]);
    const to = new THREE.Vector3(...platforms[toIdx]);
    const mid = new THREE.Vector3()
      .addVectors(from, to)
      .multiplyScalar(0.5)
      .add(new THREE.Vector3(0, 1.5, 0));

    const t = progressRef.current;
    // Quadratic bezier
    const pos = new THREE.Vector3()
      .addVectors(
        new THREE.Vector3().addVectors(
          from.clone().multiplyScalar((1 - t) * (1 - t)),
          mid.clone().multiplyScalar(2 * (1 - t) * t)
        ),
        to.clone().multiplyScalar(t * t)
      );

    meshRef.current.position.copy(pos);
    lightRef.current.position.copy(pos);

    // Pulse at destination
    if (t >= 1) {
      pulseRef.current += delta * 4;
      if (pulseRef.current > Math.PI) {
        progressRef.current = 0;
        pulseRef.current = 0;
        pairRef.current = nextPair(pairRef.current);
      }
    }

    const glowIntensity = 1.5 + Math.sin(Date.now() * 0.005) * 0.5;
    lightRef.current.intensity = glowIntensity;
    meshRef.current.rotation.x += delta * 1.2;
    meshRef.current.rotation.y += delta * 0.9;
  });

  return (
    <>
      <mesh ref={meshRef} castShadow>
        <boxGeometry args={[0.18, 0.18, 0.18]} />
        <meshStandardMaterial
          color="#38BDF8"
          emissive="#0ea5e9"
          emissiveIntensity={1.2}
          roughness={0.1}
          metalness={0.2}
        />
      </mesh>
      <pointLight ref={lightRef} color="#38BDF8" intensity={2} distance={1.5} />
    </>
  );
}

// Thin connector lines between platforms
function Connectors({ platforms }: { platforms: [number, number, number][] }) {
  const pairs: [[number, number, number], [number, number, number]][] = [
    [platforms[0], platforms[1]],
    [platforms[1], platforms[2]],
    [platforms[0], platforms[2]],
  ];

  return (
    <>
      {pairs.map(([a, b], i) => (
        <Line
          key={i}
          points={[
            [a[0], a[1] + 0.1, a[2]],
            [b[0], b[1] + 0.1, b[2]],
          ]}
          color="#cbd5e1"
          lineWidth={0.8}
          opacity={0.5}
          transparent
        />
      ))}
    </>
  );
}

// Mouse parallax + scroll drift
function SceneControls({ children }: { children: React.ReactNode }) {
  const groupRef = useRef<THREE.Group>(null);
  const mouse = useRef({ x: 0, y: 0 });
  useThree(); // keep for context

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += (mouse.current.x * 0.15 - groupRef.current.rotation.y) * 0.04;
    groupRef.current.rotation.x += (-mouse.current.y * 0.08 - groupRef.current.rotation.x) * 0.04;
  });

  return <group ref={groupRef}>{children}</group>;
}

function Scene({ isMobile }: { isMobile: boolean }) {
  const platforms: [number, number, number][] = useMemo(
    () => [
      [-2.2, 0.2, 0],
      [0, -0.3, -0.5],
      [2.2, 0.1, 0.2],
    ],
    []
  );

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 8, 5]} intensity={1.2} castShadow={!isMobile} />
      <Environment preset="city" environmentIntensity={0.3} />

      <SceneControls>
        <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.25}>
          <Platform position={platforms[0]} crateColor="#2563EB" hasAlert />
        </Float>
        <Float speed={0.9} rotationIntensity={0.1} floatIntensity={0.2}>
          <Platform position={platforms[1]} crateColor="#38BDF8" scale={1.1} />
        </Float>
        <Float speed={1.4} rotationIntensity={0.12} floatIntensity={0.3}>
          <Platform position={platforms[2]} crateColor="#93c5fd" />
        </Float>

        <Connectors platforms={platforms} />
        <TransferCube platforms={platforms} />
      </SceneControls>

      {!isMobile && (
        <ContactShadows
          position={[0, -1.0, 0]}
          opacity={0.16}
          scale={5.2}
          blur={2.0}
          far={2.2}
          color="#64748b"
        />
      )}
    </>
  );
}

// WebGL error boundary fallback
function StaticFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg width="340" height="260" viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/* Platform 1 */}
        <rect x="20" y="160" width="100" height="16" rx="4" fill="#e2e8f0" />
        <rect x="35" y="134" width="36" height="28" rx="3" fill="#2563EB" opacity="0.8" />
        <rect x="75" y="140" width="36" height="22" rx="3" fill="#dbeafe" />
        {/* Platform 2 */}
        <rect x="120" y="180" width="100" height="16" rx="4" fill="#e2e8f0" />
        <rect x="135" y="150" width="36" height="32" rx="3" fill="#e2e8f0" />
        <rect x="175" y="155" width="36" height="27" rx="3" fill="#38BDF8" opacity="0.7" />
        {/* Platform 3 */}
        <rect x="220" y="165" width="100" height="16" rx="4" fill="#e2e8f0" />
        <rect x="235" y="138" width="36" height="29" rx="3" fill="#e2e8f0" />
        <rect x="275" y="143" width="36" height="24" rx="3" fill="#dbeafe" />
        {/* Connector lines */}
        <line x1="70" y1="162" x2="170" y2="180" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="170" y1="180" x2="270" y2="165" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" />
        {/* Transfer cube */}
        <rect x="115" y="140" width="12" height="12" rx="2" fill="#38BDF8" opacity="0.9" />
        {/* Alert dot */}
        <circle cx="38" cy="130" r="5" fill="#B45309" opacity="0.9" />
      </svg>
    </div>
  );
}

class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.warn('3D HeroScene error:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

function checkWebGL(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl2') ||
        canvas.getContext('webgl') ||
        canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

export default function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [hasWebGL, setHasWebGL] = useState<boolean | null>(null);

  const isMobile =
    typeof window !== 'undefined' &&
    (window.innerWidth < 768 || (navigator.hardwareConcurrency ?? 4) <= 2);

  useEffect(() => {
    setHasWebGL(checkWebGL());
  }, []);

  // Pause when off screen
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setPaused(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  if (hasWebGL === false) {
    return <StaticFallback />;
  }

  if (hasWebGL === null) {
    return <StaticFallback />;
  }

  return (
    <div ref={containerRef} className="w-full h-full">
      <ErrorBoundary fallback={<StaticFallback />}>
        <Canvas
          camera={{ position: [0, 1.5, 7], fov: 40 }}
          gl={{ alpha: true, antialias: !isMobile, powerPreference: 'default' }}
          dpr={[1, isMobile ? 1.2 : 1.75]}
          frameloop={paused ? 'never' : 'always'}
          style={{ background: 'transparent' }}
        >
          <Scene isMobile={isMobile} />
        </Canvas>
      </ErrorBoundary>
    </div>
  );
}