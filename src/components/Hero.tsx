import { Button } from "@/components/ui/button";
import { StarDecoration } from "@/components/StarDecoration";
import { LightningEffect } from "@/components/LightningEffect";
import { Github, ArrowDown } from "lucide-react";
import stableTurboLogo from "@/assets/stable-turbo-logo.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Lightning Effect */}
      <LightningEffect className="opacity-40" />
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      {/* Decorative stars */}
      <StarDecoration 
        size="lg" 
        className="absolute top-20 right-[15%] animate-twinkle text-primary" 
      />
      <StarDecoration 
        size="md" 
        className="absolute top-32 right-[10%] animate-twinkle-delayed text-accent" 
      />
      <StarDecoration 
        size="sm" 
        className="absolute bottom-40 left-[20%] animate-twinkle-slow text-primary" 
      />
      <StarDecoration 
        size="md" 
        className="absolute top-1/3 left-[8%] animate-twinkle text-accent" 
      />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8 animate-float">
          <img 
            src={stableTurboLogo} 
            alt="STABLE TURBO" 
            className="w-64 md:w-80 lg:w-96 h-auto"
          />
        </div>
        
        {/* Tagline */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 opacity-0 animate-fade-in-up animation-delay-200">
          Building the <span className="text-gradient">future</span> of AI development
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 opacity-0 animate-fade-in-up animation-delay-400">
          Open-source tools and frameworks that make neural network development 
          accessible, reliable, and blazingly fast.
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up animation-delay-600">
          <Button 
            variant="hero" 
            size="lg" 
            asChild
          >
            <a href="https://github.com/STABLE-TURBO" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              View on GitHub
            </a>
          </Button>
          
          <Button 
            variant="heroOutline" 
            size="lg"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Projects
            <ArrowDown className="w-5 h-5" />
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};
