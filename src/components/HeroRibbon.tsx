import { motion } from 'motion/react';

function AnimatedRibbon() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%]"
        style={{
          background: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(96, 165, 250, 0.15) 60deg, transparent 120deg)',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%]"
        style={{
          background: 'conic-gradient(from 180deg at 50% 50%, transparent 0deg, rgba(124, 58, 237, 0.1) 90deg, transparent 180deg)',
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-white/50" />
    </div>
  );
}

export default function HeroRibbon() {
  return <AnimatedRibbon />;
}