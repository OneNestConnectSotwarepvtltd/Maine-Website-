import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HomeHeroSection = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [counters, setCounters] = useState({
    projects: 0,
    experience: 0,
    satisfaction: 0,
  });

  const { scrollY } = useScroll();
  const videoScale = useTransform(scrollY, [0, 500], [1, 1.2]);
  const videoOpacity = useTransform(scrollY, [0, 300], [0.5, 1]);

  useEffect(() => {
    const duration = 6500;
    const targets = {
      projects: 500,
      experience: 10,
      satisfaction: 98,
    };

    const startTime = Date.now();
    
    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      setCounters({
        projects: Math.floor(targets.projects * easeOutQuart),
        experience: Math.floor(targets.experience * easeOutQuart),
        satisfaction: Math.floor(targets.satisfaction * easeOutQuart),
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCounters(targets);
      }
    };

    const timer = setTimeout(() => {
      animate();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 2;
    }
  }, []);

  const stats = [
    { key: 'projects', number: counters.projects, suffix: '+', label: 'Projects Delivered', animated: true },
    { key: 'experience', number: counters.experience, suffix: '+', label: 'Years Experience', animated: true },
    { key: 'satisfaction', number: counters.satisfaction, suffix: '%', label: 'Client Satisfaction', animated: true },
    { key: 'support', number: '24', suffix: '/7', label: 'Support Available', animated: false }
  ];

  return (
    <section ref={sectionRef} className="relative bg-slate-900 text-white py-32 overflow-hidden">
      {/* Video Background with Parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ scale: videoScale }}
      >
        <motion.video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ opacity: videoOpacity }}
        >
          <source src="/homehero.mp4" type="video/mp4" />
        </motion.video>
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Badge with Animation */}
        <motion.div 
          className="inline-block mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="px-6 py-2 bg-white bg-opacity-20 rounded-full backdrop-blur-sm border border-white border-opacity-20">
            <span className="text-sm font-semibold tracking-wide uppercase">🚀 Your Digital Partner</span>
          </div>
        </motion.div>
        
        {/* Heading with Stagger Animation */}
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="block">Driving Digital Growth</span>
          <motion.span 
            className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-white to-blue-100"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            with Intelligent IT Solutions
          </motion.span>
        </motion.h1>
        
        {/* Description */}
        <motion.p 
          className="text-xl md:text-2xl mb-12 text-blue-50 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Transform your business with cutting-edge technology and expert guidance. 
          We deliver solutions that drive results.
        </motion.p>
        
        

      
        
      </div>
    </section>
  );
};

export default HomeHeroSection;
