
import React from 'react';
import { GraduationCap, Award, Activity } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-cream/70">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-forest mb-2">About Me</h2>
          <div className="w-24 h-1 bg-sage mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-playfair font-semibold text-forest mb-4">Background</h3>
            <p className="text-foreground/90 mb-6">
              Passionate Educational Technology and Computer Science student with a focus on frontend development. 
              Proficient in HTML, CSS, JavaScript, React.js, and some experience with Angular, with hands-on 
              experience in building responsive web applications. Familiar with backend technologies such as PHP, SQL, 
              and XAMPP, and trained in manual and API testing with a solid grasp of ISTQB concepts.
            </p>
            <p className="text-foreground/90">
              Seeking an internship or remote opportunity to apply my skills and grow within a collaborative, 
              professional environment.
            </p>
          </div>
          
          <div className="space-y-6 animate-on-scroll" style={{animationDelay: '0.2s'}}>
            <div className="border-l-2 border-sage pl-4">
              <div className="flex items-center gap-3 mb-1">
                <GraduationCap className="text-forest" size={20} />
                <h3 className="text-lg font-playfair font-semibold text-forest">Education</h3>
              </div>
              <p className="text-foreground/90 mb-1">
                <strong>Bachelor's Degree (Candidate)</strong>
              </p>
              <p className="text-foreground/80">
                Faculty of Specific Education, Department of Educational Technology and Computer Science, 
                Menoufia University
              </p>
            </div>
            
            <div className="border-l-2 border-sage pl-4">
              <div className="flex items-center gap-3 mb-1">
                <Award className="text-forest" size={20} />
                <h3 className="text-lg font-playfair font-semibold text-forest">Courses & Certificates</h3>
              </div>
              <ul className="space-y-2 text-foreground/90">
                <li>UI/UX Track Trainee, Digital Egypt Pioneers Initiative (DEPI) — Oct 2024 – May 2025</li>
                <li>Angular, ITI — Jan 2025 – Feb 2025</li>
                <li>React.js, CREATIVA Menoufia — Aug 2024 – Sep 2024</li>
                <li>Software Testing Diploma, Amit Quality Academy — Aug 2023 – Sep 2023</li>
              </ul>
            </div>
            
            <div className="border-l-2 border-sage pl-4">
              <div className="flex items-center gap-3 mb-1">
                <Activity className="text-forest" size={20} />
                <h3 className="text-lg font-playfair font-semibold text-forest">Activities</h3>
              </div>
              <p className="text-foreground/90">
                Delegate at SBS Student Activity, FullStack Track — Feb 2024 – Aug 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
