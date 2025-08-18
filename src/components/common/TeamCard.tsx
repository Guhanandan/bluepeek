import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import { TeamMember } from '../../types';

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

export default function TeamCard({ member, index }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="text-center group">
        <div className="p-6">
          <div className="relative mx-auto mb-4 w-24 h-24 rounded-full overflow-hidden">
            <img 
              src={member.image} 
              alt={member.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
          <p className="text-blue-600 font-medium mb-4">{member.position}</p>
          <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
        </div>
      </Card>
    </motion.div>
  );
}