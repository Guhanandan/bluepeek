import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mountain } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'glass-blue-dark shadow-peak' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div 
              className="w-10 h-10 bg-gradient-blue-electric rounded-xl flex items-center justify-center"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Mountain className="h-6 w-6 text-white" />
            </motion.div>
            <div className="text-2xl font-bold">
              <span className="text-gradient-blue">BluePeak</span>
              <span className={`ml-1 font-light transition-colors duration-300 ${isScrolled ? 'text-slate-800' : 'text-white'}`}>
                Technologies
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navigation.map((item) => (
              <motion.div key={item.name} whileHover={{ y: -2 }}>
                <Link
                to={item.href}
                className={`text-sm font-medium transition-all duration-300 relative group ${
                  location.pathname === item.href
                    ? 'text-blue-400'
                    : isScrolled
                    ? 'text-slate-700 hover:text-blue-500'
                    : 'text-white hover:text-blue-300'
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-blue-electric transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
            <Button size="sm" className="animate-pulse-blue">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-blue-500/20 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className={`h-6 w-6 transition-colors duration-300 ${isScrolled ? 'text-slate-800' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 transition-colors duration-300 ${isScrolled ? 'text-slate-800' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden glass-blue-dark rounded-2xl shadow-peak my-4 overflow-hidden"
            >
              <div className="px-4 py-2 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                      location.pathname === item.href
                        ? 'text-blue-400 bg-blue-500/20'
                        : 'text-white hover:text-blue-300 hover:bg-blue-500/10'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-2">
                  <Button size="sm" className="w-full animate-pulse-blue">Get Started</Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}