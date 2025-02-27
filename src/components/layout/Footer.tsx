
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { Book, Mail, Twitter, Facebook, Linkedin, Youtube, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const { t } = useLanguage();

  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: t('about'), href: "#" },
        { name: t('contactUs'), href: "#" },
        { name: t('privacyPolicy'), href: "#" },
        { name: t('termsOfService'), href: "#" },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Legal Documents", href: "/resources?category=documents" },
        { name: "Templates", href: "/resources?category=templates" },
        { name: "Guides", href: "/resources?category=guides" },
        { name: "FAQs", href: "/resources?category=faqs" },
      ]
    },
    {
      title: "Learning",
      links: [
        { name: "Beginner Modules", href: "/modules?level=beginner" },
        { name: "Interactive Quizzes", href: "/modules?type=quiz" },
        { name: "Video Tutorials", href: "/modules?type=video" },
        { name: "Advanced Studies", href: "/modules?level=advanced" },
      ]
    }
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand & Newsletter */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 font-display font-bold text-xl mb-4">
              <Book className="h-6 w-6 text-primary" />
              <span className="tracking-tight">Legal Literacy Connect</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-sm">
              Empowering communities through accessible legal knowledge and resources.
            </p>
            <div className="space-y-3">
              <h3 className="text-sm font-semibold mb-2">Subscribe to our newsletter</h3>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full bg-white dark:bg-gray-800"
                />
                <Button size="sm" className="bg-primary">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column, index) => (
            <div key={index} className="md:col-span-1">
              <h3 className="font-semibold text-sm mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, i) => (
                  <li key={i}>
                    <a 
                      href={link.href} 
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            {t('copyright')}
          </p>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Youtube className="h-5 w-5" />
              <span className="sr-only">YouTube</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
