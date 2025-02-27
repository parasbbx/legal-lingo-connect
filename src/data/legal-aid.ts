
export interface LegalAidProvider {
  id: string;
  name: string;
  description: string;
  services: string[];
  address: string;
  city: string;
  state: string;
  country: string;
  phone: string;
  email: string;
  website: string;
  hours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
  availability: 'available' | 'appointment' | 'unavailable';
  consultationType: 'virtual' | 'in-person' | 'both';
  cost: 'free' | 'sliding-scale' | 'fixed-fee';
  languages: string[];
  specializations: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  rating?: number;
  reviews?: number;
}

export const legalAidProviders: LegalAidProvider[] = [
  {
    id: 'legal-aid-society',
    name: 'Legal Aid Society',
    description: 'Non-profit organization providing free legal services to low-income individuals.',
    services: ['Criminal Defense', 'Housing Issues', 'Family Law', 'Immigration'],
    address: '123 Justice Ave',
    city: 'New York',
    state: 'NY',
    country: 'USA',
    phone: '+1 (555) 123-4567',
    email: 'info@legalaidsociety.org',
    website: 'https://www.legalaidsociety.org',
    hours: {
      monday: '9:00 AM - 5:00 PM',
      tuesday: '9:00 AM - 5:00 PM',
      wednesday: '9:00 AM - 5:00 PM',
      thursday: '9:00 AM - 5:00 PM',
      friday: '9:00 AM - 5:00 PM',
      saturday: 'Closed',
      sunday: 'Closed'
    },
    availability: 'available',
    consultationType: 'both',
    cost: 'free',
    languages: ['en', 'es', 'zh'],
    specializations: ['Low-income assistance', 'Public benefits', 'Housing discrimination'],
    coordinates: {
      lat: 40.7128,
      lng: -74.0060
    },
    rating: 4.7,
    reviews: 156
  },
  {
    id: 'community-justice-center',
    name: 'Community Justice Center',
    description: 'Community-based organization offering legal guidance and representation.',
    services: ['Consumer Protection', 'Senior Services', 'Disability Rights', 'Tenant Rights'],
    address: '456 Equality Blvd',
    city: 'Los Angeles',
    state: 'CA',
    country: 'USA',
    phone: '+1 (555) 987-6543',
    email: 'help@communityjustice.org',
    website: 'https://www.communityjustice.org',
    hours: {
      monday: '8:30 AM - 6:00 PM',
      tuesday: '8:30 AM - 6:00 PM',
      wednesday: '8:30 AM - 6:00 PM',
      thursday: '8:30 AM - 6:00 PM',
      friday: '8:30 AM - 5:00 PM',
      saturday: '10:00 AM - 2:00 PM',
      sunday: 'Closed'
    },
    availability: 'available',
    consultationType: 'both',
    cost: 'free',
    languages: ['en', 'es', 'ko', 'vi'],
    specializations: ['Community advocacy', 'Consumer rights', 'Elder law'],
    coordinates: {
      lat: 34.0522,
      lng: -118.2437
    },
    rating: 4.5,
    reviews: 89
  },
  {
    id: 'public-defenders-office',
    name: 'Public Defender\'s Office',
    description: 'Government office providing legal representation for criminal cases.',
    services: ['Criminal Defense', 'Juvenile Cases', 'Appeals', 'Record Expungement'],
    address: '789 Liberty Street',
    city: 'Chicago',
    state: 'IL',
    country: 'USA',
    phone: '+1 (555) 456-7890',
    email: 'info@publicdefender.gov',
    website: 'https://www.publicdefender.gov',
    hours: {
      monday: '9:00 AM - 5:00 PM',
      tuesday: '9:00 AM - 5:00 PM',
      wednesday: '9:00 AM - 5:00 PM',
      thursday: '9:00 AM - 5:00 PM',
      friday: '9:00 AM - 5:00 PM',
      saturday: 'Closed',
      sunday: 'Closed'
    },
    availability: 'appointment',
    consultationType: 'in-person',
    cost: 'free',
    languages: ['en', 'es', 'pl'],
    specializations: ['Criminal law', 'Constitutional rights', 'Post-conviction relief'],
    coordinates: {
      lat: 41.8781,
      lng: -87.6298
    },
    rating: 4.2,
    reviews: 103
  },
  {
    id: 'womens-legal-center',
    name: 'Women\'s Legal Center',
    description: 'Legal services focused on women\'s rights and gender-based issues.',
    services: ['Domestic Violence', 'Divorce', 'Child Custody', 'Workplace Discrimination'],
    address: '321 Empowerment Drive',
    city: 'San Francisco',
    state: 'CA',
    country: 'USA',
    phone: '+1 (555) 789-0123',
    email: 'help@womenslegalcenter.org',
    website: 'https://www.womenslegalcenter.org',
    hours: {
      monday: '9:00 AM - 5:30 PM',
      tuesday: '9:00 AM - 5:30 PM',
      wednesday: '9:00 AM - 5:30 PM',
      thursday: '9:00 AM - 5:30 PM',
      friday: '9:00 AM - 5:30 PM',
      saturday: 'By appointment',
      sunday: 'Closed'
    },
    availability: 'available',
    consultationType: 'both',
    cost: 'sliding-scale',
    languages: ['en', 'es', 'zh', 'ru'],
    specializations: ['Gender discrimination', 'Domestic violence', 'Family law', 'Employment law'],
    coordinates: {
      lat: 37.7749,
      lng: -122.4194
    },
    rating: 4.8,
    reviews: 212
  },
  {
    id: 'immigrant-rights-clinic',
    name: 'Immigrant Rights Legal Clinic',
    description: 'Legal services specifically for immigration issues and immigrant rights.',
    services: ['Visa Applications', 'Asylum', 'Deportation Defense', 'Naturalization'],
    address: '567 Welcome Way',
    city: 'Miami',
    state: 'FL',
    country: 'USA',
    phone: '+1 (555) 234-5678',
    email: 'contact@immigrantrights.org',
    website: 'https://www.immigrantrights.org',
    hours: {
      monday: '8:00 AM - 6:00 PM',
      tuesday: '8:00 AM - 6:00 PM',
      wednesday: '8:00 AM - 6:00 PM',
      thursday: '8:00 AM - 6:00 PM',
      friday: '8:00 AM - 6:00 PM',
      saturday: '10:00 AM - 3:00 PM',
      sunday: 'Closed'
    },
    availability: 'appointment',
    consultationType: 'both',
    cost: 'sliding-scale',
    languages: ['en', 'es', 'ht', 'pt'],
    specializations: ['Immigration law', 'Refugee status', 'DACA', 'Family reunification'],
    coordinates: {
      lat: 25.7617,
      lng: -80.1918
    },
    rating: 4.6,
    reviews: 175
  },
  {
    id: 'elder-law-center',
    name: 'Elder Law Center',
    description: 'Legal services specialized for senior citizens and elder care issues.',
    services: ['Estate Planning', 'Medicare/Medicaid', 'Elder Abuse', 'Guardianship'],
    address: '890 Wisdom Court',
    city: 'Phoenix',
    state: 'AZ',
    country: 'USA',
    phone: '+1 (555) 345-6789',
    email: 'info@elderlawcenter.org',
    website: 'https://www.elderlawcenter.org',
    hours: {
      monday: '9:00 AM - 4:00 PM',
      tuesday: '9:00 AM - 4:00 PM',
      wednesday: '9:00 AM - 4:00 PM',
      thursday: '9:00 AM - 4:00 PM',
      friday: '9:00 AM - 4:00 PM',
      saturday: 'Closed',
      sunday: 'Closed'
    },
    availability: 'appointment',
    consultationType: 'both',
    cost: 'sliding-scale',
    languages: ['en', 'es'],
    specializations: ['Elder law', 'Estate planning', 'Healthcare directives', 'Long-term care'],
    coordinates: {
      lat: 33.4484,
      lng: -112.0740
    },
    rating: 4.9,
    reviews: 87
  },
  {
    id: 'tenant-rights-clinic',
    name: 'Tenant Rights Legal Clinic',
    description: 'Legal assistance for tenants dealing with housing issues and landlord disputes.',
    services: ['Eviction Defense', 'Habitability Issues', 'Security Deposits', 'Tenant Organizing'],
    address: '432 Housing Street',
    city: 'Seattle',
    state: 'WA',
    country: 'USA',
    phone: '+1 (555) 876-5432',
    email: 'help@tenantrightslaw.org',
    website: 'https://www.tenantrightslaw.org',
    hours: {
      monday: '9:30 AM - 5:30 PM',
      tuesday: '9:30 AM - 5:30 PM',
      wednesday: '9:30 AM - 5:30 PM',
      thursday: '9:30 AM - 5:30 PM',
      friday: '9:30 AM - 5:30 PM',
      saturday: 'By appointment',
      sunday: 'Closed'
    },
    availability: 'available',
    consultationType: 'both',
    cost: 'free',
    languages: ['en', 'es', 'so', 'am'],
    specializations: ['Housing law', 'Tenant rights', 'Fair housing', 'Rent control'],
    coordinates: {
      lat: 47.6062,
      lng: -122.3321
    },
    rating: 4.7,
    reviews: 143
  },
  {
    id: 'disability-rights-legal-center',
    name: 'Disability Rights Legal Center',
    description: 'Legal services focused on disability rights and accessibility issues.',
    services: ['ADA Compliance', 'Education Access', 'Employment Discrimination', 'Healthcare Access'],
    address: '765 Access Avenue',
    city: 'Boston',
    state: 'MA',
    country: 'USA',
    phone: '+1 (555) 987-1234',
    email: 'info@disabilityrights.org',
    website: 'https://www.disabilityrights.org',
    hours: {
      monday: '9:00 AM - 5:00 PM',
      tuesday: '9:00 AM - 5:00 PM',
      wednesday: '9:00 AM - 5:00 PM',
      thursday: '9:00 AM - 5:00 PM',
      friday: '9:00 AM - 5:00 PM',
      saturday: 'Closed',
      sunday: 'Closed'
    },
    availability: 'appointment',
    consultationType: 'both',
    cost: 'free',
    languages: ['en', 'es', 'asl'],
    specializations: ['Disability law', 'Accessibility rights', 'Discrimination claims', 'Education accommodation'],
    coordinates: {
      lat: 42.3601,
      lng: -71.0589
    },
    rating: 4.8,
    reviews: 96
  }
];

