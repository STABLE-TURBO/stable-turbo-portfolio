import { DocsLayout } from "@/components/docs/DocsLayout";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { Check, AlertTriangle } from "lucide-react";

const NeuralInstallation = () => {
  return (
    <DocsLayout project="neural">
      <div className="space-y-8">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold">Installation</h1>
          <p className="text-xl text-muted-foreground">
            Detailed installation instructions for all platforms and configurations.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Requirements</h2>
          <ul className="space-y-2">
            {[
              "Python 3.8 or higher",
              "pip 21.0 or higher",
              "CUDA 11.0+ (for GPU support)",
              "8GB RAM minimum (16GB recommended)",
            ].map((req) => (
              <li key={req} className="flex items-center gap-3 text-muted-foreground">
                <Check className="w-5 h-5 text-green-500" />
                {req}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Standard Installation</h2>
          <CodeBlock 
            code="pip install neural-framework"
            language="bash"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">GPU Support</h2>
          <p className="text-muted-foreground">
            For NVIDIA GPU acceleration, install the CUDA-enabled version:
          </p>
          <CodeBlock 
            code={`# For CUDA 11.x
pip install neural-framework[cuda11]

# For CUDA 12.x
pip install neural-framework[cuda12]`}
            language="bash"
          />
          <div className="p-4 rounded-lg border border-yellow-500/30 bg-yellow-500/5 flex gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              Ensure your NVIDIA drivers are up to date. Run <code className="px-1.5 py-0.5 rounded bg-secondary font-mono text-xs">nvidia-smi</code> to 
              check your CUDA version.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Development Installation</h2>
          <p className="text-muted-foreground">
            To contribute or modify Neural, install from source:
          </p>
          <CodeBlock 
            code={`git clone https://github.com/STABLE-TURBO/neural.git
cd neural
pip install -e ".[dev]"

# Run tests to verify
pytest tests/`}
            language="bash"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Docker Installation</h2>
          <CodeBlock 
            filename="docker-compose.yml"
            language="yaml"
            code={`version: '3.8'
services:
  neural:
    image: stableturbo/neural:latest
    runtime: nvidia  # For GPU support
    volumes:
      - ./models:/app/models
      - ./data:/app/data
    environment:
      - NEURAL_GPU_MEMORY_FRACTION=0.8`}
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Verify Installation</h2>
          <CodeBlock 
            code={`python -c "
import neural
print(f'Neural version: {neural.__version__}')
print(f'GPU available: {neural.cuda.is_available()}')
print(f'GPU count: {neural.cuda.device_count()}')
"`}
            language="bash"
          />
        </section>
      </div>
    </DocsLayout>
  );
};

export default NeuralInstallation;
