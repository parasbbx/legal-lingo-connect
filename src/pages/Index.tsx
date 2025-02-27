
import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  BookOpen,
  Users,
  Scale,
  Clock,
  Search,
  GraduationCap,
  MapPin,
  ArrowRight,
  Check,
  Video,
  FileText,
  BarChart3,
  PersonStanding,
  Building2,
  Briefcase
} from 'lucide-react';

// User profile types
type UserProfile = 'student' | 'professional' | 'senior';

// Mock data for modules
const learningModules = [
  {
    id: 'rights-101',
    title: 'Understanding Your Basic Rights',
    description: 'Learn about fundamental legal rights every citizen should know.',
    duration: 15,
    level: 'beginner',
    languages: ['en', 'hi', 'es'],
    forProfiles: ['student', 'professional', 'senior'],
    image: 'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'property-rights',
    title: 'Property Rights and Ownership',
    description: 'Understand property laws, ownership rights and dispute resolution.',
    duration: 20,
    level: 'intermediate',
    languages: ['en', 'hi'],
    forProfiles: ['professional', 'senior'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'consumer-protection',
    title: 'Consumer Protection Laws',
    description: 'Learn your rights as a consumer and how to address violations.',
    duration: 15,
    level: 'beginner',
    languages: ['en', 'hi', 'es', 'fr'],
    forProfiles: ['student', 'professional', 'senior'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'digital-rights',
    title: 'Digital Rights and Privacy',
    description: 'Navigate the complex world of digital privacy and data protection.',
    duration: 25,
    level: 'intermediate',
    languages: ['en', 'es'],
    forProfiles: ['student', 'professional'],
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  },
];

// Mock data for legal resources
const legalResources = [
  {
    id: 'rights-guide',
    title: 'Citizen Rights Handbook',
    type: 'guide',
    languages: ['en', 'hi', 'es', 'fr'],
    category: 'general'
  },
  {
    id: 'family-law',
    title: 'Family Law Basics',
    type: 'document',
    languages: ['en', 'hi'],
    category: 'family'
  },
  {
    id: 'rental-template',
    title: 'Rental Agreement Template',
    type: 'template',
    languages: ['en', 'hi', 'es'],
    category: 'property'
  },
  {
    id: 'rights-video',
    title: 'Know Your Rights: Video Series',
    type: 'video',
    languages: ['en', 'hi'],
    category: 'general'
  }
];

// Mock data for legal aid providers
const legalAidProviders = [
  {
    id: 'legal-aid-society',
    name: 'Legal Aid Society',
    services: ['General Consultation', 'Family Law', 'Housing'],
    location: 'New Delhi',
    availability: 'available',
    languages: ['en', 'hi'],
    contact: '+91 1234567890',
    type: 'nonprofit'
  },
  {
    id: 'womens-legal-center',
    name: 'Women\'s Legal Center',
    services: ['Domestic Violence', 'Divorce', 'Workplace Discrimination'],
    location: 'Mumbai',
    availability: 'by-appointment',
    languages: ['en', 'hi', 'mr'],
    contact: '+91 9876543210',
    type: 'specialized'
  },
  {
    id: 'student-legal-aid',
    name: 'Student Legal Aid Clinic',
    services: ['Education Rights', 'Employment', 'Consumer Issues'],
    location: 'Bangalore',
    availability: 'available',
    languages: ['en', 'hi', 'kn'],
    contact: '+91 8765432109',
    type: 'academic'
  }
];

const Index = () => {
  const { t, language, setLanguage, availableLanguages } = useLanguage();
  const [userProfile, setUserProfile] = useState<UserProfile>('student');
  const [searchLocation, setSearchLocation] = useState('');
  const [filteredModules, setFilteredModules] = useState(learningModules);
  const [filteredAidProviders, setFilteredAidProviders] = useState(legalAidProviders);

  // Filter modules based on language and user profile
  useEffect(() => {
    const filtered = learningModules.filter(module => 
      module.languages.includes(language) && 
      module.forProfiles.includes(userProfile)
    );
    setFilteredModules(filtered);
  }, [language, userProfile]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.165, 0.84, 0.44, 1] }
    }
  };

  // Function to get icon based on resource type
  const getResourceIcon = (type: string) => {
    switch(type) {
      case 'guide':
        return <BookOpen className="h-5 w-5" />;
      case 'document':
        return <FileText className="h-5 w-5" />;
      case 'template':
        return <FileText className="h-5 w-5" />;
      case 'video':
        return <Video className="h-5 w-5" />;
      default:
        return <FileText className="h-5 w-5" />;
    }
  };

  // Function to get provider icon based on type
  const getProviderIcon = (type: string) => {
    switch(type) {
      case 'nonprofit':
        return <Building2 className="h-5 w-5" />;
      case 'specialized':
        return <Briefcase className="h-5 w-5" />;
      case 'academic':
        return <GraduationCap className="h-5 w-5" />;
      default:
        return <Scale className="h-5 w-5" />;
    }
  };

  // Handle location search for legal aid
  const handleLocationSearch = () => {
    if (searchLocation.trim() === '') {
      setFilteredAidProviders(legalAidProviders);
    } else {
      const filtered = legalAidProviders.filter(provider => 
        provider.location.toLowerCase().includes(searchLocation.toLowerCase())
      );
      setFilteredAidProviders(filtered);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <motion.section 
        className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container px-4 mx-auto">
          <motion.div className="text-center max-w-3xl mx-auto mb-6" variants={itemVariants}>
            <Badge className="mb-4 bg-primary/10 text-primary border-0 rounded-full px-4 py-1">
              Legal Literacy for All
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Making Legal Knowledge Accessible
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Navigate the legal landscape with confidence through education, resources, and connections to legal aid.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center gap-4 flex-wrap mb-12">
            <Button size="lg" className="rounded-full">
              Explore Modules
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full">
              Find Legal Aid
            </Button>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex justify-center flex-wrap gap-4 md:gap-8">
            <div className="flex items-center gap-2">
              <Select value={language} onValueChange={(value) => setLanguage(value as any)}>
                <SelectTrigger className="w-[180px]">
                  <Globe className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent>
                  {availableLanguages.map((lang) => (
                    <SelectItem key={lang.code} value={lang.code}>
                      {lang.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center gap-2">
              <Select value={userProfile} onValueChange={(value) => setUserProfile(value as UserProfile)}>
                <SelectTrigger className="w-[180px]">
                  <Users className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="User Profile" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="professional">Professional</SelectItem>
                  <SelectItem value="senior">Senior Citizen</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content Tabs */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <Tabs defaultValue="modules" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="modules" className="text-sm md:text-base">
                <BookOpen className="h-4 w-4 mr-2 hidden md:inline" />
                Learning Modules
              </TabsTrigger>
              <TabsTrigger value="resources" className="text-sm md:text-base">
                <FileText className="h-4 w-4 mr-2 hidden md:inline" />
                Legal Resources
              </TabsTrigger>
              <TabsTrigger value="legalaid" className="text-sm md:text-base">
                <Scale className="h-4 w-4 mr-2 hidden md:inline" />
                Legal Aid
              </TabsTrigger>
            </TabsList>
            
            {/* Learning Modules Tab */}
            <TabsContent value="modules" className="pt-4">
              <div className="mb-8 max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Interactive Learning Modules</h2>
                <p className="text-muted-foreground">
                  Bite-sized modules with quizzes and interactive scenarios tailored to your profile and language preferences.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                {filteredModules.map((module) => (
                  <Card key={module.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <img 
                        src={module.image || 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'} 
                        alt={module.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                        <Badge className={`${module.level === 'beginner' ? 'bg-green-500' : module.level === 'intermediate' ? 'bg-blue-500' : 'bg-purple-500'} border-0`}>
                          {module.level}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader className="p-4 pb-0">
                      <CardTitle className="text-lg">{module.title}</CardTitle>
                      <CardDescription className="line-clamp-2">{module.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{module.duration} minutes</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {module.languages.map(lang => (
                          <Badge key={lang} variant="outline" className="text-xs">
                            {lang.toUpperCase()}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button className="w-full">
                        Start Learning
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              {filteredModules.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    No modules available for your current language and profile preferences.
                  </p>
                  <Button variant="outline" className="mt-4" onClick={() => setLanguage('en')}>
                    Switch to English
                  </Button>
                </div>
              )}
            </TabsContent>
            
            {/* Legal Resources Tab */}
            <TabsContent value="resources" className="pt-4">
              <div className="mb-8 max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Legal Resources Library</h2>
                <p className="text-muted-foreground">
                  Access a comprehensive collection of legal documents, guides, and templates in multiple languages.
                </p>
              </div>
              
              <div className="flex justify-center mb-8">
                <div className="relative w-full max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    type="search" 
                    placeholder="Search resources..." 
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {legalResources
                  .filter(resource => resource.languages.includes(language))
                  .map((resource) => (
                    <Card key={resource.id} className="hover:shadow-md transition-shadow">
                      <CardHeader className="flex flex-row items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                          {getResourceIcon(resource.type)}
                        </div>
                        <div>
                          <CardTitle className="text-base">{resource.title}</CardTitle>
                          <CardDescription>
                            {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                          </CardDescription>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-1">
                          <Badge variant="outline" className="text-xs">
                            {resource.category}
                          </Badge>
                          {resource.languages.map(lang => (
                            <Badge key={lang} variant="outline" className="text-xs">
                              {lang.toUpperCase()}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">View Resource</Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
              
              {legalResources.filter(resource => resource.languages.includes(language)).length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    No resources available in your selected language.
                  </p>
                  <Button variant="outline" className="mt-4" onClick={() => setLanguage('en')}>
                    Switch to English
                  </Button>
                </div>
              )}
            </TabsContent>
            
            {/* Legal Aid Tab */}
            <TabsContent value="legalaid" className="pt-4">
              <div className="mb-8 max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Legal Aid Services</h2>
                <p className="text-muted-foreground">
                  Connect with legal aid providers in your area with real-time availability updates.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-3 mb-8">
                <div className="relative flex-grow max-w-md">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    type="text" 
                    placeholder="Search by location..." 
                    className="pl-10"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                  />
                </div>
                <Button onClick={handleLocationSearch}>Find Services</Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAidProviders
                  .filter(provider => provider.languages.includes(language))
                  .map((provider) => (
                    <Card key={provider.id} className="hover:shadow-md transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge 
                            className={`${
                              provider.availability === 'available' 
                                ? 'bg-green-500 hover:bg-green-600' 
                                : 'bg-amber-500 hover:bg-amber-600'
                            } border-0 text-white`}
                          >
                            {provider.availability === 'available' ? 'Available Now' : 'By Appointment'}
                          </Badge>
                          <div className="bg-primary/10 p-2 rounded-full">
                            {getProviderIcon(provider.type)}
                          </div>
                        </div>
                        <CardTitle className="text-lg mt-2">{provider.name}</CardTitle>
                        <CardDescription className="flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {provider.location}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-3">
                          <h4 className="text-sm font-medium mb-2">Services:</h4>
                          <div className="flex flex-wrap gap-1">
                            {provider.services.map((service, i) => (
                              <Badge key={i} variant="secondary" className="text-xs">
                                {service}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium mb-2">Languages:</h4>
                          <div className="flex flex-wrap gap-1">
                            {provider.languages.map(lang => (
                              <Badge key={lang} variant="outline" className="text-xs">
                                {lang.toUpperCase()}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex-col items-stretch gap-2">
                        <Button className="w-full">Contact Provider</Button>
                        <p className="text-xs text-center text-muted-foreground">
                          {provider.contact}
                        </p>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
              
              {filteredAidProviders.filter(provider => provider.languages.includes(language)).length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    No legal aid providers found for your criteria.
                  </p>
                  <Button variant="outline" className="mt-4" onClick={() => {
                    setSearchLocation('');
                    setFilteredAidProviders(legalAidProviders);
                  }}>
                    Reset Search
                  </Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Platform Features</h2>
            <p className="text-muted-foreground">
              Our comprehensive legal literacy solution offers these key features to empower communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Multilingual Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Access legal information in multiple languages with accurate translation and cultural context.
                </p>
                <div className="flex flex-wrap gap-1 mt-4">
                  {availableLanguages.map((lang) => (
                    <Badge key={lang.code} variant="outline" className="text-xs">
                      {lang.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Interactive Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Bite-sized modules with quizzes and interactive scenarios for effective learning.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    <span className="text-sm">Engaging quizzes</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    <span className="text-sm">Real-world scenarios</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    <span className="text-sm">Progress tracking</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Personalized Content</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Content tailored for different user profiles - students, professionals, and senior citizens.
                </p>
                <div className="grid grid-cols-3 gap-2 mt-4">
                  <div className="flex flex-col items-center">
                    <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
                      <GraduationCap className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-xs mt-1">Students</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-amber-100 dark:bg-amber-900 p-2 rounded-full">
                      <Briefcase className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                    </div>
                    <span className="text-xs mt-1">Professionals</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full">
                      <PersonStanding className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-xs mt-1">Seniors</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <Scale className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Legal Aid Connections</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Connect with legal aid services and professionals for personalized assistance.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    <span className="text-sm">Directory of verified providers</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    <span className="text-sm">Location-based search</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    <span className="text-sm">Direct contact options</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Real-time Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get real-time updates on legal aid service availability and appointment options.
                </p>
                <div className="flex gap-2 mt-4">
                  <Badge className="bg-green-500 hover:bg-green-600 border-0">Available Now</Badge>
                  <Badge className="bg-amber-500 hover:bg-amber-600 border-0">By Appointment</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Progress Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Track your learning progress and achievements across all modules.
                </p>
                <div className="space-y-2 mt-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>Basic Rights</span>
                      <span>75%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-full rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>Property Law</span>
                      <span>40%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-full rounded-full" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
