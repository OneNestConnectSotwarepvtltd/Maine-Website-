// import React, { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence, useInView } from 'framer-motion';
// import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

// /* ---------- Animations ---------- */
// const fadeUp = {
//   hidden: { opacity: 0, y: 60 },
//   visible: { 
//     opacity: 1, 
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: "easeOut"
//     }
//   },
// };

// const slideVariants = {
//   enter: (direction) => ({
//     x: direction > 0 ? 1000 : -1000,
//     opacity: 0,
//     scale: 0.8,
//   }),
//   center: {
//     zIndex: 1,
//     x: 0,
//     opacity: 1,
//     scale: 1,
//     transition: {
//       duration: 0.5,
//       ease: "easeOut"
//     }
//   },
//   exit: (direction) => ({
//     zIndex: 0,
//     x: direction < 0 ? 1000 : -1000,
//     opacity: 0,
//     scale: 0.8,
//     transition: {
//       duration: 0.5,
//       ease: "easeIn"
//     }
//   })
// };

// /* ---------- Animated Number Component ---------- */
// const AnimatedNumber = ({ value }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { 
//     once: true,
//     amount: 0.5,
//     margin: "0px 0px -100px 0px"
//   });
//   const [num, setNum] = useState(0);

//   useEffect(() => {
//     if (!isInView) return;

//     const cleanValue = value.replace(/[^\d.]/g, '');
//     const targetNum = parseFloat(cleanValue) || 0;
//     const hasDecimal = value.includes('.');
//     const hasFraction = value.includes('/');
    
//     const duration = 3000;
//     const startTime = Date.now();

//     const animate = () => {
//       const currentTime = Date.now();
//       const elapsed = currentTime - startTime;
//       const progress = Math.min(elapsed / duration, 1);
      
//       const easeOutCubic = 1 - Math.pow(1 - progress, 3);
//       const currentValue = targetNum * easeOutCubic;
      
//       if (hasDecimal || hasFraction) {
//         setNum(currentValue.toFixed(1));
//       } else {
//         setNum(Math.floor(currentValue));
//       }

//       if (progress < 1) {
//         requestAnimationFrame(animate);
//       } else {
//         if (hasDecimal || hasFraction) {
//           setNum(targetNum.toFixed(1));
//         } else {
//           setNum(targetNum);
//         }
//       }
//     };

//     requestAnimationFrame(animate);
//   }, [isInView, value]);

//   const getSuffix = () => {
//     if (value.includes('/')) {
//       return value.substring(value.indexOf('/'));
//     }
//     return value.replace(/[0-9.]/g, '');
//   };

//   return (
//     <span ref={ref}>
//       {num}{getSuffix()}
//     </span>
//   );
// };

// const TestimonialsSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const [direction, setDirection] = useState(0);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   const testimonials = [
//     {
//       id: 1,
//       name: "Tushar Bansode",
//       image: "/images/testimonal/Tushar.png",
//       rating: 5,
//       text: "Onenest Connect Software Pvt. Ltd. is a highly professional company with a strong focus on innovation and quality. Their team is skilled, supportive and delivers projects on time with great attention to detail. The communication and project management were smooth throughout the process. I truly appreciate their dedication and customer-centric approach."
//     },
//     {
//       id: 2,
//       name: "Ashutosh Pandit",
//       image: "/images/testimonal/Ashutosh_Pandit.png",
//       rating: 5,
//       text: "He is good service providers like digital marketing and website development and mobile application development. Best Company for Noida. Best digital marketing strategy provided. Best best of Noida IT Company."
//     },
//     {
//       id: 3,
//       name: "Sandeep Singh",
//       image: "/images/testimonal/Sandeep.png",
//       rating: 5,
//       text: "Onenest connect software Pvt Ltd is best company for software developer and crm mobile application provided. He is fast delivery to work and website and digital marketing services company in India. Best company for noida Website Development."
//     },
//     {
//       id: 4,
//       name: "Rani Kumari",
//       image: "/images/testimonal/Rani_Kumari.png",
//       rating: 5,
//       text: "One Nest Connect Software Limited is an excellent IT solutions partner. Best service provider and best offer and I am so happy for using service."
//     },
//     {
//       id: 5,
//       name: "Sachin Raghav",
//       image: "/images/testimonal/Sachin.png",
//       rating: 5,
//       text: "He is best service provider and best CRM and Software Development. best Website development agency."
//     }
//   ];

