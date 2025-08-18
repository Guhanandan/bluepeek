import React from 'react';
import { ArrowRight, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import { CaseStudy } from '../../types';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  onClick: () => void;
  index: number;
}

export default function CaseStudyCard({ caseStudy, onClick, index }: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.15, type: "spring", stiffness: 100 }}
    >
      <Card className="group cursor-pointer overflow-hidden hover-lift" peak glow onClick={onClick}>
        <div className="relative h-56 overflow-hidden">
          <img 
            src={caseStudy.image} 
            alt={caseStudy.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute top-4 right-4">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Award className="h-5 w-5 text-white" />
            </div>
          </div>
          <div className="absolute bottom-6 left-6 right-6">
            <span className="inline-block bg-blue-500 text-white text-sm font-semibold px-3 py-1.5 rounded-full mb-3">
              {caseStudy.category}
            </span>
            <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">{caseStudy.title}</h3>
          </div>
        </div>
        
        <div className="p-8">
          <p className="text-blue-600 font-bold mb-3 text-lg">{caseStudy.client}</p>
          <p className="text-slate-500 font-medium mb-4">{caseStudy.industry}</p>
          <p className="text-slate-600 mb-6 line-clamp-2 leading-relaxed">{caseStudy.challenge}</p>
          
          <div className="flex items-center justify-between">
            <div className="text-blue-600 font-semibold">
              View Success Story
            </div>
            <ArrowRight className="h-5 w-5 text-blue-600 group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        </div>
      </Card>
    </motion.div>
  );
}