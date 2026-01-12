import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";

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
    transition: { staggerChildren: 0.2 },
  },
};

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [num, setNum] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = parseInt(value.replace(/[^\d]/g, ""), 10) || 0;
    const step = Math.max(20, 1500 / end);

    const timer = setInterval(() => {
      start++;
      setNum(start);
      if (start >= end) clearInterval(timer);
    }, step);

    return () => clearInterval(timer);
  }, [inView, value]);

  return <span ref={ref}>{num}</span>;
};

// Dummy data
const teamMembers = [
  {
    name: "Shushil Kumar",
    role: "CEO & Founder",
    image: "/images/testimonal/shushil.jpg",
  },
  {
    name: "Omkar Chauhan",
    role: "Fullstack Developer",
    image: "/images/testimonal/Omkar.jpeg",
  },
  {
    name: "Ayush Nigam",
    role: "Frontend Developer",
    image: "/images/testimonal/Ayush.jpg",
  },
  {
    name: "Bhavesh Sattavan",
    role: "Frontend Developer",
    image: "/images/testimonal/bhavesh.png",
  },
];

const coreValues = [
  {
    title: "Innovation",
    desc: "Pushing boundaries with cutting-edge solutions",
    icon: "https://cdn-icons-png.flaticon.com/512/3588/3588592.png",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Quality",
    desc: "Excellence in every line of code we write",
    icon: "https://cdn-icons-png.flaticon.com/512/3588/3588435.png",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Integrity",
    desc: "Building trust through transparency",
    icon: "https://cdn-icons-png.flaticon.com/512/3588/3588314.png",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Collaboration",
    desc: "Achieving more together as a team",
    icon: "https://cdn-icons-png.flaticon.com/512/3588/3588281.png",
    color: "from-green-500 to-emerald-500",
  },
];

const stats = [
  {
    value: "500+",
    label: "Projects Delivered",
    color: "from-green-500 to-emerald-600",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
    color: "from-green-500 to-emerald-600",
  },
  {
    value: "10+",
    label: "Years Experience",
    color: "from-green-500 to-emerald-600",
  },
];

const achievements = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2010/2010990.png",
    title: "Industry Recognition",
    desc: "Awarded Best Tech Company 2023",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/3588/3588314.png",
    title: "Global Reach",
    desc: "Serving clients in 25+ countries",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135810.png",
    title: "Expert Team",
    desc: "50+ certified professionals",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2917/2917995.png",
    title: "24/7 Support",
    desc: "Always available for our clients",
  },
];

