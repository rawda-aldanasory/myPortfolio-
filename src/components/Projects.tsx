
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ProjectCard = ({ project }) => {
  return (
    <Card className="project-card overflow-hidden border-sage/20 animate-on-scroll">
      <div className="h-48 bg-sage/10 flex items-center justify-center overflow-hidden">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-sage/30 to-forest/30 text-forest text-4xl font-playfair">
            {project.title.charAt(0)}
          </div>
        )}
      </div>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-playfair font-semibold text-forest">{project.title}</h3>
          <div className="flex gap-2">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-forest hover:text-sage transition-colors"
                aria-label="GitHub Repository"
              >
                <Github size={18} />
              </a>
            )}
            {project.live && (
              <a 
                href={project.live} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-forest hover:text-sage transition-colors"
                aria-label="Live Demo"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
        <p className="text-foreground/80 text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span key={index} className="text-xs px-2 py-1 bg-beige rounded-md text-forest/80">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Shopping Cart",
      description: "Responsive e-commerce app using Angular, JavaScript, and TypeScript.",
      tags: ["Angular", "TypeScript", "E-commerce"],
      live: "https://angular-mini-store.vercel.app/",
      github: null,
      image: "./loginForm_Angular.png"
    },
    {
      title: "Task Manager",
      description: "Interactive task manager with add/edit/delete features.",
      tags: ["JavaScript", "CSS", "Web Storage API"],
      live: "https://task-manager-gray-six.vercel.app/",
      github: null,
      image: "todoApp.png"
    },
    {
      title: "Brainwave",
      description: "Dynamic React website with react-just-parallax, styled using Tailwind CSS.",
      tags: ["React.js", "Tailwind CSS", "Parallax"],
      live: "https://brainwavesite.vercel.app/",
      github: null,
      image: "brainwavesite.png"
    },
    {
      title: "Astropioneer",
      description: "Real-time weather and map features using Leaflet and APIs.",
      tags: ["React.js", "Leaflet", "API Integration"],
      live: "https://nasa-site-one.vercel.app/",
      github: null,
      image: "Astropioneer.png"
    },
    {
      title: "Company Website",
      description: "Built with HTML, CSS, JS, PHP, MySQL using XAMPP.",
      tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      live: "https://www.linkedin.com/posts/rawda-mohamed1_it-is-my-great-pleasure-to-share-that-my-activity-7227982531990601728-4KPA?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEpb1CoBQrVIn_TEXDWL-A0_fa02rmN3fuU",
      github: null,
      image: null
    },
    
  ];

  return (
    <section id="projects" className="section-padding bg-cream/70">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-forest mb-2">Projects</h2>
          <div className="w-24 h-1 bg-sage mx-auto mb-4"></div>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            A selection of my recent work showcasing my skills in frontend development, UI/UX design, and more.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
