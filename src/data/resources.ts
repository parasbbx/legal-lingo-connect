
export interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'document' | 'guide' | 'template' | 'video' | 'infographic';
  url: string;
  thumbnail: string;
  languages: string[];
  tags: string[];
  downloadable: boolean;
  popular?: boolean;
}

export const resources: Resource[] = [
  {
    id: 'consumer-rights-guide',
    title: 'Consumer Rights Guide',
    description: 'A comprehensive guide to understanding your rights as a consumer and how to address violations.',
    category: 'Consumer Rights',
    type: 'guide',
    url: '#',
    thumbnail: '/placeholder.svg',
    languages: ['en', 'hi', 'es'],
    tags: ['consumer protection', 'refunds', 'warranties'],
    downloadable: true,
    popular: true
  },
  {
    id: 'rental-agreement-template',
    title: 'Rental Agreement Template',
    description: 'Standard rental agreement template that can be customized for residential property leases.',
    category: 'Property Law',
    type: 'template',
    url: '#',
    thumbnail: '/placeholder.svg',
    languages: ['en', 'hi'],
    tags: ['rental', 'lease', 'property'],
    downloadable: true,
    popular: true
  },
  {
    id: 'divorce-process-guide',
    title: 'Divorce Process Explained',
    description: 'Step-by-step guide to the divorce process, including legal requirements and considerations.',
    category: 'Family Law',
    type: 'guide',
    url: '#',
    thumbnail: '/placeholder.svg',
    languages: ['en', 'hi', 'ar'],
    tags: ['divorce', 'family law', 'legal separation'],
    downloadable: true
  },
  {
    id: 'employment-contract-template',
    title: 'Employment Contract Template',
    description: 'Standard employment contract template with customizable terms and conditions.',
    category: 'Labor Law',
    type: 'template',
    url: '#',
    thumbnail: '/placeholder.svg',
    languages: ['en', 'es', 'fr'],
    tags: ['employment', 'contract', 'workplace'],
    downloadable: true,
    popular: true
  },
  {
    id: 'criminal-procedure-overview',
    title: 'Criminal Procedure Overview',
    description: 'An infographic explaining the stages of criminal procedure from arrest to trial.',
    category: 'Criminal Law',
    type: 'infographic',
    url: '#',
    thumbnail: '/placeholder.svg',
    languages: ['en', 'es'],
    tags: ['criminal law', 'procedure', 'rights'],
    downloadable: true
  },
  {
    id: 'will-testament-template',
    title: 'Will and Testament Template',
    description: 'Template for creating a legally valid will and testament document.',
    category: 'Family Law',
    type: 'template',
    url: '#',
    thumbnail: '/placeholder.svg',
    languages: ['en', 'hi', 'fr'],
    tags: ['will', 'estate planning', 'inheritance'],
    downloadable: true
  },
  {
    id: 'small-claims-guide',
    title: 'Small Claims Court Guide',
    description: 'How to navigate the small claims court process for minor disputes and claims.',
    category: 'Civil Law',
    type: 'guide',
    url: '#',
    thumbnail: '/placeholder.svg',
    languages: ['en', 'es'],
    tags: ['small claims', 'court', 'dispute'],
    downloadable: true
  },
  {
    id: 'intellectual-property-explainer',
    title: 'Understanding Intellectual Property',
    description: 'Video explaining different types of intellectual property protection and their applications.',
    category: 'IP Law',
    type: 'video',
    url: '#',
    thumbnail: '/placeholder.svg',
    languages: ['en'],
    tags: ['intellectual property', 'copyright', 'trademark'],
    downloadable: false,
    popular: true
  },
  {
    id: 'child-custody-rights',
    title: 'Child Custody Rights Document',
    description: 'Document explaining parental rights and considerations in child custody cases.',
    category: 'Family Law',
    type: 'document',
    url: '#',
    thumbnail: '/placeholder.svg',
    languages: ['en', 'hi', 'es', 'fr'],
    tags: ['child custody', 'parental rights', 'family law'],
    downloadable: true
  },
  {
    id: 'property-tax-guide',
    title: 'Property Tax Guide',
    description: 'Guide to understanding property tax calculations, exemptions, and appeals.',
    category: 'Property Law',
    type: 'guide',
    url: '#',
    thumbnail: '/placeholder.svg',
    languages: ['en', 'hi'],
    tags: ['property tax', 'real estate', 'tax exemption'],
    downloadable: true
  },
  {
    id: 'online-privacy-rights',
    title: 'Digital Privacy Rights',
    description: 'Understanding your privacy rights online and how to protect your digital information.',
    category: 'Technology Law',
    type: 'document',
    url: '#',
    thumbnail: '/placeholder.svg',
    languages: ['en', 'fr'],
    tags: ['privacy', 'digital rights', 'data protection'],
    downloadable: true,
    popular: true
  },
  {
    id: 'workers-compensation-guide',
    title: 'Workers Compensation Guide',
    description: 'Guide to understanding workers compensation claims and employee rights after workplace injuries.',
    category: 'Labor Law',
    type: 'guide',
    url: '#',
    thumbnail: '/placeholder.svg',
    languages: ['en', 'es', 'fr'],
    tags: ['workers comp', 'workplace injury', 'employee rights'],
    downloadable: true
  }
];

export const getResourceById = (id: string): Resource | undefined => {
  return resources.find(resource => resource.id === id);
};

export const getResourcesByCategory = (category: string): Resource[] => {
  if (category === 'all') return resources;
  return resources.filter(resource => resource.category === category);
};

export const getResourcesByType = (type: string): Resource[] => {
  return resources.filter(resource => resource.type === type);
};

export const getPopularResources = (): Resource[] => {
  return resources.filter(resource => resource.popular);
};

export const getResourcesByLanguage = (language: string): Resource[] => {
  return resources.filter(resource => resource.languages.includes(language));
};

export const getResourcesByTags = (tag: string): Resource[] => {
  return resources.filter(resource => resource.tags.includes(tag));
};

export const getDownloadableResources = (): Resource[] => {
  return resources.filter(resource => resource.downloadable);
};
