import { useRef, type ReactNode } from 'react';
import { motion, useReducedMotion, useSpring } from 'framer-motion';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  glowColor?: string;
}

export default function TiltCard({
  children,
  className = '',
  maxTilt = 6,
  glowColor = 'rgba(37,99,235,0.07)',
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();

  const rotateX = useSpring(0, { stiffness: 150, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 150, damping: 20 });

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (shouldReduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    rotateX.set((0.5 - y) * maxTilt * 2);
    rotateY.set((x - 0.5) * maxTilt * 2);

    // Update glow position via CSS vars
    ref.current.style.setProperty('--glow-x', `${x * 100}%`);
    ref.current.style.setProperty('--glow-y', `${y * 100}%`);
    const glow = ref.current.querySelector('.tile-glow') as HTMLElement;
    if (glow) glow.style.opacity = '1';
  }

  function onMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
    const glow = ref.current?.querySelector('.tile-glow') as HTMLElement;
    if (glow) glow.style.opacity = '0';
  }

  return (
    <motion.div
      ref={ref}
      style={
        shouldReduce
          ? {}
          : {
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
              transformPerspective: 800,
            }
      }
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`relative ${className}`}
    >
      <div
        className="tile-glow"
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          pointerEvents: 'none',
          opacity: 0,
          transition: 'opacity 0.3s ease',
          background: `radial-gradient(circle at var(--glow-x, 50%) var(--glow-y, 50%), ${glowColor} 0%, transparent 65%)`,
        }}
      />
      {children}
    </motion.div>
  );
}
