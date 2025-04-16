
import React from 'react';
import { Code, PaintBucket, Terminal, GitBranch, Heart, Brain } from 'lucide-react';

const SkillCategory = ({ title, icon, skills }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-sage/20 animate-on-scroll">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="text-xl font-playfair font-semibold text-forest">{title}</h3>
      </div>
      <div className="space-y-3">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-foreground/90 font-medium">{skill.name}</span>
            </div>
            <div className="w-full bg-beige/50 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-sage to-forest rounded-full h-2" 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="text-forest" size={24} />,
      skills: [
        { name: "HTML5 & CSS3", level: 95 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "React.js", level: 85 },
        { name: "Bootstrap", level: 80 },
        { name: "Angular", level: 65 },
      ]
    },
    {
      title: "UI/UX Design",
      icon: <PaintBucket className="text-forest" size={24} />,
      skills: [
        { name: "Figma", level: 90 },
        { name: "Adobe XD", level: 85 },
        { name: "Photoshop", level: 75 },
        { name: "Illustrator", level: 70 },
        { name: "User Research", level: 80 },
      ]
    },
    {
      title: "Programming Languages",
      icon: <Terminal className="text-forest" size={24} />,
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 80 },
        { name: "Python", level: 60 },
        { name: "PHP", level: 65 },
        { name: "SQL", level: 75 },
      ]
    },
    {
      title: "Other Skills",
      icon: <GitBranch className="text-forest" size={24} />,
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "API Testing", level: 80 },
        { name: "Manual Testing", level: 85 },
        { name: "Database Management", level: 70 },
        { name: "Problem Solving", level: 90 },
      ]
    },
  ];

  const softSkills = [
    "Teamwork",
    "Communication",
    "Presentation Skills",
    "Time Management",
    "Adaptability",
    "Attention to Detail"
  ];

  return (
    <section id="skills" className="section-padding bg-beige/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-forest mb-2">Technical Skills</h2>
          <div className="w-24 h-1 bg-sage mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <SkillCategory 
              key={index}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
            />
          ))}
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-sage/20 animate-on-scroll" style={{animationDelay: '0.4s'}}>
          <div className="flex items-center gap-3 mb-4">
            <Heart className="text-forest" size={24} />
            <h3 className="text-xl font-playfair font-semibold text-forest">Soft Skills</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-cream rounded-full text-forest border border-sage/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
