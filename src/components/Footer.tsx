import { Github, Twitter, Mail, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StarDecoration } from "@/components/StarDecoration";
import { FloatingGeometry } from "@/components/FloatingGeometry";
import { ParticleField } from "@/components/ParticleField";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { useState } from "react";

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
        "flex items-center gap-2 px-4 py-2 rounded-lg border border-border",
        "transition-all duration-300",
        isHovered && "border-primary/50 bg-primary/5 shadow-[0_0_20px_hsl(var(--primary)/0.2)]"
      )}
    >
      <Icon className={cn(
        "w-5 h-5 transition-all duration-300",
        isHovered ? "text-primary scale-110" : "text-muted-foreground"
      )} />
      <span className={cn(
        "text-sm transition-colors duration-300",
        isHovered ? "text-foreground" : "text-muted-foreground"
      )}>
        {label}
      </span>
      <ArrowUpRight className={cn(
        "w-4 h-4 transition-all duration-300",
        isHovered ? "opacity-100 translate-x-0.5 -translate-y-0.5 text-primary" : "opacity-0"
      )} />
    </a>
  );
};

export const Footer = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <footer className="relative py-20 px-6 border-t border-border overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      <FloatingGeometry density="sparse" className="opacity-20" />
      <ParticleField className="opacity-15" />
      
      <StarDecoration 
        size="sm" 
        className="absolute top-10 right-[20%] animate-twinkle text-primary" 
      />
      <StarDecoration 
        size="md" 
        className="absolute bottom-20 left-[15%] animate-twinkle-delayed text-accent" 
      />
      
      <div 
        ref={ref}
        className={cn(
          "relative z-10 max-w-5xl mx-auto text-center transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to <span className="text-gradient">contribute</span>?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Join us in building the future of AI development. Star our repos, open issues, or submit PRs.
        </p>
        
        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <SocialLink href="https://github.com/STABLE-TURBO" icon={Github} label="GitHub" />
          <SocialLink href="https://twitter.com/stableturbo" icon={Twitter} label="Twitter" />
          <SocialLink href="mailto:contact@stableturbo.dev" icon={Mail} label="Contact" />
        </div>

        <Button variant="hero" size="lg" asChild className="group">
          <a href="https://github.com/STABLE-TURBO" target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            Follow on GitHub
          </a>
        </Button>
        
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} STABLE TURBO. All projects are open source.
          </p>
        </div>
      </div>
    </footer>
  );
};
