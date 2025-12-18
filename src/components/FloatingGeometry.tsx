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


const HypersphereSVG = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="45" fill="none" stroke="hsl(217 100% 60% / 0.5)" strokeWidth="0.5" />
    <ellipse cx="50" cy="50" rx="45" ry="20" fill="none" stroke="hsl(217 100% 60% / 0.4)" strokeWidth="0.5" />
    <ellipse cx="50" cy="50" rx="20" ry="45" fill="none" stroke="hsl(217 100% 60% / 0.4)" strokeWidth="0.5" />
    <ellipse cx="50" cy="50" rx="45" ry="35" fill="none" stroke="hsl(217 100% 60% / 0.3)" strokeWidth="0.5" transform="rotate(45 50 50)" />
    <ellipse cx="50" cy="50" rx="45" ry="35" fill="none" stroke="hsl(217 100% 60% / 0.3)" strokeWidth="0.5" transform="rotate(-45 50 50)" />
    <circle cx="50" cy="50" r="30" fill="none" stroke="hsl(217 100% 70% / 0.3)" strokeWidth="0.5" />
    <circle cx="50" cy="50" r="15" fill="none" stroke="hsl(217 100% 70% / 0.4)" strokeWidth="0.5" />
  </svg>
);

const TorusSVG = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100">
    <ellipse cx="50" cy="50" rx="40" ry="15" fill="none" stroke="hsl(217 100% 60% / 0.5)" strokeWidth="1" />
    <ellipse cx="50" cy="50" rx="40" ry="15" fill="none" stroke="hsl(217 100% 70% / 0.3)" strokeWidth="1" transform="rotate(60 50 50)" />
    <ellipse cx="50" cy="50" rx="40" ry="15" fill="none" stroke="hsl(217 100% 60% / 0.4)" strokeWidth="1" transform="rotate(120 50 50)" />
    <circle cx="50" cy="50" r="25" fill="none" stroke="hsl(217 100% 70% / 0.2)" strokeWidth="0.5" strokeDasharray="3 3" />
  </svg>
);

const IcosahedronSVG = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100">
    <polygon points="50,10 90,35 90,65 50,90 10,65 10,35" fill="none" stroke="hsl(217 100% 60% / 0.5)" strokeWidth="0.8" />
    <line x1="50" y1="10" x2="50" y2="90" stroke="hsl(217 100% 70% / 0.3)" strokeWidth="0.5" />
    <line x1="10" y1="35" x2="90" y2="65" stroke="hsl(217 100% 70% / 0.3)" strokeWidth="0.5" />
    <line x1="10" y1="65" x2="90" y2="35" stroke="hsl(217 100% 70% / 0.3)" strokeWidth="0.5" />
    <circle cx="50" cy="50" r="3" fill="hsl(217 100% 60% / 0.6)" />
  </svg>
);

const NeuralNetworkSVG = ({ size }: { size: number }) => {
  const nodes = [
    { x: 15, y: 25 }, { x: 15, y: 50 }, { x: 15, y: 75 },
    { x: 50, y: 20 }, { x: 50, y: 40 }, { x: 50, y: 60 }, { x: 50, y: 80 },
    { x: 85, y: 35 }, { x: 85, y: 65 }
  ];
  
  const connections: [number, number][] = [
    [0, 3], [0, 4], [0, 5], [0, 6],
    [1, 3], [1, 4], [1, 5], [1, 6],
    [2, 3], [2, 4], [2, 5], [2, 6],
    [3, 7], [3, 8], [4, 7], [4, 8], [5, 7], [5, 8], [6, 7], [6, 8]
  ];

  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      {connections.map(([from, to], idx) => (
        <line
          key={idx}
          x1={nodes[from].x}
          y1={nodes[from].y}
          x2={nodes[to].x}
          y2={nodes[to].y}
          stroke="hsl(217 100% 60% / 0.2)"
          strokeWidth="0.5"
        />
      ))}
      {nodes.map((node, idx) => (
        <circle
          key={idx}
          cx={node.x}
          cy={node.y}
          r="4"
          fill={idx < 3 || idx > 6 ? "hsl(217 100% 60% / 0.6)" : "hsl(217 100% 70% / 0.6)"}
        />
      ))}
    </svg>
  );
};

const CondensateSVG = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100">
    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => {
      const angle = (i / 12) * Math.PI * 2;
      const r = 30 + Math.sin(i * 2) * 10;
      return (
        <circle
          key={i}
          cx={50 + Math.cos(angle) * r}
          cy={50 + Math.sin(angle) * r}
          r={3 + Math.sin(i) * 2}
          fill="hsl(217 100% 60% / 0.4)"
        />
      );
    })}
    <circle cx="50" cy="50" r="15" fill="none" stroke="hsl(217 100% 70% / 0.3)" strokeWidth="0.5" strokeDasharray="2 2" />
    <circle cx="50" cy="50" r="5" fill="hsl(217 100% 60% / 0.6)" />
  </svg>
);

const GravitySVG = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100">
    {[0, 1, 2, 3, 4, 5, 6].map((i) => {
      const y = 20 + i * 10;
      const curve = Math.sin((i - 3) * 0.5) * 15;
      return (
        <path
          key={`h-${i}`}
          d={`M 10 ${y} Q 50 ${y + curve} 90 ${y}`}
          fill="none"
          stroke="hsl(217 100% 60% / 0.3)"
          strokeWidth="0.5"
        />
      );
    })}
    {[0, 1, 2, 3, 4, 5, 6].map((i) => {
      const x = 20 + i * 10;
      const curve = Math.sin((i - 3) * 0.5) * 15;
      return (
        <path
          key={`v-${i}`}
          d={`M ${x} 10 Q ${x + curve} 50 ${x} 90`}
          fill="none"
          stroke="hsl(217 100% 70% / 0.3)"
          strokeWidth="0.5"
        />
      );
    })}
    <circle cx="50" cy="50" r="8" fill="hsl(217 100% 60% / 0.5)" />
    <circle cx="50" cy="50" r="12" fill="none" stroke="hsl(217 100% 60% / 0.3)" strokeWidth="0.5" />
  </svg>
);

const ShapeComponent = ({ type, size }: { type: GeometricShape['type']; size: number }) => {
  switch (type) {
    case 'hypersphere': return <HypersphereSVG size={size} />;
    case 'torus': return <TorusSVG size={size} />;
    case 'icosahedron': return <IcosahedronSVG size={size} />;
    case 'neural': return <NeuralNetworkSVG size={size} />;
    case 'condensate': return <CondensateSVG size={size} />;
    case 'gravity': return <GravitySVG size={size} />;
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
