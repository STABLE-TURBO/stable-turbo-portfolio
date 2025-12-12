import { DocsLayout } from "@/components/docs/DocsLayout";
import { CodeBlock } from "@/components/docs/CodeBlock";

const MetatronVersionControl = () => {
  return (
    <DocsLayout project="metatron">
      <div className="space-y-8">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold">Version Control</h1>
          <p className="text-xl text-muted-foreground">
            Git-like version control for your ML models.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Core Concepts</h2>
          <div className="grid gap-4">
            <div className="p-4 rounded-lg border border-border bg-card">
              <h3 className="font-semibold text-primary mb-2">Model Registry</h3>
              <p className="text-sm text-muted-foreground">
                Central repository for all model versions. Each model is identified 
                by name and can have multiple versions.
              </p>
            </div>
            <div className="p-4 rounded-lg border border-border bg-card">
              <h3 className="font-semibold text-primary mb-2">Versions</h3>
              <p className="text-sm text-muted-foreground">
                Immutable snapshots of a model at a point in time. Includes weights, 
                architecture, and metadata.
              </p>
            </div>
            <div className="p-4 rounded-lg border border-border bg-card">
              <h3 className="font-semibold text-primary mb-2">Stages</h3>
              <p className="text-sm text-muted-foreground">
                Lifecycle stages like "development", "staging", "production". 
                Promote models through stages with full audit trail.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Registering Models</h2>
          <CodeBlock 
            filename="register.py"
            language="python"
            code={`import metatron as mt

mt.init(project="production-models")

# Register a new model
model_version = mt.register_model(
    model=trained_model,
    name="image-classifier",
    description="ResNet-50 trained on ImageNet",
    tags={"framework": "neural", "task": "classification"}
)

print(f"Registered: {model_version.name} v{model_version.version}")
# Output: Registered: image-classifier v1`}
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Loading Specific Versions</h2>
          <CodeBlock 
            filename="load.py"
            language="python"
            code={`import metatron as mt

mt.init(project="production-models")

# Load latest version
model = mt.load_model("image-classifier")

# Load specific version
model_v2 = mt.load_model("image-classifier", version=2)

# Load by stage
production_model = mt.load_model("image-classifier", stage="production")`}
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Stage Transitions</h2>
          <CodeBlock 
            filename="promote.py"
            language="python"
            code={`import metatron as mt

mt.init(project="production-models")

# Get model version
mv = mt.get_model_version("image-classifier", version=3)

# Promote to staging
mv.transition_to("staging")

# Run validation tests...
if validation_passed:
    # Promote to production
    mv.transition_to("production")
    
    # Archive old production version
    old_prod = mt.get_model_version("image-classifier", stage="production")
    old_prod.transition_to("archived")`}
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Comparing Versions</h2>
          <CodeBlock 
            filename="diff.py"
            language="python"
            code={`import metatron as mt

mt.init(project="production-models")

# Compare two versions
diff = mt.compare_models(
    "image-classifier",
    version_a=2,
    version_b=3
)

print(f"Architecture changed: {diff.architecture_changed}")
print(f"Parameter diff: {diff.param_count_diff}")
print(f"Metrics comparison:")
for metric, values in diff.metrics.items():
    print(f"  {metric}: {values['v2']:.4f} → {values['v3']:.4f}")`}
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">CLI Commands</h2>
          <CodeBlock 
            code={`# List all models
metatron models list

# Show model versions
metatron models versions image-classifier

# Promote model
metatron models promote image-classifier --version 3 --stage production

# Rollback
metatron models rollback image-classifier --to-version 2

# Export model
metatron models export image-classifier --version 3 --format onnx`}
            language="bash"
          />
        </section>
      </div>
    </DocsLayout>
  );
};

export default MetatronVersionControl;
