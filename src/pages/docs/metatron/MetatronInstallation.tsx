import { DocsLayout } from "@/components/docs/DocsLayout";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { Check } from "lucide-react";

const MetatronInstallation = () => {
  return (
    <DocsLayout project="metatron">
      <div className="space-y-8">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold">Installation</h1>
          <p className="text-xl text-muted-foreground">
            Install and configure Metatron for your environment.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Requirements</h2>
          <ul className="space-y-2">
            {[
              "Python 3.8+",
              "pip 21.0+",
              "64-bit operating system",
            ].map((req) => (
              <li key={req} className="flex items-center gap-3 text-muted-foreground">
                <Check className="w-5 h-5 text-green-500" />
                {req}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">PyPI Installation</h2>
          <CodeBlock 
            code="pip install metatron"
            language="bash"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">With Cloud Storage</h2>
          <p className="text-muted-foreground">
            Install with optional cloud storage backends:
          </p>
          <CodeBlock 
            code={`# AWS S3 support
pip install "metatron[s3]"

# Google Cloud Storage
pip install "metatron[gcs]"

# Azure Blob Storage
pip install "metatron[azure]"

# All cloud backends
pip install "metatron[cloud]"`}
            language="bash"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Development Installation</h2>
          <CodeBlock 
            code={`git clone https://github.com/STABLE-TURBO/metatron.git
cd metatron
pip install -e ".[dev]"

# Run tests
pytest tests/ -v`}
            language="bash"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Configuration</h2>
          <p className="text-muted-foreground">
            Create a configuration file for default settings:
          </p>
          <CodeBlock 
            filename="~/.metatron/config.yaml"
            language="yaml"
            code={`# Default project settings
default_project: my-project

# Storage configuration
storage:
  backend: s3  # local, s3, gcs, azure
  bucket: my-metatron-bucket
  region: us-east-1

# UI settings
ui:
  port: 8080
  host: localhost

# Logging
logging:
  level: INFO
  format: "%(asctime)s - %(name)s - %(levelname)s - %(message)s"`}
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Verify Installation</h2>
          <CodeBlock 
            code={`python -c "import metatron; print(f'Metatron {metatron.__version__}')"

# Check CLI
metatron --version`}
            language="bash"
          />
        </section>
      </div>
    </DocsLayout>
  );
};

export default MetatronInstallation;
