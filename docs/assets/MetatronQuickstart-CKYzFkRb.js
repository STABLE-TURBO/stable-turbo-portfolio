import{j as e}from"./index-CCB1KzH_.js";import{D as r,C as t}from"./CodeBlock-YvfAWVXH.js";const o=()=>e.jsx(r,{project:"metatron",children:e.jsxs("div",{className:"space-y-8",children:[e.jsxs("header",{className:"space-y-4",children:[e.jsx("h1",{className:"text-4xl font-bold",children:"Quick Start"}),e.jsx("p",{className:"text-xl text-muted-foreground",children:"Start tracking your ML experiments in minutes."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"1. Installation"}),e.jsx(t,{code:`pip install metatron

# Verify installation
metatron --version`,language:"bash"})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"2. Initialize Project"}),e.jsx("p",{className:"text-muted-foreground",children:"Create a new Metatron project in your directory:"}),e.jsx(t,{code:`import metatron as mt

# Initialize with local storage
mt.init(project="my-ml-project")

# Or connect to remote storage
mt.init(
    project="my-ml-project",
    remote="s3://my-bucket/metatron"
)`,language:"python"})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"3. Track an Experiment"}),e.jsx(t,{filename:"train.py",language:"python",code:`import metatron as mt
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
    
    print(f"Logged experiment with accuracy: {accuracy:.4f}")`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"4. View Results"}),e.jsx("p",{className:"text-muted-foreground",children:"Launch the Metatron UI to visualize your experiments:"}),e.jsx(t,{code:`# Start the UI server
metatron ui

# Opens http://localhost:8080`,language:"bash"})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"5. Compare Experiments"}),e.jsx(t,{filename:"compare.py",language:"python",code:`import metatron as mt

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
comparison.to_html("comparison_report.html")`})]}),e.jsxs("div",{className:"p-6 rounded-xl border border-primary/30 bg-primary/5",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"🚀 You're all set!"}),e.jsx("p",{className:"text-muted-foreground",children:"You've successfully tracked your first experiment. Check out the Version Control guide to learn about model versioning, or explore the Performance guide for optimization tips."})]})]})});export{o as default};
