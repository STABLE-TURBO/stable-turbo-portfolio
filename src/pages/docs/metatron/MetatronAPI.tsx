import { DocsLayout } from "@/components/docs/DocsLayout";
import { CodeBlock } from "@/components/docs/CodeBlock";

const MetatronAPI = () => {
  return (
    <DocsLayout project="metatron">
      <div className="space-y-8">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold">API Reference</h1>
          <p className="text-xl text-muted-foreground">
            Complete API documentation for Metatron.
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Core Functions</h2>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-mono text-primary">metatron.init()</h3>
            <p className="text-muted-foreground">Initialize a Metatron project.</p>
            <CodeBlock 
              code={`mt.init(
    project: str,                    # Project name
    remote: str = None,              # Remote storage URL
    cache_dir: str = None,           # Local cache directory
    cache_size_gb: int = 5           # Max cache size
)`}
              language="python"
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-mono text-primary">metatron.experiment()</h3>
            <p className="text-muted-foreground">Create a new experiment context.</p>
            <CodeBlock 
              code={`with mt.experiment(
    name: str,                       # Experiment name
    tags: Dict[str, str] = None,     # Optional tags
    description: str = None          # Optional description
) as exp:
    # Experiment methods
    exp.log_params(params: Dict)     # Log hyperparameters
    exp.log_metrics(metrics: Dict)   # Log evaluation metrics
    exp.log_artifact(path: str)      # Log file artifact
    exp.log_model(model, name: str)  # Log model`}
              language="python"
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-mono text-primary">metatron.register_model()</h3>
            <p className="text-muted-foreground">Register a model in the registry.</p>
            <CodeBlock 
              code={`version = mt.register_model(
    model: Any,                      # Model object
    name: str,                       # Model name
    description: str = None,         # Description
    tags: Dict[str, str] = None,     # Tags
    metadata: Dict = None,           # Custom metadata
    compression: str = "lz4"         # Compression method
) -> ModelVersion`}
              language="python"
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-mono text-primary">metatron.load_model()</h3>
            <p className="text-muted-foreground">Load a model from the registry.</p>
            <CodeBlock 
              code={`model = mt.load_model(
    name: str,                       # Model name
    version: int = None,             # Specific version (latest if None)
    stage: str = None                # Or load by stage
) -> Any`}
              language="python"
            />
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold">ModelVersion Class</h2>
          <CodeBlock 
            code={`class ModelVersion:
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
    def download(path: str)          # Download to local path`}
            language="python"
          />
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Query Functions</h2>
          <CodeBlock 
            code={`# List experiments
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
) -> Comparison`}
            language="python"
          />
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold">REST API</h2>
          <p className="text-muted-foreground">
            Metatron also provides a REST API for programmatic access:
          </p>
          <CodeBlock 
            code={`# List models
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
{"stage": "production"}`}
            language="http"
          />
        </section>
      </div>
    </DocsLayout>
  );
};

export default MetatronAPI;
