import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Clock, Globe } from 'lucide-react';

// API Configuration
const API_URL = 'http://localhost:5000/api';

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

const ContactPage = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '',
    services: [], 
    budget: '', 
    message: '' 
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [focusedField, setFocusedField] = useState(null);

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

  const serviceOptions = [
    { name: 'Web Development', color: 'from-blue-500 to-cyan-500' },
    { name: 'Mobile Development', color: 'from-purple-500 to-pink-500' },
    { name: 'UI/UX Design', color: 'from-pink-500 to-rose-500' },
    { name: 'Cloud Solutions', color: 'from-cyan-500 to-blue-600' },
    { name: 'CRM Solutions', color: 'from-green-500 to-teal-600' },
    { name: 'Digital Marketing', color: 'from-orange-500 to-red-600' }
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'info@onenestconnect.in',
      color: 'from-blue-500 to-cyan-500',
      link: 'mailto:info@onenestconnect.in'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 8588942008',
      color: 'from-green-500 to-emerald-500',
      link: 'tel:+918588942008'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: 'Sector 44, Near Botanical Garden Metro Station, Noida, Uttar Pradesh 201301',
      color: 'from-purple-500 to-pink-500',
      link: '#map'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      value: 'Mon - Fri: 9:00 AM - 6:00 PM',
      color: 'from-orange-500 to-red-500',
      link: null
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
    if (submitError) setSubmitError('');
  };

  const handleServiceChange = (service) => {
    const updatedServices = formData.services.includes(service)
      ? formData.services.filter(s => s !== service)
      : [...formData.services, service];
    setFormData({ ...formData, services: updatedServices });
    if (errors.services) {
      setErrors({ ...errors, services: '' });
    }
  };

  const handleSubmit = async () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\D/g, ''))) newErrors.phone = 'Invalid phone number';
    if (formData.services.length === 0) newErrors.services = 'Please select at least one service';
    if (!formData.budget.trim()) newErrors.budget = 'Budget is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setIsSubmitting(false);
      setSubmitted(true);
      
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', services: [], budget: '', message: '' });
      }, 5000);

    } catch (error) {
      console.error('Submission error:', error);
      setIsSubmitting(false);
      setSubmitError(error.message || 'Failed to submit form. Please try again.');
    }
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

      <section className="relative h-screen -mt-20 flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
  <motion.div
    className="absolute inset-0 opacity-20"
  >
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=1080&fit=crop')] bg-cover bg-center" />
  </motion.div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl shadow-2xl flex items-center justify-center transform rotate-6 hover:rotate-12 transition-transform">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png"
                alt="Contact Us"
                className="w-16 h-16 brightness-0 invert"
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold text-white mb-6"
          >
            Contact <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">US</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-12"
          >
            Let's discuss your next project and bring your vision to life
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <button 
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all"
            >
              Get in Touch
            </button>
          </motion.div>
        </div>
      </section>

      {/* ================= CONTACT INFO CARDS ================= */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={idx}
                  href={info.link || '#'}
                  variants={fadeIn}
                  whileHover={{ y: -10, scale: 1.03 }}
                  className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all cursor-pointer"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${info.color} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity`} />
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl shadow-lg flex items-center justify-center mb-6`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-gray-600">{info.value}</p>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ================= FORM & MAP SECTION ================= */}
      <section id="contact-form" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="sticky top-8">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                  Send Us a <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Message</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8">Fill out the form and we'll get back to you within 24 hours</p>

                {/* Success Message */}
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6 rounded-2xl mb-6 flex items-center shadow-lg"
                  >
                    <CheckCircle className="w-8 h-8 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg">Success!</h4>
                      <p>Thank you! We'll get back to you soon.</p>
                    </div>
                  </motion.div>
                )}

                {/* Error Message */}
                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-r from-red-500 to-rose-500 text-white p-6 rounded-2xl mb-6 flex items-center shadow-lg"
                  >
                    <AlertCircle className="w-8 h-8 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg">Error</h4>
                      <p>{submitError}</p>
                    </div>
                  </motion.div>
                )}

                <div className="space-y-6">
                  {/* Name */}
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="relative"
                  >
                    <label className="block text-gray-700 font-semibold mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-6 py-4 border-2 rounded-2xl focus:outline-none transition-all ${
                        errors.name 
                          ? 'border-red-500' 
                          : focusedField === 'name'
                          ? 'border-purple-500 shadow-lg shadow-purple-500/20'
                          : 'border-gray-300'
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-red-500 text-sm mt-2 flex items-center"
                      >
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.name}
                      </motion.p>
                    )}
                  </motion.div>

                  {/* Email & Phone */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div whileHover={{ scale: 1.01 }}>
                      <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-6 py-4 border-2 rounded-2xl focus:outline-none transition-all ${
                          errors.email 
                            ? 'border-red-500' 
                            : focusedField === 'email'
                            ? 'border-purple-500 shadow-lg shadow-purple-500/20'
                            : 'border-gray-300'
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="text-red-500 text-sm mt-2 flex items-center"
                        >
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.email}
                        </motion.p>
                      )}
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.01 }}>
                      <label className="block text-gray-700 font-semibold mb-2">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-6 py-4 border-2 rounded-2xl focus:outline-none transition-all ${
                          errors.phone 
                            ? 'border-red-500' 
                            : focusedField === 'phone'
                            ? 'border-purple-500 shadow-lg shadow-purple-500/20'
                            : 'border-gray-300'
                        }`}
                        placeholder="+91 1234567890"
                      />
                      {errors.phone && (
                        <motion.p
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="text-red-500 text-sm mt-2 flex items-center"
                        >
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.phone}
                        </motion.p>
                      )}
                    </motion.div>
                  </div>

                  {/* Services */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">Services Required *</label>
                    <div className="grid grid-cols-2 gap-3">
                      {serviceOptions.map((service, idx) => (
                        <motion.label
                          key={idx}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`relative cursor-pointer group`}
                        >
                          <input
                            type="checkbox"
                            checked={formData.services.includes(service.name)}
                            onChange={() => handleServiceChange(service.name)}
                            className="sr-only"
                          />
                          <div className={`px-4 py-3 rounded-xl border-2 transition-all ${
                            formData.services.includes(service.name)
                              ? `bg-gradient-to-r ${service.color} border-transparent text-white shadow-lg`
                              : 'border-gray-300 text-gray-700 hover:border-purple-500'
                          }`}>
                            <span className="text-sm font-medium">{service.name}</span>
                          </div>
                        </motion.label>
                      ))}
                    </div>
                    {errors.services && (
                      <motion.p
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-red-500 text-sm mt-2 flex items-center"
                      >
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.services}
                      </motion.p>
                    )}
                  </div>

                  {/* Budget */}
                  <motion.div whileHover={{ scale: 1.01 }}>
                    <label className="block text-gray-700 font-semibold mb-2">Budget (₹) *</label>
                    <input
                      type="text"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('budget')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-6 py-4 border-2 rounded-2xl focus:outline-none transition-all ${
                        errors.budget 
                          ? 'border-red-500' 
                          : focusedField === 'budget'
                          ? 'border-purple-500 shadow-lg shadow-purple-500/20'
                          : 'border-gray-300'
                      }`}
                      placeholder="e.g., 50,000 - 1,00,000 or Flexible"
                    />
                    {errors.budget && (
                      <motion.p
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-red-500 text-sm mt-2 flex items-center"
                      >
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.budget}
                      </motion.p>
                    )}
                  </motion.div>

                  {/* Message */}
                  <motion.div whileHover={{ scale: 1.01 }}>
                    <label className="block text-gray-700 font-semibold mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      rows={5}
                      className={`w-full px-6 py-4 border-2 rounded-2xl focus:outline-none transition-all resize-none ${
                        errors.message 
                          ? 'border-red-500' 
                          : focusedField === 'message'
                          ? 'border-purple-500 shadow-lg shadow-purple-500/20'
                          : 'border-gray-300'
                      }`}
                      placeholder="Tell us about your project..."
                    />
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-red-500 text-sm mt-2 flex items-center"
                      >
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.message}
                      </motion.p>
                    )}
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-5 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-6 h-6 border-3 border-white border-t-transparent rounded-full mr-3"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="ml-3 w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
               {/* Map */}
<motion.div
  whileHover={{ scale: 1.02 }}
  className="bg-white rounded-3xl shadow-lg overflow-hidden border-4 border-gray-100"
>
  <iframe
    src="https://www.google.com/maps?q=Sector+44+Near+Botanical+Garden+Metro+Station+Noida+Uttar+Pradesh+201301&output=embed"
    width="100%"
    height="400"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    title="Office Location - Sector 44, Noida"
    className="w-full"
  />
</motion.div>


              {/* Why Choose Us */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 shadow-xl text-white"
              >
                <Globe className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  {[
                    '100+ Successful Projects Delivered',
                    '98% Client Satisfaction Rate',
                    '24/7 Dedicated Support',
                    'Expert Team of Professionals',
                    'Cutting-edge Technology Stack',
                    'On-time Project Delivery'
                  ].map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center"
                    >
                      <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;