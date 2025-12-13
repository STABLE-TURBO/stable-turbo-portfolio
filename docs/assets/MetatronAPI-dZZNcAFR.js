import{j as e}from"./index-C-Qvuppe.js";import{D as s,C as t}from"./CodeBlock-BfJL8icf.js";const r=()=>e.jsx(s,{project:"metatron",children:e.jsxs("div",{className:"space-y-8",children:[e.jsxs("header",{className:"space-y-4",children:[e.jsx("h1",{className:"text-4xl font-bold",children:"API Reference"}),e.jsx("p",{className:"text-xl text-muted-foreground",children:"Complete API documentation for Metatron."})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"Core Functions"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold font-mono text-primary",children:"metatron.init()"}),e.jsx("p",{className:"text-muted-foreground",children:"Initialize a Metatron project."}),e.jsx(t,{code:`mt.init(
    project: str,                    # Project name
    remote: str = None,              # Remote storage URL
    cache_dir: str = None,           # Local cache directory
    cache_size_gb: int = 5           # Max cache size
)`,language:"python"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold font-mono text-primary",children:"metatron.experiment()"}),e.jsx("p",{className:"text-muted-foreground",children:"Create a new experiment context."}),e.jsx(t,{code:`with mt.experiment(
    name: str,                       # Experiment name
    tags: Dict[str, str] = None,     # Optional tags
    description: str = None          # Optional description
) as exp:
    # Experiment methods
    exp.log_params(params: Dict)     # Log hyperparameters
    exp.log_metrics(metrics: Dict)   # Log evaluation metrics
    exp.log_artifact(path: str)      # Log file artifact
    exp.log_model(model, name: str)  # Log model`,language:"python"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold font-mono text-primary",children:"metatron.register_model()"}),e.jsx("p",{className:"text-muted-foreground",children:"Register a model in the registry."}),e.jsx(t,{code:`version = mt.register_model(
    model: Any,                      # Model object
    name: str,                       # Model name
    description: str = None,         # Description
    tags: Dict[str, str] = None,     # Tags
    metadata: Dict = None,           # Custom metadata
    compression: str = "lz4"         # Compression method
) -> ModelVersion`,language:"python"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold font-mono text-primary",children:"metatron.load_model()"}),e.jsx("p",{className:"text-muted-foreground",children:"Load a model from the registry."}),e.jsx(t,{code:`model = mt.load_model(
    name: str,                       # Model name
    version: int = None,             # Specific version (latest if None)
    stage: str = None                # Or load by stage
) -> Any`,language:"python"})]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"ModelVersion Class"}),e.jsx(t,{code:`class ModelVersion:
    name: str                        # Model name
    version: int                     # Version number
    stage: str                       # Current stage
    created_at: datetime             # Creation timestamp
    metrics: Dict[str, float]        # Associated metrics
    params: Dict[str, Any]           # Training parameters
    tags: Dict[str, str]             # Tags
    
    def transition_to(stage: str)    # Change stage
    def load() -> Any                # Load model weights
    def delete()                     # Delete this version
    def download(path: str)          # Download to local path`,language:"python"})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"Query Functions"}),e.jsx(t,{code:`# List experiments
experiments = mt.list_experiments(
    project: str = None,             # Filter by project
    tags: Dict = None,               # Filter by tags
    limit: int = 100                 # Max results
) -> List[Experiment]

# Search models
models = mt.search_models(
    name: str = None,                # Name pattern (glob)
    stage: str = None,               # Filter by stage
    tags: Dict = None,               # Filter by tags
    order_by: str = "created_at"     # Sort field
) -> List[ModelVersion]

# Compare experiments
comparison = mt.compare(
    experiment_names: List[str],     # Experiments to compare
    metrics: List[str] = None        # Metrics to include
) -> Comparison`,language:"python"})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"REST API"}),e.jsx("p",{className:"text-muted-foreground",children:"Metatron also provides a REST API for programmatic access:"}),e.jsx(t,{code:`# List models
GET /api/v1/models
Authorization: Bearer <token>

# Get model version
GET /api/v1/models/{name}/versions/{version}

# Download model
GET /api/v1/models/{name}/versions/{version}/download

# Register model
POST /api/v1/models
Content-Type: multipart/form-data

# Transition stage
PATCH /api/v1/models/{name}/versions/{version}
{"stage": "production"}`,language:"http"})]})]})});export{r as default};
