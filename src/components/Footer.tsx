
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-forest text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-white/80">
              &copy; {currentYear} Rawda Mohamed. All rights reserved.
            </p>
          </div>
          
          <div className="flex gap-6">
            <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
            <a href="#skills" className="text-white/80 hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="text-white/80 hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
          </div>
          
          <a 
            href="#hero" 
            className="mt-6 md:mt-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={20} className="text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
