import { CaseStudy } from '../types';

export const caseStudies: CaseStudy[] = [
  {
    id: 'ecommerce-modernization',
    title: 'E-commerce Platform Modernization',
    client: 'RetailMax Inc.',
    industry: 'Retail',
    challenge: 'Legacy e-commerce platform causing performance issues and limiting growth',
    solution: 'Complete platform rebuild using microservices architecture with cloud-native technologies',
    results: [
      '300% improvement in page load times',
      '150% increase in conversion rates',
      '99.9% uptime achieved',
      '60% reduction in infrastructure costs'
    ],
    technologies: ['React', 'Node.js', 'AWS', 'Kubernetes', 'MongoDB', 'Redis'],
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
    category: 'Digital Transformation'
  },
  {
    id: 'healthcare-cloud-migration',
    title: 'Cloud Migration for Healthcare',
    client: 'MedCare Systems',
    industry: 'Healthcare',
    challenge: 'HIPAA-compliant cloud migration with zero downtime requirement',
    solution: 'Phased migration to AWS with comprehensive security and compliance framework',
    results: [
      '60% reduction in operational costs',
      '100% HIPAA compliance maintained',
      'Zero data loss during migration',
      '50% faster deployment cycles'
    ],
    technologies: ['AWS', 'Terraform', 'Docker', 'Kubernetes', 'PostgreSQL', 'Vault'],
    image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg',
    category: 'Cloud Solutions'
  },
  {
    id: 'ai-analytics-dashboard',
    title: 'AI-Powered Analytics Dashboard',
    client: 'FinanceFlow Corp',
    industry: 'Finance',
    challenge: 'Manual reporting processes taking weeks to generate insights',
    solution: 'Real-time analytics dashboard with machine learning-powered predictions',
    results: [
      'Real-time insights delivery',
      '90% reduction in reporting time',
      '25% improvement in forecast accuracy',
      '$2M annual cost savings'
    ],
    technologies: ['Python', 'TensorFlow', 'React', 'Apache Spark', 'Elasticsearch', 'Kibana'],
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg',
    category: 'AI & ML'
  },
  {
    id: 'manufacturing-iot',
    title: 'Smart Manufacturing IoT Solution',
    client: 'Industrial Pro Manufacturing',
    industry: 'Manufacturing',
    challenge: 'Lack of real-time visibility into production line performance',
    solution: 'IoT-enabled monitoring system with predictive maintenance capabilities',
    results: [
      '40% reduction in unexpected downtime',
      '20% increase in overall efficiency',
      '15% reduction in maintenance costs',
      'Real-time production visibility'
    ],
    technologies: ['IoT Sensors', 'Azure IoT', 'Power BI', 'Python', 'Time Series DB', 'Edge Computing'],
    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
    category: 'Digital Transformation'
  },
  {
    id: 'cybersecurity-assessment',
    title: 'Enterprise Security Overhaul',
    client: 'SecureBank Financial',
    industry: 'Banking',
    challenge: 'Multiple security vulnerabilities and compliance gaps identified',
    solution: 'Comprehensive security framework implementation with staff training',
    results: [
      '100% compliance with banking regulations',
      '95% reduction in security incidents',
      'Zero successful phishing attempts',
      'SOC 2 Type II certification achieved'
    ],
    technologies: ['SIEM Tools', 'Identity Management', 'Encryption', 'Multi-Factor Auth', 'Security Training', 'Compliance Frameworks'],
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg',
    category: 'Cybersecurity'
  },
  {
    id: 'startup-mvp-development',
    title: 'Startup MVP Development',
    client: 'TechStart Innovations',
    industry: 'Technology',
    challenge: 'Need to rapidly develop and launch a market-ready product',
    solution: 'Agile development approach with modern tech stack and DevOps practices',
    results: [
      'MVP launched in 12 weeks',
      '10,000+ users in first month',
      '$500K seed funding secured',
      '99.5% uptime maintained'
    ],
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'AWS', 'CI/CD', 'Analytics'],
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    category: 'Custom Development'
  }
];