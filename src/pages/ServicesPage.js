import React, { useState, useEffect, useRef} from 'react';
import { motion, useScroll, useTransform, useSpring,useInView } from 'framer-motion';
import { ArrowRight, Users, Award, Headphones, CheckCircle, Sparkles, Zap } from 'lucide-react';
/* ---------- Animated Number Component ---------- */
const AnimatedNumber = ({ value, suffix = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [num, setNum] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const numValue = parseInt(value.replace(/[^\d]/g, ''), 10) || 0;
    let start = 0;

    const duration = 4000; // ⏳ slower (4 sec)
    const interval = 30;   // smoother ticks
    const increment = numValue / (duration / interval);

    const timer = setInterval(() => {
      start += increment;
      if (start >= numValue) {
        setNum(numValue);
        clearInterval(timer);
      } else {
        setNum(Math.floor(start));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {num}
      {suffix}
    </span>
  );
};

/* ---------- Animations ---------- */
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const ServicesPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const scaleProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Navigation functions (will work with React Router)
  const handleServiceClick = (serviceId) => {
    // This will navigate to /services/:id when integrated with React Router
    window.location.href = `/services/${serviceId}`;
  };

  const handleContactClick = () => {
    // This will navigate to /contact when integrated with React Router
    window.location.href = '/contact';
  };

  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Build modern, responsive websites with cutting-edge technologies and seamless user experiences',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop',
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      id: 2,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for seamless business operations',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop',
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      id: 3,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      id: 4,
      title: 'CRM Solutions',
      description: 'Streamline customer relationships with powerful CRM systems that drive sales and loyalty',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
      gradient: 'from-green-500 to-teal-600',
    },
    {
      id: 5,
      title: 'HRM Solutions',
      description: 'Streamline HR operations with modern human resource management systems',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop',
      gradient: 'from-red-500 to-orange-600',
    },
    {
      id: 6,
      title: 'UI/UX Design',
      description: 'Create stunning user interfaces and experiences that drive engagement and conversions',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop',
      gradient: 'from-pink-500 to-rose-600',
    }
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: 'Expert Team',
      desc: '50+ certified professionals with years of experience',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Award,
      title: 'Quality Delivery',
      desc: '98% client satisfaction rate and on-time delivery',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      desc: 'Round-the-clock support for all your needs',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      {/* Floating Background Elements */}
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

      {/* ================= HERO SECTION - ABOUT PAGE STYLE ================= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{ y: parallaxY }}
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920')] bg-cover bg-center" />
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl shadow-2xl flex items-center justify-center transform rotate-6 hover:rotate-12 transition-transform">
              <Zap className="w-16 h-16 text-white" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold text-white mb-6"
          >
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-12"
          >
            Comprehensive IT solutions designed to accelerate your business growth
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all">
              Explore Our Solutions
            </button>
          </motion.div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-20"
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-6 text-gray-900"
              whileHover={{ scale: 1.02 }}
            >
              What We <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Offer</span>
            </motion.h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge solutions tailored to transform your business
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={fadeIn}
                whileHover={{ y: -15, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onHoverStart={() => setHoveredCard(service.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="relative group bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden border border-gray-100"
              >
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredCard === service.id ? 1.15 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 relative">
                  <motion.h3 
                    className="text-2xl font-bold text-gray-900 mb-4"
                    whileHover={{ x: 5 }}
                  >
                    {service.title}
                  </motion.h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* CTA Button with Navigation */}
                  <motion.button
                    onClick={() => handleServiceClick(service.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full bg-gradient-to-r ${service.gradient} text-white px-6 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group cursor-pointer`}
                  >
                    <span className="mr-2">Learn More</span>
                    <motion.div
                      animate={{
                        x: hoveredCard === service.id ? 5 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </motion.button>
                </div>

                {/* Decorative Corner Element */}
                <motion.div
                  className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"
                  animate={{
                    scale: hoveredCard === service.id ? 1.5 : 1,
                    opacity: hoveredCard === service.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-32 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-center mb-8 text-gray-900"
          >
            Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">WorkHub</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 text-center mb-20 max-w-3xl mx-auto"
          >
            We combine expertise, innovation, and dedication to deliver exceptional results
          </motion.p>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeIn}
                  whileHover={{ y: -20, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="group relative bg-white p-10 rounded-3xl text-center shadow-lg hover:shadow-2xl border border-gray-200"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity`} />
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                    className={`relative w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${item.color} rounded-2xl shadow-lg flex items-center justify-center`}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 relative">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 relative">{item.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ================= CTA SECTION - OPTIMIZED WITH ANIMATED NUMBERS ================= */}
<section className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
  {/* Contact Background Image */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920')] bg-cover bg-center bg-fixed" />
  </div>

  {/* Animated Floating Elements */}
  <motion.div
    className="absolute top-10 left-5 md:top-20 md:left-10 w-48 h-48 md:w-64 md:h-64 bg-blue-500/20 rounded-full blur-3xl"
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.6, 0.3],
      x: [0, 30, 0],
      y: [0, -20, 0],
    }}
    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
  />
  <motion.div
    className="absolute bottom-10 right-5 md:bottom-20 md:right-10 w-48 h-48 md:w-64 md:h-64 bg-purple-500/20 rounded-full blur-3xl"
    animate={{
      scale: [1.2, 1, 1.2],
      opacity: [0.6, 0.3, 0.6],
      x: [0, -30, 0],
      y: [0, 20, 0],
    }}
    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
  />

  {/* Floating Particles */}
  {[...Array(6)].map((_, i) => (
    <motion.div
      key={i}
      className="absolute w-2 h-2 bg-white/20 rounded-full"
      style={{
        left: `${20 + i * 15}%`,
        top: `${30 + (i % 3) * 20}%`,
      }}
      animate={{
        y: [0, -30, 0],
        opacity: [0.2, 0.8, 0.2],
      }}
      transition={{
        duration: 3 + i,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.3,
      }}
    />
  ))}

  <div className="max-w-5xl mx-auto text-center relative z-10">
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
        className="mb-6 md:mb-8 relative"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 w-20 h-20 md:w-24 md:h-24 mx-auto bg-gradient-to-br from-blue-400/30 to-purple-600/30 rounded-full blur-xl"
        />
        <div className="relative w-20 h-20 md:w-24 md:h-24 mx-auto bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl md:rounded-3xl shadow-2xl flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
          <Sparkles className="w-10 h-10 md:w-12 md:h-12 text-white" />
        </div>
      </motion.div>

      <motion.h2 
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 md:mb-6 leading-tight"
        variants={fadeUp}
      >
        Ready to Get{' '}
        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Started?
        </span>
      </motion.h2>

      <motion.p 
        className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 md:mb-10 max-w-3xl mx-auto px-4"
        variants={fadeUp}
        transition={{ delay: 0.1 }}
      >
        Let's discuss how our services can help transform your business
      </motion.p>

      <motion.div
        variants={stagger}
        className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 mb-10 md:mb-12 max-w-2xl mx-auto"
      >
        {[
          { num: '100', suffix: '+', label: 'Projects Completed' },
          { num: '98', suffix: '%', label: 'Client Satisfaction' },
          { num: '2', suffix: '+', label: 'Years Experience' },
        ].map((stat, i) => (
          <motion.div
            key={i}
            variants={fadeIn}
            whileHover={{ scale: 1.08, y: -8 }}
            className="relative bg-white/10 backdrop-blur-md px-4 py-4 md:px-8 md:py-6 rounded-xl md:rounded-2xl border border-white/20 hover:border-white/40 transition-all group"
          >
            <div className="relative text-2xl sm:text-3xl md:text-5xl font-black text-white">
              <AnimatedNumber value={stat.num} suffix={stat.suffix} />
            </div>
            <div className="relative text-blue-200 text-xs sm:text-sm md:text-base mt-2 font-semibold">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.button
        onClick={handleContactClick}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.98 }}
        className="relative bg-white text-purple-600 px-8 py-4 md:px-14 md:py-6 rounded-full font-bold text-lg md:text-xl shadow-2xl hover:shadow-purple-500/50 inline-flex items-center group overflow-hidden cursor-pointer transition-shadow"
      >
        <span className="relative z-10 flex items-center">
          Contact Us Today
          <ArrowRight className="ml-3 w-5 h-5 md:w-6 md:h-6" />
        </span>
      </motion.button>
    </motion.div>
  </div>
</section>


    </div>
  );
};

export default ServicesPage;