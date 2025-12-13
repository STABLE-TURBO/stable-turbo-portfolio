import { ProjectCard } from "@/components/ProjectCard";
import { StarDecoration } from "@/components/StarDecoration";
import { FloatingGeometry } from "@/components/FloatingGeometry";
import { ParticleField } from "@/components/ParticleField";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  {
    name: "Neural",
    description: "A domain-specific language (DSL) designed for defining, training, debugging, and deploying neural networks. With declarative syntax, cross-framework support, and built-in execution tracing.",
    language: "HTML",
    stars: 17,
    forks: 1,
    url: "https://github.com/STABLE-TURBO/Neural",
    docsUrl: "/docs/neural",
  },
  {
    name: "Metatron",
    description: "A minimal Node.js CLI that forces LLM codegen one small step at a time in EXPLANATION / CODE / VERIFICATION format. Includes verification gates that halt when a step can't cite reliable sources.",
    language: "JavaScript",
    stars: 5,
    forks: 0,
    url: "https://github.com/STABLE-TURBO/Metatron",
    docsUrl: "/docs/metatron",
  },
];

export const Projects = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="projects" className="relative py-32 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />
      <FloatingGeometry density="sparse" className="opacity-30" />
      <ParticleField className="opacity-20" />
      
      <StarDecoration 
        size="sm" 
        className="absolute top-20 right-[25%] animate-twinkle text-primary" 
      />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
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
