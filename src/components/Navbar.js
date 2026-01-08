import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const location = useLocation();
  
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' }
  ];

  const services = [
    { id: 1, name: 'Web Development', path: '/services/1' },
    { id: 2, name: 'Cloud Solutions', path: '/services/2' },
    { id: 3, name: 'Mobile Development', path: '/services/3' },
    { id: 4, name: 'CRM Solutions', path: '/services/4' },
    { id: 5, name: 'HRM Solutions', path: '/services/5' },
    { id: 6, name: 'UI/UX Design', path: '/services/6' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);
  
  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-200' 
        : 'bg-white shadow-lg border-b border-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Bada aur tagda */}
          <Link to="/" className="px-4 py-2 transform ">
            <img
              src="/images/OneNestPng.png"
              alt="OneNest Logo"
              className="h-[170px] w-auto object-contain drop-shadow-md"
            />
          </Link>

          
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item, index) => {
              return (
                <div 
                  key={item.path}
                  className="relative"
                  onMouseEnter={() => item.name === 'Services' && setShowServicesDropdown(true)}
                  onMouseLeave={() => item.name === 'Services' && setShowServicesDropdown(false)}
                >
                  <Link
                    to={item.path}
                    className={`relative px-5 py-2.5 font-semibold text-[17.5px] transition-all duration-300 simple-underline ${
                      location.pathname === item.path 
                        ? 'text-blue-600' 
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                  </Link>

                  {/* Services Dropdown */}
                  {item.name === 'Services' && showServicesDropdown && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50 animate-fadeIn">
                      <div className="py-2">
                        {services.map((service, idx) => (
                          <Link
                            key={service.id}
                            to={service.path}
                            className="block px-6 py-3 text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200 font-medium"
                            style={{ animationDelay: `${idx * 50}ms` }}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="hidden lg:block">
  <button 
    className="relative px-5 py-2.5 font-semibold text-[17.5px] transition-all duration-300 simple-underline text-gray-700 hover:text-blue-600"
  >
    <span className="relative z-10">Log in</span>
  </button>
</div>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative p-2.5 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2.5} 
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>
        
        {isOpen && (
          <div className="lg:hidden pb-6 pt-4 space-y-2 animate-fadeIn border-t border-gray-200">
            {menuItems.map((item, idx) => (
              <div key={item.path}>
                <Link
                  to={item.path}
                  style={{ animationDelay: `${idx * 50}ms` }}
                  className={`block w-full text-left px-5 py-3.5 font-semibold transition-all duration-300 simple-underline ${
                    location.pathname === item.path 
                      ? 'text-blue-600' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                </Link>
                
                {/* Mobile Services Submenu */}
                {item.name === 'Services' && (
                  <div className="mt-2 ml-4 space-y-1">
                    {services.map((service) => (
                      <Link
                        key={service.id}
                        to={service.path}
                        className="block px-5 py-2.5 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button 
  className="block w-full text-left px-5 py-3.5 font-semibold transition-all duration-300 simple-underline text-gray-700 hover:text-blue-600 mt-4"
>
  Log in
</button>
          </div>
        )}
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        
        /* Simple underline animation for all menu items */
        .simple-underline {
          position: relative;
        }
        .simple-underline::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: #2563eb;
          transform: translateX(-50%);
          transition: width 0.3s ease;
        }
        .simple-underline:hover::after {
          width: 70%;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;