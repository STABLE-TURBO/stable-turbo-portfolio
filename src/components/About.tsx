import { Zap, Shield, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { useState, useRef, MouseEvent } from "react";
import { LucideIcon } from "lucide-react";

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  delay: number;
  isVisible: boolean;
}

const ValueCard = ({ icon: Icon, title, description, index, delay, isVisible }: ValueCardProps) => {
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
        "group relative p-8 rounded-2xl border border-border/50 overflow-hidden",
        "transition-all duration-500 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        isHovered && "border-primary/30 bg-card/50"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Spotlight effect */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, hsl(var(--primary) / 0.08), transparent 60%)`,
        }}
      />

      {/* Number indicator */}
      <span className="text-8xl font-black text-primary/5 absolute -top-4 -right-2 select-none">
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className="relative z-10">
        {/* Icon */}
        <div className={cn(
          "inline-flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 mb-6",
          isHovered ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
        )}>
          <Icon className="w-6 h-6" />
        </div>

        <h3 className={cn(
          "text-2xl font-bold mb-3 transition-colors duration-300",
          isHovered && "text-primary"
        )}>
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const values = [
  {
    icon: Zap,
    title: "Speed",
    description: "Optimized for performance. Every tool we build is designed to be blazingly fast without compromise.",
  },
  {
    icon: Shield,
    title: "Stability",
    description: "Reliable and well-tested. Our name is a promise — stable systems you can depend on in production.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Built in public, for the community. Contributions and feedback from developers worldwide welcome.",
  },
];

export const About = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="relative py-32 px-6">
      {/* Decorative line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-primary/50 to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div 
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-mono text-primary border border-primary/30 mb-6">
            002 / PHILOSOPHY
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            Why <span className="text-gradient">STABLE TURBO</span>?
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
            We believe powerful AI tools should be available to everyone. 
            Our open-source projects democratize neural network development.
          </p>
        </div>
        
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <ValueCard
              key={value.title}
              {...value}
              index={index}
              delay={index * 150}
              isVisible={cardsVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};