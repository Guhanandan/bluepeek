import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CaseStudyCard from '../components/common/CaseStudyCard';
import { caseStudies } from '../data/caseStudies';
import { CaseStudy } from '../types';
import { CheckCircle } from 'lucide-react';

// Modal component
function CaseStudyModal({ caseStudy, onClose }: { caseStudy: CaseStudy | null; onClose: () => void }) {
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
            className="absolute top-4 right-4 text-white bg-black/20 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/40 transition-colors text-xl"
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
                {caseStudy.technologies.map((tech) => (
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
              {caseStudy.results.map((result, index) => (
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

export default function CaseStudies() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  const categories = ['All', ...Array.from(new Set(caseStudies.map(cs => cs.category)))];

  const filteredCaseStudies = selectedCategory === 'All' 
    ? caseStudies 
    : caseStudies.filter(cs => cs.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their technology landscape 
              and achieve remarkable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((caseStudy, index) => (
              <CaseStudyCard
                key={caseStudy.id}
                caseStudy={caseStudy}
                onClick={() => setSelectedCaseStudy(caseStudy)}
                index={index}
              />
            ))}
          </div>
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