import { DocsLayout } from "@/components/docs/DocsLayout";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { Link } from "react-router-dom";
import { ArrowRight, GitBranch, Zap, Database } from "lucide-react";

const MetatronIndex = () => {
  return (
    <DocsLayout project="metatron">
      <div className="space-y-12">
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
            <GitBranch className="w-4 h-4" />
            v1.5 Available
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">
            Metatron Documentation
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Advanced model versioning and experiment tracking system. 
            Manage, compare, and deploy your ML models with confidence.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Quick Install</h2>
          <CodeBlock 
            code="pip install metatron" 
            language="bash"
          />
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors">
              <GitBranch className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Model Versioning</h3>
              <p className="text-muted-foreground text-sm">
                Git-like version control for ML models. Branch, merge, and 
                rollback with full history tracking.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors">
              <Database className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Experiment Tracking</h3>
              <p className="text-muted-foreground text-sm">
                Automatic logging of parameters, metrics, and artifacts. 
                Compare experiments with rich visualizations.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors">
              <Zap className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">One-Click Deploy</h3>
              <p className="text-muted-foreground text-sm">
                Deploy any model version to production with automatic 
                rollback and A/B testing support.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Quick Example</h2>
          <CodeBlock 
            filename="experiment.py"
            language="python"
            code={`import metatron as mt
from neural import Model

# Initialize tracking
mt.init(project="image-classifier")

# Start an experiment
with mt.experiment("resnet-v2") as exp:
    # Log parameters
    exp.log_params({
        "learning_rate": 0.001,
        "batch_size": 32,
        "epochs": 50
    })
    
    # Train your model
    model = Model([...])
    history = model.fit(X_train, y_train)
    
    # Log metrics
    exp.log_metrics({
        "accuracy": history.accuracy[-1],
        "loss": history.loss[-1]
    })
    
    # Save model with version
    exp.log_model(model, "classifier")

# Compare experiments
mt.compare(["resnet-v1", "resnet-v2"], metrics=["accuracy"])`}
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Next Steps</h2>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/docs/metatron/quickstart"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Quick Start Guide
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              to="/docs/metatron/version-control"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-secondary transition-colors"
            >
              Version Control
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </DocsLayout>
  );
};

export default MetatronIndex;
