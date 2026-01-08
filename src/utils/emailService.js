// utils/emailService.js

import emailjs from '@emailjs/browser';

// EmailJS Configuration
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY_HERE'; // Replace with your actual key
const SERVICE_ID = 'YOUR_SERVICE_ID'; // Replace with your service ID
const CONTACT_TEMPLATE_ID = 'contact_form_template'; // Contact form template
const JOB_TEMPLATE_ID = 'job_application_template'; // Job application template

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

// Contact Form Email
export const sendContactEmail = async (formData) => {
  try {
    const templateParams = {
      to_email: 'omkarchauhan2004@gmail.com',
      subject: '🔵 NEW CONTACT FORM SUBMISSION - OnenestConnect',
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      services: formData.services.join(', '),
      budget: formData.budget,
      message: formData.message,
      submission_date: new Date().toLocaleString('en-IN', { 
        timeZone: 'Asia/Kolkata',
        dateStyle: 'full',
        timeStyle: 'long'
      })
    };

    const result = await emailjs.send(
      SERVICE_ID,
      CONTACT_TEMPLATE_ID,
      templateParams
    );

    console.log('✅ Contact form email sent successfully:', result);
    return { success: true, data: result };
  } catch (error) {
    console.error('❌ Contact email error:', error);
    return { success: false, error: error.message };
  }
};

// Job Application Email
export const sendJobApplicationEmail = async (formData, resumeFile) => {
  try {
    const templateParams = {
      to_email: 'omkarchauhan2004@gmail.com',
      subject: `🟢 NEW JOB APPLICATION - ${formData.position}`,
      applicant_name: formData.fullName,
      applicant_email: formData.email,
      phone: formData.phone,
      position: formData.position,
      experience: formData.experience,
      linkedin: formData.linkedIn || 'Not provided',
      portfolio: formData.portfolio || 'Not provided',
      cover_letter: formData.coverLetter || 'Not provided',
      resume_name: resumeFile ? resumeFile.name : 'Not attached',
      resume_size: resumeFile ? (resumeFile.size / 1024 / 1024).toFixed(2) + ' MB' : 'N/A',
      submission_date: new Date().toLocaleString('en-IN', { 
        timeZone: 'Asia/Kolkata',
        dateStyle: 'full',
        timeStyle: 'long'
      })
    };

    const result = await emailjs.send(
      SERVICE_ID,
      JOB_TEMPLATE_ID,
      templateParams
    );

    console.log('✅ Job application email sent successfully:', result);
    return { success: true, data: result };
  } catch (error) {
    console.error('❌ Job application email error:', error);
    return { success: false, error: error.message };
  }
};