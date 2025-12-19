import { Zap, Shield, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { useState, useRef, MouseEvent } from "react";
import { LucideIcon } from "lucide-react";

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
  isVisible: boolean;
}

const ValueCard = ({ icon: Icon, title, description, delay, isVisible }: ValueCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative text-center p-8 rounded-lg bg-card/60 border border-border/60 overflow-hidden",
        "transition-all duration-400 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        isHovered && "border-primary/30"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Subtle spotlight effect */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(250px circle at ${mousePos.x}px ${mousePos.y}px, hsl(var(--primary) / 0.06), transparent 50%)`,
        }}
      />

      {/* Icon */}
      <div className={cn(
        "relative inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-5 transition-colors duration-300",
        isHovered && "bg-primary/15"
      )}>
        <Icon className="w-6 h-6" />
      </div>

      <h3 className={cn(
        "text-lg font-semibold mb-3 transition-colors duration-300",
        isHovered && "text-primary"
      )}>
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
        {description}
      </p>
    </div>
  );
};

const values = [
  {
    icon: Zap,
    title: "Speed",
    description: "Optimized for performance. Every tool we build is designed to be blazingly fast.",
  },
  {
    icon: Shield,
    title: "Stability",
    description: "Reliable and well-tested. Our name is a promise—stable systems you can depend on.",
  },
  {
    icon: Users,
    title: "Open Source",
    description: "Built in public, for the community. Contributions and feedback are always welcome.",
  },
];

export const About = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="relative py-24 px-6">
      {/* Subtle divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div 
          ref={headerRef}
          className={`text-center mb-14 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase mb-3 block">
            Our Mission
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-5">
            Making AI Development <span className="text-gradient">Accessible</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            We believe powerful AI tools should be available to everyone. 
            Our open-source projects aim to democratize neural network development.
          </p>
        </div>
        
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <ValueCard
              key={value.title}
              {...value}
              delay={index * 150}
              isVisible={cardsVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};