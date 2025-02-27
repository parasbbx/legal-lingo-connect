
import { Link } from 'react-router-dom';
import { Clock, Award, BookOpen, BarChart } from 'lucide-react';
import { Module } from '@/data/modules';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

interface ModuleCardProps {
  module: Module;
  index?: number;
}

const ModuleCard = ({ module, index = 0 }: ModuleCardProps) => {
  const { t, language } = useLanguage();
  const isAvailableInCurrentLanguage = module.languages.includes(language);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'intermediate':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'advanced':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-card hover:shadow-card-hover transition-all duration-300"
    >
      <div className="relative">
        <img 
          src={module.image} 
          alt={module.title} 
          className="w-full h-40 object-cover"
        />
        {module.isNew && (
          <Badge className="absolute top-3 left-3 bg-primary">New</Badge>
        )}
        {module.isPopular && (
          <Badge className="absolute top-3 right-3 bg-amber-500 border-0">Popular</Badge>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <Badge className={`${getLevelColor(module.level)}`}>
            {module.level.charAt(0).toUpperCase() + module.level.slice(1)}
          </Badge>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-medium line-clamp-2 mb-2">{module.title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
          {module.description}
        </p>
        
        <div className="flex items-center text-sm text-muted-foreground mb-4">
          <Clock className="h-4 w-4 mr-1" />
          <span>{module.duration} min</span>
          {module.hasQuiz && (
            <span className="flex items-center ml-4">
              <Award className="h-4 w-4 mr-1" />
              {t('quizAvailable')}
            </span>
          )}
        </div>
        
        {module.progress !== undefined && (
          <div className="mb-4">
            <div className="flex items-center justify-between text-sm mb-1">
              <span>{module.progress}% Complete</span>
              {module.completed && (
                <span className="flex items-center text-green-600 dark:text-green-400">
                  <BookOpen className="h-4 w-4 mr-1" />
                  {t('moduleCompleted')}
                </span>
              )}
            </div>
            <Progress value={module.progress} className="h-2" />
          </div>
        )}
        
        {!isAvailableInCurrentLanguage && (
          <Badge variant="outline" className="mb-4 bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300 border-amber-200 dark:border-amber-800">
            Not available in {language}
          </Badge>
        )}
        
        <Link to={`/modules/${module.id}`}>
          <Button 
            className="w-full"
            disabled={!isAvailableInCurrentLanguage}
          >
            {module.progress ? t('continueModule') : t('startLearning')}
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ModuleCard;
