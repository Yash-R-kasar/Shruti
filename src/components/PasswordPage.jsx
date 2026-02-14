import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const FIXED_PASSWORD = 'shruti'; // Fixed password (change this)
const ERROR_MESSAGES = [
  'Oops, try again! Think of our secret code. 💕',
  'Aathav 😏',
  'Me tula kya haaka martho. ✨',
  'visarlis 🥺',
  'he ghe (shruti)😔💔'
];

function PasswordPage() {
  const [input, setInput] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === FIXED_PASSWORD) {
      navigate('/memory/2');
    } else {
      const msgIndex = attempts % ERROR_MESSAGES.length;
      setError(ERROR_MESSAGES[msgIndex]);
      setAttempts(attempts + 1);
      setInput('');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 overflow-hidden"
    >
      {/* Floating emojis for whimsy */}
      <motion.div
        className="absolute top-10 left-10 text-6xl opacity-20"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        💖
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-20 text-5xl opacity-30"
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        ✨
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
        className={`
          bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50
          p-10 rounded-3xl
          shadow-2xl shadow-pink-200/50
          text-center
          max-w-md w-full
          border border-pink-100/60
          transition-all duration-300
          hover:shadow-3xl hover:shadow-purple-200/60
          mx-auto relative
          backdrop-blur-sm
        `}
      >
        {/* Cute header with animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
          className="mb-6"
        >
          <motion.h1 
            className="text-3xl font-bold mb-2 text-pink-500 font-[cursive] tracking-wide"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            😇Hey Shruti...😇 💕
          </motion.h1>
          <motion.p 
            className="text-lg font-semibold text-purple-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Enter your "name" in my contact... ✨
          </motion.p>
        </motion.div>

        {/* Animated input */}
        <motion.input
          type="password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={`
            w-full px-6 py-4 mb-6
            rounded-2xl border-2 border-pink-200 bg-white/80
            focus:border-purple-300 focus:ring-4 focus:ring-purple-200/50
            text-pink-700 placeholder-pink-300 text-lg
            outline-none transition-all duration-300
            shadow-md hover:shadow-lg
          `}
          placeholder="Whisper the secret... 💫"
          whileFocus={{ scale: 1.02 }}
        />

        {/* Sparkly submit button */}
        <motion.button
          whileHover={{ scale: 1.05, rotate: 1 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className={`
            px-8 py-4 w-full
            bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400
            text-white font-bold text-lg rounded-2xl
            shadow-lg shadow-pink-300/50
            hover:from-pink-500 hover:via-purple-500 hover:to-blue-500
            hover:shadow-xl hover:shadow-purple-300/60
            transition-all duration-300
            flex items-center justify-center gap-2
          `}
        >
          <span>Unlock</span>
          <motion.span
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          >
            🌟
          </motion.span>
        </motion.button>

        {/* Animated error message */}
        <AnimatePresence>
          {error && (
            <motion.p
              initial={{ opacity: 0, x: -20, scale: 0.9 }}
              animate={{ 
                opacity: 1, 
                x: 0, 
                scale: 1,
                rotate: [0, -2, 2, -1, 1, 0] // Shake effect
              }}
              exit={{ opacity: 0, x: 20, scale: 0.9 }}
              transition={{ 
                duration: 0.5, 
                rotate: { duration: 0.4, repeat: 3 } 
              }}
              className="text-red-500 mt-6 text-sm font-medium bg-red-50 p-3 rounded-xl border border-red-200"
            >
              {error}
            </motion.p>
          )}
        </AnimatePresence>

        {/* Tiny footer emoji */}
        <motion.div
          className="mt-4 text-2xl opacity-70"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ♡
        </motion.div>
      </motion.form>
    </motion.div>
  );
}

export default PasswordPage;