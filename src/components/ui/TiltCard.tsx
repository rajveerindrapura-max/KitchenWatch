import { type ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tiltAngle?: number;
}

export default function TiltCard({
  children,
  className = '',
  tiltAngle = 1,
}: TiltCardProps) {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    return <div className={`relative ${className}`}>{children}</div>;
  }

  return (
    <motion.div
      whileHover={{
        y: -3,
        rotate: tiltAngle,
        boxShadow: '0 14px 34px -10px rgba(16, 24, 40, 0.08)',
        transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
      }}
      whileTap={{
        y: 0,
        rotate: 0,
        boxShadow: '0 2px 6px -1px rgba(16, 24, 40, 0.04)',
        transition: { duration: 0.1 },
      }}
      className={`relative transition-all ${className}`}
    >
      {children}
    </motion.div>
  );
}
