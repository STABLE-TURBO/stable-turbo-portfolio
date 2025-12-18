interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo = ({ className = "", size = 'lg' }: LogoProps) => {
  const sizeClasses = {
    sm: 'w-32',
    md: 'w-48',
    lg: 'w-64 md:w-80',
    xl: 'w-80 md:w-96 lg:w-[28rem]'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg viewBox="0 0 400 120" className="w-full h-auto">
        <defs>
          {/* Gradient for the turbo swoosh */}
          <linearGradient id="turboGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(217 100% 50%)" />
            <stop offset="50%" stopColor="hsl(217 100% 65%)" />
            <stop offset="100%" stopColor="hsl(200 100% 60%)" />
          </linearGradient>
          
          {/* Glow filter */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          {/* Stronger glow for accent elements */}
          <filter id="strongGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Turbo swoosh behind text */}
        <path
          d="M 165 82 Q 230 28, 300 60 T 380 52"
          fill="none"
          stroke="url(#turboGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          filter="url(#strongGlow)"
          opacity="0.8"
          className="animate-pulse"
        />
        
        {/* Orbital ring around S */}
        <ellipse
          cx="38"
          cy="60"
          rx="28"
          ry="12"
          fill="none"
          stroke="hsl(217 100% 60%)"
          strokeWidth="1.5"
          transform="rotate(-20 38 60)"
          filter="url(#glow)"
          opacity="0.6"
        />
        
        {/* STABLE text */}
        <text
          x="20"
          y="75"
          fontFamily="'Space Grotesk', 'Inter', system-ui, sans-serif"
          fontSize="48"
          fontWeight="700"
          fill="hsl(0 0% 98%)"
          letterSpacing="2"
        >
          STABLE
        </text>
        
        {/* TURBO text */}
        <text
          x="210"
          y="75"
          fontFamily="'Space Grotesk', 'Inter', system-ui, sans-serif"
          fontSize="48"
          fontWeight="700"
          fill="url(#turboGradient)"
          letterSpacing="2"
          filter="url(#glow)"
        >
          TURBO
        </text>
        
        {/* Speed lines */}
        <g opacity="0.5" filter="url(#glow)">
          <line x1="350" y1="40" x2="390" y2="35" stroke="hsl(217 100% 60%)" strokeWidth="2" strokeLinecap="round" />
          <line x1="355" y1="50" x2="395" y2="48" stroke="hsl(217 100% 65%)" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="352" y1="60" x2="388" y2="60" stroke="hsl(200 100% 60%)" strokeWidth="1" strokeLinecap="round" />
        </g>
        
        {/* Particle dots */}
        <g filter="url(#glow)">
          <circle cx="15" cy="40" r="2" fill="hsl(217 100% 60%)" opacity="0.7" />
          <circle cx="380" cy="75" r="2.5" fill="hsl(200 100% 60%)" opacity="0.6" />
          <circle cx="200" cy="25" r="1.5" fill="hsl(217 100% 70%)" opacity="0.5" />
        </g>
        
        {/* Tagline */}
        <text
          x="210"
          y="105"
          fontFamily="'Space Grotesk', 'Inter', system-ui, sans-serif"
          fontSize="12"
          fontWeight="400"
          fill="hsl(0 0% 70%)"
          textAnchor="middle"
          letterSpacing="6"
        >
          OPEN SOURCE INNOVATION
        </text>
      </svg>
    </div>
  );
};
