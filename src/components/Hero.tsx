
import React from 'react';
import { Github, Linkedin, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col justify-center relative bg-gradient-to-b from-cream to-beige/30 px-4"
    >
      <div className="container mx-auto pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <p className="text-forest text-lg mb-3 font-medium">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-forest mb-4">
              Rawda Mohamed
            </h1>
            <h2 className="text-2xl md:text-3xl font-playfair font-medium text-sage mb-6">
            Frontend Developer & UI/UX Designer 
            </h2>
            <p className="text-foreground/90 max-w-lg mb-8">
              Passionate about creating beautiful, functional, and accessible web experiences. 
              Currently pursuing a degree in Educational Technology and Computer Science.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                asChild 
                className="bg-forest hover:bg-forest/90 text-white font-medium px-6"
              >
                <a href="#projects">View Projects</a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                className="border-forest text-forest hover:bg-forest/10"
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
            
            <div className="flex gap-4 mt-8">
              <a 
                href="https://github.com/rawda-aldanasory" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-forest hover:text-sage transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/rawda-mohamed1/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-forest hover:text-sage transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center animate-fade-in" style={{animationDelay: '0.4s'}}>
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-mint rounded-full opacity-20 float-animation"></div>
              <div className="absolute inset-0 top-4 left-4 bg-sage rounded-full opacity-30 float-animation" style={{animationDelay: '0.5s'}}></div>
              {/* <div className="relative w-full h-full bg-forest rounded-full flex items-center justify-center text-white text-5xl font-playfair font-bold float-animation" style={{animationDelay: '1s'}}>
                RM
              </div> */}
              <div
  className="relative w-full h-full bg-forest rounded-full flex items-center justify-center float-animation overflow-hidden"
  style={{ animationDelay: '1s' }}
>
  <img
    src="/profile.png"
    alt="Profile"
    className="w-full h-full object-cover"
  />
</div>

            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-forest animate-bounce"
        aria-label="Scroll Down"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default Hero;
