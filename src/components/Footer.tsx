import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StarDecoration } from "@/components/StarDecoration";

export const Footer = () => {
  return (
    <footer className="relative py-20 px-6 border-t border-border">
      <StarDecoration 
        size="sm" 
        className="absolute top-10 right-[20%] animate-twinkle text-primary" 
      />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to contribute?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Join us in building the future of AI development. Star our repos, open issues, or submit PRs.
        </p>
        
        <Button variant="hero" size="lg" asChild>
          <a href="https://github.com/STABLE-TURBO" target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5" />
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
