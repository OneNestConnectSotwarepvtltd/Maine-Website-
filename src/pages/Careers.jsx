import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { ArrowRight, Users, Award, TrendingUp, Globe, MapPin, Briefcase, Clock, Layers, Zap, Heart, Code, Rocket } from 'lucide-react';

/* ---------- Animated Number Component ---------- */
const AnimatedNumber = ({ value, suffix = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [num, setNum] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const numValue = parseInt(value.replace(/[^\d]/g, ''), 10) || 0;
    let start = 0;

    const duration = 3000;
    const interval = 30;
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

const CareersPage = () => {
  const [hoveredJob, setHoveredJob] = useState(null);
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

  const jobs = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      location: "Mumbai, India / Remote",
      type: "Full-time",
      experience: "5+ years",
      department: "Engineering",
      skills: ["React", "Node.js", "AWS", "MongoDB"],
      gradient: "from-blue-500 to-cyan-600",
      icon: Code,
    },
    {
      id: 2,
      title: "UI/UX Designer",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "3+ years",
      department: "Design",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      gradient: "from-purple-500 to-pink-600",
      icon: Heart,
    },
    {
      id: 3,
      title: "DevOps Engineer",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      department: "Infrastructure",
      skills: ["Docker", "Kubernetes", "CI/CD", "Terraform"],
      gradient: "from-green-500 to-teal-600",
      icon: Zap,
    },
    {
      id: 4,
      title: "Product Manager",
      location: "Delhi, India",
      type: "Full-time",
      experience: "6+ years",
      department: "Product",
      skills: ["Agile", "Roadmap Planning", "Stakeholder Management", "Analytics"],
      gradient: "from-orange-500 to-red-600",
      icon: Rocket,
    },
    {
      id: 5,
      title: "Data Scientist",
      location: "Pune, India / Remote",
      type: "Full-time",
      experience: "3+ years",
      department: "Data & AI",
      skills: ["Python", "Machine Learning", "SQL", "TensorFlow"],
      gradient: "from-indigo-500 to-purple-600",
      icon: TrendingUp,
    },
    {
      id: 6,
      title: "Marketing Manager",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "5+ years",
      department: "Marketing",
      skills: ["Digital Marketing", "SEO", "Content Strategy", "Analytics"],
      gradient: "from-pink-500 to-rose-600",
      icon: Globe,
    }
  ];

  const companyStats = [
    {
      value: "500",
      suffix: "+",
      label: "Team Members",
      color: "from-blue-500 to-blue-600",
      icon: Users,
    },
    {
      value: "20",
      suffix: "+",
      label: "Countries",
      color: "from-purple-500 to-purple-600",
      icon: Globe,
    },
    {
      value: "4.8",
      suffix: "★",
      label: "Glassdoor Rating",
      color: "from-orange-500 to-orange-600",
      icon: Award,
    },
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      desc: "Comprehensive health insurance and wellness programs",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      desc: "Continuous learning and development opportunities",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Work-Life Balance",
      desc: "Flexible hours and remote work options",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Award,
      title: "Competitive Pay",
      desc: "Industry-leading salary and benefits package",
      color: "from-purple-500 to-indigo-500",
    },
  ];

  const handleApply = (jobTitle) => {
    const slug = jobTitle.toLowerCase().replace(/\s+/g, '-');
    window.location.href = `/apply/${slug}`;
  };

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
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=1080&fit=crop')] bg-cover bg-center" />
  </motion.div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl shadow-2xl flex items-center justify-center transform rotate-6 hover:rotate-12 transition-transform">
              <Rocket className="w-16 h-16 text-white" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold text-white mb-6"
          >
            Join Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Team</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-12"
          >
            Build your career with us and work on cutting-edge technologies with a talented team
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-pink-500/50 transform hover:scale-105 transition-all">
              Explore Opportunities
            </button>
          </motion.div>
        </div>
      </section>

     

     {/* ================= JOB LISTINGS ================= */}
<section className="py-32 bg-gray-50 relative">
  <div className="max-w-7xl mx-auto px-4">
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-center mb-20"
    >
      <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
        Open <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Positions</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Find your dream role and grow with us
      </p>
    </motion.div>

    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-6"
    >
      {jobs.map((job) => {
        const Icon = job.icon;
        return (
          <motion.div
            key={job.id}
            variants={fadeIn}
            whileHover={{ y: -8, scale: 1.01 }}
            onHoverStart={() => setHoveredJob(job.id)}
            onHoverEnd={() => setHoveredJob(null)}
            className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="p-8 relative">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-start gap-6 mb-6">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-lg flex items-center justify-center flex-shrink-0"
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <div>
                      <motion.h3 
                        className="text-3xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all"
                        whileHover={{ x: 5 }}
                      >
                        {job.title}
                      </motion.h3>
                      <div className="flex flex-wrap gap-4 text-gray-600">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-blue-600" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-purple-600" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-blue-600" />
                          <span>{job.experience}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Layers className="w-4 h-4 text-purple-600" />
                          <span>{job.department}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {job.skills.map((skill, idx) => (
                      <motion.span 
                        key={idx}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-xl font-medium hover:bg-gray-200 transition-all"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="lg:ml-8">
                  <motion.button 
                    onClick={() => handleApply(job.title)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full lg:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center group/btn"
                  >
                    <span>Apply Now</span>
                    <motion.div
                      animate={{
                        x: hoveredJob === job.id ? 5 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight className="ml-3 w-5 h-5" />
                    </motion.div>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  </div>
</section>

      {/* ================= BENEFITS ================= */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-center mb-20 text-gray-900"
          >
            Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Benefits</span>
          </motion.h2>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeIn}
                  whileHover={{ y: -20, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="group relative bg-gradient-to-br from-gray-50 to-white p-10 rounded-3xl text-center shadow-lg hover:shadow-2xl border border-gray-200"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity`} />
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                    className={`relative w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${benefit.color} rounded-2xl shadow-lg flex items-center justify-center`}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 relative">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 relative">{benefit.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="relative py-32 px-4 bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920')] bg-cover bg-center bg-fixed" />
        </div>

        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
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
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-400 to-pink-600 rounded-3xl shadow-2xl flex items-center justify-center">
                <Rocket className="w-12 h-12 text-white" />
              </div>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Don't See Your <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Role?</span>
            </h2>

            <p className="text-xl text-purple-100 mb-10 max-w-3xl mx-auto">
              We're always looking for talented individuals. Send us your resume and let's talk!
            </p>

            <motion.button
              onClick={() => handleApply('general')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-purple-500/50 inline-flex items-center group transition-all"
            >
              <span>Send Your Resume</span>
              <ArrowRight className="ml-3 w-6 h-6 transform group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;