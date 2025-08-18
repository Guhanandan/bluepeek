import React from 'react';
import { CheckCircle } from 'lucide-react';
import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { services } from '../data/services';

export default function Services() {
  const process = [
    {
      step: 1,
      title: "Discovery & Assessment",
      description: "We analyze your current technology landscape and business objectives to understand your unique challenges and opportunities."
    },
    {
      step: 2,
      title: "Strategy Development",
      description: "Our experts create a comprehensive roadmap tailored to your specific needs, timeline, and budget requirements."
    },
    {
      step: 3,
      title: "Implementation",
      description: "We execute the solution using proven methodologies and best practices, ensuring minimal disruption to your operations."
    },
    {
      step: 4,
      title: "Support & Optimization",
      description: "Ongoing monitoring, maintenance, and optimization to ensure your systems continue to deliver maximum value."
    }
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
              Expert IT Services for Modern Businesses
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              From cloud migration to AI implementation, we provide end-to-end technology solutions 
              that drive innovation and accelerate growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => {
              const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ComponentType<any>;
              
              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  className={`grid lg:grid-cols-2 gap-16 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                        <IconComponent className="h-8 w-8 text-blue-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                    </div>
                    
                    <p className="text-lg text-gray-600 mb-8">{service.description}</p>
                    
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Technologies:</h3>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Button size="lg">Get Started</Button>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-none">
                      <div className="text-center">
                        <IconComponent className="h-20 w-20 text-blue-600 mx-auto mb-6" />
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          Expert {service.title}
                        </h3>
                        <p className="text-gray-600 mb-6">
                          Tailored solutions designed to meet your specific business requirements and technical objectives.
                        </p>
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <p className="text-sm text-gray-600 font-medium">Starting from consultation</p>
                          <p className="text-2xl font-bold text-blue-600">Contact for Pricing</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and maximum ROI
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center h-full">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss your technology needs and create a custom solution for your business.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Schedule Free Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}