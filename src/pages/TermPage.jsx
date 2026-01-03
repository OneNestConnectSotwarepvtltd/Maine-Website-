import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  const sections = [
    {
      title: "Acceptance of Terms",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      content: [
        {
          text: "By accessing and using OnenestConnect's services, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services."
        },
        {
          text: "We reserve the right to modify these terms at any time. Your continued use of our services after any such changes constitutes your acceptance of the new Terms and Conditions."
        }
      ]
    },
    {
      title: "Services Description",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      content: [
        {
          text: "OnenestConnect provides digital solutions including web development, mobile app development, UI/UX design, digital marketing, and related services. The specific scope of services will be defined in individual project agreements."
        },
        {
          text: "We strive to deliver high-quality services, but we do not guarantee that our services will be uninterrupted, timely, secure, or error-free. Service availability and functionality may vary based on project specifications."
        }
      ]
    },
    {
      title: "User Responsibilities",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      content: [
        {
          text: "You are responsible for maintaining the confidentiality of any login credentials and are fully responsible for all activities that occur under your account."
        },
        {
          text: "You agree to provide accurate, current, and complete information during the project engagement and to update such information as necessary."
        },
        {
          text: "You agree not to use our services for any unlawful purpose or in any way that could damage, disable, overburden, or impair our services."
        }
      ]
    },
    {
      title: "Intellectual Property Rights",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      content: [
        {
          text: "All intellectual property rights in the materials, content, and deliverables created by OnenestConnect remain with OnenestConnect until full payment is received, as specified in the project agreement."
        },
        {
          text: "Upon full payment, ownership of the custom work product will be transferred to the client, subject to any third-party components that may be licensed separately."
        },
        {
          text: "OnenestConnect retains the right to use completed projects in our portfolio and marketing materials unless otherwise specified in a non-disclosure agreement."
        }
      ]
    },
    {
      title: "Payment Terms",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      content: [
        {
          text: "Payment terms will be outlined in the project proposal or contract. Typically, we require an initial deposit before work begins, with subsequent payments tied to project milestones."
        },
        {
          text: "All invoices are due within the timeframe specified in the project agreement. Late payments may result in project delays or suspension of services."
        },
        {
          text: "Additional work beyond the original scope will be billed separately and requires written approval before commencement."
        }
      ]
    },
    {
      title: "Project Timeline and Delivery",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      content: [
        {
          text: "Project timelines are estimates and may be subject to change based on project complexity, client feedback cycles, and resource availability."
        },
        {
          text: "Delays caused by late client feedback, content provision, or approval may result in timeline adjustments. We will communicate any changes promptly."
        },
        {
          text: "Final delivery is contingent upon receipt of all required materials from the client and completion of all agreed-upon revisions."
        }
      ]
    },
    {
      title: "Revisions and Modifications",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      content: [
        {
          text: "The number of revision rounds included in the project will be specified in the project agreement. Additional revisions beyond this scope will be billed at our standard hourly rate."
        },
        {
          text: "Revisions must be requested within a reasonable timeframe and in writing. We reserve the right to refuse revision requests that significantly alter the original project scope."
        }
      ]
    },
    {
      title: "Warranties and Disclaimers",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      content: [
        {
          text: "We warrant that services will be performed in a professional and workmanlike manner. However, we do not warrant that our services will meet all of your requirements or that they will be error-free."
        },
        {
          text: "Our services are provided 'as is' without any warranties, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement."
        },
        {
          text: "We are not responsible for any damages resulting from the use or inability to use our services, including but not limited to loss of data, profits, or business opportunities."
        }
      ]
    },
    {
      title: "Limitation of Liability",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
        </svg>
      ),
      content: [
        {
          text: "In no event shall OnenestConnect be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our services."
        },
        {
          text: "Our total liability for any claims related to our services shall not exceed the total amount paid by you for the specific service giving rise to the claim."
        }
      ]
    },
    {
      title: "Termination",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      ),
      content: [
        {
          text: "Either party may terminate the project agreement with written notice. Upon termination, the client will be responsible for payment for all work completed up to the termination date."
        },
        {
          text: "We reserve the right to terminate services immediately if you breach these Terms and Conditions or engage in any fraudulent or illegal activities."
        },
        {
          text: "Upon termination, all outstanding invoices become immediately due and payable. Any materials developed up to the point of termination will be delivered upon receipt of full payment."
        }
      ]
    },
    {
      title: "Confidentiality",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      content: [
        {
          text: "We will maintain the confidentiality of any proprietary or sensitive information shared with us during the course of our engagement, subject to any separate non-disclosure agreement."
        },
        {
          text: "This obligation does not apply to information that is publicly available, already known to us, or independently developed by us without use of your confidential information."
        }
      ]
    },
    {
      title: "Governing Law",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      content: [
        {
          text: "These Terms and Conditions shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions."
        },
        {
          text: "Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts in Noida, Uttar Pradesh, India."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-100">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[150px]" />
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 rounded-full border border-indigo-500/20 mb-6">
              <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-sm text-indigo-400 font-medium">Effective Date: December 2024</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Terms & Conditions
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Please read these terms carefully before using our services. By using OnenestConnect's services, you agree to these terms.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 pb-24">
        {/* Introduction */}
        <div className="mb-16 p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
          <p className="text-gray-300 leading-relaxed mb-4">
            Welcome to OnenestConnect. These Terms and Conditions ("Terms") govern your use of our website and services. By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms.
          </p>
          <p className="text-gray-300 leading-relaxed">
            If you are entering into this agreement on behalf of a company or other legal entity, you represent that you have the authority to bind such entity to these Terms.
          </p>
        </div>

        {/* Sections */}
        {sections.map((section, index) => (
          <div key={index} className="mb-12">
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30">
                {section.icon}
              </div>
              <h2 className="text-3xl font-bold text-white">{section.title}</h2>
            </div>

            {/* Section Content */}
            <div className="space-y-4 pl-0 md:pl-16">
              {section.content.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-start gap-3 group">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                  <p className="text-gray-400 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Contact Section */}
        <div className="mt-16 p-8 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm border border-indigo-500/20 rounded-2xl">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Questions About These Terms?
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            If you have any questions about these Terms and Conditions, please don't hesitate to contact us:
          </p>
          <div className="space-y-2 text-gray-400">
            <p>Email: <a href="mailto:info@onenestconnect.com" className="text-indigo-400 hover:text-indigo-300">info@onenestconnect.com</a></p>
            <p>Phone: <a href="tel:+911234567890" className="text-indigo-400 hover:text-indigo-300">+91 12345 67890</a></p>
            <p>Address: Noida, Uttar Pradesh, India</p>
          </div>
        </div>

        {/* Agreement Notice */}
        <div className="mt-8 p-6 bg-green-500/10 backdrop-blur-sm border border-green-500/20 rounded-xl">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="text-lg font-semibold text-green-400 mb-2">Agreement to Terms</h3>
              <p className="text-gray-400 leading-relaxed">
                By using our services, you acknowledge that you have read these Terms and Conditions and agree to be bound by them. If you do not agree to these terms, please discontinue use of our services immediately.
              </p>
            </div>
          </div>
        </div>

        {/* Updates Notice */}
        <div className="mt-4 p-6 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-xl">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Updates to Terms</h3>
              <p className="text-gray-400 leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after any changes indicates your acceptance of the updated Terms.
              </p>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-indigo-500/50 rounded-xl text-gray-300 hover:text-white transition-all duration-300"
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

export default Terms;