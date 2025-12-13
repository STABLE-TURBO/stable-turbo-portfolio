import{j as e}from"./index-CCB1KzH_.js";import{D as r,C as s}from"./CodeBlock-YvfAWVXH.js";const n=()=>e.jsx(r,{project:"neural",children:e.jsxs("div",{className:"space-y-8",children:[e.jsxs("header",{className:"space-y-4",children:[e.jsx("h1",{className:"text-4xl font-bold",children:"Architecture"}),e.jsx("p",{className:"text-xl text-muted-foreground",children:"Understanding Neural's modular architecture and design patterns."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"Core Components"}),e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{className:"p-6 rounded-xl border border-border bg-card",children:[e.jsx("h3",{className:"text-lg font-semibold text-primary mb-2",children:"Model"}),e.jsx("p",{className:"text-muted-foreground text-sm mb-4",children:"The central container that holds layers and orchestrates training, inference, and serialization."}),e.jsx(s,{code:`from neural import Model, Sequential

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
model = Model(inputs, outputs)`,language:"python"})]}),e.jsxs("div",{className:"p-6 rounded-xl border border-border bg-card",children:[e.jsx("h3",{className:"text-lg font-semibold text-primary mb-2",children:"Layers"}),e.jsx("p",{className:"text-muted-foreground text-sm mb-4",children:"Building blocks with automatic shape inference and gradient computation."}),e.jsx(s,{code:`from neural import layers

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
layers.SpatialDropout2D(rate)`,language:"python"})]}),e.jsxs("div",{className:"p-6 rounded-xl border border-border bg-card",children:[e.jsx("h3",{className:"text-lg font-semibold text-primary mb-2",children:"Optimizers"}),e.jsx("p",{className:"text-muted-foreground text-sm mb-4",children:"State-of-the-art optimizers with learning rate scheduling."}),e.jsx(s,{code:`from neural.optimizers import Adam, SGD, AdamW
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
)`,language:"python"})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"Execution Engine"}),e.jsx("p",{className:"text-muted-foreground",children:"Neural uses a graph-based execution engine with automatic optimization:"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-muted-foreground",children:[e.jsx("li",{children:"Automatic operator fusion for reduced memory transfers"}),e.jsx("li",{children:"Dynamic batching for variable-length sequences"}),e.jsx("li",{children:"Mixed precision training with automatic loss scaling"}),e.jsx("li",{children:"Gradient checkpointing for memory-efficient training"})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"Custom Layers"}),e.jsx("p",{className:"text-muted-foreground",children:"Create custom layers by extending the base Layer class:"}),e.jsx(s,{filename:"custom_layer.py",language:"python",code:`from neural import layers
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
        return ops.relu(x)`})]})]})});export{n as default};
