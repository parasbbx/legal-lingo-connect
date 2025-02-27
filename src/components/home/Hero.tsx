
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight, GraduationCap, Users, Globe, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { t } = useLanguage();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const featureCardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.6, 
        ease: [0.165, 0.84, 0.44, 1],
        delay: 0.2 + (custom * 0.1) 
      }
    })
  };

  // Feature cards data
  const features = [
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: t('multilingual'),
      description: t('multilingualDesc')
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-primary" />,
      title: t('interactive'),
      description: t('interactiveDesc')
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: t('personalized'),
      description: t('personalizedDesc')
    },
    {
      icon: <Scale className="h-6 w-6 text-primary" />,
      title: t('legalAidFeature'),
      description: t('legalAidDesc')
    }
  ];

  return (
    <section className="pt-28 pb-20 md:py-32 overflow-hidden">
      <div className="container px-4 mx-auto">
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="legal-chip">
              Making Legal Knowledge Accessible
            </span>
          </motion.div>
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight tracking-tight"
          >
            {t('heroTitle')}
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            {t('heroSubtitle')}
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center">
            <Link to="/modules">
              <Button size="lg" className="h-12 px-8 font-medium bg-primary hover:opacity-90 rounded-full">
                {t('getStarted')}
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/resources">
              <Button 
                variant="outline" 
                size="lg" 
                className="h-12 px-8 font-medium text-primary border-primary hover:bg-primary/5 rounded-full"
              >
                {t('learnMore')}
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={featureCardVariants}
              initial="hidden"
              animate="visible"
              className="glass-card p-6 rounded-xl shadow-card hover:shadow-card-hover transition-shadow duration-300"
            >
              <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
