import { ExternalLink, Star, GitFork } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks?: number;
  url: string;
  className?: string;
  delay?: number;
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
  className,
  delay = 0,
}: ProjectCardProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group block p-6 rounded-xl bg-card border border-border",
        "hover:border-primary/50 hover:glow-border",
        "transition-all duration-500 ease-out",
        "opacity-0 animate-fade-in-up",
        className
      )}
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {name}
        </h3>
        <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
      </div>

      <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
        {description}
      </p>

      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className={cn("w-3 h-3 rounded-full", languageColors[language] || "bg-muted")} />
          <span>{language}</span>
        </div>
        
        <div className="flex items-center gap-1">
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
    </a>
  );
};
