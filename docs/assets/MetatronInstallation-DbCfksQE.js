import{j as e}from"./index-C-Qvuppe.js";import{D as a,b as l,C as t}from"./CodeBlock-BfJL8icf.js";const c=()=>e.jsx(a,{project:"metatron",children:e.jsxs("div",{className:"space-y-8",children:[e.jsxs("header",{className:"space-y-4",children:[e.jsx("h1",{className:"text-4xl font-bold",children:"Installation"}),e.jsx("p",{className:"text-xl text-muted-foreground",children:"Install and configure Metatron for your environment."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"Requirements"}),e.jsx("ul",{className:"space-y-2",children:["Python 3.8+","pip 21.0+","64-bit operating system"].map(s=>e.jsxs("li",{className:"flex items-center gap-3 text-muted-foreground",children:[e.jsx(l,{className:"w-5 h-5 text-green-500"}),s]},s))})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"PyPI Installation"}),e.jsx(t,{code:"pip install metatron",language:"bash"})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"With Cloud Storage"}),e.jsx("p",{className:"text-muted-foreground",children:"Install with optional cloud storage backends:"}),e.jsx(t,{code:`# AWS S3 support
pip install "metatron[s3]"

# Google Cloud Storage
pip install "metatron[gcs]"

# Azure Blob Storage
pip install "metatron[azure]"

# All cloud backends
pip install "metatron[cloud]"`,language:"bash"})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"Development Installation"}),e.jsx(t,{code:`git clone https://github.com/STABLE-TURBO/metatron.git
cd metatron
pip install -e ".[dev]"

# Run tests
pytest tests/ -v`,language:"bash"})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"Configuration"}),e.jsx("p",{className:"text-muted-foreground",children:"Create a configuration file for default settings:"}),e.jsx(t,{filename:"~/.metatron/config.yaml",language:"yaml",code:`# Default project settings
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
  format: "%(asctime)s - %(name)s - %(levelname)s - %(message)s"`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"Verify Installation"}),e.jsx(t,{code:`python -c "import metatron; print(f'Metatron {metatron.__version__}')"

# Check CLI
metatron --version`,language:"bash"})]})]})});export{c as default};
