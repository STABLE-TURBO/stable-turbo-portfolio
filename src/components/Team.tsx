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

const TeamMember = ({ name, pseudo, role, github, avatar, delay, isVisible }: TeamMemberProps) => {
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
        "relative p-8 rounded-lg bg-card/60 border border-border/60 overflow-hidden text-center",
        "transition-all duration-400 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        isHovered && "border-primary/30"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Subtle spotlight effect */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(250px circle at ${mousePos.x}px ${mousePos.y}px, hsl(var(--primary) / 0.06), transparent 50%)`,
        }}
      />

      {/* Avatar */}
      <div className={cn(
        "relative w-20 h-20 mx-auto mb-5 rounded-full overflow-hidden border-2 transition-colors duration-300",
        isHovered ? "border-primary/50" : "border-border"
      )}>
        {avatar ? (
          <img src={avatar} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
            <span className="text-2xl font-semibold text-primary">
              {name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <h3 className={cn(
        "text-lg font-semibold mb-1 transition-colors duration-300",
        isHovered && "text-primary"
      )}>
        {name}
      </h3>
      <p className="text-primary/80 font-mono text-sm mb-2">@{pseudo}</p>
      <p className="text-muted-foreground text-sm mb-5">{role}</p>

      {/* GitHub Link */}
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "inline-flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors duration-300",
          isHovered 
            ? "border-primary/40 bg-primary/10 text-primary" 
            : "border-border text-muted-foreground hover:text-foreground"
        )}
      >
        <Github className="w-4 h-4" />
        <span className="text-sm">GitHub</span>
        <ExternalLink className="w-3 h-3" />
      </a>
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
    <section id="team" className="relative py-24 px-6">
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
            The Team
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-5">
            Built by <span className="text-gradient">Builders</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Meet the developer behind STABLE TURBO's open source projects.
          </p>
        </div>
        
        <div ref={cardsRef} className="flex justify-center">
          <div className="w-full max-w-xs">
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
      </div>
    </section>
  );
};