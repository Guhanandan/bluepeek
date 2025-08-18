import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import { Service } from '../../types';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ComponentType<any>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.15, type: "spring", stiffness: 100 }}
    >
      <Card className="p-8 h-full group hover-lift" peak glow>
        <div className="relative mb-6">
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-blue-electric rounded-2xl mb-4 group-hover:shadow-blue-lg transition-all duration-500 group-hover:scale-110">
            <IconComponent className="h-8 w-8 text-white" />
          </div>
          <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Sparkles className="h-5 w-5 text-blue-400 animate-pulse" />
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-slate-600 mb-8 line-clamp-3 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
          {service.description}
        </p>
        
        <div className="mt-auto">
          <Link 
            to={`/services#${service.id}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-all duration-300 group-hover:translate-x-2"
          >
            Learn More
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </Card>
    </motion.div>
  );
}