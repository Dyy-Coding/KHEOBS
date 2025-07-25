import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Mail, Phone } from 'lucide-react'; // added Mail, Phone icons if needed
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [language, setLanguage] = useState<'en' | 'km'>('en');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-parent')) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    {
      name: 'Research',
      href: '/research',
      dropdown: [
        { name: 'Projects', href: '/research#current' },
        { name: 'Publications', href: '/publications' },
      ],
    },
    { name: 'Resources', href: '/tools' },
    { name: 'News', href: '/news' },
    // Contact removed from here, replaced with button below
  ];

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'km' : 'en'));
  };

  // Scroll to Contact Section smoothly
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle Contact click: if already on /about scroll, else navigate then scroll
  const handleContactClick = () => {
    if (location.pathname === '/about') {
      scrollToContact();
      setIsMenuOpen(false);
    } else {
      navigate('/about', { state: { scrollToContact: true } });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-800 to-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">K</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">KHEOBS</h1>
              <p className="text-xs text-gray-600">Climate & Environment Lab</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navigation.map((item) => (
              <div key={item.name} className="relative dropdown-parent">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.name ? null : item.name
                        )
                      }
                      className={`inline-flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                        location.pathname === item.href
                          ? 'text-blue-800 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-800'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4 mt-[1px]" />
                    </button>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-20"
                      >
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-800 first:rounded-t-md last:rounded-b-md"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                      location.pathname === item.href
                        ? 'text-blue-800 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-800'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Contact as uniquely styled Button */}
            <button
              onClick={handleContactClick}
              className="inline-flex items-center px-4 py-2 rounded-md text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors whitespace-nowrap shadow-md"
              type="button"
            >
              Contact
            </button>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 text-sm font-medium bg-orange-100 text-orange-700 rounded-full hover:bg-orange-200 transition-colors"
            >
              {language === 'en' ? 'ខ្មែរ' : 'EN'}
            </button>
          </nav>

          {/* Mobile Menu & Language Toggle */}
          <div className="flex items-center space-x-3 md:hidden">
            <button
              onClick={toggleLanguage}
              className="px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium bg-orange-100 text-orange-700 rounded-full hover:bg-orange-200 transition-colors"
            >
              {language === 'en' ? 'ខ្មែរ' : 'EN'}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-orange-50"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-5 sm:w-6 h-5 sm:h-6" />
              ) : (
                <Menu className="w-5 sm:w-6 h-5 sm:h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === item.href
                      ? 'text-blue-800 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-800 hover:bg-blue-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Contact button in mobile nav with unique style */}
              <button
                onClick={() => {
                  handleContactClick();
                  setIsMenuOpen(false);
                }}
                className="w-full text-left px-4 py-2 rounded-md text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-md"
                type="button"
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
