import { Button } from "@/components/ui/button";
import { Download, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const logos = [
  {
    name: "Full Logo (Dark BG)",
    description: "Complete logo with swoosh, tagline and effects",
    file: "/logos/stable-turbo-full.svg",
    preview: "/logos/stable-turbo-full.svg",
    bgClass: "bg-black"
  },
  {
    name: "Icon / Avatar",
    description: "Square icon for profile pictures and favicons",
    file: "/logos/stable-turbo-icon.svg",
    preview: "/logos/stable-turbo-icon.svg",
    bgClass: "bg-black"
  },
  {
    name: "Wordmark (Gradient)",
    description: "Text only with blue gradient on TURBO",
    file: "/logos/stable-turbo-wordmark.svg",
    preview: "/logos/stable-turbo-wordmark.svg",
    bgClass: "bg-black"
  },
  {
    name: "Wordmark (White)",
    description: "All white version for dark backgrounds",
    file: "/logos/stable-turbo-white.svg",
    preview: "/logos/stable-turbo-white.svg",
    bgClass: "bg-black"
  }
];

const BrandAssets = () => {
  const handleDownload = (url: string, filename: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="min-h-screen bg-background py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Brand <span className="text-gradient">Assets</span>
        </h1>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
          Download official STABLE TURBO logos for your projects, presentations, and social media profiles.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {logos.map((logo) => (
            <div 
              key={logo.name}
              className="rounded-xl border border-border overflow-hidden bg-card"
            >
              <div className={`${logo.bgClass} p-8 flex items-center justify-center min-h-[180px]`}>
                <img 
                  src={logo.preview} 
                  alt={logo.name}
                  className="max-w-full max-h-[120px] object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-1">{logo.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{logo.description}</p>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleDownload(logo.file, logo.file.split('/').pop() || 'logo.svg')}
                  className="gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download SVG
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-6 rounded-xl border border-border bg-card/50">
          <h2 className="text-xl font-semibold mb-3">Usage Guidelines</h2>
          <ul className="text-muted-foreground space-y-2 text-sm">
            <li>• Use the full logo on dark backgrounds for best visibility</li>
            <li>• The icon version works great for avatars and small spaces</li>
            <li>• Maintain clear space around the logo equal to the height of "ST"</li>
            <li>• Do not stretch, rotate, or alter the logo colors</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default BrandAssets;
