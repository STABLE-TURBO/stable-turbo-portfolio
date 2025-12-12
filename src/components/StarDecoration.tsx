import { cn } from "@/lib/utils";

interface StarDecorationProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const StarDecoration = ({ className, size = "md" }: StarDecorationProps) => {
  const sizeClasses = {
    sm: "w-3 h-3",
    md: "w-5 h-5",
    lg: "w-8 h-8",
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={cn(sizeClasses[size], "star-glow", className)}
    >
      <path
        d="M12 2L12 22M2 12L22 12M4.93 4.93L19.07 19.07M19.07 4.93L4.93 19.07"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="text-star"
      />
    </svg>
  );
};
