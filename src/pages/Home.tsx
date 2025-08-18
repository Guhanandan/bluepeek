import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, Users, Award, TrendingUp, ArrowRight, Sparkles, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import ServiceCard from '../components/common/ServiceCard';
import CaseStudyCard from '../components/common/CaseStudyCard';
import ParticleBackground from '../components/common/ParticleBackground';
import { services } from '../data/services';
import { caseStudies } from '../data/caseStudies';

// Modal component for case study details
function CaseStudyModal({ caseStudy, onClose }: { caseStudy: any; onClose: () => void }) {
  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={onClose}>
      <motion.div 
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-64">
          <img src={caseStudy.image} alt={caseStudy.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white bg-black/20 rounded-full p-2 hover:bg-black/40 transition-colors"
          >
            ×
          </button>
          <div className="absolute bottom-6 left-6">
            <span className="inline-block bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded mb-2">
              {caseStudy.category}
            </span>
            <h2 className="text-3xl font-bold text-white">{caseStudy.title}</h2>
          </div>
        </div>
        
        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Client & Industry</h3>
              <p className="text-blue-600 font-medium text-lg">{caseStudy.client}</p>
              <p className="text-gray-600">{caseStudy.industry}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {caseStudy.technologies.map((tech: string) => (
                  <span key={tech} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Challenge</h3>
            <p className="text-gray-600 leading-relaxed">{caseStudy.challenge}</p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Solution</h3>
            <p className="text-gray-600 leading-relaxed">{caseStudy.solution}</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Results Achieved</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {caseStudy.results.map((result: string, index: number) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">{result}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Home() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '500+', label: 'Projects Completed' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '50+', label: 'Enterprise Clients' }
  ];

  const testimonials = [
    {
      quote: "BluePeak transformed our entire cloud infrastructure. The migration was seamless and the cost savings were immediate.",
      author: "Sarah Chen",
      company: "TechCorp Solutions",
      rating: 5
    },
    {
      quote: "Their AI expertise helped us implement predictive analytics that revolutionized our business operations.",
      author: "Michael Rodriguez",
      company: "DataFlow Industries",
      rating: 5
    },
    {
      quote: "Outstanding DevOps implementation. Our deployment time went from hours to minutes.",
      author: "Jennifer Walsh",
      company: "StartupX",
      rating: 5
    }
  ];

  const reasons = [
    {
      icon: Sparkles,
      title: "Innovation Excellence",
      description: "Cutting-edge solutions that push the boundaries of what's possible in technology."
    },
    {
      icon: Zap,
      title: "Lightning Fast Delivery",
      description: "Rapid implementation with zero compromise on quality or security standards."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Military-grade security protocols protecting your most valuable digital assets."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-blue-ocean text-white min-h-screen flex items-center overflow-hidden">
        <ParticleBackground particleCount={80} />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-400 rounded-full blur-2xl animate-pulse" />
        </div>
        
        {/* Peak shapes */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-900/50 to-transparent peak-clip" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
          >
            <motion.div
              className="inline-flex items-center bg-blue-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-blue-400/30"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Sparkles className="h-5 w-5 text-blue-300 mr-2" />
              <span className="text-blue-100 text-sm font-medium">Reaching New Heights in Technology</span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-black mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Transforming Businesses Through
              <span className="block text-gradient-blue bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-300 bg-clip-text text-transparent animate-gradient-shift">
                Technology Excellence
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Enterprise IT consulting, cloud solutions, and digital transformation services 
              that <span className="text-cyan-300 font-semibold">drive innovation</span> and <span className="text-blue-300 font-semibold">accelerate growth</span>.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 shadow-2xl">
                Get Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-blue-300 text-blue-100 hover:bg-blue-300 hover:text-blue-900 glass-blue">
                View Our Work
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-5xl md:text-6xl font-black text-gradient-blue mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-slate-600 font-semibold text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-500 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center bg-blue-500/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-blue-200/50">
              <span className="text-blue-600 text-sm font-semibold">PEAK PERFORMANCE SOLUTIONS</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
              <span className="text-gradient-blue">Elevate</span> Your Technology
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive IT solutions designed to <span className="text-blue-600 font-semibold">accelerate your digital transformation</span> and reach new heights of success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Button size="lg" className="shadow-peak-lg">
              <Link to="/services" className="flex items-center">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring", stiffness: 80 }}
            >
              <div className="inline-flex items-center bg-blue-500/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-blue-200/50">
                <span className="text-blue-600 text-sm font-semibold">THE BLUEPEAK ADVANTAGE</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                Why Choose <span className="text-gradient-blue">BluePeak</span> Technologies?
              </h2>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                We combine <span className="text-blue-600 font-semibold">deep technical expertise</span> with business acumen to deliver 
                solutions that drive <span className="text-blue-600 font-semibold">real results</span> for your organization.
              </p>
              
              <div className="space-y-8">
                {reasons.map((reason, index) => (
                  <motion.div
                    key={reason.title}
                    className="flex items-start space-x-6 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.15, type: "spring", stiffness: 100 }}
                    whileHover={{ x: 10 }}
                  >
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-blue-electric rounded-2xl flex items-center justify-center shadow-blue group-hover:shadow-blue-lg transition-all duration-300 group-hover:scale-110">
                      <reason.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {reason.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">{reason.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring", stiffness: 80 }}
            >
              <div className="absolute -inset-4 bg-gradient-blue-electric rounded-3xl blur-2xl opacity-20 animate-pulse" />
              <img 
                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg" 
                alt="Team collaboration"
                className="relative rounded-3xl shadow-peak-lg hover:shadow-blue-lg transition-all duration-500 hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-40 left-40 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-40 right-40 w-80 h-80 bg-indigo-500 rounded-full blur-3xl animate-float-delayed" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center bg-blue-500/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-blue-200/50">
              <span className="text-blue-600 text-sm font-semibold">PEAK ACHIEVEMENTS</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
              <span className="text-gradient-blue">Success</span> Stories
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              <span className="text-blue-600 font-semibold">Real results</span> for real businesses. See how we've helped organizations 
              <span className="text-blue-600 font-semibold">transform their technology landscape</span> and reach new heights.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {caseStudies.slice(0, 3).map((caseStudy, index) => (
              <CaseStudyCard
                key={caseStudy.id}
                caseStudy={caseStudy}
                onClick={() => setSelectedCaseStudy(caseStudy)}
                index={index}
              />
            ))}
          </div>

          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Button size="lg" className="shadow-peak-lg">
              <Link to="/case-studies" className="flex items-center">
                View All Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-blue-ocean relative overflow-hidden">
        <ParticleBackground particleCount={30} />
        
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-80 h-80 bg-cyan-400 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-300 rounded-full blur-3xl animate-float-delayed" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-white/20">
              <span className="text-blue-200 text-sm font-semibold">CLIENT TESTIMONIALS</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              What Our <span className="text-cyan-300">Clients</span> Say
            </h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what our clients have to say about 
              <span className="text-cyan-300 font-semibold"> reaching new heights</span> with us.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15, type: "spring", stiffness: 100 }}
              >
                <Card glass glow className="p-8 group">
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }} />
                    ))}
                  </div>
                  <blockquote className="text-white mb-8 text-lg leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <div>
                      <div className="font-bold text-white text-lg">{testimonial.author}</div>
                      <div className="text-cyan-300 font-medium">{testimonial.company}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-blue-deep relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-400 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-400 rounded-full blur-3xl animate-pulse" />
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
          >
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-white/20">
              <Sparkles className="h-5 w-5 text-cyan-300 mr-2" />
              <span className="text-blue-200 text-sm font-semibold">START YOUR JOURNEY TO THE PEAK</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              Ready to <span className="text-gradient-blue bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how we can help you <span className="text-cyan-300 font-semibold">achieve your technology goals</span> and 
              <span className="text-blue-300 font-semibold"> drive innovation</span> to new heights.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 shadow-2xl">
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-blue-300 text-blue-100 hover:bg-blue-300 hover:text-blue-900 glass-blue">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {selectedCaseStudy && (
        <CaseStudyModal 
          caseStudy={selectedCaseStudy} 
          onClose={() => setSelectedCaseStudy(null)} 
        />
      )}
    </div>
  );
}