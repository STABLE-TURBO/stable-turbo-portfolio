import{j as e,T as l}from"./index-CCB1KzH_.js";import{D as t,b as n,C as s}from"./CodeBlock-YvfAWVXH.js";const c=()=>e.jsx(t,{project:"neural",children:e.jsxs("div",{className:"space-y-8",children:[e.jsxs("header",{className:"space-y-4",children:[e.jsx("h1",{className:"text-4xl font-bold",children:"Installation"}),e.jsx("p",{className:"text-xl text-muted-foreground",children:"Detailed installation instructions for all platforms and configurations."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"Requirements"}),e.jsx("ul",{className:"space-y-2",children:["Python 3.8 or higher","pip 21.0 or higher","CUDA 11.0+ (for GPU support)","8GB RAM minimum (16GB recommended)"].map(a=>e.jsxs("li",{className:"flex items-center gap-3 text-muted-foreground",children:[e.jsx(n,{className:"w-5 h-5 text-green-500"}),a]},a))})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"Standard Installation"}),e.jsx(s,{code:"pip install neural-framework",language:"bash"})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"GPU Support"}),e.jsx("p",{className:"text-muted-foreground",children:"For NVIDIA GPU acceleration, install the CUDA-enabled version:"}),e.jsx(s,{code:`# For CUDA 11.x
pip install neural-framework[cuda11]

# For CUDA 12.x
pip install neural-framework[cuda12]`,language:"bash"}),e.jsxs("div",{className:"p-4 rounded-lg border border-yellow-500/30 bg-yellow-500/5 flex gap-3",children:[e.jsx(l,{className:"w-5 h-5 text-yellow-500 shrink-0 mt-0.5"}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Ensure your NVIDIA drivers are up to date. Run ",e.jsx("code",{className:"px-1.5 py-0.5 rounded bg-secondary font-mono text-xs",children:"nvidia-smi"})," to check your CUDA version."]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"Development Installation"}),e.jsx("p",{className:"text-muted-foreground",children:"To contribute or modify Neural, install from source:"}),e.jsx(s,{code:`git clone https://github.com/STABLE-TURBO/neural.git
cd neural
pip install -e ".[dev]"

# Run tests to verify
pytest tests/`,language:"bash"})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"Docker Installation"}),e.jsx(s,{filename:"docker-compose.yml",language:"yaml",code:`version: '3.8'
services:
  neural:
    image: stableturbo/neural:latest
    runtime: nvidia  # For GPU support
    volumes:
      - ./models:/app/models
      - ./data:/app/data
    environment:
      - NEURAL_GPU_MEMORY_FRACTION=0.8`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"Verify Installation"}),e.jsx(s,{code:`python -c "
import neural
print(f'Neural version: {neural.__version__}')
print(f'GPU available: {neural.cuda.is_available()}')
print(f'GPU count: {neural.cuda.device_count()}')
"`,language:"bash"})]})]})});export{c as default};