const AboutPage = () => {
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

  return (
    <div className="overflow-hidden bg-gray-50">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          transition={{ type: "spring", stiffness: 50 }}
          style={{ left: "10%", top: "20%" }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * -0.02,
            y: mousePosition.y * -0.02,
          }}
          transition={{ type: "spring", stiffness: 50 }}
          style={{ right: "10%", bottom: "20%" }}
        />
      </div>

      {/* ================= HERO ================= */}
      <section className="relative min-h-[550px] -mt-20 flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <motion.div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop')] bg-cover bg-center" />
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="mb-4"
          >
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl shadow-2xl flex items-center justify-center transform rotate-6 hover:rotate-12 transition-transform">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2530/2530842.png"
                alt="OneNest Connect"
                className="w-10 h-10 brightness-0 invert"
              />
            </div>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-2xl md:text-5xl font-bold text-white mb-6"
          >
            About <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Us</span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-12"
          >
            Empowering businesses with innovative technology solutions
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-green-500/50 transform hover:scale-105 transition-all">
              Discover Our Journey
            </button>
          </motion.div>
        </div>
      </section>

      {/* ================= COMPANY OVERVIEW ================= */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl opacity-20 blur-xl" />
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Team"
                  className="relative rounded-3xl shadow-2xl w-full h-96 object-cover"
                />
                <motion.div
                  className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-2xl p-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    alt="Experience"
                    className="w-16 h-16"
                  />
                  <p className="text-3xl font-bold text-gray-900 mt-2">
                    <AnimatedNumber value="2" />+
                  </p>
                  <p className="text-gray-600 text-sm">Years</p>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2
                className="text-5xl md:text-6xl font-bold mb-8 text-gray-900"
                whileHover={{ x: 10 }}
              >
                Who We <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Are</span>
              </motion.h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                OneNest Connect is a technology-driven company focused on building
                scalable digital products for modern businesses. With over a decade
                of experience, we help brands grow through innovation and execution.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Our multidisciplinary team blends engineering, design, and strategy
                to deliver reliable, high-performance solutions that drive real business impact.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {stats.slice(0, 2).map((stat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl border border-gray-200"
                  >
                    <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      <AnimatedNumber value={stat.value} />
                      {stat.value.replace(/[0-9]/g, "")}
                    </div>
                    <div className="text-gray-600 mt-2">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= ACHIEVEMENTS ================= */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-center mb-20 text-gray-900"
          >
            Our <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Achievements</span>
          </motion.h2>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {achievements.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -15, scale: 1.05 }}
                className="group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-2xl border border-gray-200"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-lg flex items-center justify-center mb-6"
                  >
                    <img src={item.icon} alt="" className="w-8 h-8 brightness-0 invert" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= VISION & MISSION ================= */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920')] bg-cover bg-fixed" />
        </div>

        <div className="max-w-7xl mx-auto px-4 space-y-40 relative z-10">
          {/* Vision */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={slideLeft} transition={{ duration: 0.8 }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl opacity-30 blur-2xl group-hover:opacity-50 transition-opacity" />
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
                  alt="Vision"
                  className="relative w-full h-96 object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl" />
                <motion.div
                  className="absolute bottom-8 left-8 bg-white/20 backdrop-blur-lg rounded-2xl p-6 border border-white/30"
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3588/3588592.png"
                    alt="Vision"
                    className="w-12 h-12 brightness-0 invert"
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div variants={slideRight} transition={{ duration: 0.8 }}>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                Our <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Vision</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                We envision a future where businesses leverage technology to
                operate smarter, scale faster, and create meaningful digital
                experiences across platforms.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                Our goal is to be the catalyst that transforms ideas into
                groundbreaking digital solutions that shape industries.
              </p>
            </motion.div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div
              variants={slideLeft}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                Our <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Mission</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                Our mission is to design, build, and scale digital solutions
                that solve real-world problems and deliver measurable business
                impact.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                We're committed to excellence, innovation, and creating
                lasting partnerships with our clients.
              </p>
            </motion.div>

            <motion.div
              variants={slideRight}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl opacity-30 blur-2xl group-hover:opacity-50 transition-opacity" />
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                  alt="Mission"
                  className="relative w-full h-96 object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl" />
                <motion.div
                  className="absolute bottom-8 right-8 bg-white/20 backdrop-blur-lg rounded-2xl p-6 border border-white/30"
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135810.png"
                    alt="Mission"
                    className="w-12 h-12 brightness-0 invert"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="py-32 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-center mb-20 text-gray-900"
          >
            Our Core <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Values</span>
          </motion.h2>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {coreValues.map((value, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                whileHover={{ y: -20, scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white p-10 rounded-3xl text-center shadow-lg hover:shadow-2xl border border-gray-200"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity`} />
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                  className={`relative w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${value.color} rounded-2xl shadow-lg flex items-center justify-center`}
                >
                  <img
                    src={value.icon}
                    alt={value.title}
                    className="w-10 h-10 brightness-0 invert"
                  />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 relative">
                  {value.title}
                </h3>
                <p className="text-gray-600 relative">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="py-32 bg-gradient-to-b from-gray-100 via-purple-50 to-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920')] bg-cover bg-fixed" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Team
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate professionals dedicated to building impactful digital solutions
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-12"
          >
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                whileHover={{ y: -18 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white rounded-[2rem] shadow-xl overflow-hidden hover:shadow-2xl"
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.18 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-2xl font-bold tracking-wide">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-200 mt-1">
                      {member.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;