//   useEffect(() => {
//     if (!isAutoPlaying) return;
    
//     const interval = setInterval(() => {
//       setDirection(1);
//       setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [isAutoPlaying, testimonials.length]);

//   const goToPrevious = () => {
//     setIsAutoPlaying(false);
//     setDirection(-1);
//     setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   const goToNext = () => {
//     setIsAutoPlaying(false);
//     setDirection(1);
//     setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//   };

//   const goToSlide = (index) => {
//     setIsAutoPlaying(false);
//     setDirection(index > currentIndex ? 1 : -1);
//     setCurrentIndex(index);
//   };

//   const currentTestimonial = testimonials[currentIndex];

//   return (
//     <section className="relative py-20 md:py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-hidden">
//       {/* Animated Background Blobs */}
//       <div className="absolute inset-0 opacity-30 pointer-events-none">
//         <motion.div 
//           className="absolute top-10 left-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl"
//           animate={{
//             x: mousePosition.x * 0.02,
//             y: mousePosition.y * 0.02,
//             scale: [1, 1.2, 1],
//           }}
//           transition={{
//             scale: { duration: 7, repeat: Infinity, ease: "easeInOut" },
//             x: { type: "spring", stiffness: 50 },
//             y: { type: "spring", stiffness: 50 }
//           }}
//         />
//         <motion.div 
//           className="absolute top-20 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl"
//           animate={{
//             x: mousePosition.x * -0.015,
//             y: mousePosition.y * 0.015,
//             scale: [1.1, 0.9, 1.1],
//           }}
//           transition={{
//             scale: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 },
//             x: { type: "spring", stiffness: 50 },
//             y: { type: "spring", stiffness: 50 }
//           }}
//         />
//         <motion.div 
//           className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl"
//           animate={{
//             x: mousePosition.x * 0.01,
//             y: mousePosition.y * -0.02,
//             scale: [0.9, 1.2, 0.9],
//           }}
//           transition={{
//             scale: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 4 },
//             x: { type: "spring", stiffness: 50 },
//             y: { type: "spring", stiffness: 50 }
//           }}
//         />
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={fadeUp}
//           className="text-center mb-16"
//         >
//           <motion.div 
//             className="inline-block mb-4"
//             initial={{ opacity: 0, scale: 0.5 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//           >
//             <span className="px-6 py-2 bg-purple-600 text-white text-sm font-semibold rounded-full shadow-lg">
//               ⭐ Client Success Stories
//             </span>
//           </motion.div>

//           <motion.h2
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2, duration: 0.6 }}
//             className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
//           >
//             What Our <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Clients Say</span>
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.3, duration: 0.6 }}
//             className="text-xl text-gray-600 max-w-2xl mx-auto"
//           >
//             Don't just take our word for it - hear from businesses we've helped transform
//           </motion.p>
//         </motion.div>

//         {/* Main Testimonial Card */}
//         <div className="relative max-w-5xl mx-auto">
//           <AnimatePresence initial={false} custom={direction} mode="wait">
//             <motion.div
//               key={currentIndex}
//               custom={direction}
//               variants={slideVariants}
//               initial="enter"
//               animate="center"
//               exit="exit"
//               className="bg-white rounded-3xl shadow-2xl overflow-hidden"
//             >
//               <motion.div 
//                 className="absolute top-8 left-8 text-purple-200 opacity-50"
//                 animate={{
//                   scale: [1, 1.1, 1],
//                   rotate: [0, 5, 0],
//                 }}
//                 transition={{
//                   duration: 3,
//                   repeat: Infinity,
//                   ease: "easeInOut"
//                 }}
//               >
//                 <Quote className="w-20 h-20" />
//               </motion.div>

