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
  tiltAngle = 1.5,
}: TiltCardProps) {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    return <div className={`relative ${className}`}>{children}</div>;
  }

  return (
    <motion.div
      whileHover={{
        y: -4,
        rotate: tiltAngle,
        boxShadow: '3px 3px 0px #1C1B18',
        transition: { duration: 0.15, ease: [0.22, 1, 0.36, 1] },
      }}
      whileTap={{
        y: 0,
        rotate: 0,
        boxShadow: '0px 0px 0px #1C1B18',
        transition: { duration: 0.1 },
      }}
      className={`relative transition-colors ${className}`}
    >
      {children}
    </motion.div>
  );
}
