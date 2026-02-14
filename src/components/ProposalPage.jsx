import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const PLEAD_MESSAGES = [
  'Please reconsider? We have so many more memories to make! 🥺💕',
  'Nooo... please think again! 😭',
  'One more chance? I miss your voice so much... 💔',
];

const YOUR_EMAIL = 'yrkasar2000@gmail.com';
const EMAILJS_SERVICE_ID = 'service_z9k9vgq';
const EMAILJS_TEMPLATE_ID = 'template_hubue58';
const EMAILJS_PUBLIC_KEY = 'vpuz3pcCg1DYTR5XO';

function ProposalPage() {
  const [noClicks, setNoClicks] = useState(0);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const maxNoClicks = 3;
  const canClickNo = noClicks < maxNoClicks;

  const sendEmail = (subjectLike, content) => {
    const templateParams = {
      user_name: 'Your Bestie',
      message: content,
      to_email: YOUR_EMAIL,
    };

    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
      .then(() => console.log(`Email sent: ${subjectLike}`))
      .catch((error) => console.error('Email error:', error));
  };

  const handleYes = () => {
    sendEmail('YES', 'She said YES!!! Time to cry happy tears 💖✨');
    navigate('/success');
  };

  const handleNo = () => {
    if (!canClickNo) return;

    const newClicks = noClicks + 1;
    setNoClicks(newClicks);

    if (newClicks <= PLEAD_MESSAGES.length) {
      setMessage(PLEAD_MESSAGES[newClicks - 1]);
    }
  };

  useEffect(() => {
    if (noClicks >= maxNoClicks) {
      const timer = setTimeout(() => {
        sendEmail(
          'TOO MANY NOs (max 3)',
          `She said No ${noClicks} times and left... 💔\nI guess that's it... 😢`
        );
        navigate('/'); // back to password/login page
      }, 2400);

      return () => clearTimeout(timer);
    }
  }, [noClicks, navigate]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 flex items-center justify-center p-4 sm:p-6 relative overflow-hidden"
    >
      {/* Floating hearts & sparkles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-5xl sm:text-6xl opacity-30 pointer-events-none"
          style={{ top: `${10 + Math.random() * 80}%`, left: `${5 + Math.random() * 90}%` }}
          animate={{ y: [0, -60, 0], scale: [0.8, 1.3, 0.8], rotate: [0, 12, -12, 0] }}
          transition={{ duration: 6 + Math.random() * 5, repeat: Infinity, delay: i * 0.6 }}
        >
          {i % 3 === 0 ? '💗' : i % 3 === 1 ? '✨' : '🩷'}
        </motion.div>
      ))}

      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 70, damping: 14, delay: 0.3 }}
        className="bg-white/75 backdrop-blur-lg p-8 sm:p-12 rounded-3xl shadow-2xl shadow-rose-200/50 border border-pink-100/60 max-w-xl w-full text-center relative"
      >
        <motion.h1
          className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 bg-clip-text text-transparent"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, type: 'spring', stiffness: 120 }}
        >
          Finally ?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-lg sm:text-xl leading-relaxed text-gray-800 mb-10 font-medium px-4"
        >
          I'm missing you <span className="text-rose-500 font-bold">so so much</span>.<br />
          Will you talk to me again...<br />
          and be my favorite person forever? 🌸
        </motion.p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-8">
          {/* YES button – fixed size, no scaling */}
          <motion.button
            whileHover={{ scale: 1.08, rotate: 2 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleYes}
            className="px-12 sm:px-20 py-6 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 hover:from-green-500 hover:via-emerald-500 hover:to-teal-500 text-white font-bold text-xl sm:text-2xl rounded-3xl shadow-2xl shadow-emerald-300/50 hover:shadow-emerald-400/70 transition-all duration-300 flex items-center gap-3 border-4 border-white/40"
          >
            <span>YESSSS!!! 💖</span>
            <motion.span animate={{ rotate: [0, 20, -20, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
              🥰
            </motion.span>
          </motion.button>

          {/* NO button – disabled after 3 clicks */}
          <motion.button
            whileHover={canClickNo ? { scale: 1.08 } : {}}
            whileTap={canClickNo ? { scale: 0.92 } : {}}
            onClick={handleNo}
            disabled={!canClickNo}
            animate={
              noClicks > 1 && canClickNo
                ? { x: [0, 10, -10, 6, -6, 0], y: [0, -6, 6, 0] }
                : false
            }
            transition={{ duration: 0.4 }}
            className={`
              px-12 sm:px-20 py-6 rounded-3xl font-bold text-xl sm:text-2xl shadow-lg transition-all duration-300
              ${canClickNo 
                ? 'bg-gradient-to-r from-rose-400 to-red-400 hover:from-rose-500 hover:to-red-500 text-white shadow-rose-300/40 hover:shadow-rose-400/60' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-70'}
            `}
          >
            {canClickNo ? 'No :(' : 'Miss you... 😔'}
          </motion.button>
        </div>

        <AnimatePresence>
          {message && (
            <motion.p
              key={message}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mt-10 text-xl sm:text-2xl font-medium text-rose-600 bg-rose-50/80 p-5 rounded-2xl border border-rose-200/60 shadow-sm"
            >
              {message}
            </motion.p>
          )}
        </AnimatePresence>

        {noClicks > 0 && (
          <motion.div
            className="mt-8 text-5xl"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 8, -8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            {noClicks >= maxNoClicks ? '💔 ... okay 😢' : '🥺💕'}
          </motion.div>
        )}

        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => navigate('/memory/7')}
          className="mt-12 text-gray-600 hover:text-gray-800 text-lg font-medium underline-offset-4 hover:underline transition-all"
        >
          ← I need more time...
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export default ProposalPage;