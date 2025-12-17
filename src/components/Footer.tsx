import { Github, Mail, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

const SocialLink = ({ href, icon: Icon, label }: { href: string; icon: typeof Github; label: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "flex items-center gap-2 px-4 py-2 rounded-xl border border-border/50",
        "transition-all duration-300",
        isHovered && "border-primary/30 bg-primary/5"
      )}
    >
      <Icon className={cn(
        "w-5 h-5 transition-all duration-300",
        isHovered ? "text-primary" : "text-muted-foreground"
      )} />
      <span className={cn(
        "text-sm transition-colors duration-300",
        isHovered ? "text-foreground" : "text-muted-foreground"
      )}>
        {label}
      </span>
      <ArrowUpRight className={cn(
        "w-4 h-4 transition-all duration-300",
        isHovered ? "opacity-100 text-primary" : "opacity-0"
      )} />
    </a>
  );
};

export const Footer = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <footer className="relative py-24 px-6 border-t border-border/30">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-primary/30 to-transparent" />
      
      <div 
        ref={ref}
        className={cn(
          "relative z-10 max-w-4xl mx-auto text-center transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        <span className="inline-block px-3 py-1 rounded-full text-xs font-mono text-primary border border-primary/30 mb-6">
          004 / CONNECT
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to <span className="text-gradient">contribute</span>?
        </h2>
        <p className="text-muted-foreground mb-10 max-w-md mx-auto text-lg">
          Join us in building the future of AI development.
        </p>
        
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <SocialLink href="https://github.com/STABLE-TURBO" icon={Github} label="STABLE-TURBO" />
          <SocialLink href="https://github.com/Lemniscate-world" icon={Github} label="@Lemniscate-world" />
          <SocialLink href="mailto:contact@stableturbo.dev" icon={Mail} label="Contact" />
        </div>

        <Button variant="hero" size="lg" asChild>
          <a href="https://github.com/STABLE-TURBO" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("cta_click", { id: "footer_github_follow" })}>
            <Github className="w-5 h-5" />
            Follow on GitHub
          </a>
        </Button>
        
        <div className="mt-16 pt-8 border-t border-border/20 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} STABLE TURBO. All projects are open source.</p>
          <p className="text-xs mt-2 opacity-60">
            Built by <a href="https://github.com/Lemniscate-world" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">@Lemniscate-world</a>
          </p>
        </div>
      </div>
    </footer>
  );
};