
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/* ========================================
   REUSABLE HERO COMPONENT
   ======================================== */

const HeroSection = ({ 
  title, 
  highlightText, 
  subtitle, 
  iconUrl = "https://cdn-icons-png.flaticon.com/512/2530/2530842.png",
  iconAlt = "Icon",
  backgroundImage = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920",
  buttonText = "Get Started",
  showButton = true,
  onButtonClick = () => {},
  minHeight = "min-h-screen"
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section className={`relative ${minHeight} flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900`}>
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{ y: parallaxY }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      </motion.div>

      {/* Floating Background Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          transition={{ type: "spring", stiffness: 50 }}
          style={{ left: "10%", top: "20%" }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * -0.02,
            y: mousePosition.y * -0.02,
          }}
          transition={{ type: "spring", stiffness: 50 }}
          style={{ right: "10%", bottom: "20%" }}
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl shadow-2xl flex items-center justify-center transform rotate-6 hover:rotate-12 transition-transform">
            <img
              src={iconUrl}
              alt={iconAlt}
              className="w-16 h-16 brightness-0 invert"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold text-white mb-6"
        >
          {title} <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{highlightText}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 mb-12"
        >
          {subtitle}
        </motion.p>

        {showButton && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <button 
              onClick={onButtonClick}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all"
            >
              {buttonText}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;