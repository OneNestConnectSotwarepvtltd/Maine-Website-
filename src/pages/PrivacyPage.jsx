import React from "react";
import { Link } from "react-router-dom";

const Privacy = () => {
  const sections = [
    {
      title: "Information We Collect",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      content: [
        {
          subtitle: "Personal Information",
          text: "We collect information that you provide directly to us, including your name, email address, phone number, company name, and any other information you choose to provide when you contact us or use our services."
        },
        {
          subtitle: "Usage Data",
          text: "We automatically collect certain information about your device and how you interact with our website, including your IP address, browser type, operating system, referring URLs, and pages visited."
        },
        {
          subtitle: "Cookies and Tracking",
          text: "We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or indicate when a cookie is being sent."
        }
      ]
    },
    {
      title: "How We Use Your Information",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      content: [
        {
          subtitle: "Service Delivery",
          text: "We use your information to provide, maintain, and improve our services, to process your requests and transactions, and to communicate with you about our services."
        },
        {
          subtitle: "Communication",
          text: "We may send you technical notices, updates, security alerts, and support messages. We may also use your information to respond to your comments and questions and provide customer service."
        },
        {
          subtitle: "Analytics and Improvement",
          text: "We use analytics data to understand how our services are used, to improve our website and services, and to develop new features and offerings."
        }
      ]
    },
    {
      title: "Information Sharing and Disclosure",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      content: [
        {
          subtitle: "Service Providers",
          text: "We may share your information with third-party service providers who perform services on our behalf, such as hosting, analytics, and customer support. These providers are bound by contractual obligations to keep your information confidential."
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose your information if required to do so by law or in response to valid requests by public authorities, or to protect the rights, property, or safety of OnenestConnect, our users, or others."
        },
        {
          subtitle: "Business Transfers",
          text: "In the event of a merger, acquisition, or sale of assets, your information may be transferred. We will provide notice before your information becomes subject to a different privacy policy."
        }
      ]
    },
    {
      title: "Data Security",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      content: [
        {
          subtitle: "Security Measures",
          text: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
        },
        {
          subtitle: "Data Retention",
          text: "We retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required by law."
        }
      ]
    },
    {
      title: "Your Rights and Choices",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      content: [
        {
          subtitle: "Access and Update",
          text: "You have the right to access, correct, or update your personal information. You can do this by contacting us directly at info@onenestconnect.com."
        },
        {
          subtitle: "Data Deletion",
          text: "You may request deletion of your personal information, subject to certain legal obligations that may require us to retain certain data."
        },
        {
          subtitle: "Opt-Out",
          text: "You can opt out of receiving promotional communications from us by following the unsubscribe instructions in those messages or by contacting us directly."
        }
      ]
    },
    {
      title: "Children's Privacy",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      content: [
        {
          subtitle: "Age Restriction",
          text: "Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-100">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-[-150px] right-[-150px] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-150px] left-[-150px] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[150px]" />
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 mb-6">
              <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-sm text-blue-400 font-medium">Last Updated: December 2024</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 pb-24">
        {/* Introduction */}
        <div className="mb-16 p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
          <p className="text-gray-300 leading-relaxed mb-4">
            OnenestConnect ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
          <p className="text-gray-300 leading-relaxed">
            By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
          </p>
        </div>

        {/* Sections */}
        {sections.map((section, index) => (
          <div key={index} className="mb-12">
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                {section.icon}
              </div>
              <h2 className="text-3xl font-bold text-white">{section.title}</h2>
            </div>

            {/* Section Content */}
            <div className="space-y-6 pl-0 md:pl-16">
              {section.content.map((item, itemIndex) => (
                <div key={itemIndex} className="group">
                  <h3 className="text-xl font-semibold text-blue-400 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full" />
                    {item.subtitle}
                  </h3>
                  <p className="text-gray-400 leading-relaxed pl-4 border-l-2 border-white/10 group-hover:border-blue-500/50 transition-colors">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Contact Section */}
        <div className="mt-16 p-8 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Us About Privacy
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <div className="space-y-2 text-gray-400">
            <p>Email: <a href="mailto:info@onenestconnect.com" className="text-blue-400 hover:text-blue-300">info@onenestconnect.com</a></p>
            <p>Phone: <a href="tel:+911234567890" className="text-blue-400 hover:text-blue-300">+91 12345 67890</a></p>
            <p>Address: Noida, Uttar Pradesh, India</p>
          </div>
        </div>

        {/* Changes to Policy */}
        <div className="mt-8 p-6 bg-yellow-500/10 backdrop-blur-sm border border-yellow-500/20 rounded-xl">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div>
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">Changes to This Privacy Policy</h3>
              <p className="text-gray-400 leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/50 rounded-xl text-gray-300 hover:text-white transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Privacy;