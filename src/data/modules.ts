
export interface Module {
  id: string;
  title: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: number; // in minutes
  category: string;
  image: string;
  progress?: number; // 0-100
  hasQuiz: boolean;
  completed?: boolean;
  isNew?: boolean;
  isPopular?: boolean;
  languages: string[];
}

export const modules: Module[] = [
  {
    id: 'intro-legal-rights',
    title: 'Introduction to Legal Rights',
    description: 'Learn about your fundamental legal rights and how they apply in everyday situations.',
    level: 'beginner',
    duration: 30,
    category: 'Fundamentals',
    image: '/placeholder.svg',
    progress: 75,
    hasQuiz: true,
    isPopular: true,
    languages: ['en', 'hi', 'es', 'fr', 'ar']
  },
  {
    id: 'consumer-protection',
    title: 'Consumer Protection Laws',
    description: 'Understand your rights as a consumer and the laws that protect you from unfair practices.',
    level: 'beginner',
    duration: 45,
    category: 'Consumer Rights',
    image: '/placeholder.svg',
    progress: 30,
    hasQuiz: true,
    isPopular: true,
    languages: ['en', 'hi', 'es']
  },
  {
    id: 'property-ownership',
    title: 'Property Ownership and Rights',
    description: 'Explore the legal aspects of property ownership, transfers, and dispute resolution.',
    level: 'intermediate',
    duration: 60,
    category: 'Property Law',
    image: '/placeholder.svg',
    hasQuiz: true,
    isNew: true,
    languages: ['en', 'hi']
  },
  {
    id: 'employment-law',
    title: 'Employment Law Basics',
    description: 'Learn about workplace rights, employment contracts, and dispute resolution.',
    level: 'beginner',
    duration: 40,
    category: 'Labor Law',
    image: '/placeholder.svg',
    progress: 100,
    hasQuiz: true,
    completed: true,
    languages: ['en', 'es', 'fr']
  },
  {
    id: 'family-law-essentials',
    title: 'Family Law Essentials',
    description: 'Understand marriage, divorce, child custody, and other family law matters.',
    level: 'intermediate',
    duration: 55,
    category: 'Family Law',
    image: '/placeholder.svg',
    hasQuiz: true,
    isPopular: true,
    languages: ['en', 'hi', 'ar']
  },
  {
    id: 'criminal-justice',
    title: 'Criminal Justice System',
    description: 'Overview of criminal law, procedures, and rights of the accused.',
    level: 'intermediate',
    duration: 70,
    category: 'Criminal Law',
    image: '/placeholder.svg',
    hasQuiz: true,
    languages: ['en', 'es', 'fr']
  },
  {
    id: 'contract-law',
    title: 'Contract Law Fundamentals',
    description: 'Learn how contracts work, their elements, and enforcement mechanisms.',
    level: 'intermediate',
    duration: 65,
    category: 'Business Law',
    image: '/placeholder.svg',
    hasQuiz: true,
    isNew: true,
    languages: ['en', 'fr']
  },
  {
    id: 'cyber-laws',
    title: 'Cyber Laws and Digital Rights',
    description: 'Explore the legal framework governing digital spaces, privacy, and cybercrime.',
    level: 'advanced',
    duration: 80,
    category: 'Technology Law',
    image: '/placeholder.svg',
    progress: 15,
    hasQuiz: true,
    isNew: true,
    languages: ['en']
  },
  {
    id: 'constitutional-rights',
    title: 'Constitutional Rights',
    description: 'Deep dive into constitutional law, fundamental rights, and their applications.',
    level: 'advanced',
    duration: 90,
    category: 'Constitutional Law',
    image: '/placeholder.svg',
    hasQuiz: true,
    isPopular: true,
    languages: ['en', 'hi', 'es']
  },
  {
    id: 'immigration-law',
    title: 'Immigration Law Basics',
    description: 'Understanding immigration processes, rights, and legal pathways.',
    level: 'intermediate',
    duration: 75,
    category: 'Immigration Law',
    image: '/placeholder.svg',
    hasQuiz: true,
    languages: ['en', 'es', 'ar']
  },
  {
    id: 'environmental-law',
    title: 'Environmental Law and Regulations',
    description: 'Learn about environmental protection laws and regulatory frameworks.',
    level: 'advanced',
    duration: 85,
    category: 'Environmental Law',
    image: '/placeholder.svg',
    hasQuiz: true,
    isNew: true,
    languages: ['en', 'fr']
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property Rights',
    description: 'Understand trademarks, patents, copyrights, and how to protect your creations.',
    level: 'intermediate',
    duration: 60,
    category: 'IP Law',
    image: '/placeholder.svg',
    hasQuiz: true,
    languages: ['en', 'hi', 'es']
  }
];

export const getModuleById = (id: string): Module | undefined => {
  return modules.find(module => module.id === id);
};

export const getModulesByCategory = (category: string): Module[] => {
  if (category === 'all') return modules;
  return modules.filter(module => module.category === category);
};

export const getModulesByLevel = (level: 'beginner' | 'intermediate' | 'advanced'): Module[] => {
  return modules.filter(module => module.level === level);
};

export const getPopularModules = (): Module[] => {
  return modules.filter(module => module.isPopular);
};

export const getNewModules = (): Module[] => {
  return modules.filter(module => module.isNew);
};

export const getModulesByLanguage = (language: string): Module[] => {
  return modules.filter(module => module.languages.includes(language));
};
