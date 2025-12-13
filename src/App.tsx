import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import { trackPageview } from "@/lib/analytics";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const NeuralIndex = lazy(() => import("./pages/docs/neural/NeuralIndex"));
const NeuralQuickstart = lazy(() => import("./pages/docs/neural/NeuralQuickstart"));
const NeuralInstallation = lazy(() => import("./pages/docs/neural/NeuralInstallation"));
const NeuralArchitecture = lazy(() => import("./pages/docs/neural/NeuralArchitecture"));
const NeuralAPI = lazy(() => import("./pages/docs/neural/NeuralAPI"));
const NeuralExamples = lazy(() => import("./pages/docs/neural/NeuralExamples"));
const MetatronIndex = lazy(() => import("./pages/docs/metatron/MetatronIndex"));
const MetatronQuickstart = lazy(() => import("./pages/docs/metatron/MetatronQuickstart"));
const MetatronInstallation = lazy(() => import("./pages/docs/metatron/MetatronInstallation"));
const MetatronVersionControl = lazy(() => import("./pages/docs/metatron/MetatronVersionControl"));
const MetatronPerformance = lazy(() => import("./pages/docs/metatron/MetatronPerformance"));
const MetatronAPI = lazy(() => import("./pages/docs/metatron/MetatronAPI"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <RouteChangeTracker />
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/docs/neural" element={<NeuralIndex />} />
            <Route path="/docs/neural/quickstart" element={<NeuralQuickstart />} />
            <Route path="/docs/neural/installation" element={<NeuralInstallation />} />
            <Route path="/docs/neural/architecture" element={<NeuralArchitecture />} />
            <Route path="/docs/neural/api" element={<NeuralAPI />} />
            <Route path="/docs/neural/examples" element={<NeuralExamples />} />
            <Route path="/docs/metatron" element={<MetatronIndex />} />
            <Route path="/docs/metatron/quickstart" element={<MetatronQuickstart />} />
            <Route path="/docs/metatron/installation" element={<MetatronInstallation />} />
            <Route path="/docs/metatron/version-control" element={<MetatronVersionControl />} />
            <Route path="/docs/metatron/performance" element={<MetatronPerformance />} />
            <Route path="/docs/metatron/api" element={<MetatronAPI />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

const RouteChangeTracker = () => {
  const location = useLocation();
  const path = location.pathname + location.search + location.hash;
  globalThis.requestAnimationFrame(() => {
    trackPageview(path, document.referrer);
  });
  return null;
};
