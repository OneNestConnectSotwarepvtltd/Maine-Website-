import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Palette, TrendingUp, MessageCircle, Headphones, Zap } from 'lucide-react';

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
    y: 80,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const WhyChooseUs = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const whyChooseUsItems = [
    { 
      icon: Users,
      title: 'Experienced Professionals', 
      desc: '10+ years of industry expertise',
      gradient: 'from-blue-500 to-cyan-500',
    },
    { 
      icon: Palette,
      title: 'Custom Solutions', 
      desc: 'Tailored to your unique needs',
      gradient: 'from-purple-500 to-pink-500',
    },
    { 
      icon: TrendingUp,
      title: 'Scalable Architecture', 
      desc: 'Grow without limitations',
      gradient: 'from-green-500 to-emerald-500',
    },
    { 
      icon: MessageCircle,
      title: 'Transparent Communication', 
      desc: 'Regular updates and clear reporting',
      gradient: 'from-orange-500 to-red-500',
    },
    { 
      icon: Headphones,
      title: 'Dedicated Support', 
      desc: '24/7 technical assistance',
      gradient: 'from-indigo-500 to-purple-500',
    },
    { 
      icon: Zap,
      title: 'Fast Delivery', 
      desc: 'On-time project completion',
      gradient: 'from-yellow-500 to-orange-500',
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-white relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 0.01,
            y: mousePosition.y * 0.01,
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
            x: mousePosition.x * -0.01,
            y: mousePosition.y * -0.01,
            scale: [1.2, 1, 1.2],
          }}
          transition={{ 
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 },
            x: { type: "spring", stiffness: 50 },
            y: { type: "spring", stiffness: 50 }
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Us</span>
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            We deliver excellence through innovation and dedication
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {whyChooseUsItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ 
                  y: -15, 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                onHoverStart={() => setHoveredCard(idx)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl cursor-pointer overflow-hidden border border-gray-100"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Animated Gradient Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Animated Border Glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  animate={{
                    boxShadow: hoveredCard === idx 
                      ? `0 0 40px rgba(147, 51, 234, 0.3)` 
                      : `0 0 0px rgba(147, 51, 234, 0)`,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  initial={{ x: '-100%' }}
                  animate={{
                    x: hoveredCard === idx ? '100%' : '-100%',
                  }}
                  transition={{ duration: 0.8 }}
                />

                {/* Icon Container */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`relative w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg`}
                >
                  <Icon className="w-8 h-8 text-white" />
                  
                  {/* Icon Glow */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} blur-xl`}
                    animate={{
                      opacity: hoveredCard === idx ? 0.6 : 0,
                      scale: hoveredCard === idx ? 1.5 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                {/* Content */}
                <div className="relative">
                  <motion.h3 
                    className="font-bold text-xl mb-3 text-gray-900"
                    animate={{
                      x: hoveredCard === idx ? 5 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600"
                    animate={{
                      opacity: hoveredCard === idx ? 1 : 0.8,
                    }}
                  >
                    {item.desc}
                  </motion.p>
                </div>

                {/* Corner Glow */}
                <motion.div
                  className={`absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br ${item.gradient} rounded-full blur-2xl`}
                  animate={{
                    scale: hoveredCard === idx ? 2 : 1,
                    opacity: hoveredCard === idx ? 0.2 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                />

                {/* Floating particles */}
                {hoveredCard === idx && (
                  <>
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-2 h-2 rounded-full bg-gradient-to-br ${item.gradient}`}
                        initial={{ 
                          x: Math.random() * 100 - 50,
                          y: 100,
                          opacity: 0 
                        }}
                        animate={{
                          y: -100,
                          opacity: [0, 0.8, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                        style={{
                          left: `${30 + i * 20}%`,
                        }}
                      />
                    ))}
                  </>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;