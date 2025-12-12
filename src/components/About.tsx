import { Zap, Shield, Users } from "lucide-react";
import { StarDecoration } from "@/components/StarDecoration";
import { cn } from "@/lib/utils";

const values = [
  {
    icon: Zap,
    title: "Speed",
    description: "Optimized for performance. Every tool we build is designed to be blazingly fast.",
  },
  {
    icon: Shield,
    title: "Stability",
    description: "Reliable and well-tested. Our name is a promise - stable systems you can depend on.",
  },
  {
    icon: Users,
    title: "Open Source",
    description: "Built in public, for the community. Contributions and feedback are always welcome.",
  },
];

export const About = () => {
  return (
    <section className="relative py-32 px-6">
      <StarDecoration 
        size="lg" 
        className="absolute top-32 left-[10%] animate-twinkle-slow text-accent" 
      />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
            Our Mission
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Making AI Development <span className="text-gradient">Accessible</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We believe powerful AI tools should be available to everyone. 
            Our open-source projects aim to democratize neural network development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={cn(
                "text-center p-8 rounded-xl bg-card/50 border border-border",
                "hover:border-primary/30 transition-all duration-300",
                "opacity-0 animate-fade-in-up"
              )}
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: "forwards" }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6">
                <value.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
