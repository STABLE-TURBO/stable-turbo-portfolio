import { Github, ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { useState, useRef, MouseEvent } from "react";

interface TeamMemberProps {
  name: string;
  pseudo: string;
  role: string;
  github: string;
  avatar?: string;
  delay: number;
  isVisible: boolean;
}

const TeamMember = ({ name, pseudo, role, github, delay, isVisible }: TeamMemberProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative p-10 rounded-2xl border border-border/50 overflow-hidden",
        "transition-all duration-500 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        isHovered && "border-primary/30 bg-card/50"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Spotlight effect */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, hsl(var(--primary) / 0.1), transparent 50%)`,
        }}
      />

      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Avatar */}
        <div className={cn(
          "relative w-28 h-28 rounded-full overflow-hidden border-2 transition-all duration-300 shrink-0",
          isHovered ? "border-primary shadow-[0_0_40px_hsl(var(--primary)/0.3)]" : "border-border"
        )}>
          <div className="w-full h-full bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 flex items-center justify-center">
            <span className="text-4xl font-black text-primary">
              {name.charAt(0)}
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="text-center md:text-left">
          <h3 className={cn(
            "text-2xl font-bold mb-1 transition-colors duration-300",
            isHovered && "text-primary"
          )}>
            {name}
          </h3>
          <p className="text-primary/80 font-mono text-sm mb-2">@{pseudo}</p>
          <p className="text-muted-foreground mb-6">{role}</p>

          {/* GitHub Link */}
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border transition-all duration-300 font-medium",
              isHovered 
                ? "border-primary bg-primary text-primary-foreground" 
                : "border-border text-muted-foreground hover:text-foreground hover:border-border/80"
            )}
          >
            <Github className="w-4 h-4" />
            <span>View Profile</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

const team = [
  {
    name: "Lemniscate",
    pseudo: "Lemniscate-world",
    role: "Founder & Lead Developer",
    github: "https://github.com/Lemniscate-world",
  },
];

export const Team = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="team" className="relative py-32 px-6">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-mono text-primary border border-primary/30 mb-6">
            003 / TEAM
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            The <span className="text-gradient">Builder</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-xl mx-auto">
            Meet the developer behind STABLE TURBO's open source projects.
          </p>
        </div>
        
        <div ref={cardsRef} className="flex justify-center">
          {team.map((member, index) => (
            <TeamMember
              key={member.pseudo}
              {...member}
              delay={index * 150}
              isVisible={cardsVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};