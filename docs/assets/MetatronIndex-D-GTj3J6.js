import{c as o,j as e,Z as i,L as s}from"./index-CCB1KzH_.js";import{D as l,G as r,C as a}from"./CodeBlock-YvfAWVXH.js";import{A as t}from"./arrow-right-BDBoaGng.js";const n=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],c=o("database",n),p=()=>e.jsx(l,{project:"metatron",children:e.jsxs("div",{className:"space-y-12",children:[e.jsxs("header",{className:"space-y-4",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium",children:[e.jsx(r,{className:"w-4 h-4"}),"v1.5 Available"]}),e.jsx("h1",{className:"text-4xl md:text-5xl font-bold",children:"Metatron Documentation"}),e.jsx("p",{className:"text-xl text-muted-foreground max-w-2xl",children:"Advanced model versioning and experiment tracking system. Manage, compare, and deploy your ML models with confidence."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"Quick Install"}),e.jsx(a,{code:"pip install metatron",language:"bash"})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"Key Features"}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors",children:[e.jsx(r,{className:"w-8 h-8 text-primary mb-4"}),e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Model Versioning"}),e.jsx("p",{className:"text-muted-foreground text-sm",children:"Git-like version control for ML models. Branch, merge, and rollback with full history tracking."})]}),e.jsxs("div",{className:"p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors",children:[e.jsx(c,{className:"w-8 h-8 text-primary mb-4"}),e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Experiment Tracking"}),e.jsx("p",{className:"text-muted-foreground text-sm",children:"Automatic logging of parameters, metrics, and artifacts. Compare experiments with rich visualizations."})]}),e.jsxs("div",{className:"p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors",children:[e.jsx(i,{className:"w-8 h-8 text-primary mb-4"}),e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"One-Click Deploy"}),e.jsx("p",{className:"text-muted-foreground text-sm",children:"Deploy any model version to production with automatic rollback and A/B testing support."})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"Quick Example"}),e.jsx(a,{filename:"experiment.py",language:"python",code:`import metatron as mt
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
mt.compare(["resnet-v1", "resnet-v2"], metrics=["accuracy"])`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"Next Steps"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsxs(s,{to:"/docs/metatron/quickstart",className:"inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors",children:["Quick Start Guide",e.jsx(t,{className:"w-4 h-4"})]}),e.jsxs(s,{to:"/docs/metatron/version-control",className:"inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-secondary transition-colors",children:["Version Control",e.jsx(t,{className:"w-4 h-4"})]})]})]})]})});export{p as default};
