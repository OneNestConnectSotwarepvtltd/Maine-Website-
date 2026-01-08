import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { ArrowRight, ExternalLink, Github, X, Sparkles, Zap, Award, TrendingUp } from 'lucide-react';


/* ---------- Animations ---------- */
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const slideLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const slideRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeFilter, setActiveFilter] = useState('All');
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

  // Navigation function
  const handleContactClick = () => {
    window.location.href = '/contact';
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "Complete online shopping solution with payment gateway integration",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      tags: ["React", "Node.js", "MongoDB"],
      gradient: "from-blue-600 to-cyan-600",
      demoLink: "#demo",
      githubLink: "#github"
    },
    {
      title: "Mobile Banking App",
      category: "Mobile Development",
      description: "Secure banking application with biometric authentication",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
      tags: ["React Native", "Firebase", "API"],
      gradient: "from-purple-600 to-pink-600",
      demoLink: "#demo",
      githubLink: "#github"
    },
    {
      title: "AI Analytics Dashboard",
      category: "Data Science",
      description: "Real-time analytics platform with machine learning insights",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      tags: ["Python", "TensorFlow", "AWS"],
      gradient: "from-orange-600 to-red-600",
      demoLink: "#demo",
      githubLink: "#github"
    },
    {
      title: "Healthcare Management System",
      category: "Enterprise Software",
      description: "Hospital management with patient records and appointment scheduling",
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80",
      tags: ["Java", "Spring Boot", "MySQL"],
      gradient: "from-green-600 to-teal-600",
      demoLink: "#demo",
      githubLink: "#github"
    },
    {
      title: "Social Media Platform",
      category: "Web Development",
      description: "Feature-rich social networking platform with live chat",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
      tags: ["Next.js", "GraphQL", "PostgreSQL"],
      gradient: "from-indigo-600 to-purple-600",
      demoLink: "#demo",
      githubLink: "#github"
    },
    {
      title: "IoT Smart Home",
      category: "IoT Development",
      description: "Home automation system with voice control integration",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
      tags: ["Arduino", "MQTT", "React"],
      gradient: "from-amber-600 to-yellow-600",
      demoLink: "#demo",
      githubLink: "#github"
    }
  ];

  const categories = ['All', 'Web Development', 'Mobile Development', 'Data Science', 'Enterprise Software', 'IoT Development'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const stats = [
    {
      value: '150',
      suffix: '+',
      label: 'Projects Completed',
      icon: Award,
      color: 'from-purple-500 to-purple-600',
    },
    {
      value: '50',
      suffix: '+',
      label: 'Happy Clients',
      icon: Sparkles,
      color: 'from-blue-500 to-blue-600',
    },
    {
      value: '98',
      suffix: '%',
      label: 'Success Rate',
      icon: TrendingUp,
      color: 'from-green-500 to-green-600',
    },
    {
      value: '15',
      suffix: '+',
      label: 'Years Experience',
      icon: Zap,
      color: 'from-orange-500 to-orange-600',
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

      {/* ================= HERO SECTION ================= */}
<section className="relative h-screen -mt-20 flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
  <motion.div
    className="absolute inset-0 opacity-20"
  >
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop')] bg-cover bg-center" />
  </motion.div>

        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl shadow-2xl flex items-center justify-center transform rotate-6 hover:rotate-12 transition-transform">
              <Sparkles className="w-16 h-16 text-white" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold text-white mb-6"
          >
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Portfolio</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-12"
          >
            Showcasing our best work and successful projects delivered to clients worldwide
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all">
              Explore Our Work
            </button>
          </motion.div>
        </div>
      </section>

      {/* ================= PROJECTS GRID ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -15, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="relative group bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden border border-gray-100"
              >
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredCard === index ? 1.15 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  
                  {/* Category Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-4 left-4"
                  >
                    <span className="px-4 py-2 bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider rounded-full border border-white/30">
                      {project.category}
                    </span>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-8 relative">
                  <motion.h3 
                    className="text-2xl font-bold text-gray-900 mb-3"
                    whileHover={{ x: 5 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-full border border-gray-200 hover:border-purple-500 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedProject(project)}
                      className={`flex-1 bg-gradient-to-r ${project.gradient} text-white px-4 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group`}
                    >
                      <span className="mr-2">View Details</span>
                      <motion.div
                        animate={{
                          x: hoveredCard === index ? 5 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.div>
                    </motion.button>
                    <motion.a
                      href={project.githubLink}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>

                {/* Decorative Corner Element */}
                <motion.div
                  className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"
                  animate={{
                    scale: hoveredCard === index ? 1.5 : 1,
                    opacity: hoveredCard === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920')] bg-cover bg-center bg-fixed" />
        </div>

        {/* Animated Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              className="mb-8"
            >
              <div className="relative w-24 h-24 mx-auto bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl shadow-2xl flex items-center justify-center transform hover:rotate-12 transition-transform">
                <Zap className="w-12 h-12 text-white" />
              </div>
            </motion.div>

            <motion.h2 
              className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight"
              variants={fadeUp}
            >
              Ready to Start Your{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Project?
              </span>
            </motion.h2>

            <motion.p 
              className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto"
              variants={fadeUp}
              transition={{ delay: 0.1 }}
            >
              Let's collaborate and create something amazing together
            </motion.p>

            <motion.button
              onClick={handleContactClick}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-purple-600 px-12 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-purple-500/50 inline-flex items-center group overflow-hidden transition-shadow cursor-pointer"
            >
              <span className="relative z-10 flex items-center">
                Get In Touch
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ================= PROJECT DETAIL MODAL ================= */}
      {selectedProject && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50" 
          onClick={() => setSelectedProject(null)}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              {/* Header Image */}
              <div className="relative h-80 overflow-hidden rounded-t-3xl">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                
                {/* Close Button */}
                <motion.button 
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full flex items-center justify-center text-white border border-white/30 transition-colors"
                >
                  <X className="w-6 h-6" />
                </motion.button>

                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider rounded-full border border-white/30">
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">{selectedProject.title}</h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  {selectedProject.description}
                </p>
                
                {/* Technologies */}
                <div className="mb-8">
                  <h3 className="font-bold text-gray-900 mb-4 text-xl">Technologies Used:</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tags.map((tag, idx) => (
                      <motion.span 
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        className={`px-5 py-2.5 bg-gradient-to-r ${selectedProject.gradient} text-white rounded-xl font-semibold shadow-lg`}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-4">
                  <motion.a 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={selectedProject.demoLink}
                    className={`flex-1 px-6 py-4 bg-gradient-to-r ${selectedProject.gradient} text-white rounded-2xl font-semibold hover:shadow-xl transition-all text-center flex items-center justify-center group`}
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    View Live Demo
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={selectedProject.githubLink}
                    className="flex-1 px-6 py-4 bg-gray-900 text-white rounded-2xl font-semibold hover:bg-gray-800 transition-colors text-center flex items-center justify-center"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    View on GitHub
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Portfolio;