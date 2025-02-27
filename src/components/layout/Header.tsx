
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Book, Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguage } from '@/context/LanguageContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t, language, setLanguage, availableLanguages } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-subtle py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link 
          to="/" 
          className="flex items-center space-x-2 font-display font-bold text-xl transition-opacity hover:opacity-90"
        >
          <Book className="h-6 w-6 text-primary" />
          <span className="tracking-tight">Legal Literacy Connect</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`font-medium text-sm transition-colors hover:text-primary ${
              isActive('/') ? 'text-primary' : 'text-foreground/80'
            }`}
          >
            {t('home')}
          </Link>
          <Link 
            to="/resources" 
            className={`font-medium text-sm transition-colors hover:text-primary ${
              isActive('/resources') ? 'text-primary' : 'text-foreground/80'
            }`}
          >
            {t('resources')}
          </Link>
          <Link 
            to="/modules" 
            className={`font-medium text-sm transition-colors hover:text-primary ${
              isActive('/modules') ? 'text-primary' : 'text-foreground/80'
            }`}
          >
            {t('modules')}
          </Link>
          <Link 
            to="/legal-aid" 
            className={`font-medium text-sm transition-colors hover:text-primary ${
              isActive('/legal-aid') ? 'text-primary' : 'text-foreground/80'
            }`}
          >
            {t('legalAid')}
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                <Globe className="h-4 w-4" />
                <span className="capitalize">{language}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[150px]">
              {availableLanguages.map((lang) => (
                <DropdownMenuItem 
                  key={lang.code}
                  className={`cursor-pointer ${language === lang.code ? 'font-medium bg-muted' : ''}`}
                  onClick={() => setLanguage(lang.code)}
                >
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="mr-2">
                <Globe className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[150px]">
              {availableLanguages.map((lang) => (
                <DropdownMenuItem 
                  key={lang.code}
                  className={`cursor-pointer ${language === lang.code ? 'font-medium bg-muted' : ''}`}
                  onClick={() => setLanguage(lang.code)}
                >
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md">
          <nav className="container mx-auto py-4 flex flex-col space-y-4 px-4">
            <Link 
              to="/" 
              className={`font-medium text-lg transition-colors ${
                isActive('/') ? 'text-primary' : 'text-foreground/80'
              }`}
            >
              {t('home')}
            </Link>
            <Link 
              to="/resources" 
              className={`font-medium text-lg transition-colors ${
                isActive('/resources') ? 'text-primary' : 'text-foreground/80'
              }`}
            >
              {t('resources')}
            </Link>
            <Link 
              to="/modules" 
              className={`font-medium text-lg transition-colors ${
                isActive('/modules') ? 'text-primary' : 'text-foreground/80'
              }`}
            >
              {t('modules')}
            </Link>
            <Link 
              to="/legal-aid" 
              className={`font-medium text-lg transition-colors ${
                isActive('/legal-aid') ? 'text-primary' : 'text-foreground/80'
              }`}
            >
              {t('legalAid')}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