//               <div className="relative p-8 md:p-12">
//                 <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
//                   {/* Client Image */}
//                   <motion.div 
//                     className="relative flex-shrink-0"
//                     initial={{ scale: 0, rotate: -180 }}
//                     animate={{ scale: 1, rotate: 0 }}
//                     transition={{ duration: 0.6, type: "spring" }}
//                   >
//                     <motion.div 
//                       className="w-32 h-32 rounded-full overflow-hidden border-4 border-purple-500 shadow-xl"
//                       whileHover={{ scale: 1.1, rotate: 5 }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       <img
//                         src={currentTestimonial.image}
//                         alt={currentTestimonial.name}
//                         className="w-full h-full object-cover"
//                       />
//                     </motion.div>
                    
//                     <motion.div 
//                       className="absolute -bottom-2 -right-2 bg-green-500 text-white rounded-full p-2 shadow-lg"
//                       animate={{
//                         scale: [1, 1.2, 1],
//                       }}
//                       transition={{
//                         duration: 2,
//                         repeat: Infinity,
//                         ease: "easeInOut"
//                       }}
//                     >
//                       <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
//                         <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                       </svg>
//                     </motion.div>
//                   </motion.div>

//                   {/* Testimonial Content */}
//                   <div className="flex-1 text-center md:text-left">
//                     <motion.div 
//                       className="flex justify-center md:justify-start gap-1 mb-4"
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: 0.3 }}
//                     >
//                       {[...Array(currentTestimonial.rating)].map((_, i) => (
//                         <motion.div
//                           key={i}
//                           initial={{ scale: 0, rotate: -180 }}
//                           animate={{ scale: 1, rotate: 0 }}
//                           transition={{ delay: 0.4 + i * 0.1, type: "spring" }}
//                         >
//                           <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
//                         </motion.div>
//                       ))}
//                     </motion.div>

//                     <motion.p 
//                       className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6 font-medium"
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.4 }}
//                     >
//                       "{currentTestimonial.text}"
//                     </motion.p>

//                     <motion.div 
//                       className="space-y-2"
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.5 }}
//                     >
//                       <h4 className="text-2xl font-bold text-gray-900">
//                         {currentTestimonial.name}
//                       </h4>
//                     </motion.div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </AnimatePresence>

//           {/* Navigation Arrows */}
//           <motion.button
//             onClick={goToPrevious}
//             whileHover={{ scale: 1.2, x: -5 }}
//             whileTap={{ scale: 0.9 }}
//             className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white p-4 rounded-full shadow-xl hover:bg-purple-600 hover:text-white transition-all duration-300 z-10"
//             aria-label="Previous testimonial"
//           >
//             <ChevronLeft className="w-6 h-6" />
//           </motion.button>

//           <motion.button
//             onClick={goToNext}
//             whileHover={{ scale: 1.2, x: 5 }}
//             whileTap={{ scale: 0.9 }}
//             className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white p-4 rounded-full shadow-xl hover:bg-purple-600 hover:text-white transition-all duration-300 z-10"
//             aria-label="Next testimonial"
//           >
//             <ChevronRight className="w-6 h-6" />
//           </motion.button>
//         </div>

//         {/* Dots Navigation */}
//         <motion.div 
//           className="flex justify-center gap-3 mt-12"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.6 }}
//         >
//           {testimonials.map((_, index) => (
//             <motion.button
//               key={index}
//               onClick={() => goToSlide(index)}
//               whileHover={{ scale: 1.3 }}
//               whileTap={{ scale: 0.9 }}
//               className={`transition-all duration-300 rounded-full ${
//                 index === currentIndex
//                   ? 'w-12 h-3 bg-purple-600'
//                   : 'w-3 h-3 bg-gray-300 hover:bg-purple-400'
//               }`}
//               aria-label={`Go to testimonial ${index + 1}`}
//             />
//           ))}
//         </motion.div>

//         {/* Stats Section */}
//         <motion.div 
//           className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ 
//             once: true, 
//             amount: 0.5
//           }}
//           variants={{
//             visible: {
//               transition: { staggerChildren: 0.15 }
//             }
//           }}
//         >
//           {[
//             { number: '100+', label: 'Customers Worldwide' },
//             { number: '98%', label: 'Satisfaction Rate' },
//             { number: '4.8/5', label: 'Average Rating' },
//             { number: '100%', label: 'Project Success' }
//           ].map((stat, idx) => (
//             <motion.div
//               key={idx}
//               variants={fadeUp}
//               whileHover={{ scale: 1.08, y: -5 }}
//               className="text-center p-6 bg-white rounded-xl shadow-lg"
//             >
//               <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
//                 <AnimatedNumber value={stat.number} />
//               </div>
//               <div className="text-gray-600 font-medium">{stat.label}</div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

