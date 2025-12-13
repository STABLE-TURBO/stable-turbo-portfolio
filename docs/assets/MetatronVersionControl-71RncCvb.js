import{j as e}from"./index-C-Qvuppe.js";import{D as o,C as s}from"./CodeBlock-BfJL8icf.js";const r=()=>e.jsx(o,{project:"metatron",children:e.jsxs("div",{className:"space-y-8",children:[e.jsxs("header",{className:"space-y-4",children:[e.jsx("h1",{className:"text-4xl font-bold",children:"Version Control"}),e.jsx("p",{className:"text-xl text-muted-foreground",children:"Git-like version control for your ML models."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"Core Concepts"}),e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{className:"p-4 rounded-lg border border-border bg-card",children:[e.jsx("h3",{className:"font-semibold text-primary mb-2",children:"Model Registry"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Central repository for all model versions. Each model is identified by name and can have multiple versions."})]}),e.jsxs("div",{className:"p-4 rounded-lg border border-border bg-card",children:[e.jsx("h3",{className:"font-semibold text-primary mb-2",children:"Versions"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Immutable snapshots of a model at a point in time. Includes weights, architecture, and metadata."})]}),e.jsxs("div",{className:"p-4 rounded-lg border border-border bg-card",children:[e.jsx("h3",{className:"font-semibold text-primary mb-2",children:"Stages"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:'Lifecycle stages like "development", "staging", "production". Promote models through stages with full audit trail.'})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"Registering Models"}),e.jsx(s,{filename:"register.py",language:"python",code:`import metatron as mt

mt.init(project="production-models")

# Register a new model
model_version = mt.register_model(
    model=trained_model,
    name="image-classifier",
    description="ResNet-50 trained on ImageNet",
    tags={"framework": "neural", "task": "classification"}
)

print(f"Registered: {model_version.name} v{model_version.version}")
# Output: Registered: image-classifier v1`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"Loading Specific Versions"}),e.jsx(s,{filename:"load.py",language:"python",code:`import metatron as mt

mt.init(project="production-models")

# Load latest version
model = mt.load_model("image-classifier")

# Load specific version
model_v2 = mt.load_model("image-classifier", version=2)

# Load by stage
production_model = mt.load_model("image-classifier", stage="production")`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"Stage Transitions"}),e.jsx(s,{filename:"promote.py",language:"python",code:`import metatron as mt

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
    old_prod.transition_to("archived")`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"Comparing Versions"}),e.jsx(s,{filename:"diff.py",language:"python",code:`import metatron as mt

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
    print(f"  {metric}: {values['v2']:.4f} → {values['v3']:.4f}")`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"CLI Commands"}),e.jsx(s,{code:`# List all models
metatron models list

# Show model versions
metatron models versions image-classifier

# Promote model
metatron models promote image-classifier --version 3 --stage production

# Rollback
metatron models rollback image-classifier --to-version 2

# Export model
metatron models export image-classifier --version 3 --format onnx`,language:"bash"})]})]})});export{r as default};
