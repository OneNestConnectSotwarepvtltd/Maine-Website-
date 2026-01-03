import React, { useState } from "react";
import { Link } from "react-router-dom";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      category: "General",
      questions: [
        {
          q: "What services does OnenestConnect provide?",
          a: "We provide comprehensive digital solutions including web development, mobile app development, UI/UX design, digital marketing, and cloud solutions. Our team specializes in creating innovative solutions tailored to your business needs."
        },
        {
          q: "Where is OnenestConnect located?",
          a: "We are based in Noida, Uttar Pradesh, India. However, we serve clients globally and have experience working with businesses across different time zones."
        },
        {
          q: "How long does it take to complete a project?",
          a: "Project timelines vary based on complexity and requirements. A simple website might take 2-4 weeks, while complex applications can take 2-6 months. We provide detailed timelines during our initial consultation."
        }
      ]
    },
    {
      category: "Services & Pricing",
      questions: [
        {
          q: "Do you offer custom development solutions?",
          a: "Yes! We specialize in custom solutions tailored to your specific business needs. Whether it's a unique web application, mobile app, or enterprise solution, we work closely with you to bring your vision to life."
        },
        {
          q: "What are your payment terms?",
          a: "We typically work with milestone-based payments. Generally, we require 30% upfront, 40% during development milestones, and 30% upon project completion. Terms can be customized based on project scope."
        },
        {
          q: "Do you provide ongoing support and maintenance?",
          a: "Absolutely! We offer comprehensive maintenance and support packages to ensure your digital products remain up-to-date, secure, and performing optimally. Our support includes bug fixes, updates, and technical assistance."
        }
      ]
    },
    {
      category: "Technical",
      questions: [
        {
          q: "What technologies do you work with?",
          a: "We work with modern tech stacks including React, Next.js, Node.js, Python, Flutter, React Native, and various cloud platforms like AWS and Azure. We choose the best technology based on your project requirements."
        },
        {
          q: "Do you build mobile apps for both iOS and Android?",
          a: "Yes, we develop mobile applications for both iOS and Android platforms. We can create native apps or use cross-platform frameworks like React Native and Flutter for efficient development."
        },
        {
          q: "Can you help migrate my existing application?",
          a: "Yes, we have extensive experience in application migration and modernization. Whether you're moving to the cloud, upgrading your tech stack, or restructuring your architecture, we can help ensure a smooth transition."
        }
      ]
    },
    {
      category: "Getting Started",
      questions: [
        {
          q: "How do I start a project with OnenestConnect?",
          a: "Simply reach out to us through our contact form, email, or phone. We'll schedule a free consultation to discuss your requirements, provide recommendations, and create a customized proposal for your project."
        },
        {
          q: "Do you sign NDAs?",
          a: "Yes, we understand the importance of confidentiality. We're happy to sign Non-Disclosure Agreements before discussing your project details to protect your intellectual property and business ideas."
        },
        {
          q: "What information do you need to provide a quote?",
          a: "To provide an accurate quote, we need details about your project goals, target audience, key features, design preferences, timeline expectations, and any specific technical requirements. The more details you provide, the more accurate our estimate will be."
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex, questionIndex) => {
    const index = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-100">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[150px]" />
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Find answers to common questions about our services, processes, and how we can help your business grow.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-5xl mx-auto px-6 pb-24">
        {faqData.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            {/* Category Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full" />
                <h2 className="text-3xl font-bold text-white">{category.category}</h2>
              </div>
            </div>

            {/* Questions */}
            <div className="space-y-4">
              {category.questions.map((item, questionIndex) => {
                const index = `${categoryIndex}-${questionIndex}`;
                const isOpen = openIndex === index;

                return (
                  <div
                    key={questionIndex}
                    className="group border border-white/10 rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                    >
                      <span className="text-lg font-semibold text-white pr-4">
                        {item.q}
                      </span>
                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center text-white transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      <div className="px-6 pb-5 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                        {item.a}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="max-w-5xl mx-auto px-6 pb-24">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-12 text-center">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our team is here to help. Get in touch with us for personalized assistance.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-105"
            >
              Contact Us
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;