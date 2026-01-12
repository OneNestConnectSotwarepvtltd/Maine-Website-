// HomeServicesSection.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { servicesData } from '../data/servicesData';

/* ---------- STRONG Animations ---------- */
const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 100,
    scale: 0.8,
    rotateX: 45
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const HomeServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleLearnMore = (service) => {
    window.location.href = `/services/${service.id}`;
  };

  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.6, 0.3, 0.6],
            x: [0, -50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Services</span>
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Comprehensive solutions to power your digital transformation
          </motion.p>
        </motion.div>

        {/* Services Grid - TAGDA ANIMATION */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ 
                y: -20, 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setHoveredCard(service.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden flex flex-col"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Animated Border Glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                animate={{
                  boxShadow: hoveredCard === service.id 
                    ? `0 0 30px rgba(147, 51, 234, 0.4)` 
                    : `0 0 0px rgba(147, 51, 234, 0)`,
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Gradient Glow on Hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}
              />

              {/* Image Header */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredCard === service.id ? 1.2 : 1,
                    rotate: hoveredCard === service.id ? 2 : 0,
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                
                {/* Gradient Overlay with Animation */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
                  animate={{
                    opacity: hoveredCard === service.id ? 1 : 0.8,
                  }}
                />

                {/* Animated Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  animate={{
                    x: hoveredCard === service.id ? '100%' : '-100%',
                  }}
                  transition={{ duration: 0.8 }}
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow relative">
                {/* Title with slide effect */}
                <motion.h3 
                  className="text-2xl font-bold text-gray-900 mb-3"
                  animate={{
                    x: hoveredCard === service.id ? 8 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {service.title}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-600 mb-6 leading-relaxed flex-grow"
                  animate={{
                    opacity: hoveredCard === service.id ? 1 : 0.8,
                  }}
                >
                  {service.description}
                </motion.p>

                {/* CTA Button with Pulse */}
                <motion.button
                  onClick={() => handleLearnMore(service)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow: hoveredCard === service.id 
                      ? '0 8px 25px rgba(147, 51, 234, 0.4)' 
                      : '0 0 0 rgba(147, 51, 234, 0)',
                  }}
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 flex items-center justify-center w-full group mt-auto relative overflow-hidden"
                >
                  {/* Button gradient animation */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
                    initial={{ x: '-100%' }}
                    animate={{
                      x: hoveredCard === service.id ? '0%' : '-100%',
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <span className="relative z-10 mr-2">Learn More</span>
                  <motion.div
                    className="relative z-10"
                    animate={{
                      x: hoveredCard === service.id ? 8 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </motion.button>
              </div>

              {/* Decorative Corner Glow - Enhanced */}
              <motion.div
                className={`absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br ${service.gradient} rounded-full blur-3xl pointer-events-none`}
                animate={{
                  scale: hoveredCard === service.id ? 2 : 1,
                  opacity: hoveredCard === service.id ? 0.3 : 0,
                }}
                transition={{ duration: 0.5 }}
              />

              {/* Floating particles on hover */}
              {hoveredCard === service.id && (
                <>
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-purple-400/60 rounded-full"
                      initial={{ 
                        x: Math.random() * 100 - 50,
                        y: 100,
                        opacity: 0 
                      }}
                      animate={{
                        y: -100,
                        opacity: [0, 1, 0],
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
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HomeServicesSection;