import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const UltraCTA = ({ service }) => {
  const navigate = useNavigate();

  // Mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const orbX = useTransform(mouseX, [0, window.innerWidth], [-40, 40]);
  const orbY = useTransform(mouseY, [0, window.innerHeight], [-40, 40]);

  return (
    <section
      onMouseMove={(e) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }}
      className="relative py-16 px-4 bg-gradient-to-r from-[#020617] via-[#0f172a] to-[#020617] overflow-hidden"
    >
      {/* Moving Scan Line */}
      <motion.div
        className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />

      {/* Mouse Reactive Orbs */}
      <motion.div
        style={{ x: orbX, y: orbY }}
        className="absolute -top-32 -right-32 w-80 h-80 bg-purple-600/30 rounded-full blur-3xl"
      />
      <motion.div
        style={{ x: orbX, y: orbY }}
        className="absolute -bottom-32 -left-32 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-white/[0.04] backdrop-blur-2xl rounded-[28px] p-8 md:p-10 border border-white/10 shadow-[0_0_100px_rgba(124,58,237,0.18)] flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Accent Line */}
          <span className="absolute left-0 top-6 bottom-6 w-[3px] bg-gradient-to-b from-purple-500 to-blue-500 rounded-full" />

          {/* Content */}
          <div className="max-w-xl pl-4">
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              Build better with{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {service.title}
              </span>
            </h3>

            <p className="text-gray-300 mt-3 text-sm md:text-base">
              We create high-impact {service.title.toLowerCase()} that helps your business grow faster.
            </p>
          </div>

          {/* Magnetic CTA */}
          <motion.button
            onClick={() => navigate("/contact")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative group px-9 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-2xl overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              Start with {service.short || "Us"}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>

            {/* Liquid Hover */}
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-purple-500/40 to-blue-500/40"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default UltraCTA;
