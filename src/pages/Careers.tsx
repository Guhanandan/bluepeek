import React from 'react';
import { MapPin, Clock, Users, Heart, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { jobListings } from '../data/jobs';

export default function Careers() {
  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, dental, vision, and wellness programs"
    },
    {
      icon: Zap,
      title: "Professional Growth",
      description: "Continuous learning opportunities, certifications, and conference attendance"
    },
    {
      icon: Users,
      title: "Work-Life Balance",
      description: "Flexible work arrangements, remote options, and unlimited PTO"
    },
    {
      icon: Shield,
      title: "Financial Security",
      description: "Competitive salary, 401k matching, equity options, and bonuses"
    }
  ];

  const perks = [
    "Remote-first culture",
    "Latest MacBook Pro",
    "Home office stipend",
    "Learning & development budget",
    "Annual company retreats",
    "Flexible working hours",
    "Stock options",
    "Mental health support"
  ];

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
              Join Our Team
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Build the future of technology with a team of passionate innovators. 
              We're always looking for talented individuals who share our vision.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              View Open Positions
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Work at BluePeak?
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  At BluePeak Technologies, we believe that great technology comes from great people. 
                  We've built a culture that encourages innovation, collaboration, and continuous learning.
                </p>
                <p>
                  Our team is our greatest asset. We invest in our people's growth, provide challenging 
                  projects with industry-leading clients, and maintain a work environment that promotes 
                  both professional success and personal well-being.
                </p>
                <p>
                  Whether you're a seasoned expert or just starting your career, you'll find opportunities 
                  to make a meaningful impact while working with cutting-edge technologies.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg" 
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits & Perks
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive benefits and perks to support our team members' success and well-being
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center h-full">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Additional Perks
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {perks.map((perk, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    <span className="text-gray-600">{perk}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our growing team and help shape the future of technology consulting
            </p>
          </motion.div>

          <div className="space-y-6">
            {jobListings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1 mb-6 lg:mb-0">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                          {job.department}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-6 text-gray-500 mb-4">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4" />
                          <span>{job.type}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{job.description}</p>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Requirements:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                          {job.requirements.slice(0, 3).map((req, idx) => (
                            <li key={idx}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="lg:ml-8">
                      <Button size="lg">
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Application Process
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our hiring process is designed to be thorough yet efficient, ensuring the best fit for both candidates and our team
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Apply Online", description: "Submit your application and resume through our careers portal" },
              { step: 2, title: "Phone Screening", description: "Initial conversation with our HR team to discuss your background and interests" },
              { step: 3, title: "Technical Interview", description: "In-depth discussion with our technical team about your experience and skills" },
              { step: 4, title: "Final Interview", description: "Meet with leadership team and discuss your potential role and growth opportunities" }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card glass className="p-6">
                  <div className="w-12 h-12 bg-white text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{process.title}</h3>
                  <p className="text-blue-100 text-sm">{process.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Don't See Your Role?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We're always looking for exceptional talent. Send us your resume and let us know how you'd like to contribute to our team.
            </p>
            <Button size="lg">
              Submit General Application
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}