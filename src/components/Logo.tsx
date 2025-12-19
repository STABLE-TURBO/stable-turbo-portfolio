interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo = ({ className = "", size = 'lg' }: LogoProps) => {
  const sizeClasses = {
    sm: 'w-32',
    md: 'w-44',
    lg: 'w-56',
    xl: 'w-72'
  };

  return (
    <svg 
      viewBox="0 0 320 100" 
      className={`${sizeClasses[size]} h-auto ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Warm amber gradient */}
        <linearGradient id="warmGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(35, 90%, 55%)" />
          <stop offset="100%" stopColor="hsl(20, 80%, 50%)" />
        </linearGradient>
        
        {/* Subtle glow */}
        <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Simple icon - abstract S mark */}
      <g transform="translate(15, 20)">
        <path 
          d="M20 0 L35 0 L35 25 L50 25 L50 40 L35 40 L35 60 L20 60 L20 35 L5 35 L5 20 L20 20 Z"
          fill="url(#warmGradient)"
          filter="url(#subtleGlow)"
        />
      </g>
      
      {/* STABLE text */}
      <text 
        x="80" 
        y="45" 
        fontFamily="'DM Sans', sans-serif" 
        fontSize="26" 
        fontWeight="600"
        fill="hsl(40, 20%, 95%)"
        letterSpacing="0.5"
      >
        STABLE
      </text>
      
      {/* TURBO text with gradient */}
      <text 
        x="80" 
        y="75" 
        fontFamily="'DM Sans', sans-serif" 
        fontSize="26" 
        fontWeight="700"
        fill="url(#warmGradient)"
        letterSpacing="0.5"
      >
        TURBO
      </text>
      
      {/* Simple accent line */}
      <line 
        x1="80" 
        y1="82" 
        x2="175" 
        y2="82" 
        stroke="url(#warmGradient)" 
        strokeWidth="2"
        opacity="0.4"
      />
      
      {/* Tagline */}
      <text 
        x="80" 
        y="95" 
        fontFamily="'DM Sans', sans-serif" 
        fontSize="8" 
        fontWeight="500"
        fill="hsl(30, 10%, 55%)"
        letterSpacing="2"
      >
        OPEN SOURCE INNOVATION
      </text>
    </svg>
  );
};