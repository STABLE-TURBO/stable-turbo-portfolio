import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { GitHubStats } from "@/components/GitHubStats";
import { Github, ArrowDown } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Subtle ambient background */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full animate-ambient"
          style={{
            background: 'radial-gradient(circle, hsl(35 90% 55% / 0.06) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full animate-ambient"
          style={{
            background: 'radial-gradient(circle, hsl(15 70% 50% / 0.05) 0%, transparent 70%)',
            filter: 'blur(80px)',
            animationDelay: '4s',
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
        {/* Logo */}
        <div className="mb-8 animate-float">
          <Logo size="xl" />
        </div>
        
        {/* GitHub Stats */}
        <div className="mb-8 opacity-0 animate-fade-in-up animation-delay-200">
          <GitHubStats />
        </div>
        
        {/* Tagline */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-display font-semibold mb-6 opacity-0 animate-fade-in-up animation-delay-200 leading-relaxed">
          Building the <span className="text-gradient">future</span> of open-source innovation
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 opacity-0 animate-fade-in-up animation-delay-400 leading-relaxed">
          Tools and frameworks that make development 
          accessible, reliable, and blazingly fast.
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up animation-delay-600">
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
            asChild
          >
            <a href="https://github.com/STABLE-TURBO" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("cta_click", { id: "hero_github" })}>
              <Github className="w-5 h-5 mr-2" />
              View on GitHub
            </a>
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            className="border-border/60 hover:bg-card hover:border-primary/30"
            onClick={() => { trackEvent("cta_click", { id: "hero_explore_projects" }); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
          >
            Explore Projects
            <ArrowDown className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};