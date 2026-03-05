import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { servicesData } from '../data/servicesData';
import { ArrowRight, Sparkles, CheckCircle, X, Clock, Users, Tag, Briefcase, Award, QrCode, Smartphone, MessageCircle, Phone, User, Mail, GraduationCap, Calendar, BookOpen, AlertCircle } from 'lucide-react';
import PartnersSection from '../components/PartnersSection';
import TestimonialsSection from '../components/TestimonialsSection';
import WhatsAppButton from '../components/Watsappfloat';
import WhyChooseUs from '../components/WhyChooseUs';
import HomeHeroSection from '../components/HomeHeroSection';
import HomeServicesSection from '../components/HomeServiceSection';
import { motion, AnimatePresence } from 'framer-motion';
import HomeCTA from '../components/HomeCTA';
import EMSPortalDemo from '../components/Emsportaldemo';

const HomePage = () => {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showEnrollForm, setShowEnrollForm] = useState(false);
  const [showQRStep, setShowQRStep] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [seatsLeft, setSeatsLeft] = useState(90);
  const [enrollFormData, setEnrollFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    year: '',
    branch: ''
  });
  const [enrollErrors, setEnrollErrors] = useState({});
  const [isEnrollSubmitting, setIsEnrollSubmitting] = useState(false);
  const [enrollSubmitError, setEnrollSubmitError] = useState('');
  const navigate = useNavigate();

  // WhatsApp number
  const whatsappNumber = '918588942008';
  const whatsappMessage = 'Hi! I have completed the payment of ₹4,000 for the Internship Program. Here is my payment screenshot.';

  // API URL
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

  useEffect(() => {
    // Popup ko 2 seconds baad show karo
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Aaj ki date se exactly 7 din baad
    const today = new Date();
    const endDate = new Date(today);
    endDate.setDate(today.getDate() + 7);
    endDate.setHours(23, 59, 59, 999);
    
    const countdownInterval = setInterval(() => {
      const currentTime = new Date();
      const timeRemaining = endDate.getTime() - currentTime.getTime();

      if (timeRemaining <= 0) {
        clearInterval(countdownInterval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  const handleLearnMore = (service) => {
    navigate(`/services/${service.id}`);
  };

  const closePopup = () => {
    setShowPopup(false);
    setShowEnrollForm(false);
    setShowQRStep(false);
    setEnrollFormData({
      name: '',
      email: '',
      phone: '',
      college: '',
      year: '',
      branch: ''
    });
    setEnrollErrors({});
    setEnrollSubmitError('');
  };

  const handleEnrollClick = () => {
    setShowEnrollForm(true);
  };

  const handleBackToDetails = () => {
    setShowEnrollForm(false);
  };

  const handleBackToForm = () => {
    setShowQRStep(false);
  };

  const handleEnrollFormChange = (e) => {
    const { name, value } = e.target;
    setEnrollFormData({ ...enrollFormData, [name]: value });
    if (enrollErrors[name]) {
      setEnrollErrors({ ...enrollErrors, [name]: '' });
    }
    if (enrollSubmitError) setEnrollSubmitError('');
  };

  const handleEnrollFormSubmit = async () => {
    const newErrors = {};
    
    if (!enrollFormData.name.trim()) newErrors.name = 'Name is required';
    if (!enrollFormData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(enrollFormData.email)) newErrors.email = 'Invalid email';
    if (!enrollFormData.phone.trim()) newErrors.phone = 'Phone is required';
    else if (!/^[0-9]{10}$/.test(enrollFormData.phone.replace(/\D/g, ''))) newErrors.phone = 'Invalid phone number';
    if (!enrollFormData.college.trim()) newErrors.college = 'College name is required';
    if (!enrollFormData.year.trim()) newErrors.year = 'Year is required';
    if (!enrollFormData.branch.trim()) newErrors.branch = 'Branch is required';

    if (Object.keys(newErrors).length > 0) {
      setEnrollErrors(newErrors);
      return;
    }

    setIsEnrollSubmitting(true);
    setEnrollSubmitError('');
    
    try {
      const response = await fetch(`${API_URL}/enroll`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(enrollFormData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setIsEnrollSubmitting(false);
      setShowQRStep(true);

    } catch (error) {
      console.error('❌ Enrollment error:', error);
      setIsEnrollSubmitting(false);
      setEnrollSubmitError(error.message || 'Failed to submit form. Please try again.');
    }
  };

  const handleWhatsAppRedirect = () => {
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    closePopup();
  };

  const handleCallClick = () => {
    window.location.href = `tel:+${whatsappNumber}`;
  };

  return (
    <div>
      <WhatsAppButton />
      
      {/* Internship Popup */}
      <AnimatePresence>
        {showPopup && (
          <>
            {/* Backdrop - Full Screen with padding */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9999] flex items-center justify-center py-8"
              onClick={closePopup}
            >
              {/* Popup - Centered & Compact */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.5, rotate: 10 }}
                transition={{ type: "spring", duration: 0.6, bounce: 0.4 }}
                onClick={(e) => e.stopPropagation()}
                className="w-[90%] max-w-lg mx-auto max-h-[90vh] overflow-y-auto"
              >
                <div className="relative bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 p-1 rounded-2xl shadow-2xl">
                  {/* Animated Border Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-2xl blur-xl opacity-50 animate-pulse"></div>
                  
                  <div className="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden">
                    {/* Close Button */}
                    <button
                      onClick={closePopup}
                      className="absolute top-3 right-3 z-10 bg-white/90 dark:bg-gray-800/90 p-1.5 rounded-full text-gray-700 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400 transition-all hover:rotate-90 duration-300 shadow-lg"
                    >
                      <X size={20} />
                    </button>

                    {/* Top Badge */}
                    <div className="bg-gradient-to-r from-orange-600 to-red-600 py-2 px-4 text-center">
                      <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="flex items-center justify-center gap-2"
                      >
                        <Sparkles className="text-yellow-300" size={18} />
                        <span className="text-white font-bold text-sm uppercase tracking-wide">
                          {showQRStep ? 'Complete Payment' : showEnrollForm ? 'Enrollment Form' : 'Limited Time Offer'}
                        </span>
                        <Sparkles className="text-yellow-300" size={18} />
                      </motion.div>
                    </div>

                    <AnimatePresence mode="wait">
                      {!showEnrollForm && !showQRStep ? (
                        // STEP 1: Internship Details
                        <motion.div
                          key="step1"
                          initial={{ opacity: 0, x: -50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 50 }}
                          transition={{ duration: 0.3 }}
                          className="p-5"
                        >
                          {/* Main Icon */}
                          <div className="flex justify-center mb-3">
                            <motion.div
                              animate={{ rotate: [0, 10, -10, 0] }}
                              transition={{ repeat: Infinity, duration: 3 }}
                              className="bg-gradient-to-br from-orange-500 to-red-600 p-3 rounded-xl shadow-lg"
                            >
                              <Briefcase size={32} className="text-white" />
                            </motion.div>
                          </div>

                          {/* Heading */}
                          <h2 className="text-2xl sm:text-3xl font-black text-center mb-1 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
                            Internship Program
                          </h2>
                          <p className="text-center text-gray-600 dark:text-gray-400 text-sm mb-4">
                            Launch Your Career with Industry Experts!
                          </p>

                          {/* Countdown Timer */}
                          <div className="mb-4">
                            <div className="flex items-center justify-center gap-2 mb-3">
                              <Clock className="text-red-600 animate-pulse" size={18} />
                              <h3 className="text-base font-bold text-gray-800 dark:text-gray-200">
                                Offer Ends In
                              </h3>
                            </div>
                            <div className="grid grid-cols-4 gap-2 max-w-sm mx-auto">
                              {[
                                { label: 'Days', value: timeLeft.days },
                                { label: 'Hours', value: timeLeft.hours },
                                { label: 'Mins', value: timeLeft.minutes },
                                { label: 'Secs', value: timeLeft.seconds }
                              ].map((item, index) => (
                                <motion.div
                                  key={index}
                                  animate={{ scale: item.label === 'Secs' ? [1, 1.1, 1] : 1 }}
                                  transition={{ repeat: Infinity, duration: 1 }}
                                  className="bg-gradient-to-br from-red-500 to-orange-600 rounded-lg p-2 text-center shadow-lg"
                                >
                                  <div className="text-xl sm:text-2xl font-black text-white">
                                    {String(item.value).padStart(2, '0')}
                                  </div>
                                  <div className="text-[10px] text-white/90 font-semibold">
                                    {item.label}
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          {/* Stats */}
                          <div className="grid grid-cols-2 gap-3 mb-4">
                            {/* Seats Left */}
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              className="bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 p-3 rounded-lg border-2 border-orange-300 dark:border-orange-700"
                            >
                              <div className="flex items-center justify-center gap-1 mb-1">
                                <Users className="text-orange-600" size={18} />
                              </div>
                              <div className="text-center">
                                <div className="text-2xl font-black text-orange-600 dark:text-orange-400">
                                  {seatsLeft}
                                </div>
                                <div className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                                  Seats Left
                                </div>
                              </div>
                            </motion.div>

                            {/* Price */}
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 p-3 rounded-lg border-2 border-green-300 dark:border-green-700"
                            >
                              <div className="flex items-center justify-center gap-1 mb-1">
                                <Tag className="text-green-600" size={18} />
                              </div>
                              <div className="text-center">
                                <div className="text-2xl font-black text-green-600 dark:text-green-400">
                                  ₹4,000
                                </div>
                                <div className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                                  Only
                                </div>
                              </div>
                            </motion.div>
                          </div>

                          {/* Benefits */}
                          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3 mb-4">
                            <div className="grid grid-cols-2 gap-2">
                              {[
                                'Certificate',
                                'Live Projects',
                                'Mentorship',
                                'Job Support'
                              ].map((benefit, index) => (
                                <motion.div
                                  key={index}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.1 + 0.5 }}
                                  className="flex items-center gap-1.5"
                                >
                                  <Award className="text-orange-600 flex-shrink-0" size={16} />
                                  <span className="text-gray-700 dark:text-gray-300 font-medium text-xs">
                                    {benefit}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          {/* CTA Button */}
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleEnrollClick}
                            className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 px-6 rounded-lg font-black text-base hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 group"
                          >
                            <span>Enroll Now</span>
                            <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
                          </motion.button>

                          {/* Footer Text */}
                          <p className="text-center text-[10px] text-gray-500 dark:text-gray-400 mt-3">
                            ⚡ Hurry! Seats filling fast
                          </p>
                        </motion.div>
                      ) : showEnrollForm && !showQRStep ? (
                        // STEP 2: Enrollment Form
                        <motion.div
                          key="step2"
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -50 }}
                          transition={{ duration: 0.3 }}
                          className="p-5"
                        >
                          {/* Form Icon */}
                          <div className="flex justify-center mb-3">
                            <motion.div
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ repeat: Infinity, duration: 2 }}
                              className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-xl shadow-lg"
                            >
                              <GraduationCap size={32} className="text-white" />
                            </motion.div>
                          </div>

                          {/* Heading */}
                          <h2 className="text-2xl sm:text-3xl font-black text-center mb-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Complete Your Details
                          </h2>
                          <p className="text-center text-gray-600 dark:text-gray-400 text-sm mb-4">
                            We'll send confirmation to your email
                          </p>

                          {/* Error Message */}
                          {enrollSubmitError && (
                            <motion.div
                              initial={{ opacity: 0, y: -20 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="bg-gradient-to-r from-red-500 to-rose-500 text-white p-3 rounded-lg mb-4 flex items-center text-sm"
                            >
                              <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                              <span>{enrollSubmitError}</span>
                            </motion.div>
                          )}

                          {/* Form Fields */}
                          <div className="space-y-3 mb-4">
                            {/* Name */}
                            <div>
                              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-1 text-sm">
                                Full Name *
                              </label>
                              <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                  type="text"
                                  name="name"
                                  value={enrollFormData.name}
                                  onChange={handleEnrollFormChange}
                                  className={`w-full pl-10 pr-4 py-2.5 border-2 rounded-lg focus:outline-none transition-all text-sm ${
                                    enrollErrors.name 
                                      ? 'border-red-500' 
                                      : 'border-gray-300 focus:border-purple-500'
                                  }`}
                                  placeholder="Enter your full name"
                                />
                              </div>
                              {enrollErrors.name && (
                                <p className="text-red-500 text-xs mt-1 flex items-center">
                                  <AlertCircle className="w-3 h-3 mr-1" />
                                  {enrollErrors.name}
                                </p>
                              )}
                            </div>

                            {/* Email */}
                            <div>
                              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-1 text-sm">
                                Email Address *
                              </label>
                              <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                  type="email"
                                  name="email"
                                  value={enrollFormData.email}
                                  onChange={handleEnrollFormChange}
                                  className={`w-full pl-10 pr-4 py-2.5 border-2 rounded-lg focus:outline-none transition-all text-sm ${
                                    enrollErrors.email 
                                      ? 'border-red-500' 
                                      : 'border-gray-300 focus:border-purple-500'
                                  }`}
                                  placeholder="your.email@example.com"
                                />
                              </div>
                              {enrollErrors.email && (
                                <p className="text-red-500 text-xs mt-1 flex items-center">
                                  <AlertCircle className="w-3 h-3 mr-1" />
                                  {enrollErrors.email}
                                </p>
                              )}
                            </div>

                            {/* Phone */}
                            <div>
                              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-1 text-sm">
                                Phone Number *
                              </label>
                              <div className="relative">
                                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                  type="tel"
                                  name="phone"
                                  value={enrollFormData.phone}
                                  onChange={handleEnrollFormChange}
                                  className={`w-full pl-10 pr-4 py-2.5 border-2 rounded-lg focus:outline-none transition-all text-sm ${
                                    enrollErrors.phone 
                                      ? 'border-red-500' 
                                      : 'border-gray-300 focus:border-purple-500'
                                  }`}
                                  placeholder="+91 1234567890"
                                />
                              </div>
                              {enrollErrors.phone && (
                                <p className="text-red-500 text-xs mt-1 flex items-center">
                                  <AlertCircle className="w-3 h-3 mr-1" />
                                  {enrollErrors.phone}
                                </p>
                              )}
                            </div>

                            {/* College */}
                            <div>
                              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-1 text-sm">
                                College/University *
                              </label>
                              <div className="relative">
                                <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                  type="text"
                                  name="college"
                                  value={enrollFormData.college}
                                  onChange={handleEnrollFormChange}
                                  className={`w-full pl-10 pr-4 py-2.5 border-2 rounded-lg focus:outline-none transition-all text-sm ${
                                    enrollErrors.college 
                                      ? 'border-red-500' 
                                      : 'border-gray-300 focus:border-purple-500'
                                  }`}
                                  placeholder="Your college name"
                                />
                              </div>
                              {enrollErrors.college && (
                                <p className="text-red-500 text-xs mt-1 flex items-center">
                                  <AlertCircle className="w-3 h-3 mr-1" />
                                  {enrollErrors.college}
                                </p>
                              )}
                            </div>

                            {/* Year & Branch */}
                            <div className="grid grid-cols-2 gap-3">
                              {/* Year */}
                              <div>
                                <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-1 text-sm">
                                  Year *
                                </label>
                                <div className="relative">
                                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                  <select
                                    name="year"
                                    value={enrollFormData.year}
                                    onChange={handleEnrollFormChange}
                                    className={`w-full pl-10 pr-4 py-2.5 border-2 rounded-lg focus:outline-none transition-all text-sm appearance-none ${
                                      enrollErrors.year 
                                        ? 'border-red-500' 
                                        : 'border-gray-300 focus:border-purple-500'
                                    }`}
                                  >
                                    <option value="">Select</option>
                                    <option value="1st Year">1st Year</option>
                                    <option value="2nd Year">2nd Year</option>
                                    <option value="3rd Year">3rd Year</option>
                                    <option value="4th Year">4th Year</option>
                                    <option value="Post Graduate">Post Graduate</option>
                                  </select>
                                </div>
                                {enrollErrors.year && (
                                  <p className="text-red-500 text-xs mt-1 flex items-center">
                                    <AlertCircle className="w-3 h-3 mr-1" />
                                    {enrollErrors.year}
                                  </p>
                                )}
                              </div>

                              {/* Branch */}
                              <div>
                                <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-1 text-sm">
                                  Branch *
                                </label>
                                <div className="relative">
                                  <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                  <input
                                    type="text"
                                    name="branch"
                                    value={enrollFormData.branch}
                                    onChange={handleEnrollFormChange}
                                    className={`w-full pl-10 pr-4 py-2.5 border-2 rounded-lg focus:outline-none transition-all text-sm ${
                                      enrollErrors.branch 
                                        ? 'border-red-500' 
                                        : 'border-gray-300 focus:border-purple-500'
                                    }`}
                                    placeholder="e.g., CSE"
                                  />
                                </div>
                                {enrollErrors.branch && (
                                  <p className="text-red-500 text-xs mt-1 flex items-center">
                                    <AlertCircle className="w-3 h-3 mr-1" />
                                    {enrollErrors.branch}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Buttons */}
                          <div className="grid grid-cols-2 gap-3 mb-3">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={handleBackToDetails}
                              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-3 px-4 rounded-lg font-bold text-sm hover:shadow-lg transition-all duration-300"
                            >
                              ← Back
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={handleEnrollFormSubmit}
                              disabled={isEnrollSubmitting}
                              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-lg font-bold text-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
                            >
                              {isEnrollSubmitting ? (
                                <>
                                  <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                    className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                                  />
                                  <span>Submitting...</span>
                                </>
                              ) : (
                                <>
                                  <span>Continue</span>
                                  <ArrowRight size={16} />
                                </>
                              )}
                            </motion.button>
                          </div>

                          {/* Footer */}
                          <p className="text-center text-[10px] text-gray-500 dark:text-gray-400">
                            📧 Confirmation will be sent to your email
                          </p>
                        </motion.div>
                      ) : (
                        // STEP 3: QR Code Payment
                        <motion.div
                          key="step3"
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -50 }}
                          transition={{ duration: 0.3 }}
                          className="p-5"
                        >
                          {/* QR Icon */}
                          <div className="flex justify-center mb-3">
                            <motion.div
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ repeat: Infinity, duration: 2 }}
                              className="bg-gradient-to-br from-green-500 to-emerald-600 p-3 rounded-xl shadow-lg"
                            >
                              <QrCode size={32} className="text-white" />
                            </motion.div>
                          </div>

                          {/* Heading */}
                          <h2 className="text-2xl sm:text-3xl font-black text-center mb-1 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                            Scan & Pay
                          </h2>
                          <p className="text-center text-gray-600 dark:text-gray-400 text-sm mb-4">
                            Complete your enrollment payment
                          </p>

                          {/* Amount Display */}
                          <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-lg p-4 mb-4 border-2 border-green-300 dark:border-green-700">
                            <div className="text-center">
                              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                                Payment Amount
                              </p>
                              <div className="text-4xl font-black text-green-600 dark:text-green-400">
                                ₹4,000
                              </div>
                            </div>
                          </div>

                          {/* QR Code */}
                          <div className="bg-white p-4 rounded-xl shadow-lg mb-4 flex justify-center">
                            <motion.img 
                              whileHover={{ scale: 1.05 }}
                              src="/images/OneNestQR.jpeg" 
                              alt="Payment QR Code" 
                              className="w-48 h-48 sm:w-56 sm:h-56 object-contain"
                            />
                          </div>

                          {/* Contact Number Display */}
                          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-4 mb-4 border-2 border-purple-200 dark:border-purple-800">
                            <div className="text-center">
                              <div className="flex items-center justify-center gap-2 mb-2">
                                <Phone className="text-purple-600" size={18} />
                                <h4 className="text-sm font-bold text-gray-800 dark:text-gray-200">
                                  Contact Number
                                </h4>
                              </div>
                              <a 
                                href={`tel:+${whatsappNumber}`}
                                className="text-lg font-black text-purple-600 dark:text-purple-400 hover:underline"
                              >
                                +91 8588942008
                              </a>
                            </div>
                          </div>

                          {/* Instructions */}
                          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-4">
                            <div className="flex items-start gap-2">
                              <Smartphone className="text-blue-600 flex-shrink-0 mt-1" size={18} />
                              <div>
                                <h4 className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-1">
                                  How to Pay:
                                </h4>
                                <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                                  <li>1. Open any UPI app (GPay, PhonePe, Paytm)</li>
                                  <li>2. Scan the QR code above</li>
                                  <li>3. Enter amount: ₹4,000</li>
                                  <li>4. Complete payment</li>
                                  <li>5. Take screenshot of payment confirmation</li>
                                  <li>6. Click "Send on WhatsApp" below</li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          {/* Buttons */}
                          <div className="grid grid-cols-2 gap-3 mb-3">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={handleBackToForm}
                              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-3 px-4 rounded-lg font-bold text-sm hover:shadow-lg transition-all duration-300"
                            >
                              ← Back
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={handleCallClick}
                              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-lg font-bold text-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                            >
                              <Phone size={16} />
                              Call
                            </motion.button>
                          </div>

                          {/* WhatsApp Button */}
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleWhatsAppRedirect}
                            className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-6 rounded-lg font-black text-base hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 group"
                          >
                            <MessageCircle className="group-hover:scale-110 transition-transform" size={20} />
                            <span>Send Screenshot on WhatsApp</span>
                          </motion.button>

                          {/* Footer */}
                          <p className="text-center text-[10px] text-gray-500 dark:text-gray-400 mt-3">
                            💬 Share payment proof for instant confirmation
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <HomeHeroSection />
      <EMSPortalDemo/>
      <HomeServicesSection />
      <WhyChooseUs />
      <PartnersSection />
      <TestimonialsSection />
      <HomeCTA />
    </div>
  );
};

export default HomePage;