/* ---------- Animations ---------- */
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

/* ---------- Animated Number ---------- */
const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [num, setNum] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const cleanValue = value.replace(/[^\d.]/g, '');
    const targetNum = parseFloat(cleanValue) || 0;
    const hasDecimal = value.includes('.');
    const duration = 3000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = targetNum * eased;
      setNum(hasDecimal ? current.toFixed(1) : Math.floor(current));
      if (progress < 1) requestAnimationFrame(animate);
      else setNum(hasDecimal ? targetNum.toFixed(1) : targetNum);
    };
    requestAnimationFrame(animate);
  }, [isInView, value]);

  const getSuffix = () => value.replace(/[0-9.]/g, '');
  return <span ref={ref}>{num}{getSuffix()}</span>;
};

/* ---------- Elfsight Widget Loader ---------- */
const ElfsightWidget = () => {
  useEffect(() => {
    // Script pehle se exist karti hai toh dobara add mat karo
    if (!document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://elfsightcdn.com/platform.js';
      script.async = true;
      document.body.appendChild(script);
    } else if (window.eapps) {
      window.eapps.AppsManager?.render?.();
    }
  }, []);

  return (
    <div
      className="elfsight-app-cbc0b8ad-68fe-49e8-9aef-0beb9cb8e5f4"
      data-elfsight-app-lazy
    />
  );
};

/* ============================================================
   MAIN COMPONENT
   ============================================================ */
const TestimonialsSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { number: '100+',  label: 'Customers Worldwide' },
    { number: '11+',   label: 'Google Reviews' },
    { number: '5.0/5', label: 'Google Rating' },
    { number: '100%',  label: 'Project Success' },
  ];

  return (
    <section className="relative py-20 md:py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-hidden">

      {/* Animated Background Blobs */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        {[
          { color: 'bg-green-300',  xMul:  0.02,  yMul:  0.02,  pos: 'top-10 left-10' },
          { color: 'bg-yellow-300', xMul: -0.015, yMul:  0.015, pos: 'top-20 right-10' },
          { color: 'bg-pink-300',   xMul:  0.01,  yMul: -0.02,  pos: '-bottom-8 left-20' },
        ].map((blob, i) => (
          <motion.div
            key={i}
            className={`absolute ${blob.pos} w-72 h-72 ${blob.color} rounded-full mix-blend-multiply filter blur-3xl`}
            animate={{
              x: mousePosition.x * blob.xMul,
              y: mousePosition.y * blob.yMul,
              scale: [1, 1.2, 1],
            }}
            transition={{
              scale: { duration: 7, repeat: Infinity, ease: 'easeInOut', delay: i * 2 },
              x: { type: 'spring', stiffness: 50 },
              y: { type: 'spring', stiffness: 50 },
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-6 py-2 bg-purple-600 text-white text-sm font-semibold rounded-full shadow-lg">
              ⭐ Client Success Stories
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            What Our{' '}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Clients Say
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
           
          </motion.p>

          {/* Google Verified Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-2 mt-4"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="text-sm text-gray-500 font-medium">Verified Google Reviews</span>
            <span className="text-sm font-bold text-yellow-500">★ 5.0</span>
          </motion.div>
        </motion.div>

        {/* ── Elfsight Google Reviews Widget ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
        >
          <ElfsightWidget />
        </motion.div>

        {/* ── Stats Section ── */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              whileHover={{ scale: 1.08, y: -5 }}
              className="text-center p-6 bg-white rounded-xl shadow-lg"
            >
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                <AnimatedNumber value={stat.number} />
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Google Reviews Link ── */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="https://maps.app.goo.gl/EgsGVwMZYtzmEa5J8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-purple-600 transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default TestimonialsSection;