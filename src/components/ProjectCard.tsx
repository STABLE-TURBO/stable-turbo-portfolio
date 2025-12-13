import { ExternalLink, Star, GitFork, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { useState, useRef, MouseEvent } from "react";

interface ProjectCardProps {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks?: number;
  url: string;
  docsUrl?: string;
  className?: string;
  delay?: number;
  isVisible?: boolean;
}

const languageColors: Record<string, string> = {
  HTML: "bg-orange-500",
  JavaScript: "bg-yellow-400",
  TypeScript: "bg-blue-500",
  Python: "bg-green-500",
};

export const ProjectCard = ({
  name,
  description,
  language,
  stars,
  forks,
  url,
  docsUrl,
  className,
  delay = 0,
  isVisible = true,
}: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate tilt - max 8 degrees
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    
    setTransform({ rotateX, rotateY });
    setGlowPos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0 });
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative p-6 rounded-xl bg-card border border-border",
        "transition-opacity duration-500 ease-out",
        isVisible ? "opacity-100" : "opacity-0",
        className
      )}
      style={{ 
        transitionDelay: `${delay}ms`,
        transform: `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale(${isHovered ? 1.02 : 1})`,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.3s ease-out, opacity 0.5s ease-out',
      }}
    >
      {/* Dynamic glow effect following cursor */}
      <div 
        className={cn(
          "absolute inset-0 rounded-xl transition-opacity duration-300 pointer-events-none",
          isHovered ? "opacity-100" : "opacity-0"
        )}
        style={{
          background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, hsl(var(--primary) / 0.25) 0%, transparent 50%)`,
        }}
      />
      
      {/* Border glow */}
      <div 
        className={cn(
          "absolute inset-0 rounded-xl border-2 transition-all duration-300 pointer-events-none",
          isHovered ? "opacity-100 border-primary/50" : "opacity-0 border-transparent"
        )}
        style={{
          boxShadow: isHovered ? `0 0 30px hsl(var(--primary) / 0.3), 0 0 60px hsl(var(--primary) / 0.15)` : 'none',
        }}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            {name}
          </h3>
          <a 
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 -m-2 hover:bg-primary/10 rounded-lg transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className={cn("w-3 h-3 rounded-full", languageColors[language] || "bg-muted")} />
              <span>{language}</span>
            </div>
            
            <div className="flex items-center gap-1 group-hover:text-accent transition-colors">
              <Star className="w-4 h-4" />
              <span>{stars}</span>
            </div>
            
            {forks !== undefined && forks > 0 && (
              <div className="flex items-center gap-1">
                <GitFork className="w-4 h-4" />
                <span>{forks}</span>
              </div>
            )}
          </div>

          {docsUrl && (
            <Link 
              to={docsUrl}
              className="flex items-center gap-1.5 text-sm text-primary hover:text-accent transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <BookOpen className="w-4 h-4" />
              <span>Docs</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
