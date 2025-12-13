import{j as e}from"./index-CCB1KzH_.js";import{D as t,C as a}from"./CodeBlock-YvfAWVXH.js";const l=()=>e.jsx(t,{project:"neural",children:e.jsxs("div",{className:"space-y-8",children:[e.jsxs("header",{className:"space-y-4",children:[e.jsx("h1",{className:"text-4xl font-bold",children:"Quick Start"}),e.jsx("p",{className:"text-xl text-muted-foreground",children:"Get up and running with Neural in under 5 minutes."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"1. Installation"}),e.jsx("p",{className:"text-muted-foreground",children:"Install Neural using pip. We recommend using a virtual environment."}),e.jsx(a,{code:`# Create virtual environment
python -m venv neural-env
source neural-env/bin/activate  # On Windows: neural-env\\Scripts\\activate

# Install Neural
pip install neural-framework

# Verify installation
python -c "import neural; print(neural.__version__)"`,language:"bash"})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"2. Your First Model"}),e.jsx("p",{className:"text-muted-foreground",children:"Let's create a simple classification model for the MNIST dataset."}),e.jsx(a,{filename:"mnist_example.py",language:"python",code:`from neural import Model, layers
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
print(f"Test accuracy: {test_acc:.4f}")`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"3. Training Output"}),e.jsx("p",{className:"text-muted-foreground",children:"You'll see progress like this during training:"}),e.jsx(a,{code:`Epoch 1/10
━━━━━━━━━━━━━━━━━━━━ 100% [54000/54000] - 12s - loss: 0.3421 - accuracy: 0.8934
Epoch 2/10
━━━━━━━━━━━━━━━━━━━━ 100% [54000/54000] - 11s - loss: 0.1523 - accuracy: 0.9542
...
Test accuracy: 0.9812`,language:"text"})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"4. Save & Load Models"}),e.jsx(a,{filename:"save_load.py",language:"python",code:`# Save the model
model.save('mnist_classifier.neural')

# Load for inference
from neural import load_model
loaded_model = load_model('mnist_classifier.neural')

# Make predictions
predictions = loaded_model.predict(X_test[:5])
print("Predicted classes:", predictions.argmax(axis=1))`})]}),e.jsxs("div",{className:"p-6 rounded-xl border border-primary/30 bg-primary/5",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"🎉 Congratulations!"}),e.jsx("p",{className:"text-muted-foreground",children:"You've trained your first Neural model. Check out the Architecture guide to learn about advanced model configurations, or explore the API Reference for detailed documentation."})]})]})});export{l as default};
