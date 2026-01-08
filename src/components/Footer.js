import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialLinks = [
    
    
  ];

  const companyLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" }
  ];

  const supportLinks = [
    { name: "FAQs", path: "/faqs" },
    { name: "Contact", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms", path: "/terms" }
  ];

  return (
    <footer className="relative overflow-hidden bg-white text-gray-800 mt-32">

      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* BRAND */}
          <div className="lg:col-span-1 lg:-ml-6">
  <Link to="/" className="flex items-start mb-0 group h-16 overflow-hidden">
    <img
      src="/images/OneNestPng - Copy.png"
      alt="ONENEST"
      className="w-auto h-full object-contain object-left group-hover:scale-110 transition-transform"
    />
  </Link>

  <p className="text-gray-600 leading-relaxed mb-6 mt-2">
    OneNest Connect is an IT & Digital Solutions company helping businesses grow through technology. Founded with a vision to simplify digital. we provide complete solutions including websites, mobile apps, CRM/HRMS, UI/UX design.
  </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-gray-100 hover:bg-gradient-to-tr hover:from-blue-500 hover:to-indigo-500 flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30 text-xl font-bold"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* COMPANY LINKS */}
          <div>
            <h4 className="text-gray-800 font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full" />
              Company
            </h4>
            <ul className="space-y-4">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-600 relative inline-block cursor-pointer hover:text-blue-600 transition-all duration-300 hover:translate-x-2 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-blue-500 after:to-indigo-500 hover:after:w-full after:transition-all after:duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SUPPORT LINKS */}
          <div>
            <h4 className="text-gray-800 font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full" />
              Support
            </h4>
            <ul className="space-y-4">
              {supportLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-600 relative inline-block cursor-pointer hover:text-blue-600 transition-all duration-300 hover:translate-x-2 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-indigo-500 after:to-purple-500 hover:after:w-full after:transition-all after:duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-gray-800 font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
              Contact
            </h4>
            <ul className="space-y-5">
              {/* Phone */}
              <li className="flex items-start gap-4 group">
                <div className="w-11 h-11 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <a 
                  href="tel:+918588942008"
                  className="text-gray-600 group-hover:text-blue-600 transition-colors"
                >
                  +91 8588942008
                </a>
              </li>

              {/* Email */}
              <li className="flex items-start gap-4 group">
                <div className="w-11 h-11 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <a 
                  href="mailto:info@onenestconnect.in"
                  className="text-gray-600 group-hover:text-blue-600 transition-colors break-all"
                >
                  info@onenestconnect.in
                </a>
              </li>

              {/* Address */}
              <li className="flex items-start gap-4 group">
                <div className="w-11 h-11 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-5 h-5 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <span className="text-gray-600 group-hover:text-blue-600 transition-colors">
                  Sector 44, Near Botanical Garden Metro Station, Noida, Uttar Pradesh – 201301
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-20 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Created with OneNest Connect Software
            </p>
            
            {/* Bottom Social Links */}
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61570886581649"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg bg-gray-100 hover:bg-blue-600 flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* X (Twitter) */}
              <a
                href="https://x.com/OnenestSoftware"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg bg-gray-100 hover:bg-black flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="X (Twitter)"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/onenest_software?igsh=ajc1ZDNpbTZtODg0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg bg-gray-100 hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/one-nest-connect-software-pvt-ltd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg bg-gray-100 hover:bg-blue-700 flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {/* Medium */}
              <a
                href="https://medium.com/@info_7699/about"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg bg-gray-100 hover:bg-green-600 flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Medium"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;