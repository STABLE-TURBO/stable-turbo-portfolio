import { DocsLayout } from "@/components/docs/DocsLayout";
import { CodeBlock } from "@/components/docs/CodeBlock";

const MetatronPerformance = () => {
  return (
    <DocsLayout project="metatron">
      <div className="space-y-8">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold">Performance</h1>
          <p className="text-xl text-muted-foreground">
            Optimize Metatron for large-scale ML workflows.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Lazy Loading</h2>
          <p className="text-muted-foreground">
            Load model metadata without loading weights for faster queries:
          </p>
          <CodeBlock 
            code={`import metatron as mt

# Fast metadata-only load
model_info = mt.get_model_info("large-transformer")
print(f"Size: {model_info.size_mb}MB")
print(f"Parameters: {model_info.param_count:,}")

# Load weights only when needed
if model_info.size_mb < 1000:
    model = model_info.load()`}
            language="python"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Caching</h2>
          <CodeBlock 
            code={`import metatron as mt

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
mt.cache.clear("classifier")  # Clear specific model`}
            language="python"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Parallel Uploads</h2>
          <CodeBlock 
            code={`import metatron as mt

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
)`}
            language="python"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Compression Options</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold">Method</th>
                  <th className="text-left py-3 px-4 font-semibold">Speed</th>
                  <th className="text-left py-3 px-4 font-semibold">Ratio</th>
                  <th className="text-left py-3 px-4 font-semibold">Use Case</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-mono text-primary">none</td>
                  <td className="py-3 px-4">Fastest</td>
                  <td className="py-3 px-4">1:1</td>
                  <td className="py-3 px-4">Fast iteration, local storage</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-mono text-primary">lz4</td>
                  <td className="py-3 px-4">Very Fast</td>
                  <td className="py-3 px-4">~2:1</td>
                  <td className="py-3 px-4">Default, balanced</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-mono text-primary">zstd</td>
                  <td className="py-3 px-4">Fast</td>
                  <td className="py-3 px-4">~3:1</td>
                  <td className="py-3 px-4">Cloud storage</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-mono text-primary">gzip</td>
                  <td className="py-3 px-4">Slow</td>
                  <td className="py-3 px-4">~4:1</td>
                  <td className="py-3 px-4">Archival</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Benchmarks</h2>
          <CodeBlock 
            code={`# Run performance benchmark
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
└────────────────┴───────────┴────────────┘`}
            language="text"
          />
        </section>
      </div>
    </DocsLayout>
  );
};

export default MetatronPerformance;
