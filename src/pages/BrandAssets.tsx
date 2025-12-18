import { Button } from "@/components/ui/button";
import { Download, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const logos = [
  {
    name: "Full Logo (Dark BG)",
    description: "Complete logo with swoosh, tagline and effects",
    file: "/logos/stable-turbo-full.svg",
    preview: "/logos/stable-turbo-full.svg",
    bgClass: "bg-background",
    png: { width: 2400, height: 720, filename: "stable-turbo-full.png" },
  },
  {
    name: "Icon / Avatar",
    description: "Square icon for profile pictures and favicons",
    file: "/logos/stable-turbo-icon.svg",
    preview: "/logos/stable-turbo-icon.svg",
    bgClass: "bg-background",
    png: { width: 1024, height: 1024, filename: "stable-turbo-icon.png" },
  },
  {
    name: "Wordmark (Gradient)",
    description: "Text only with blue gradient on TURBO",
    file: "/logos/stable-turbo-wordmark.svg",
    preview: "/logos/stable-turbo-wordmark.svg",
    bgClass: "bg-background",
    png: { width: 2400, height: 360, filename: "stable-turbo-wordmark.png" },
  },
  {
    name: "Wordmark (White)",
    description: "All white version for dark backgrounds",
    file: "/logos/stable-turbo-white.svg",
    preview: "/logos/stable-turbo-white.svg",
    bgClass: "bg-background",
    png: { width: 2400, height: 360, filename: "stable-turbo-white.png" },
  },
];

const BrandAssets = () => {
  const downloadFile = (url: string, filename: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadPngFromSvg = async (svgUrl: string, filename: string, width: number, height: number) => {
    const res = await fetch(svgUrl);
    const svgText = await res.text();

    const svgBlob = new Blob([svgText], { type: "image/svg+xml;charset=utf-8" });
    const svgObjectUrl = URL.createObjectURL(svgBlob);

    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(img, 0, 0, width, height);
      URL.revokeObjectURL(svgObjectUrl);

      canvas.toBlob((blob) => {
        if (!blob) return;
        const pngUrl = URL.createObjectURL(blob);
        downloadFile(pngUrl, filename);
        setTimeout(() => URL.revokeObjectURL(pngUrl), 1000);
      }, "image/png");
    };

    img.src = svgObjectUrl;
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
                <div className="flex flex-wrap gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => downloadFile(logo.file, logo.file.split("/").pop() || "logo.svg")}
                    className="gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download SVG
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => void downloadPngFromSvg(logo.file, logo.png.filename, logo.png.width, logo.png.height)}
                    className="gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download PNG
                  </Button>
                </div>
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
