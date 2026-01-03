import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload, X } from 'lucide-react';
import AnimatedHero from '../components/AnimatedHero';
import WhatsAppButton from '../components/Watsappfloat';

const JobApplicationPage = () => {
  const { position } = useParams(); // URL se position slug lega
  const navigate = useNavigate();

  // URL slug ko readable title mein convert karo
  const getJobTitle = (slug) => {
    if (!slug || slug === 'general') return '';
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const preSelectedPosition = getJobTitle(position);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: preSelectedPosition,
    experience: '',
    linkedIn: '',
    portfolio: '',
    coverLetter: ''
  });

  // Jab position change ho toh formData update karo
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      position: preSelectedPosition
    }));
  }, [preSelectedPosition]);

  const [resume, setResume] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResume(file);
      if (errors.resume) {
        setErrors(prev => ({
          ...prev,
          resume: ''
        }));
      }
    }
  };

  const removeResume = () => {
    setResume(null);
  };

  const validateForm = () => {
    const newErrors = {};

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    const phoneRegex = /^[\d\s\+\-\(\)]+$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone) || formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Position validation
    if (!formData.position) {
      newErrors.position = 'Please select a position';
    }

    // Experience validation
    if (!formData.experience) {
      newErrors.experience = 'Please select your experience level';
    }

    // Resume validation
    if (!resume) {
      newErrors.resume = 'Please upload your resume';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setSubmitted(true);
      console.log('Form Data:', formData);
      console.log('Resume:', resume);
    } else {
      // Scroll to first error
      const firstErrorField = document.querySelector('.border-red-500');
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-12 text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">✓</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Application Submitted!
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Thank you for your interest in joining OnenestConnect. We've received your application and will review it carefully. You'll hear from us within 5-7 business days.
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => setSubmitted(false)}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Submit Another Application
            </button>
            <button
              onClick={() => navigate('/careers')}
              className="bg-gray-200 text-gray-700 px-8 py-4 rounded-full font-bold hover:bg-gray-300 transition-all hover:shadow-lg hover:scale-105"
            >
              Back to Careers
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <WhatsAppButton />
      {/* Hero Header with Back Button */}
      <div className="relative">
        <AnimatedHero
          title="Apply for a Position"
          subtitle="We're excited to learn more about you! Fill out the form below to join our team."
          gradient="from-purple-600 to-blue-600"
        />
        
        {/* Back Button - Positioned over AnimatedHero */}
        <button 
          onClick={() => navigate('/careers')}
          className="absolute top-8 left-8 z-20 text-white flex items-center gap-2 hover:gap-3 transition-all bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/20"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-semibold">Back to Careers</span>
        </button>
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Personal Information */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-purple-600 to-blue-600 rounded-full" />
              Personal Information
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                    errors.fullName ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-purple-500'
                  }`}
                  placeholder="John Doe"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                      errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-purple-500'
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                      errors.phone ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-purple-500'
                    }`}
                    placeholder="+91 12345 67890"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Position Details */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-purple-600 to-blue-600 rounded-full" />
              Position Details
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Position Applied For <span className="text-red-500">*</span>
                </label>
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  disabled={preSelectedPosition !== ''}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors bg-white disabled:bg-gray-50 ${
                    errors.position ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-purple-500'
                  }`}
                >
                  <option value="">Select a position</option>
                  <option value="Senior Full Stack Developer">Senior Full Stack Developer</option>
                  <option value="UI/UX Designer">UI/UX Designer</option>
                  <option value="DevOps Engineer">DevOps Engineer</option>
                  <option value="Product Manager">Product Manager</option>
                  <option value="Data Scientist">Data Scientist</option>
                  <option value="Marketing Manager">Marketing Manager</option>
                  <option value="Other">Other</option>
                </select>
                {errors.position && (
                  <p className="text-red-500 text-sm mt-1">{errors.position}</p>
                )}
                {preSelectedPosition && (
                  <p className="text-sm text-purple-600 mt-2 flex items-center gap-1">
                    <span>✓</span> Position pre-selected: <strong>{preSelectedPosition}</strong>
                  </p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Years of Experience <span className="text-red-500">*</span>
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                    errors.experience ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-purple-500'
                  }`}
                >
                  <option value="">Select experience</option>
                  <option value="0-1">0-1 years</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-8">5-8 years</option>
                  <option value="8+">8+ years</option>
                </select>
                {errors.experience && (
                  <p className="text-red-500 text-sm mt-1">{errors.experience}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    name="linkedIn"
                    value={formData.linkedIn}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Portfolio / Website
                  </label>
                  <input
                    type="url"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="https://yourportfolio.com"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Resume Upload */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-purple-600 to-blue-600 rounded-full" />
              Resume <span className="text-red-500 text-base">*</span>
            </h2>
            
            <div className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
              errors.resume ? 'border-red-500 hover:border-red-600' : 'border-gray-300 hover:border-purple-500'
            }`}>
              {!resume ? (
                <label className="cursor-pointer">
                  <input
                    type="file"
                    className="hidden"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                  />
                  <Upload className={`w-12 h-12 mx-auto mb-4 ${errors.resume ? 'text-red-400' : 'text-gray-400'}`} />
                  <p className={`font-semibold mb-2 ${errors.resume ? 'text-red-700' : 'text-gray-700'}`}>
                    Click to upload your resume
                  </p>
                  <p className="text-sm text-gray-500">
                    PDF, DOC, or DOCX (Max 5MB)
                  </p>
                </label>
              ) : (
                <div className="flex items-center justify-between bg-purple-50 p-4 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                      📄
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">{resume.name}</p>
                      <p className="text-sm text-gray-500">
                        {(resume.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={removeResume}
                    className="text-red-500 hover:text-red-700 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              )}
            </div>
            {errors.resume && (
              <p className="text-red-500 text-sm mt-1">{errors.resume}</p>
            )}
          </div>

          {/* Cover Letter */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-purple-600 to-blue-600 rounded-full" />
              Cover Letter
              <span className="text-sm text-gray-500 font-normal ml-2">(Optional)</span>
            </h2>
            
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Tell us why you're a great fit
              </label>
              <textarea
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleInputChange}
                rows="6"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors resize-none"
                placeholder="Share your motivation, relevant experience, and what makes you excited about this opportunity..."
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-12 py-4 rounded-full font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Submit Application
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApplicationPage;