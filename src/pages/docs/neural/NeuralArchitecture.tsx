import { DocsLayout } from "@/components/docs/DocsLayout";
import { CodeBlock } from "@/components/docs/CodeBlock";

const NeuralArchitecture = () => {
  return (
    <DocsLayout project="neural">
      <div className="space-y-8">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold">Architecture</h1>
          <p className="text-xl text-muted-foreground">
            Understanding Neural's modular architecture and design patterns.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Core Components</h2>
          <div className="grid gap-4">
            <div className="p-6 rounded-xl border border-border bg-card">
              <h3 className="text-lg font-semibold text-primary mb-2">Model</h3>
              <p className="text-muted-foreground text-sm mb-4">
                The central container that holds layers and orchestrates training, 
                inference, and serialization.
              </p>
              <CodeBlock 
                code={`from neural import Model, Sequential

# Sequential API
model = Sequential([
    layers.Dense(64),
    layers.ReLU(),
    layers.Dense(10)
])

# Functional API
inputs = layers.Input(shape=(784,))
x = layers.Dense(64)(inputs)
x = layers.ReLU()(x)
outputs = layers.Dense(10)(x)
model = Model(inputs, outputs)`}
                language="python"
              />
            </div>

            <div className="p-6 rounded-xl border border-border bg-card">
              <h3 className="text-lg font-semibold text-primary mb-2">Layers</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Building blocks with automatic shape inference and gradient computation.
              </p>
              <CodeBlock 
                code={`from neural import layers

# Core layers
layers.Dense(units, activation=None)
layers.Conv2D(filters, kernel_size, strides=1)
layers.LSTM(units, return_sequences=False)
layers.Attention(num_heads, key_dim)

# Normalization
layers.BatchNorm()
layers.LayerNorm()
layers.GroupNorm(groups=8)

# Regularization
layers.Dropout(rate)
layers.SpatialDropout2D(rate)`}
                language="python"
              />
            </div>

            <div className="p-6 rounded-xl border border-border bg-card">
              <h3 className="text-lg font-semibold text-primary mb-2">Optimizers</h3>
              <p className="text-muted-foreground text-sm mb-4">
                State-of-the-art optimizers with learning rate scheduling.
              </p>
              <CodeBlock 
                code={`from neural.optimizers import Adam, SGD, AdamW
from neural.schedulers import CosineAnnealing, WarmupLinear

optimizer = AdamW(
    learning_rate=3e-4,
    weight_decay=0.01,
    betas=(0.9, 0.999)
)

scheduler = WarmupLinear(
    optimizer,
    warmup_steps=1000,
    total_steps=10000
)`}
                language="python"
              />
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Execution Engine</h2>
          <p className="text-muted-foreground">
            Neural uses a graph-based execution engine with automatic optimization:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Automatic operator fusion for reduced memory transfers</li>
            <li>Dynamic batching for variable-length sequences</li>
            <li>Mixed precision training with automatic loss scaling</li>
            <li>Gradient checkpointing for memory-efficient training</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Custom Layers</h2>
          <p className="text-muted-foreground">
            Create custom layers by extending the base Layer class:
          </p>
          <CodeBlock 
            filename="custom_layer.py"
            language="python"
            code={`from neural import layers
import neural.ops as ops

class ResidualBlock(layers.Layer):
    def __init__(self, units):
        super().__init__()
        self.dense1 = layers.Dense(units)
        self.dense2 = layers.Dense(units)
        self.norm = layers.LayerNorm()
        
    def forward(self, x):
        residual = x
        x = self.dense1(x)
        x = ops.relu(x)
        x = self.dense2(x)
        x = self.norm(x + residual)
        return ops.relu(x)`}
          />
        </section>
      </div>
    </DocsLayout>
  );
};

export default NeuralArchitecture;
