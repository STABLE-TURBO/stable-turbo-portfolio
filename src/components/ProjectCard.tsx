import { ExternalLink, Star, GitFork } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useRef, MouseEvent } from "react";

interface ProjectCardProps {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks?: number;
  url: string;
  className?: string;
  delay?: number;
  isVisible?: boolean;
}

const languageColors: Record<string, string> = {
  HTML: "bg-orange-500",
  JavaScript: "bg-amber-400",
  TypeScript: "bg-blue-500",
  Python: "bg-emerald-500",
};

export const ProjectCard = ({
  name,
  description,
  language,
  stars,
  forks,
  url,
  className,
  delay = 0,
  isVisible = true,
}: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "group relative p-6 rounded-lg bg-card/70 border border-border/60",
        "transition-all duration-400 ease-out",
        isVisible ? "opacity-100" : "opacity-0",
        isHovered && "border-primary/30",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Subtle glow effect */}
      <div 
        className={cn(
          "absolute inset-0 rounded-lg transition-opacity duration-300 pointer-events-none",
          isHovered ? "opacity-100" : "opacity-0"
        )}
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, hsl(var(--primary) / 0.08) 0%, transparent 50%)`,
        }}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
            {name}
          </h3>
          <a 
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 -m-2 hover:bg-primary/10 rounded-lg transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-3">
          {description}
        </p>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className={cn("w-2.5 h-2.5 rounded-full", languageColors[language] || "bg-muted")} />
            <span>{language}</span>
          </div>
          
          <div className="flex items-center gap-1 group-hover:text-primary transition-colors">
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
      </div>
    </div>
  );
};