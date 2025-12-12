import { DocsSidebar } from "./DocsSidebar";
import { LightningEffect } from "../LightningEffect";

interface DocsLayoutProps {
  project: "neural" | "metatron";
  children: React.ReactNode;
}

export const DocsLayout = ({ project, children }: DocsLayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex relative">
      <LightningEffect className="opacity-20" />
      <DocsSidebar project={project} />
      <main className="flex-1 overflow-auto">
        <div className="max-w-4xl mx-auto px-8 py-12">
          {children}
        </div>
      </main>
    </div>
  );
};
