import { Button } from "@/components/ui/button";
import { Scene3D } from "@/components/Scene3D";
import { Github, ArrowDown, Zap } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import stableTurboLogo from "@/assets/stable-turbo-logo.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* 3D Scene Background */}
      <Scene3D className="opacity-80" />
      
      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} 
      />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto px-6">
        {/* Badge */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm mb-8 animate-fade-in-up">
          <Zap className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Open Source AI Tools</span>
        </div>
        
        {/* Logo */}
        <div className="mb-6 animate-fade-in-up animation-delay-200">
          <img 
            src={stableTurboLogo} 
            alt="STABLE TURBO" 
            className="w-72 md:w-96 lg:w-[28rem] h-auto drop-shadow-[0_0_30px_hsl(var(--primary)/0.3)]"
          />
        </div>
        
        {/* Tagline with creative typography */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight animate-fade-in-up animation-delay-400">
          <span className="block text-foreground/90">Building the</span>
          <span className="block mt-2">
            <span className="relative inline-block">
              <span className="text-gradient font-black tracking-tight">future</span>
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full opacity-60" />
            </span>
            {" "}of AI
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 animate-fade-in-up animation-delay-600 leading-relaxed">
          Open-source tools that make neural network development 
          <span className="text-foreground font-medium"> accessible</span>,{" "}
          <span className="text-foreground font-medium">reliable</span>, and{" "}
          <span className="text-primary font-semibold">blazingly fast</span>.
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-600">
          <Button 
            variant="hero" 
            size="lg" 
            asChild
            className="group relative overflow-hidden"
          >
            <a href="https://github.com/STABLE-TURBO" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("cta_click", { id: "hero_github" })}>
              <span className="relative z-10 flex items-center gap-2">
                <Github className="w-5 h-5" />
                View on GitHub
              </span>
            </a>
          </Button>
          
          <Button 
            variant="heroOutline" 
            size="lg"
            onClick={() => { trackEvent("cta_click", { id: "hero_explore_projects" }); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="group"
          >
            Explore Projects
            <ArrowDown className="w-5 h-5 transition-transform group-hover:translate-y-1" />
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in-up animation-delay-600">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground/60 uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
        </div>
      </div>
    </section>
  );
};