export const getLegalAidById = (id: string): LegalAidProvider | undefined => {
  return legalAidProviders.find(provider => provider.id === id);
};

export const getLegalAidByCity = (city: string): LegalAidProvider[] => {
  return legalAidProviders.filter(provider => 
    provider.city.toLowerCase() === city.toLowerCase()
  );
};

export const getLegalAidByService = (service: string): LegalAidProvider[] => {
  return legalAidProviders.filter(provider => 
    provider.services.some(s => s.toLowerCase().includes(service.toLowerCase()))
  );
};

export const getLegalAidByAvailability = (availability: 'available' | 'appointment'): LegalAidProvider[] => {
  return legalAidProviders.filter(provider => provider.availability === availability);
};

export const getLegalAidByConsultationType = (type: 'virtual' | 'in-person' | 'both'): LegalAidProvider[] => {
  return legalAidProviders.filter(provider => 
    provider.consultationType === type || provider.consultationType === 'both'
  );
};

export const getLegalAidByCost = (cost: 'free' | 'sliding-scale' | 'fixed-fee'): LegalAidProvider[] => {
  return legalAidProviders.filter(provider => provider.cost === cost);
};

export const getLegalAidByLanguage = (language: string): LegalAidProvider[] => {
  return legalAidProviders.filter(provider => 
    provider.languages.includes(language)
  );
};
