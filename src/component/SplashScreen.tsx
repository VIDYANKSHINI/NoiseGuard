import { motion } from 'motion/react';
import { Shield } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      onAnimationComplete={() => setTimeout(onComplete, 2000)}
      className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)'
      }}
    >
      {/* Decorative animated circles */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute bottom-0 left-0 w-72 h-72 bg-white rounded-full translate-y-1/2 -translate-x-1/2"
      />
      
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8, type: 'spring', stiffness: 150 }}
        className="flex flex-col items-center relative z-10"
      >
        {/* Logo container with glow effect */}
        <div className="relative mb-8">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute inset-0 bg-white rounded-3xl blur-xl"
          />
          <motion.div
            initial={{ rotate: -180 }}
            animate={{ rotate: 0 }}
            transition={{ delay: 0.3, duration: 0.8, type: 'spring' }}
            className="relative w-28 h-28 bg-white rounded-[1.75rem] flex items-center justify-center shadow-2xl"
            style={{
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
            }}
          >
            <Shield className="w-16 h-16 text-[#4A90E2]" strokeWidth={2.5} />
          </motion.div>
        </div>
        
        {/* App Name */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h1 className="text-white text-5xl font-bold mb-3 text-shadow-sm tracking-tight">
            NoiseGuard
          </h1>
        </motion.div>
        
        {/* Tagline */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-white/95 text-lg text-center px-8 mb-6"
        >
          Protect Your Health. Report Noise.
        </motion.p>

        {/* Loading indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex gap-2"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.15,
              }}
              className="w-2 h-2 bg-white rounded-full shadow-lg"
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}