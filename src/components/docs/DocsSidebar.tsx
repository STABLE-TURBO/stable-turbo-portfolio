import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Book, Code, Rocket, Settings, Zap, FileText, GitBranch, Cpu } from "lucide-react";

interface NavItem {
  title: string;
  href: string;
  icon: React.ElementType;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const neuralNav: NavSection[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs/neural", icon: Book },
      { title: "Quick Start", href: "/docs/neural/quickstart", icon: Rocket },
      { title: "Installation", href: "/docs/neural/installation", icon: Settings },
    ],
  },
  {
    title: "Core Concepts",
    items: [
      { title: "Architecture", href: "/docs/neural/architecture", icon: Cpu },
      { title: "API Reference", href: "/docs/neural/api", icon: Code },
      { title: "Examples", href: "/docs/neural/examples", icon: FileText },
    ],
  },
];

const metatronNav: NavSection[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs/metatron", icon: Book },
      { title: "Quick Start", href: "/docs/metatron/quickstart", icon: Rocket },
      { title: "Installation", href: "/docs/metatron/installation", icon: Settings },
    ],
  },
  {
    title: "Features",
    items: [
      { title: "Version Control", href: "/docs/metatron/version-control", icon: GitBranch },
      { title: "Performance", href: "/docs/metatron/performance", icon: Zap },
      { title: "API Reference", href: "/docs/metatron/api", icon: Code },
    ],
  },
];

interface DocsSidebarProps {
  project: "neural" | "metatron";
}

export const DocsSidebar = ({ project }: DocsSidebarProps) => {
  const location = useLocation();
  const nav = project === "neural" ? neuralNav : metatronNav;

  return (
    <aside className="w-64 shrink-0 border-r border-border bg-card/50 overflow-y-auto">
      <div className="p-6">
        <Link 
          to="/" 
          className="text-lg font-bold text-gradient hover:opacity-80 transition-opacity"
        >
          ← Back to Home
        </Link>
        <h2 className="mt-6 text-xl font-bold capitalize">{project} Docs</h2>
      </div>
      
      <nav className="px-4 pb-6">
        {nav.map((section) => (
          <div key={section.title} className="mb-6">
            <h3 className="px-3 mb-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              {section.title}
            </h3>
            <ul className="space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                
                return (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all",
                        isActive 
                          ? "bg-primary/20 text-primary font-medium" 
                          : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                      )}
                    >
                      <Icon className="w-4 h-4" />
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
};
