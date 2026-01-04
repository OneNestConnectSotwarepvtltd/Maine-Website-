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
        ? 'bg-slate-950/80 backdrop-blur-xl shadow-2xl border-b border-blue-500/20' 
        : 'bg-slate-950 shadow-xl border-b border-slate-800'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="px-4 py-2">
  <div className="flex items-center space-x-3">
    <img
      src="/images/OneNest_logo.jpeg"
      alt="ONENEST CONNECT"
      className="h-14 w-auto object-contain"
    />

    <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
      ONENEST CONNECT
    </span>
  </div>
</Link>


          
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map(item => (
              <div 
                key={item.path}
                className="relative"
                onMouseEnter={() => item.name === 'Services' && setShowServicesDropdown(true)}
                onMouseLeave={() => item.name === 'Services' && setShowServicesDropdown(false)}
              >
                <Link
                  to={item.path}
                  className={`relative px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 group ${
                    location.pathname === item.path 
                      ? 'text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {location.pathname === item.path && (
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg animate-pulse"></span>
                  )}
                  {location.pathname !== item.path && (
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/20 group-hover:to-purple-600/20 rounded-lg transition-all duration-300"></span>
                  )}
                </Link>

                {/* Services Dropdown */}
                {item.name === 'Services' && showServicesDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-slate-900/95 backdrop-blur-xl rounded-xl shadow-2xl border border-blue-500/20 overflow-hidden z-50 animate-fadeIn">
                    <div className="py-2">
                      {services.map((service, idx) => (
                        <Link
                          key={service.id}
                          to={service.path}
                          className="block px-6 py-3 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 transition-all duration-200 font-medium"
                          style={{ animationDelay: `${idx * 50}ms` }}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:block">
            <button 
              className="group relative px-6 py-3 overflow-hidden rounded-lg font-bold"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"></span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></span>
              <span className="relative text-white">Log in</span>
            </button>
          </div>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative p-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300"
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
          <div className="lg:hidden pb-6 pt-4 space-y-2 animate-fadeIn border-t border-slate-800">
            {menuItems.map((item, idx) => (
              <div key={item.path}>
                <Link
                  to={item.path}
                  style={{ animationDelay: `${idx * 50}ms` }}
                  className={`block w-full text-left px-5 py-3.5 rounded-xl font-semibold transition-all duration-300 ${
                    location.pathname === item.path 
                      ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/25' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
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
                        className="block px-5 py-2.5 text-sm text-gray-500 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button 
              className="w-full mt-4 px-6 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
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
      `}</style>
    </nav>
  );
};

export default Navbar;