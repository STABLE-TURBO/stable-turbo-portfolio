import { DocsLayout } from "@/components/docs/DocsLayout";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Shield, Cpu } from "lucide-react";

const NeuralIndex = () => {
  return (
    <DocsLayout project="neural">
      <div className="space-y-12">
        {/* Header */}
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
            <Zap className="w-4 h-4" />
            v2.0 Released
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">
            Neural Documentation
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A high-performance neural network framework designed for rapid prototyping 
            and production deployment. Build, train, and deploy AI models with ease.
          </p>
        </header>

        {/* Quick Install */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Quick Install</h2>
          <CodeBlock 
            code="pip install neural-framework" 
            language="bash"
          />
        </section>

        {/* Features Grid */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Why Neural?</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors">
              <Zap className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Blazing Fast</h3>
              <p className="text-muted-foreground text-sm">
                Optimized CUDA kernels and automatic mixed precision training 
                for maximum GPU utilization.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors">
              <Shield className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Production Ready</h3>
              <p className="text-muted-foreground text-sm">
                Built-in model versioning, A/B testing support, and 
                comprehensive monitoring tools.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors">
              <Cpu className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Flexible Architecture</h3>
              <p className="text-muted-foreground text-sm">
                Modular design lets you customize every layer while maintaining 
                high-level abstractions.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Example */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Quick Example</h2>
          <CodeBlock 
            filename="train.py"
            language="python"
            code={`from neural import Model, layers, optimizers

# Define your model
model = Model([
    layers.Dense(128, activation='relu'),
    layers.Dropout(0.3),
    layers.Dense(64, activation='relu'),
    layers.Dense(10, activation='softmax')
])

# Configure training
model.compile(
    optimizer=optimizers.Adam(lr=0.001),
    loss='categorical_crossentropy',
    metrics=['accuracy']
)

# Train with automatic GPU detection
model.fit(X_train, y_train, epochs=50, batch_size=32)`}
          />
        </section>

        {/* Next Steps */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Next Steps</h2>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/docs/neural/quickstart"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Quick Start Guide
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              to="/docs/neural/api"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-secondary transition-colors"
            >
              API Reference
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </DocsLayout>
  );
};

export default NeuralIndex;
