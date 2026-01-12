import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, useScroll, useSpring, useInView } from 'framer-motion';
import { ArrowLeft, ArrowRight, Star, Check, Zap } from 'lucide-react';
import WhatsAppButton from '../components/Watsappfloat';

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

/* ---------- Animated Number Component ---------- */
const AnimatedNumber = ({ value, suffix = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [num, setNum] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const numValue = parseInt(value.replace(/[^\d]/g, ''), 10) || 0;
    let start = 0;

    const duration = 2000;
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
      {num}{suffix}
    </span>
  );
};

const ServiceDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Services data with OneNest Connect brand colors
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Build modern, responsive websites with cutting-edge technologies and seamless user experiences',
      fullDesc: 'High-performance websites crafted for growth, speed, and scalability.',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop',
      gradient: 'from-[#10B981] to-[#059669]',
      features: [
        'Responsive design that works seamlessly across all devices',
        'SEO optimized architecture for better search engine rankings',
        'Lightning-fast performance with modern optimization techniques',
        'Secure and scalable infrastructure built for growth',
        'Custom CMS integration for easy content management',
        'Ongoing support and maintenance to keep your site running smoothly'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'TypeScript', 'Next.js']
    },
    {
      id: 2,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for seamless business operations',
      fullDesc: 'Enterprise-grade cloud solutions for secure and efficient operations.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop',
      gradient: 'from-[#10B981] to-[#059669]',
      features: [
        'Seamless cloud migration with zero downtime',
        'Multi-cloud architecture design and implementation',
        'Auto-scaling infrastructure for optimal resource usage',
        'Advanced security and compliance management',
        'Cost optimization and monitoring solutions',
        '24/7 cloud infrastructure support and maintenance'
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform']
    },
    {
      id: 3,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences',
      fullDesc: 'Powerful mobile apps designed to engage users and drive results.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop',
      gradient: 'from-[#10B981] to-[#059669]',
      features: [
        'Native iOS and Android development',
        'Cross-platform solutions with React Native and Flutter',
        'Intuitive and engaging user interface design',
        'Offline functionality and data synchronization',
        'Push notifications and real-time updates',
        'App store optimization and submission support'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'GraphQL']
    },
    {
      id: 4,
      title: 'CRM Solutions',
      description: 'Streamline customer relationships with powerful CRM systems that drive sales and loyalty',
      fullDesc: 'Intelligent CRM platforms to streamline sales and customer management.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
      gradient: 'from-[#10B981] to-[#059669]',
      features: [
        'Custom CRM implementation and configuration',
        'Sales pipeline automation and lead management',
        'Customer data integration and analytics',
        'Marketing automation and campaign management',
        'Customer support ticketing systems',
        'Mobile CRM access for on-the-go teams'
      ],
      technologies: ['Salesforce', 'HubSpot', 'Zoho CRM', 'Microsoft Dynamics', 'Custom CRM', 'API Integration']
    },
    {
      id: 5,
      title: 'HRM Solutions',
      description: 'Streamline HR operations with modern human resource management systems',
      fullDesc: 'End-to-end HR automation to simplify workforce management.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop',
      gradient: 'from-[#10B981] to-[#059669]',
      features: [
        'End-to-end recruitment and onboarding automation',
        'Payroll processing and tax compliance',
        'Attendance and leave management systems',
        'Performance review and appraisal workflows',
        'Employee self-service portals',
        'HR analytics and reporting dashboards'
      ],
      technologies: ['SAP SuccessFactors', 'Workday', 'BambooHR', 'Zoho People', 'Custom HRMS', 'Biometric Integration']
    },
    {
      id: 6,
      title: 'UI/UX Design',
      description: 'Create stunning user interfaces and experiences that drive engagement and conversions',
      fullDesc: 'User-centric designs that enhance usability and business impact.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop',
      gradient: 'from-[#10B981] to-[#059669]',
      features: [
        'User research and persona development',
        'Information architecture and user flow design',
        'Interactive prototyping and usability testing',
        'Visual design with modern aesthetics',
        'Responsive design for all screen sizes',
        'Design system creation and documentation'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Principle', 'InVision', 'Framer']
    }
  ];

  const service = services.find(s => s.id === parseInt(id));

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <WhatsAppButton />
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">Service Not Found</h1>
          <button 
            onClick={() => navigate('/services')}
            className="bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] text-white px-8 py-3 rounded-full font-bold hover:shadow-xl transition-all"
          >
            Back to Services
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      <WhatsAppButton />
      
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
      <section className="relative min-h-[550px] -mt-20 flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-slate-800 to-indigo-900">
        <motion.div className="absolute inset-0 opacity-20">
<div className={`absolute inset-0 bg-cover bg-center`} style={{ backgroundImage: `url(${service.image})` }} />
        </motion.div>

        {/* Animated Background Blobs */}
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* Back Button - Top Left Corner */}
        <motion.button
          onClick={() => navigate('/services')}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ x: -5 }}
          className="absolute top-28 left-8 z-20 text-white hover:text-blue-300 transition flex items-center gap-2 group"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-semibold">Back to Services</span>
        </motion.button>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="mb-4"
          >
            <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${service.gradient} rounded-2xl shadow-2xl flex items-center justify-center transform rotate-6 hover:rotate-12 transition-transform`}>
              <Zap className="w-10 h-10 text-white" />
            </div>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-2xl md:text-5xl font-bold text-white mb-6"
          >
            {service.title}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-12"
          >
            {service.fullDesc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <motion.button
              onClick={() => navigate('/contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
className={`px-8 py-4 bg-gradient-to-r ${service.gradient} text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all`}           >
              Get Started Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ================= CRM DASHBOARD PREVIEW (Only for CRM Service) ================= */}
      {service.id === 4 && (
        <section className="py-32 bg-white relative overflow-hidden">
          {/* Background Effects */}
          <motion.div
            className="absolute top-20 right-20 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                CRM Dashboard <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">Preview</span>
              </h2>
              <p className="text-xl text-gray-600">Get a glimpse of your future CRM system</p>
            </motion.div>

            {/* Dashboard Container */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-200 shadow-2xl"
            >
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Sales Dashboard</h3>
                  <p className="text-gray-600">Real-time insights and analytics</p>
                </div>
                <div className="flex gap-3">
                  <div className="px-4 py-2 bg-green-500/20 text-green-400 rounded-lg font-semibold">
                    Live Data
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                  { label: 'Total Leads', value: '2,847', change: '+12.5%', icon: '👥' },
                  { label: 'Active Deals', value: '156', change: '+8.2%', icon: '💼' },
                  { label: 'Revenue', value: '$428K', change: '+23.1%', icon: '💰' },
                  { label: 'Conversion Rate', value: '32%', change: '+5.3%', icon: '📈' }
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-green-500 hover:shadow-xl transition-all"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-3xl">{stat.icon}</span>
                      <span className="text-green-400 text-sm font-semibold">{stat.change}</span>
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      <AnimatedNumber value={stat.value} />
                    </div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Charts Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {/* Sales Pipeline */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg"
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-6">Sales Pipeline</h4>
                  <div className="space-y-4">
                    {[
                      { stage: 'Prospecting', count: 45, width: '75%', color: 'bg-blue-500' },
                      { stage: 'Qualification', count: 32, width: '55%', color: 'bg-purple-500' },
                      { stage: 'Proposal', count: 28, width: '45%', color: 'bg-yellow-500' },
                      { stage: 'Negotiation', count: 18, width: '30%', color: 'bg-orange-500' },
                      { stage: 'Closed Won', count: 33, width: '60%', color: 'bg-green-500' }
                    ].map((item, idx) => (
                      <div key={idx}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-700 text-sm">{item.stage}</span>
                          <span className="text-gray-900 font-semibold">{item.count}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: item.width }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 1 }}
                            className={`${item.color} h-full rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Recent Activities */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg"
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-6">Recent Activities</h4>
                  <div className="space-y-4">
                    {[
                      { action: 'New lead assigned', user: 'John Doe', time: '5 min ago', color: 'text-blue-400' },
                      { action: 'Deal closed', user: 'Sarah Smith', time: '23 min ago', color: 'text-green-400' },
                      { action: 'Meeting scheduled', user: 'Mike Johnson', time: '1 hour ago', color: 'text-purple-400' },
                      { action: 'Proposal sent', user: 'Emily Brown', time: '2 hours ago', color: 'text-yellow-400' },
                      { action: 'Follow-up call', user: 'David Wilson', time: '3 hours ago', color: 'text-orange-400' }
                    ].map((activity, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all"
                      >
                        <div className={`w-2 h-2 ${activity.color.replace('text-', 'bg-')} rounded-full mt-2`} />
                        <div className="flex-1">
                          <p className="text-gray-900 font-medium">{activity.action}</p>
                          <p className="text-gray-600 text-sm">{activity.user} • {activity.time}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Top Performers */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-6">Top Performers This Month</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { name: 'Sarah Johnson', deals: 12, revenue: '$156K', rank: 1, avatar: '🥇' },
                    { name: 'Michael Chen', deals: 10, revenue: '$142K', rank: 2, avatar: '🥈' },
                    { name: 'Emma Davis', deals: 9, revenue: '$128K', rank: 3, avatar: '🥉' }
                  ].map((performer, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.03, y: -3 }}
                      className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-200 shadow-md hover:shadow-xl transition-all"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl">{performer.avatar}</span>
                        <div>
                          <p className="text-gray-900 font-semibold">{performer.name}</p>
                          <p className="text-gray-600 text-sm">Rank #{performer.rank}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <p className="text-gray-600 text-xs">Deals Closed</p>
                          <p className="text-gray-900 font-bold text-lg">{performer.deals}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 text-xs">Revenue</p>
                          <p className="text-green-600 font-bold text-lg">{performer.revenue}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ================= FEATURES SECTION ================= */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Key <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive features designed for your success
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {service.features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                whileHover={{ y: -15, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-2xl border border-gray-200"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity`} />
                
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`relative w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-xl shadow-lg flex items-center justify-center mb-6`}
                >
                  <Check className="w-6 h-6 text-white" />
                </motion.div>

                <p className="text-lg font-medium text-gray-800 leading-relaxed relative">
                  {feature}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= TECHNOLOGIES SECTION ================= */}
      <section className="py-32 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Technologies We <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">Use</span>
            </h2>
            <p className="text-xl text-gray-600">Cutting-edge tools and frameworks</p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {service.technologies.map((tech, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                whileHover={{ scale: 1.1, y: -5 }}
                className={`px-8 py-4 bg-gradient-to-r ${service.gradient} text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all cursor-pointer`}
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========== PREMIUM CTA SECTION ========= */}
<section className="relative py-24 px-4 overflow-hidden">
  {/* Animated Background Gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900" />
  
  {/* Floating Orbs */}
  <motion.div
    className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
    animate={{
      scale: [1, 1.3, 1],
      opacity: [0.3, 0.5, 0.3],
    }}
    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
  />
  <motion.div
    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
    animate={{
      scale: [1.3, 1, 1.3],
      opacity: [0.5, 0.3, 0.5],
    }}
    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
  />

  <div className="max-w-6xl mx-auto relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-12 md:p-16 border border-white/10 shadow-2xl overflow-hidden"
    >
      {/* Accent Lines */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
      />

      {/* Content Grid */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight"
          >
            <span className="text-white">Ready to Transform Your </span>
            <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              Business?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-300 max-w-xl"
          >
            Let's build something extraordinary together with our {service.title.toLowerCase()} expertise. Start your journey today.
          </motion.p>
        </div>

        {/* Right CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, type: "spring" }}
          className="flex flex-col gap-4"
        >
          <motion.button
            onClick={() => navigate('/contact')}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            className={`group relative px-10 py-5 bg-gradient-to-r ${service.gradient} text-white rounded-2xl font-bold text-lg shadow-2xl overflow-hidden`}
          >
            <span className="relative z-10 flex items-center gap-3">
              Start Your Project
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </span>
            
            {/* Hover Effect */}
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>

          <p className="text-sm text-gray-400 text-center">
           Free consultation • No commitment required
          </p>
        </motion.div>

      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl" />
      <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-2xl" />
    </motion.div>
  </div>
</section>

    </div>
  );
};

export default ServiceDetailPage;