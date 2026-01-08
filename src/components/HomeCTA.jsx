// components/HomeCTA.jsx

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

/* ================= ANIMATIONS ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

/* ================= COMPONENT ================= */

const HomeCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-32 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920')] bg-cover bg-fixed" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Side - Image */}
          <motion.div variants={slideLeft} transition={{ duration: 0.8 }}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-30 blur-2xl group-hover:opacity-50 transition-opacity" />
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Get Started"
                className="relative w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl" />
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div variants={slideRight} transition={{ duration: 0.8 }}>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Ready to Start Your{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Project?
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Let's discuss how we can help transform your business with innovative digital solutions that drive real results.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Our team is ready to turn your vision into reality with cutting-edge technology and expert guidance.
            </p>

            {/* CTA Button */}
            <motion.button
              onClick={() => navigate("/contact")}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="group bg-gradient-to-r from-blue-500 to-purple-500 text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-blue-500/50 inline-flex items-center gap-3 transition-all duration-300"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap gap-6 text-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium">100+ Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium">98% Satisfaction</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeCTA;