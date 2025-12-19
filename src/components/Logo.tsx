interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo = ({ className = "", size = 'lg' }: LogoProps) => {
  const sizeClasses = {
    sm: 'w-40',
    md: 'w-56',
    lg: 'w-72 md:w-96',
    xl: 'w-96 md:w-[30rem] lg:w-[36rem]'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg viewBox="0 0 480 100" className="w-full h-auto">
        <defs>
          {/* Vibrant cyan-to-purple gradient */}
          <linearGradient id="brandGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(185 100% 50%)" />
            <stop offset="50%" stopColor="hsl(220 100% 60%)" />
            <stop offset="100%" stopColor="hsl(270 100% 65%)" />
          </linearGradient>

          {/* Turbo gradient (static to avoid preview/build issues) */}
          <linearGradient id="turboGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(185 100% 55%)" />
            <stop offset="50%" stopColor="hsl(220 100% 60%)" />
            <stop offset="100%" stopColor="hsl(270 100% 70%)" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Strong glow for accent elements */}
          <filter id="strongGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Dynamic swoosh arc */}
        <path
          d="M 200 70 Q 280 15, 360 45 T 460 35"
          fill="none"
          stroke="url(#turboGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          filter="url(#strongGlow)"
          opacity="0.9"
        />

        {/* Secondary swoosh */}
        <path
          d="M 220 75 Q 290 25, 370 50 T 455 42"
          fill="none"
          stroke="url(#brandGradient)"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.4"
        />

        {/* Orbital ring around S */}
        <ellipse
          cx="42"
          cy="50"
          rx="32"
          ry="12"
          fill="none"
          stroke="hsl(185 100% 50%)"
          strokeWidth="1.5"
          transform="rotate(-18 42 50)"
          filter="url(#glow)"
          opacity="0.7"
        />

        {/* STABLE text */}
        <text
          x="20"
          y="62"
          fontFamily="'Sora', 'Outfit', system-ui, sans-serif"
          fontSize="52"
          fontWeight="700"
          fill="hsl(0 0% 98%)"
          letterSpacing="3"
        >
          STABLE
        </text>

        {/* TURBO text with gradient */}
        <text
          x="255"
          y="62"
          fontFamily="'Sora', 'Outfit', system-ui, sans-serif"
          fontSize="52"
          fontWeight="800"
          fill="url(#turboGradient)"
          letterSpacing="3"
          filter="url(#glow)"
        >
          TURBO
        </text>
        
        {/* Speed accent lines */}
        <g opacity="0.6" filter="url(#glow)">
          <line x1="420" y1="28" x2="465" y2="22" stroke="hsl(185 100% 55%)" strokeWidth="2" strokeLinecap="round" />
          <line x1="425" y1="38" x2="460" y2="35" stroke="hsl(220 100% 60%)" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="422" y1="48" x2="455" y2="47" stroke="hsl(270 100% 65%)" strokeWidth="1" strokeLinecap="round" />
        </g>
        
        {/* Particle dots */}
        <g filter="url(#glow)">
          <circle cx="12" cy="35" r="2" fill="hsl(185 100% 55%)" opacity="0.8" />
          <circle cx="468" cy="60" r="2.5" fill="hsl(270 100% 65%)" opacity="0.7" />
          <circle cx="240" cy="18" r="1.5" fill="hsl(220 100% 60%)" opacity="0.6" />
          <circle cx="380" cy="75" r="1.5" fill="hsl(185 100% 50%)" opacity="0.5" />
        </g>
        
        {/* Tagline */}
        <text
          x="240"
          y="92"
          fontFamily="'Outfit', system-ui, sans-serif"
          fontSize="11"
          fontWeight="500"
          fill="hsl(0 0% 60%)"
          textAnchor="middle"
          letterSpacing="5"
        >
          OPEN SOURCE INNOVATION
        </text>
      </svg>
    </div>
  );
};
