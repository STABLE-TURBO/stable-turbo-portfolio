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
        "flex items-center gap-2 px-4 py-2 rounded-lg border border-border/60",
        "transition-colors duration-300",
        isHovered && "border-primary/40 bg-primary/5"
      )}
    >
      <Icon className={cn(
        "w-4 h-4 transition-colors duration-300",
        isHovered ? "text-primary" : "text-muted-foreground"
      )} />
      <span className={cn(
        "text-sm transition-colors duration-300",
        isHovered ? "text-foreground" : "text-muted-foreground"
      )}>
        {label}
      </span>
      <ArrowUpRight className={cn(
        "w-3 h-3 transition-all duration-300",
        isHovered ? "opacity-100 text-primary" : "opacity-0"
      )} />
    </a>
  );
};

export const Footer = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <footer className="relative py-16 px-6 border-t border-border/60">
      <div 
        ref={ref}
        className={cn(
          "relative z-10 max-w-4xl mx-auto text-center transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        <h2 className="text-xl md:text-2xl font-display font-semibold mb-4">
          Ready to <span className="text-gradient">contribute</span>?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Join us in building the future of AI development. Star our repos, open issues, or submit PRs.
        </p>
        
        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <SocialLink href="https://github.com/STABLE-TURBO" icon={Github} label="STABLE-TURBO" />
          <SocialLink href="https://github.com/Lemniscate-world" icon={Github} label="@Lemniscate-world" />
          <SocialLink href="mailto:contact@stableturbo.dev" icon={Mail} label="Contact" />
        </div>

        <Button 
          size="lg" 
          className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
          asChild
        >
          <a href="https://github.com/STABLE-TURBO" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("cta_click", { id: "footer_github_follow" })}>
            <Github className="w-5 h-5 mr-2" />
            Follow on GitHub
          </a>
        </Button>
        
        <div className="mt-12 pt-6 border-t border-border/40">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} STABLE TURBO. All projects are open source.
          </p>
          <p className="text-muted-foreground/60 text-xs mt-2">
            Built by <a href="https://github.com/Lemniscate-world" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">@Lemniscate-world</a>
          </p>
        </div>
      </div>
    </footer>
  );
};