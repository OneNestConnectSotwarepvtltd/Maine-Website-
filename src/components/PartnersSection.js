import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

const cardVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    y: 50
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const PartnersSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const partners = [
    { name: 'Microsoft', logo: 'https://img.icons8.com/color/96/microsoft.png', gradient: 'from-blue-500 to-cyan-500' },
    { name: 'Google Cloud', logo: 'https://img.icons8.com/color/96/google-cloud.png', gradient: 'from-red-500 to-yellow-500' },
    { name: 'AWS', logo: 'https://img.icons8.com/color/96/amazon-web-services.png', gradient: 'from-orange-500 to-amber-500' },
    { name: 'Azure', logo: 'https://img.icons8.com/fluency/96/azure-1.png', gradient: 'from-blue-600 to-indigo-600' },
    { name: 'IBM', logo: 'https://img.icons8.com/color/96/ibm.png', gradient: 'from-blue-700 to-blue-900' },
    { name: 'Oracle', logo: 'https://img.icons8.com/color/96/oracle-logo.png', gradient: 'from-red-600 to-red-800' },
    { name: 'Salesforce', logo: 'https://img.icons8.com/color/96/salesforce.png', gradient: 'from-cyan-500 to-blue-600' },
    { name: 'Adobe', logo: 'https://img.icons8.com/color/96/adobe-creative-cloud.png', gradient: 'from-red-500 to-pink-500' },
    { name: 'SAP', logo: 'https://img.icons8.com/color/96/sap.png', gradient: 'from-blue-500 to-blue-700' },
    { name: 'Docker', logo: 'https://img.icons8.com/color/96/docker.png', gradient: 'from-blue-400 to-cyan-500' },
    { name: 'Kubernetes', logo: 'https://img.icons8.com/color/96/kubernetes.png', gradient: 'from-blue-500 to-purple-600' },
    { name: 'MongoDB', logo: 'https://img.icons8.com/color/96/mongodb.png', gradient: 'from-green-500 to-green-700' },
    { name: 'React', logo: 'https://img.icons8.com/color/96/react-native.png', gradient: 'from-cyan-400 to-blue-500' },
    { name: 'Node.js', logo: 'https://img.icons8.com/color/96/nodejs.png', gradient: 'from-green-600 to-green-800' },
    { name: 'Python', logo: 'https://img.icons8.com/color/96/python.png', gradient: 'from-blue-500 to-yellow-500' }
  ];

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      
      setTimeout(() => {
        setShowLeftArrow(scrollRef.current.scrollLeft > 0);
      }, 300);
    }
  };

  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden relative">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #94a3b8 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '40px 40px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Floating Background Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 0.008,
            y: mousePosition.y * 0.008,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            x: { type: "spring", stiffness: 50 },
            y: { type: "spring", stiffness: 50 }
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * -0.008,
            y: mousePosition.y * -0.008,
            scale: [1.2, 1, 1.2],
          }}
          transition={{ 
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 },
            x: { type: "spring", stiffness: 50 },
            y: { type: "spring", stiffness: 50 }
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-6 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-semibold uppercase"
          >
            Trusted Partnerships
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mt-6 mb-4"
          >
            Industry Leaders <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Trust Us</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Collaborating with world-class technology partners
          </motion.p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Left Arrow */}
          {showLeftArrow && (
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => handleScroll('left')}
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </motion.button>
          )}

          {/* Right Arrow */}
          <motion.button
            onClick={() => handleScroll('right')}
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </motion.button>

          {/* Partners Scroll */}
          <motion.div
            ref={scrollRef}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="flex gap-6 overflow-x-auto px-16 py-8 scroll-smooth"
            style={{ scrollbarWidth: 'none' }}
            onScroll={(e) => setShowLeftArrow(e.target.scrollLeft > 0)}
          >
            {partners.map((partner, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ 
                  y: -15, 
                  scale: 1.08,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                onHoverStart={() => setHoveredCard(i)}
                onHoverEnd={() => setHoveredCard(null)}
                className="flex-shrink-0 w-44 bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 group relative overflow-hidden border border-gray-100"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Animated Gradient Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${partner.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Border Glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  animate={{
                    boxShadow: hoveredCard === i 
                      ? `0 0 30px rgba(147, 51, 234, 0.3)` 
                      : `0 0 0px rgba(147, 51, 234, 0)`,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  initial={{ x: '-100%' }}
                  animate={{
                    x: hoveredCard === i ? '100%' : '-100%',
                  }}
                  transition={{ duration: 0.8 }}
                />

                {/* Logo with Animation */}
                <motion.div 
                  className="relative flex items-center justify-center mb-4"
                  animate={{
                    scale: hoveredCard === i ? 1.15 : 1,
                    rotate: hoveredCard === i ? [0, -5, 5, 0] : 0,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="h-20 w-20 object-contain" 
                  />
                  
                  {/* Icon Glow */}
                  <motion.div
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${partner.gradient} blur-xl`}
                    animate={{
                      opacity: hoveredCard === i ? 0.4 : 0,
                      scale: hoveredCard === i ? 1.5 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                {/* Partner Name */}
                <motion.p 
                  className="relative font-semibold text-gray-800 text-center"
                  animate={{
                    y: hoveredCard === i ? -2 : 0,
                  }}
                >
                  {partner.name}
                </motion.p>

                {/* Corner Decoration */}
                <motion.div
                  className={`absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br ${partner.gradient} rounded-full blur-2xl`}
                  animate={{
                    scale: hoveredCard === i ? 1.5 : 1,
                    opacity: hoveredCard === i ? 0.3 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        #partners-scroll::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default PartnersSection;