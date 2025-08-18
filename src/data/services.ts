import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    description: 'Migrate, modernize, and optimize your cloud infrastructure with AWS, Azure, and GCP expertise',
    icon: 'Cloud',
    features: [
      'Cloud Migration & Strategy',
      'Infrastructure Architecture',
      'Multi-Cloud Management',
      'Cost Optimization',
      'Security & Compliance',
      'Disaster Recovery'
    ],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform']
  },
  {
    id: 'devops',
    title: 'DevOps & Infrastructure',
    description: 'Accelerate deployment cycles with automated CI/CD pipelines and infrastructure as code',
    icon: 'Settings',
    features: [
      'CI/CD Pipeline Setup',
      'Infrastructure as Code',
      'Monitoring & Alerting',
      'Automated Testing',
      'Container Orchestration',
      'Performance Optimization'
    ],
    technologies: ['Jenkins', 'GitLab CI', 'Ansible', 'Prometheus', 'Grafana', 'ELK Stack']
  },
  {
    id: 'custom-development',
    title: 'Custom Software Development',
    description: 'Build scalable web and mobile applications tailored to your business needs',
    icon: 'Code',
    features: [
      'Web Application Development',
      'Mobile App Development',
      'Enterprise Software',
      'API Development',
      'Database Design',
      'Legacy System Modernization'
    ],
    technologies: ['React', 'Node.js', 'Python', 'Java', 'React Native', 'PostgreSQL']
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description: 'Harness the power of artificial intelligence to drive data-driven decision making',
    icon: 'Brain',
    features: [
      'Data Analytics & Insights',
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
      'AI Strategy Consulting'
    ],
    technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'Apache Spark', 'MLflow']
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Protect your digital assets with comprehensive security assessments and solutions',
    icon: 'Shield',
    features: [
      'Security Audits & Assessments',
      'Compliance Implementation',
      'Threat Detection',
      'Identity Management',
      'Security Training',
      'Incident Response'
    ],
    technologies: ['OWASP', 'NIST Framework', 'ISO 27001', 'SOC 2', 'GDPR', 'HIPAA']
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    description: 'Transform legacy systems into modern, efficient digital platforms',
    icon: 'Zap',
    features: [
      'Process Automation',
      'System Modernization',
      'Digital Strategy',
      'Change Management',
      'Technology Roadmapping',
      'ROI Analysis'
    ],
    technologies: ['RPA Tools', 'Low-Code Platforms', 'Microservices', 'APIs', 'Cloud Native', 'Analytics']
  }
];