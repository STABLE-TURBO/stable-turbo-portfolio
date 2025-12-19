import { ProjectCard } from "@/components/ProjectCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  {
    name: "NeuralDBG",
    description: "A powerful debugger for neural networks. Trace activations, visualize gradients, detect vanishing/exploding gradients, and step through forward/backward passes with an intuitive interface.",
    language: "Python",
    stars: 17,
    forks: 1,
    url: "https://github.com/STABLE-TURBO/Neural",
  },
  {
    name: "Metatron",
    description: "A minimal Node.js CLI that forces LLM codegen one small step at a time in EXPLANATION / CODE / VERIFICATION format. Includes verification gates that halt when a step can't cite reliable sources.",
    language: "JavaScript",
    stars: 5,
    forks: 0,
    url: "https://github.com/STABLE-TURBO/Metatron",
  },
];

export const Projects = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="projects" className="relative py-24 px-6">
      {/* Subtle divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div 
          ref={headerRef}
          className={`text-center mb-14 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase mb-3 block">
            Open Source
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-5">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Tools designed to accelerate AI development and make neural networks 
            more accessible to developers everywhere.
          </p>
        </div>
        
        <div ref={cardsRef} className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.name}
              {...project}
              delay={index * 150}
              isVisible={cardsVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};