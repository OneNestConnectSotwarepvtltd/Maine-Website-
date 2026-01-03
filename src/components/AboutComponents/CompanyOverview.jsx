import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [num, setNum] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const end = parseInt(String(value).replace(/[^\d]/g, ""), 10);
    if (!end) return;

    let current = 0;
    const duration = 1200;
    const stepTime = Math.max(duration / end, 20);

    const timer = setInterval(() => {
      current += 1;
      setNum(current);
      if (current >= end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, value]);

  return <span ref={ref}>{num}</span>;
};

const About = ({ stats, slideLeft, slideRight }) => {
  return (
    <section className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
                alt="Team"
                className="rounded-3xl shadow-2xl w-full h-96 object-cover"
              />

              {/* 🔥 Animated 10+ Years */}
              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-2xl p-6">
                <p className="text-3xl font-bold text-gray-900">
                  <AnimatedNumber value="10+" />+
                </p>
                <p className="text-gray-600 text-sm">Years</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-8">
              Who We <span className="text-blue-600">Are</span>
            </h2>

            <div className="grid grid-cols-2 gap-6 mt-10">
              {stats.slice(0, 2).map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl bg-gray-100"
                >
                  <div className="text-4xl font-bold">
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
  );
};

export default About;
