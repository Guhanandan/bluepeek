import { JobListing } from '../types';

export const jobListings: JobListing[] = [
  {
    id: 'senior-cloud-architect',
    title: 'Senior Cloud Architect',
    department: 'Engineering',
    location: 'Remote / New York',
    type: 'Full-time',
    description: 'Lead cloud architecture initiatives and guide enterprise cloud transformations for our clients.',
    requirements: [
      '7+ years of cloud architecture experience',
      'AWS/Azure/GCP certifications',
      'Experience with Infrastructure as Code',
      'Strong communication and client-facing skills'
    ]
  },
  {
    id: 'devops-engineer',
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Remote / San Francisco',
    type: 'Full-time',
    description: 'Design and implement CI/CD pipelines, automation tools, and infrastructure solutions.',
    requirements: [
      '5+ years of DevOps experience',
      'Proficiency in Kubernetes and Docker',
      'Experience with monitoring and logging tools',
      'Knowledge of security best practices'
    ]
  },
  {
    id: 'full-stack-developer',
    title: 'Full Stack Developer',
    department: 'Engineering',
    location: 'Remote / Chicago',
    type: 'Full-time',
    description: 'Build modern web applications and contribute to client projects using cutting-edge technologies.',
    requirements: [
      '4+ years of full-stack development experience',
      'React, Node.js, and TypeScript proficiency',
      'Database design and API development skills',
      'Experience with agile development methodologies'
    ]
  },
  {
    id: 'cybersecurity-consultant',
    title: 'Cybersecurity Consultant',
    department: 'Security',
    location: 'Remote / Washington DC',
    type: 'Full-time',
    description: 'Conduct security assessments and implement cybersecurity frameworks for enterprise clients.',
    requirements: [
      '6+ years of cybersecurity experience',
      'Security certifications (CISSP, CISM, etc.)',
      'Experience with compliance frameworks',
      'Strong analytical and problem-solving skills'
    ]
  }
];