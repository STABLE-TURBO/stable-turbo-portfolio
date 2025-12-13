export const FloatingOrbs = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Large gradient orb - top right */}
      <div 
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full animate-orb-float-1"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      
      {/* Medium orb - bottom left */}
      <div 
        className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full animate-orb-float-2"
        style={{
          background: 'radial-gradient(circle, hsl(var(--accent) / 0.2) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      
      {/* Small orb - center */}
      <div 
        className="absolute top-1/3 left-1/4 w-48 h-48 rounded-full animate-orb-float-3"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.1) 0%, transparent 60%)',
          filter: 'blur(30px)',
        }}
      />
      
      {/* Extra orb - top left */}
      <div 
        className="absolute top-20 left-10 w-32 h-32 rounded-full animate-orb-pulse"
        style={{
          background: 'radial-gradient(circle, hsl(var(--accent) / 0.25) 0%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />
      
      {/* Extra orb - bottom right */}
      <div 
        className="absolute bottom-40 right-20 w-40 h-40 rounded-full animate-orb-float-1"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.18) 0%, transparent 65%)',
          filter: 'blur(25px)',
          animationDelay: '2s',
        }}
      />
    </div>
  );
};
