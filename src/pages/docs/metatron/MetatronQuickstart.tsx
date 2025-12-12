import { DocsLayout } from "@/components/docs/DocsLayout";
import { CodeBlock } from "@/components/docs/CodeBlock";

const MetatronQuickstart = () => {
  return (
    <DocsLayout project="metatron">
      <div className="space-y-8">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold">Quick Start</h1>
          <p className="text-xl text-muted-foreground">
            Start tracking your ML experiments in minutes.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">1. Installation</h2>
          <CodeBlock 
            code={`pip install metatron

# Verify installation
metatron --version`}
            language="bash"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">2. Initialize Project</h2>
          <p className="text-muted-foreground">
            Create a new Metatron project in your directory:
          </p>
          <CodeBlock 
            code={`import metatron as mt

# Initialize with local storage
mt.init(project="my-ml-project")

# Or connect to remote storage
mt.init(
    project="my-ml-project",
    remote="s3://my-bucket/metatron"
)`}
            language="python"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">3. Track an Experiment</h2>
          <CodeBlock 
            filename="train.py"
            language="python"
            code={`import metatron as mt
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

mt.init(project="iris-classifier")

# Start experiment
with mt.experiment("random-forest-v1") as exp:
    # Log hyperparameters
    params = {
        "n_estimators": 100,
        "max_depth": 10,
        "random_state": 42
    }
    exp.log_params(params)
    
    # Train model
    model = RandomForestClassifier(**params)
    model.fit(X_train, y_train)
    
    # Evaluate and log metrics
    y_pred = model.predict(X_test)
    accuracy = accuracy_score(y_test, y_pred)
    
    exp.log_metrics({
        "accuracy": accuracy,
        "num_samples": len(X_train)
    })
    
    # Save the model
    exp.log_model(model, "rf_classifier")
    
    print(f"Logged experiment with accuracy: {accuracy:.4f}")`}
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">4. View Results</h2>
          <p className="text-muted-foreground">
            Launch the Metatron UI to visualize your experiments:
          </p>
          <CodeBlock 
            code={`# Start the UI server
metatron ui

# Opens http://localhost:8080`}
            language="bash"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">5. Compare Experiments</h2>
          <CodeBlock 
            filename="compare.py"
            language="python"
            code={`import metatron as mt

mt.init(project="iris-classifier")

# List all experiments
experiments = mt.list_experiments()
for exp in experiments:
    print(f"{exp.name}: accuracy={exp.metrics['accuracy']:.4f}")

# Compare specific experiments
comparison = mt.compare(
    ["random-forest-v1", "random-forest-v2"],
    metrics=["accuracy", "f1_score"]
)

# Generate comparison report
comparison.to_html("comparison_report.html")`}
          />
        </section>

        <div className="p-6 rounded-xl border border-primary/30 bg-primary/5">
          <h3 className="text-lg font-semibold mb-2">🚀 You're all set!</h3>
          <p className="text-muted-foreground">
            You've successfully tracked your first experiment. Check out the 
            Version Control guide to learn about model versioning, or explore 
            the Performance guide for optimization tips.
          </p>
        </div>
      </div>
    </DocsLayout>
  );
};

export default MetatronQuickstart;
