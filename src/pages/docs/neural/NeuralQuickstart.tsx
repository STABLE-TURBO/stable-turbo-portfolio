import { DocsLayout } from "@/components/docs/DocsLayout";
import { CodeBlock } from "@/components/docs/CodeBlock";

const NeuralQuickstart = () => {
  return (
    <DocsLayout project="neural">
      <div className="space-y-8">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold">Quick Start</h1>
          <p className="text-xl text-muted-foreground">
            Get up and running with Neural in under 5 minutes.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">1. Installation</h2>
          <p className="text-muted-foreground">
            Install Neural using pip. We recommend using a virtual environment.
          </p>
          <CodeBlock 
            code={`# Create virtual environment
python -m venv neural-env
source neural-env/bin/activate  # On Windows: neural-env\\Scripts\\activate

# Install Neural
pip install neural-framework

# Verify installation
python -c "import neural; print(neural.__version__)"`}
            language="bash"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">2. Your First Model</h2>
          <p className="text-muted-foreground">
            Let's create a simple classification model for the MNIST dataset.
          </p>
          <CodeBlock 
            filename="mnist_example.py"
            language="python"
            code={`from neural import Model, layers
from neural.datasets import mnist
from neural.optimizers import Adam

# Load dataset
(X_train, y_train), (X_test, y_test) = mnist.load_data()

# Normalize pixel values
X_train = X_train.reshape(-1, 784) / 255.0
X_test = X_test.reshape(-1, 784) / 255.0

# Build model
model = Model([
    layers.Dense(256, activation='relu', input_shape=(784,)),
    layers.BatchNorm(),
    layers.Dropout(0.3),
    layers.Dense(128, activation='relu'),
    layers.Dropout(0.2),
    layers.Dense(10, activation='softmax')
])

# Compile and train
model.compile(
    optimizer=Adam(learning_rate=0.001),
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

history = model.fit(
    X_train, y_train,
    epochs=10,
    batch_size=64,
    validation_split=0.1
)

# Evaluate
test_loss, test_acc = model.evaluate(X_test, y_test)
print(f"Test accuracy: {test_acc:.4f}")`}
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">3. Training Output</h2>
          <p className="text-muted-foreground">
            You'll see progress like this during training:
          </p>
          <CodeBlock 
            code={`Epoch 1/10
━━━━━━━━━━━━━━━━━━━━ 100% [54000/54000] - 12s - loss: 0.3421 - accuracy: 0.8934
Epoch 2/10
━━━━━━━━━━━━━━━━━━━━ 100% [54000/54000] - 11s - loss: 0.1523 - accuracy: 0.9542
...
Test accuracy: 0.9812`}
            language="text"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">4. Save & Load Models</h2>
          <CodeBlock 
            filename="save_load.py"
            language="python"
            code={`# Save the model
model.save('mnist_classifier.neural')

# Load for inference
from neural import load_model
loaded_model = load_model('mnist_classifier.neural')

# Make predictions
predictions = loaded_model.predict(X_test[:5])
print("Predicted classes:", predictions.argmax(axis=1))`}
          />
        </section>

        <div className="p-6 rounded-xl border border-primary/30 bg-primary/5">
          <h3 className="text-lg font-semibold mb-2">🎉 Congratulations!</h3>
          <p className="text-muted-foreground">
            You've trained your first Neural model. Check out the Architecture guide 
            to learn about advanced model configurations, or explore the API Reference 
            for detailed documentation.
          </p>
        </div>
      </div>
    </DocsLayout>
  );
};

export default NeuralQuickstart;
