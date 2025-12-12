import { DocsLayout } from "@/components/docs/DocsLayout";
import { CodeBlock } from "@/components/docs/CodeBlock";

const NeuralAPI = () => {
  return (
    <DocsLayout project="neural">
      <div className="space-y-8">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold">API Reference</h1>
          <p className="text-xl text-muted-foreground">
            Complete API documentation for the Neural framework.
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold">neural.Model</h2>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-mono text-primary">Model.compile()</h3>
            <p className="text-muted-foreground">Configure the model for training.</p>
            <CodeBlock 
              code={`model.compile(
    optimizer: Optimizer | str,      # Optimizer instance or name
    loss: Loss | str,                # Loss function
    metrics: List[Metric | str],     # Metrics to track
    run_eagerly: bool = False,       # Disable graph compilation
    jit_compile: bool = True         # Enable XLA compilation
)`}
              language="python"
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-mono text-primary">Model.fit()</h3>
            <p className="text-muted-foreground">Train the model on data.</p>
            <CodeBlock 
              code={`history = model.fit(
    x: Array,                        # Training features
    y: Array,                        # Training labels
    batch_size: int = 32,            # Samples per batch
    epochs: int = 1,                 # Training epochs
    validation_split: float = 0.0,   # Fraction for validation
    validation_data: Tuple = None,   # Explicit validation set
    callbacks: List[Callback] = [],  # Training callbacks
    verbose: int = 1                 # Logging verbosity
) -> History`}
              language="python"
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-mono text-primary">Model.predict()</h3>
            <p className="text-muted-foreground">Generate predictions for input samples.</p>
            <CodeBlock 
              code={`predictions = model.predict(
    x: Array,                        # Input features
    batch_size: int = 32,            # Prediction batch size
    verbose: int = 0                 # Logging verbosity
) -> Array`}
              language="python"
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-mono text-primary">Model.evaluate()</h3>
            <p className="text-muted-foreground">Compute loss and metrics on a dataset.</p>
            <CodeBlock 
              code={`loss, *metrics = model.evaluate(
    x: Array,                        # Input features  
    y: Array,                        # True labels
    batch_size: int = 32,            # Evaluation batch size
    verbose: int = 1                 # Logging verbosity
) -> Tuple[float, ...]`}
              language="python"
            />
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold">neural.layers</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold">Layer</th>
                  <th className="text-left py-3 px-4 font-semibold">Description</th>
                  <th className="text-left py-3 px-4 font-semibold">Parameters</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-mono text-primary">Dense</td>
                  <td className="py-3 px-4">Fully connected layer</td>
                  <td className="py-3 px-4">units, activation, use_bias</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-mono text-primary">Conv2D</td>
                  <td className="py-3 px-4">2D convolution layer</td>
                  <td className="py-3 px-4">filters, kernel_size, strides, padding</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-mono text-primary">LSTM</td>
                  <td className="py-3 px-4">Long Short-Term Memory</td>
                  <td className="py-3 px-4">units, return_sequences, dropout</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-mono text-primary">Attention</td>
                  <td className="py-3 px-4">Multi-head attention</td>
                  <td className="py-3 px-4">num_heads, key_dim, dropout</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-mono text-primary">Dropout</td>
                  <td className="py-3 px-4">Regularization layer</td>
                  <td className="py-3 px-4">rate</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-mono text-primary">BatchNorm</td>
                  <td className="py-3 px-4">Batch normalization</td>
                  <td className="py-3 px-4">momentum, epsilon</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold">neural.callbacks</h2>
          <CodeBlock 
            code={`from neural.callbacks import (
    EarlyStopping,      # Stop when metric stops improving
    ModelCheckpoint,    # Save model during training
    TensorBoard,        # Log to TensorBoard
    LearningRateScheduler,  # Dynamic LR adjustment
    ReduceLROnPlateau   # Reduce LR when stuck
)

callbacks = [
    EarlyStopping(monitor='val_loss', patience=5),
    ModelCheckpoint('best_model.neural', save_best_only=True),
    ReduceLROnPlateau(factor=0.5, patience=3)
]`}
            language="python"
          />
        </section>
      </div>
    </DocsLayout>
  );
};

export default NeuralAPI;
