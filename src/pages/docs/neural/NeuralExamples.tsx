import { DocsLayout } from "@/components/docs/DocsLayout";
import { CodeBlock } from "@/components/docs/CodeBlock";

const NeuralExamples = () => {
  return (
    <DocsLayout project="neural">
      <div className="space-y-8">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold">Examples</h1>
          <p className="text-xl text-muted-foreground">
            Real-world examples and use cases for Neural.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Image Classification (CNN)</h2>
          <CodeBlock 
            filename="cnn_classifier.py"
            language="python"
            code={`from neural import Model, layers
from neural.datasets import cifar10

# Load CIFAR-10
(X_train, y_train), (X_test, y_test) = cifar10.load_data()

model = Model([
    # First conv block
    layers.Conv2D(32, 3, padding='same', input_shape=(32, 32, 3)),
    layers.BatchNorm(),
    layers.ReLU(),
    layers.MaxPool2D(2),
    
    # Second conv block  
    layers.Conv2D(64, 3, padding='same'),
    layers.BatchNorm(),
    layers.ReLU(),
    layers.MaxPool2D(2),
    
    # Third conv block
    layers.Conv2D(128, 3, padding='same'),
    layers.BatchNorm(),
    layers.ReLU(),
    layers.GlobalAvgPool2D(),
    
    # Classifier
    layers.Dense(256, activation='relu'),
    layers.Dropout(0.5),
    layers.Dense(10, activation='softmax')
])

model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

model.fit(X_train, y_train, epochs=50, validation_split=0.1)`}
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Text Classification (Transformer)</h2>
          <CodeBlock 
            filename="transformer_classifier.py"
            language="python"
            code={`from neural import Model, layers
from neural.text import Tokenizer

# Create tokenizer and encode texts
tokenizer = Tokenizer(vocab_size=10000)
tokenizer.fit_on_texts(train_texts)
X_train = tokenizer.texts_to_sequences(train_texts, maxlen=256)

model = Model([
    layers.Embedding(vocab_size=10000, embed_dim=128, input_length=256),
    layers.TransformerBlock(
        embed_dim=128,
        num_heads=4,
        ff_dim=256,
        dropout=0.1
    ),
    layers.GlobalAvgPool1D(),
    layers.Dense(64, activation='relu'),
    layers.Dropout(0.3),
    layers.Dense(num_classes, activation='softmax')
])

model.compile(
    optimizer='adamw',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

model.fit(X_train, y_train, epochs=10, batch_size=32)`}
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Time Series Forecasting (LSTM)</h2>
          <CodeBlock 
            filename="lstm_forecast.py"
            language="python"
            code={`from neural import Model, layers
import numpy as np

# Prepare sequences
def create_sequences(data, seq_length):
    X, y = [], []
    for i in range(len(data) - seq_length):
        X.append(data[i:i+seq_length])
        y.append(data[i+seq_length])
    return np.array(X), np.array(y)

X_train, y_train = create_sequences(train_data, seq_length=60)

model = Model([
    layers.LSTM(64, return_sequences=True, input_shape=(60, 1)),
    layers.Dropout(0.2),
    layers.LSTM(32, return_sequences=False),
    layers.Dropout(0.2),
    layers.Dense(16, activation='relu'),
    layers.Dense(1)
])

model.compile(optimizer='adam', loss='mse', metrics=['mae'])

model.fit(
    X_train, y_train,
    epochs=100,
    batch_size=32,
    validation_split=0.1,
    callbacks=[
        EarlyStopping(patience=10, restore_best_weights=True)
    ]
)`}
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Generative Adversarial Network</h2>
          <CodeBlock 
            filename="gan.py"
            language="python"
            code={`from neural import Model, layers
from neural.gan import GAN

# Generator
generator = Model([
    layers.Dense(256, input_shape=(100,)),
    layers.LeakyReLU(0.2),
    layers.Dense(512),
    layers.LeakyReLU(0.2),
    layers.Dense(1024),
    layers.LeakyReLU(0.2),
    layers.Dense(784, activation='tanh'),
    layers.Reshape((28, 28, 1))
])

# Discriminator
discriminator = Model([
    layers.Flatten(input_shape=(28, 28, 1)),
    layers.Dense(512),
    layers.LeakyReLU(0.2),
    layers.Dropout(0.3),
    layers.Dense(256),
    layers.LeakyReLU(0.2),
    layers.Dropout(0.3),
    layers.Dense(1, activation='sigmoid')
])

# Create and train GAN
gan = GAN(generator, discriminator)
gan.compile(
    g_optimizer='adam',
    d_optimizer='adam',
    loss='binary_crossentropy'
)

gan.fit(X_train, epochs=100, batch_size=64)`}
          />
        </section>
      </div>
    </DocsLayout>
  );
};

export default NeuralExamples;
