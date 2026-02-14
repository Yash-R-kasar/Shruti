import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function SuccessPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center p-4 sm:p-6 relative overflow-hidden"
    >
      {/* Floating celebration elements */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl sm:text-6xl pointer-events-none select-none"
          style={{
            top: `${10 + Math.random() * 80}%`,
            left: `${5 + Math.random() * 90}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.7, 0],
            scale: [0, 1.4, 0.6],
            y: [0, -180, -300],
            rotate: [0, Math.random() * 360 - 180],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            delay: i * 0.3 + Math.random() * 1.5,
            ease: 'easeOut',
            times: [0, 0.4, 1],
          }}
        >
          {['🎉', '💖', '✨', '🩵', '🌸', '🥳', '💫'][i % 7]}
        </motion.div>
      ))}

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 80, damping: 12, delay: 0.4 }}
        className={`
          bg-white/80 backdrop-blur-xl 
          p-10 sm:p-12 md:p-16 
          rounded-3xl 
          shadow-2xl shadow-emerald-200/40 
          border border-emerald-100/60
          max-w-2xl w-full 
          text-center 
          relative 
          overflow-hidden
        `}
      >
        {/* Confetti burst effect on load */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-radial from-yellow-300/30 via-transparent to-transparent"
            animate={{ scale: [1, 2.5, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2.5, repeat: 2, repeatDelay: 1.5 }}
          />
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: [0, -10, 10, -5, 0] }}
          transition={{ type: 'spring', stiffness: 180, delay: 0.6 }}
          className="mb-8"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent leading-tight"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            YOU SAID YES...! 💖✨
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-xl sm:text-2xl font-medium text-gray-700 mt-4"
          >
            I'm the happiest person right now 🥹💕
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4, type: 'spring', stiffness: 100 }}
          className="my-10"
        >
          <motion.div
            className="text-2xl sm:text-9xl md:text-[4rem] leading-none"
            animate={{
              rotate: [0, 8, -8, 4, -4, 0],
              scale: [1, 1.05, 1, 1.03, 1],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            🎉🥳💗
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-800 mb-12 font-medium px-4 sm:px-8"
        >
          Thank you for coming back...<br />
          Let's make even more beautiful memories together ♡
        </motion.p>

        {/* Optional: replace with real image or keep placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2 }}
          className="mb-10"
        >
        </motion.div>

        <motion.div
          className="text-3xl sm:text-4xl mt-6"
          animate={{ scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          💕 🌸 ✨
        </motion.div>

        <motion.p
          className="mt-10 text-base sm:text-lg text-gray-600 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6 }}
        >
          Can't wait to talk to you again... soon? 🥰
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export default SuccessPage;