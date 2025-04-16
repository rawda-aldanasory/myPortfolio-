import React from 'react'; 
import { Mail, MessageSquare, Github, Linkedin } from 'lucide-react'; 
import { Button } from '@/components/ui/button'; 
import { Input } from '@/components/ui/input'; 
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-beige/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-forest mb-2">Get In Touch</h2>
          <div className="w-24 h-1 bg-sage mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-playfair font-semibold text-forest mb-6">Let's Connect</h3>
            <p className="text-foreground/90 mb-8">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
              I'll try my best to get back to you!
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center text-forest">
                  <Mail size={18} />
                </div>
                <span className="text-foreground/90">rawdaaldanasory2004@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center text-forest">
                  <MessageSquare size={18} />
                </div>
                <span className="text-foreground/90">Open to remote opportunities</span>
              </div>
            </div>

            <div className="flex gap-4">
              <a 
                href="https://github.com/rawda-aldanasory" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-forest text-white flex items-center justify-center hover:bg-sage transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/rawda-mohamed1/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-forest text-white flex items-center justify-center hover:bg-sage transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-sage/20 animate-on-scroll" style={{animationDelay: '0.2s'}}>
            <form action="mailto:rawdaaldanasory@gmail.com" method="get">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-foreground/90 mb-1 block">
                    Name
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Your Name" 
                    required 
                    className="border-sage/30 focus-visible:ring-forest"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-foreground/90 mb-1 block">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@example.com" 
                    required 
                    className="border-sage/30 focus-visible:ring-forest"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="text-sm mt-5 font-medium text-foreground/90 mb-1 block">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  placeholder="What is this about?" 
                  required 
                  className="border-sage/30 focus-visible:ring-forest"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm mt-5 font-medium text-foreground/90 mb-1 block">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Your message here..." 
                  required 
                  className="min-h-32 border-sage/30 focus-visible:ring-forest"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-forest mt-5 hover:bg-forest/90 text-white font-medium"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
