import { useMemo } from "react";

interface GeometricShape {
  id: number;
  type: 'hypersphere' | 'torus' | 'icosahedron' | 'neural' | 'condensate' | 'gravity';
  x: number;
  y: number;
  size: number;
  rotation: number;
  duration: number;
  delay: number;
  opacity: number;
}

const HypersphereSVG = ({ size, className }: { size: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
    <defs>
      <linearGradient id="sphereGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
        <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.2" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="45" fill="none" stroke="url(#sphereGrad)" strokeWidth="0.5" />
    <ellipse cx="50" cy="50" rx="45" ry="20" fill="none" stroke="hsl(var(--primary) / 0.4)" strokeWidth="0.5" />
    <ellipse cx="50" cy="50" rx="20" ry="45" fill="none" stroke="hsl(var(--primary) / 0.4)" strokeWidth="0.5" />
    <ellipse cx="50" cy="50" rx="45" ry="35" fill="none" stroke="hsl(var(--primary) / 0.3)" strokeWidth="0.5" transform="rotate(45 50 50)" />
    <ellipse cx="50" cy="50" rx="45" ry="35" fill="none" stroke="hsl(var(--primary) / 0.3)" strokeWidth="0.5" transform="rotate(-45 50 50)" />
    <circle cx="50" cy="50" r="30" fill="none" stroke="hsl(var(--accent) / 0.3)" strokeWidth="0.5" />
    <circle cx="50" cy="50" r="15" fill="none" stroke="hsl(var(--accent) / 0.4)" strokeWidth="0.5" />
  </svg>
);

const TorusSVG = ({ size, className }: { size: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
    <ellipse cx="50" cy="50" rx="40" ry="15" fill="none" stroke="hsl(var(--primary) / 0.5)" strokeWidth="1" />
    <ellipse cx="50" cy="50" rx="40" ry="15" fill="none" stroke="hsl(var(--accent) / 0.3)" strokeWidth="1" transform="rotate(60 50 50)" />
    <ellipse cx="50" cy="50" rx="40" ry="15" fill="none" stroke="hsl(var(--primary) / 0.4)" strokeWidth="1" transform="rotate(120 50 50)" />
    <circle cx="50" cy="50" r="25" fill="none" stroke="hsl(var(--accent) / 0.2)" strokeWidth="0.5" strokeDasharray="3 3" />
  </svg>
);

const IcosahedronSVG = ({ size, className }: { size: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
    <polygon points="50,10 90,35 90,65 50,90 10,65 10,35" fill="none" stroke="hsl(var(--primary) / 0.5)" strokeWidth="0.8" />
    <line x1="50" y1="10" x2="50" y2="90" stroke="hsl(var(--accent) / 0.3)" strokeWidth="0.5" />
    <line x1="10" y1="35" x2="90" y2="65" stroke="hsl(var(--accent) / 0.3)" strokeWidth="0.5" />
    <line x1="10" y1="65" x2="90" y2="35" stroke="hsl(var(--accent) / 0.3)" strokeWidth="0.5" />
    <circle cx="50" cy="50" r="3" fill="hsl(var(--primary) / 0.6)" />
  </svg>
);

const NeuralNetworkSVG = ({ size, className }: { size: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
    <circle cx="15" cy="25" r="4" fill="hsl(var(--primary) / 0.6)" />
    <circle cx="15" cy="50" r="4" fill="hsl(var(--primary) / 0.6)" />
    <circle cx="15" cy="75" r="4" fill="hsl(var(--primary) / 0.6)" />
    <circle cx="50" cy="20" r="4" fill="hsl(var(--accent) / 0.6)" />
    <circle cx="50" cy="40" r="4" fill="hsl(var(--accent) / 0.6)" />
    <circle cx="50" cy="60" r="4" fill="hsl(var(--accent) / 0.6)" />
    <circle cx="50" cy="80" r="4" fill="hsl(var(--accent) / 0.6)" />
    <circle cx="85" cy="35" r="4" fill="hsl(var(--primary) / 0.6)" />
    <circle cx="85" cy="65" r="4" fill="hsl(var(--primary) / 0.6)" />
    {[25, 50, 75].flatMap(y1 => [20, 40, 60, 80].map(y2 => (
      <line key={`${y1}-${y2}`} x1="15" y1={y1} x2="50" y2={y2} stroke="hsl(var(--primary) / 0.2)" strokeWidth="0.5" />
    )))}
    {[20, 40, 60, 80].flatMap(y1 => [35, 65].map(y2 => (
      <line key={`${y1}-${y2}-out`} x1="50" y1={y1} x2="85" y2={y2} stroke="hsl(var(--accent) / 0.2)" strokeWidth="0.5" />
    )))}
  </svg>
);

const CondensateSVG = ({ size, className }: { size: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
    {Array.from({ length: 12 }).map((_, i) => {
      const angle = (i / 12) * Math.PI * 2;
      const r = 30 + Math.sin(i * 2) * 10;
      return (
        <circle
          key={i}
          cx={50 + Math.cos(angle) * r}
          cy={50 + Math.sin(angle) * r}
          r={3 + Math.sin(i) * 2}
          fill="hsl(var(--primary) / 0.4)"
          className="animate-pulse"
          style={{ animationDelay: `${i * 100}ms` }}
        />
      );
    })}
    <circle cx="50" cy="50" r="15" fill="none" stroke="hsl(var(--accent) / 0.3)" strokeWidth="0.5" strokeDasharray="2 2" />
    <circle cx="50" cy="50" r="5" fill="hsl(var(--primary) / 0.6)" />
  </svg>
);

const GravitySVG = ({ size, className }: { size: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
    {Array.from({ length: 7 }).map((_, i) => {
      const y = 20 + i * 10;
      const curve = Math.sin((i - 3) * 0.5) * 15;
      return (
        <path
          key={`h-${i}`}
          d={`M 10 ${y} Q 50 ${y + curve} 90 ${y}`}
          fill="none"
          stroke="hsl(var(--primary) / 0.3)"
          strokeWidth="0.5"
        />
      );
    })}
    {Array.from({ length: 7 }).map((_, i) => {
      const x = 20 + i * 10;
      const curve = Math.sin((i - 3) * 0.5) * 15;
      return (
        <path
          key={`v-${i}`}
          d={`M ${x} 10 Q ${x + curve} 50 ${x} 90`}
          fill="none"
          stroke="hsl(var(--accent) / 0.3)"
          strokeWidth="0.5"
        />
      );
    })}
    <circle cx="50" cy="50" r="8" fill="hsl(var(--primary) / 0.5)" />
    <circle cx="50" cy="50" r="12" fill="none" stroke="hsl(var(--primary) / 0.3)" strokeWidth="0.5" />
  </svg>
);

const ShapeComponent = ({ type, size, className }: { type: GeometricShape['type']; size: number; className?: string }) => {
  switch (type) {
    case 'hypersphere': return <HypersphereSVG size={size} className={className} />;
    case 'torus': return <TorusSVG size={size} className={className} />;
    case 'icosahedron': return <IcosahedronSVG size={size} className={className} />;
    case 'neural': return <NeuralNetworkSVG size={size} className={className} />;
    case 'condensate': return <CondensateSVG size={size} className={className} />;
    case 'gravity': return <GravitySVG size={size} className={className} />;
  }
};

export const FloatingGeometry = ({ className = "", density = 'normal' }: { className?: string; density?: 'sparse' | 'normal' | 'dense' }) => {
  const count = density === 'sparse' ? 4 : density === 'dense' ? 12 : 8;
  
  const shapes = useMemo<GeometricShape[]>(() => {
    const types: GeometricShape['type'][] = ['hypersphere', 'torus', 'icosahedron', 'neural', 'condensate', 'gravity'];
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      type: types[i % types.length],
      x: Math.random() * 90 + 5,
      y: Math.random() * 90 + 5,
      size: Math.random() * 80 + 60,
      rotation: Math.random() * 360,
      duration: Math.random() * 30 + 20,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.3 + 0.2,
    }));
  }, [count]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className="absolute animate-geometry-float"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            opacity: shape.opacity,
            transform: `rotate(${shape.rotation}deg)`,
            animationDuration: `${shape.duration}s`,
            animationDelay: `${shape.delay}s`,
          }}
        >
          <div className="animate-geometry-rotate" style={{ animationDuration: `${shape.duration * 2}s` }}>
            <ShapeComponent type={shape.type} size={shape.size} />
          </div>
        </div>
      ))}
    </div>
  );
};