import{j as e}from"./index-CCB1KzH_.js";import{D as a,C as s}from"./CodeBlock-YvfAWVXH.js";const r=()=>e.jsx(a,{project:"metatron",children:e.jsxs("div",{className:"space-y-8",children:[e.jsxs("header",{className:"space-y-4",children:[e.jsx("h1",{className:"text-4xl font-bold",children:"Performance"}),e.jsx("p",{className:"text-xl text-muted-foreground",children:"Optimize Metatron for large-scale ML workflows."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"Lazy Loading"}),e.jsx("p",{className:"text-muted-foreground",children:"Load model metadata without loading weights for faster queries:"}),e.jsx(s,{code:`import metatron as mt

# Fast metadata-only load
model_info = mt.get_model_info("large-transformer")
print(f"Size: {model_info.size_mb}MB")
print(f"Parameters: {model_info.param_count:,}")

# Load weights only when needed
if model_info.size_mb < 1000:
    model = model_info.load()`,language:"python"})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"Caching"}),e.jsx(s,{code:`import metatron as mt

# Enable local caching
mt.init(
    project="my-project",
    cache_dir="~/.metatron/cache",
    cache_size_gb=10
)

# Models are cached after first load
model = mt.load_model("classifier")  # Downloads
model = mt.load_model("classifier")  # Uses cache

# Clear cache
mt.cache.clear()
mt.cache.clear("classifier")  # Clear specific model`,language:"python"})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"Parallel Uploads"}),e.jsx(s,{code:`import metatron as mt

mt.init(
    project="my-project",
    upload_threads=8,      # Parallel upload threads
    chunk_size_mb=100      # Chunk size for large models
)

# Large models are automatically chunked and uploaded in parallel
mt.register_model(
    large_model,
    name="gpt-xl",
    compression="lz4"      # Fast compression
)`,language:"python"})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"Compression Options"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-border",children:[e.jsx("th",{className:"text-left py-3 px-4 font-semibold",children:"Method"}),e.jsx("th",{className:"text-left py-3 px-4 font-semibold",children:"Speed"}),e.jsx("th",{className:"text-left py-3 px-4 font-semibold",children:"Ratio"}),e.jsx("th",{className:"text-left py-3 px-4 font-semibold",children:"Use Case"})]})}),e.jsxs("tbody",{className:"text-muted-foreground",children:[e.jsxs("tr",{className:"border-b border-border/50",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-primary",children:"none"}),e.jsx("td",{className:"py-3 px-4",children:"Fastest"}),e.jsx("td",{className:"py-3 px-4",children:"1:1"}),e.jsx("td",{className:"py-3 px-4",children:"Fast iteration, local storage"})]}),e.jsxs("tr",{className:"border-b border-border/50",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-primary",children:"lz4"}),e.jsx("td",{className:"py-3 px-4",children:"Very Fast"}),e.jsx("td",{className:"py-3 px-4",children:"~2:1"}),e.jsx("td",{className:"py-3 px-4",children:"Default, balanced"})]}),e.jsxs("tr",{className:"border-b border-border/50",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-primary",children:"zstd"}),e.jsx("td",{className:"py-3 px-4",children:"Fast"}),e.jsx("td",{className:"py-3 px-4",children:"~3:1"}),e.jsx("td",{className:"py-3 px-4",children:"Cloud storage"})]}),e.jsxs("tr",{className:"border-b border-border/50",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-primary",children:"gzip"}),e.jsx("td",{className:"py-3 px-4",children:"Slow"}),e.jsx("td",{className:"py-3 px-4",children:"~4:1"}),e.jsx("td",{className:"py-3 px-4",children:"Archival"})]})]})]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"Benchmarks"}),e.jsx(s,{code:`# Run performance benchmark
metatron benchmark --model-size 1GB --operations all

Results:
┌────────────────┬───────────┬────────────┐
│ Operation      │ Time      │ Throughput │
├────────────────┼───────────┼────────────┤
│ Register       │ 2.3s      │ 434 MB/s   │
│ Load (cached)  │ 0.8s      │ 1250 MB/s  │
│ Load (remote)  │ 12.4s     │ 80 MB/s    │
│ Compare        │ 0.2s      │ N/A        │
│ List (1000)    │ 0.05s     │ N/A        │
└────────────────┴───────────┴────────────┘`,language:"text"})]})]})});export{r as default};
