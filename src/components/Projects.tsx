import { ProjectCard } from "@/components/ProjectCard";
import { StarDecoration } from "@/components/StarDecoration";

const projects = [
  {
    name: "Neural",
    description: "A domain-specific language (DSL) designed for defining, training, debugging, and deploying neural networks. With declarative syntax, cross-framework support, and built-in execution tracing.",
    language: "HTML",
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
  return (
    <section id="projects" className="relative py-32 px-6">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />
      
      <StarDecoration 
        size="sm" 
        className="absolute top-20 right-[25%] animate-twinkle text-primary" 
      />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
            Open Source
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tools designed to accelerate AI development and make neural networks 
            more accessible to developers everywhere.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.name}
              {...project}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
