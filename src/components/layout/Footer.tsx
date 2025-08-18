import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Mountain } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gradient-blue-deep text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-cyan-400 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-indigo-400 rounded-full blur-2xl animate-pulse" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-blue-electric rounded-xl flex items-center justify-center">
                <Mountain className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold">
                <span className="text-gradient-blue">BluePeak</span>
                <span className="ml-1 font-light">Technologies</span>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Transforming businesses through innovative technology solutions and expert consulting services.
            </p>
            <div className="flex space-x-5">
              <motion.a 
                href="#" 
                className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-300 hover:text-white hover:bg-blue-500 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-300 hover:text-white hover:bg-blue-500 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-300 hover:text-white hover:bg-blue-500 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Github className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-blue-200">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="text-blue-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Cloud Solutions</Link></li>
              <li><Link to="/services" className="text-blue-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">DevOps & Infrastructure</Link></li>
              <li><Link to="/services" className="text-blue-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Custom Development</Link></li>
              <li><Link to="/services" className="text-blue-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">AI & Machine Learning</Link></li>
              <li><Link to="/services" className="text-blue-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Cybersecurity</Link></li>
              <li><Link to="/services" className="text-blue-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Digital Transformation</Link></li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-blue-200">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-blue-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">About Us</Link></li>
              <li><Link to="/case-studies" className="text-blue-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Case Studies</Link></li>
              <li><Link to="/blog" className="text-blue-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Blog</Link></li>
              <li><Link to="/careers" className="text-blue-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Careers</Link></li>
              <li><Link to="/contact" className="text-blue-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">Contact</Link></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-blue-200">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3 group">
                <Phone className="h-4 w-4 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                <span className="text-blue-300 group-hover:text-white transition-colors duration-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail className="h-4 w-4 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                <span className="text-blue-300 group-hover:text-white transition-colors duration-300">hello@bluepeak.tech</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <MapPin className="h-4 w-4 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                <span className="text-blue-300 group-hover:text-white transition-colors duration-300">New York, NY</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-blue-800/30 mt-12 pt-8 text-center text-sm text-blue-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>&copy; {new Date().getFullYear()} BluePeak Technologies. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}