import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

function MemoryPage({ pageNum, content }) {
  const navigate = useNavigate();
  const isFirst = pageNum === 2;
  const isLast = pageNum === 8;

  const prevPage = isFirst ? '/' : `/memory/${pageNum - 1}`;
  const nextPage = isLast ? '/memory/8' : `/memory/${pageNum + 1}`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden relative"
    >
      {/* Floating background hearts & sparkles */}
      <motion.div
        className="absolute inset-0 pointer-events-none select-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 0.6 }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl sm:text-6xl opacity-30"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              y: [0, -40, 0],
              scale: [1, 1.2, 1],
              rotate: [0, 8, -8, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.7,
              ease: 'easeInOut',
            }}
          >
            {i % 2 === 0 ? '💗' : '✨'}
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 80, damping: 12, delay: 0.2 }}
        className={`
          bg-white/80 backdrop-blur-md 
          p-8 sm:p-10 md:p-12 
          rounded-3xl 
          shadow-2xl shadow-pink-200/40 
          border border-pink-100/50
          max-w-2xl w-full 
          text-center 
          relative 
          overflow-hidden
        `}
      >
        {/* Page number badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: [0, -8, 8, -4, 0] }}
          transition={{ type: 'spring', stiffness: 180, delay: 0.4 }}
          className="absolute -top-5 -right-5 bg-gradient-to-br from-pink-400 to-purple-500 text-white font-bold w-16 h-16 flex items-center justify-center rounded-full shadow-lg text-xl border-4 border-white z-10"
        >
          {pageNum}
        </motion.div>

        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent"
        >
          Relate to this just a bit ♡
        </motion.h1>

        <AnimatePresence mode="wait">
          <motion.div
            key={pageNum}
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: -20 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-800 mb-10 min-h-[120px] px-2 sm:px-6 font-medium"
          >
            {content}
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <div className="flex justify-between items-center gap-6 mt-8">
          <motion.button
            whileHover={{ scale: 1.08, x: -4 }}
            whileTap={{ scale: 0.94 }}
            disabled={isFirst}
            onClick={() => navigate(prevPage)}
            className={`
              flex-1 px-6 py-4 rounded-2xl font-semibold text-lg
              transition-all duration-300 shadow-md
              ${isFirst 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white shadow-pink-300/40 hover:shadow-pink-400/60'
              }
            `}
          >
            {isFirst ? 'Start ♡' : '← Previous'}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.08, x: 4 }}
            whileTap={{ scale: 0.94 }}
            disabled={isLast}
            onClick={() => navigate(nextPage)}
            className={`
              flex-1 px-6 py-4 rounded-2xl font-semibold text-lg
              transition-all duration-300 shadow-md
              ${isLast 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-gradient-to-r from-purple-400 to-blue-400 hover:from-purple-500 hover:to-blue-500 text-white shadow-purple-300/40 hover:shadow-purple-400/60'
              }
            `}
          >
            {isLast ? 'The End ♡' : 'Next →'}
          </motion.button>
        </div>

        {/* Tiny heart footer */}
        <motion.div
          className="mt-8 text-3xl opacity-70"
          animate={{ scale: [1, 1.15, 1], rotate: [0, 6, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          💕✨
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default MemoryPage;