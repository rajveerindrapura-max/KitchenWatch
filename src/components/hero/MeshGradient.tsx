import { useReducedMotion } from 'framer-motion';

export default function MeshGradient() {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    return (
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden opacity-35"
        aria-hidden="true"
      >
        <div className="absolute -top-20 left-1/4 w-[600px] h-[500px] rounded-full bg-gradient-to-br from-[#7CC4FF]/40 to-[#2F6BFF]/20 blur-3xl" />
      </div>
    );
  }

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden opacity-50 filter blur-[90px]"
      aria-hidden="true"
    >
      {/* Blob 1: Blue & Sky */}
      <div
        className="absolute -top-12 left-[15%] w-[520px] h-[440px] rounded-full opacity-60 animate-[pulse_14s_ease-in-out_infinite]"
        style={{
          background: 'radial-gradient(circle, #7CC4FF 0%, #2F6BFF 55%, transparent 75%)',
        }}
      />
      {/* Blob 2: Teal & Mint */}
      <div
        className="absolute top-[20%] right-[10%] w-[460px] h-[400px] rounded-full opacity-45 animate-[pulse_18s_ease-in-out_infinite_2s]"
        style={{
          background: 'radial-gradient(circle, #5EE0C8 0%, #BFF0DC 55%, transparent 75%)',
        }}
      />
      {/* Blob 3: Warm Peach & Soft Amber */}
      <div
        className="absolute top-[45%] left-[30%] w-[420px] h-[360px] rounded-full opacity-35 animate-[pulse_16s_ease-in-out_infinite_4s]"
        style={{
          background: 'radial-gradient(circle, #FFD3B0 0%, #FFE7A8 55%, transparent 75%)',
        }}
      />
    </div>
  );
}
