import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface LightningBolt {
  id: number;
  path: string;
  delay: number;
  duration: number;
  opacity: number;
  x: number;
}

const generateLightningPath = (startX: number, startY: number, endY: number): string => {
  const points: [number, number][] = [[startX, startY]];
  let currentY = startY;
  let currentX = startX;
  
  const segments = 8 + Math.floor(Math.random() * 6);
  const yStep = (endY - startY) / segments;
  
  for (let i = 0; i < segments; i++) {
    currentY += yStep;
    currentX += (Math.random() - 0.5) * 60;
    points.push([currentX, currentY]);
    
    // Add branch
    if (Math.random() > 0.7 && i > 2) {
      const branchLength = 30 + Math.random() * 50;
      const branchAngle = (Math.random() - 0.5) * Math.PI * 0.5;
      points.push([
        currentX + Math.cos(branchAngle) * branchLength,
        currentY + Math.sin(branchAngle) * branchLength * 0.5
      ]);
      points.push([currentX, currentY]);
    }
  }
  
  return points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0]} ${p[1]}`).join(' ');
};

interface LightningEffectProps {
  className?: string;
}

export const LightningEffect = ({ className }: LightningEffectProps) => {
  const [bolts, setBolts] = useState<LightningBolt[]>([]);

  useEffect(() => {
    const createBolt = () => {
      const x = Math.random() * 100;
      const newBolt: LightningBolt = {
        id: Date.now() + Math.random(),
        path: generateLightningPath(x, 0, 100),
        delay: 0,
        duration: 150 + Math.random() * 200,
        opacity: 0.6 + Math.random() * 0.4,
        x: 0,
      };
      
      setBolts(prev => [...prev.slice(-3), newBolt]);
      
      setTimeout(() => {
        setBolts(prev => prev.filter(b => b.id !== newBolt.id));
      }, newBolt.duration + 500);
    };

    const interval = setInterval(createBolt, 2000 + Math.random() * 3000);
    createBolt();
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}>
      <svg 
        className="w-full h-full" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="lightning-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <linearGradient id="lightning-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(217 100% 70%)" stopOpacity="0" />
            <stop offset="30%" stopColor="hsl(217 100% 80%)" stopOpacity="1" />
            <stop offset="70%" stopColor="hsl(217 100% 70%)" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(217 100% 60%)" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {bolts.map(bolt => (
          <g key={bolt.id}>
            {/* Glow layer */}
            <path
              d={bolt.path}
              fill="none"
              stroke="hsl(217 100% 70%)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#lightning-glow)"
              opacity={bolt.opacity * 0.5}
              className="animate-lightning-flash"
              style={{ animationDuration: `${bolt.duration}ms` }}
            />
            {/* Core bolt */}
            <path
              d={bolt.path}
              fill="none"
              stroke="hsl(0 0% 100%)"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity={bolt.opacity}
              className="animate-lightning-flash"
              style={{ animationDuration: `${bolt.duration}ms` }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
};
