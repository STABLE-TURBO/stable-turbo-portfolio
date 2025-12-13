import { DocsSidebar } from "./DocsSidebar";
import { FloatingGeometry } from "../FloatingGeometry";
import { ParticleField } from "../ParticleField";

interface DocsLayoutProps {
  project: "neural" | "metatron";
  children: React.ReactNode;
}

export const DocsLayout = ({ project, children }: DocsLayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex relative overflow-hidden">
      <FloatingGeometry density="sparse" className="opacity-15 fixed inset-0" />
      <ParticleField className="opacity-10 fixed inset-0" />
      <DocsSidebar project={project} />
      <main className="flex-1 overflow-auto relative z-10">
        <div className="max-w-4xl mx-auto px-8 py-12">
          {children}
        </div>
      </main>
    </div>
  );
};
