import { motion } from 'framer-motion';

interface AnimatedCursorProps {
  x: number;
  y: number;
  isClicking: boolean;
  visible?: boolean;
}

export default function AnimatedCursor({
  x,
  y,
  isClicking,
  visible = true,
}: AnimatedCursorProps) {
  if (!visible) return null;

  return (
    <motion.div
      animate={{ x, y }}
      transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
      className="absolute top-0 left-0 pointer-events-none z-50 -ml-1 -mt-1"
      aria-hidden="true"
    >
      {/* Click ripple circle */}
      {isClicking && (
        <motion.div
          initial={{ scale: 0.4, opacity: 0.9 }}
          animate={{ scale: 2.2, opacity: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-blue/30 border border-blue pointer-events-none"
        />
      )}

      {/* Modern SVG Cursor Arrow */}
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`drop-shadow-md transition-transform duration-150 ${
          isClicking ? 'scale-90' : 'scale-100'
        }`}
      >
        <path
          d="M3 3L10.07 20.97L12.58 13.58L19.97 11.07L3 3Z"
          fill="#0B1220"
          stroke="white"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
}
