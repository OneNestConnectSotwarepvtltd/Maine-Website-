// components/HomeCTA.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

/* ---------- Animations ---------- */
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
};

const fadeIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const HomeCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&auto=format&fit=crop" 
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/95 via-purple-900/95 to-pink-900/95" />
      </div>

      {/* Animated Floating Elements */}
      <motion.div
        className="absolute top-10 left-5 md:top-20 md:left-10 w-48 h-48 md:w-64 md:h-64 bg-white/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-5 md:bottom-20 md:right-10 w-48 h-48 md:w-64 md:h-64 bg-white/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Floating Particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/30 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -25, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          {/* Icon with Pulse Effect */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="mb-6 relative"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 w-20 h-20 md:w-24 md:h-24 mx-auto bg-white/40 rounded-full blur-xl"
            />
            <div className="relative w-20 h-20 md:w-24 md:h-24 mx-auto bg-white rounded-3xl shadow-2xl flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
              <Sparkles className="w-10 h-10 md:w-12 md:h-12 text-purple-600" />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 md:mb-5 leading-tight"
            variants={fadeUp}
          >
            Let's Build Something{' '}
            <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-white bg-clip-text text-transparent">
              Amazing
            </span>
          </motion.h2>
          
          {/* Description */}
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 md:mb-10 max-w-2xl mx-auto px-4"
            variants={fadeUp}
            transition={{ delay: 0.1 }}
          >
            Ready to transform your business? Let's discuss your project today
          </motion.p>

          {/* Button with TAGDA Animation - FIXED */}
{/* Button with Scale Only - NO COLOR CHANGE */}
<motion.div
  className="relative inline-block mb-8"
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ delay: 0.3, duration: 0.5 }}
>
  {/* Pulsing Glow */}
  <motion.div
    className="absolute -inset-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 blur-lg"
    animate={{
      scale: [1, 1.15, 1],
      opacity: [0.4, 0.6, 0.4],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />

  <motion.button
    onClick={() => navigate('/contact')}
    whileHover={{ y: -8, scale: 1.08 }}
    whileTap={{ scale: 0.95 }}
    className="relative bg-white text-purple-700 px-10 py-4 md:px-14 md:py-5 rounded-full font-black text-lg md:text-xl shadow-2xl hover:shadow-purple-500/50 inline-flex items-center group overflow-hidden cursor-pointer transition-shadow duration-300"
  >
    {/* Shimmer Effect Only */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"
      animate={{ x: ["-200%", "200%"] }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "linear",
        repeatDelay: 1,
      }}
    />

    {/* TEXT - NO COLOR CHANGE */}
    <span className="relative z-20 flex items-center">
      Contact Us
      <motion.div
        className="ml-3"
        animate={{ x: [0, 5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform duration-300" />
      </motion.div>
    </span>
  </motion.button>
</motion.div>

          {/* Features with Slide-in Effect */}
          <motion.div
            variants={stagger}
            className="flex flex-wrap justify-center gap-3 md:gap-4 px-4"
          >
           
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeCTA;