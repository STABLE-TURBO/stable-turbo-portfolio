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
    <section id="projects" className="relative py-32 px-6">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div 
          ref={headerRef}
          className={`mb-20 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Asymmetric layout */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-mono text-primary border border-primary/30 mb-6">
                001 / PROJECTS
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Featured<br />
                <span className="text-gradient">Work</span>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md md:text-right text-lg">
              Open source tools designed to accelerate AI development and make neural networks more accessible.
            </p>
          </div>
        </div>
        
        <div ref={cardsRef} className="grid md:grid-cols-2 gap-8">
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