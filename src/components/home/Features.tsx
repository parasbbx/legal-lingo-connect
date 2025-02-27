
import { useLanguage } from '@/context/LanguageContext';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Book, 
  Languages, 
  Users, 
  Lightbulb, 
  Scale, 
  Clock, 
  UserCheck, 
  PanelTop 
} from 'lucide-react';

const Features = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.165, 0.84, 0.44, 1]
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.1 * custom,
        ease: [0.165, 0.84, 0.44, 1]
      }
    })
  };

  const featureItems = [
    {
      icon: <Languages className="h-8 w-8 text-primary" />,
      title: 'Multilingual Resources',
      description: 'Access legal information in multiple languages with accurate translations and cultural context.'
    },
    {
      icon: <Book className="h-8 w-8 text-primary" />,
      title: 'Comprehensive Library',
      description: 'Extensive collection of legal documents, templates, guides, and educational resources.'
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: 'Interactive Learning',
      description: 'Engage with bite-sized modules, quizzes, and scenario-based learning experiences.'
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: 'Tailored Content',
      description: 'Personalized content for different user profiles - students, professionals, seniors.'
    },
    {
      icon: <Scale className="h-8 w-8 text-primary" />,
      title: 'Legal Aid Connections',
      description: 'Connect with legal aid services and professionals for personalized assistance.'
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: 'Real-time Updates',
      description: 'Stay informed with the latest legal developments and changes relevant to your needs.'
    },
    {
      icon: <UserCheck className="h-8 w-8 text-primary" />,
      title: 'Community Support',
      description: 'Join discussions and connect with others facing similar legal challenges.'
    },
    {
      icon: <PanelTop className="h-8 w-8 text-primary" />,
      title: 'Intuitive Interface',
      description: 'User-friendly design that makes complex legal information accessible to everyone.'
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 
            variants={titleVariants} 
            className="text-3xl md:text-4xl font-display font-bold mb-4 tracking-tight"
          >
            {t('featuresTitle')}
          </motion.h2>
          <motion.p 
            variants={titleVariants}
            className="text-lg text-muted-foreground"
          >
            {t('featuresSubtitle')}
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {featureItems.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-subtle hover:shadow-card transition-shadow duration-300"
            >
              <div className="bg-primary/10 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
