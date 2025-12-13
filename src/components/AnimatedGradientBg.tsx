export const AnimatedGradientBg = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Animated mesh gradient background */}
      <div 
        className="absolute inset-0 animate-gradient-shift"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% 40%, hsl(var(--primary) / 0.08) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 60%, hsl(var(--accent) / 0.06) 0%, transparent 50%),
            radial-gradient(ellipse 50% 30% at 50% 80%, hsl(var(--primary) / 0.05) 0%, transparent 40%)
          `,
        }}
      />
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};
