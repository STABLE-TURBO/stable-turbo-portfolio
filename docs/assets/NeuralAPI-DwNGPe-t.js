import{j as e}from"./index-CCB1KzH_.js";import{D as a,C as s}from"./CodeBlock-YvfAWVXH.js";const l=()=>e.jsx(a,{project:"neural",children:e.jsxs("div",{className:"space-y-8",children:[e.jsxs("header",{className:"space-y-4",children:[e.jsx("h1",{className:"text-4xl font-bold",children:"API Reference"}),e.jsx("p",{className:"text-xl text-muted-foreground",children:"Complete API documentation for the Neural framework."})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"neural.Model"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold font-mono text-primary",children:"Model.compile()"}),e.jsx("p",{className:"text-muted-foreground",children:"Configure the model for training."}),e.jsx(s,{code:`model.compile(
    optimizer: Optimizer | str,      # Optimizer instance or name
    loss: Loss | str,                # Loss function
    metrics: List[Metric | str],     # Metrics to track
    run_eagerly: bool = False,       # Disable graph compilation
    jit_compile: bool = True         # Enable XLA compilation
)`,language:"python"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold font-mono text-primary",children:"Model.fit()"}),e.jsx("p",{className:"text-muted-foreground",children:"Train the model on data."}),e.jsx(s,{code:`history = model.fit(
    x: Array,                        # Training features
    y: Array,                        # Training labels
    batch_size: int = 32,            # Samples per batch
    epochs: int = 1,                 # Training epochs
    validation_split: float = 0.0,   # Fraction for validation
    validation_data: Tuple = None,   # Explicit validation set
    callbacks: List[Callback] = [],  # Training callbacks
    verbose: int = 1                 # Logging verbosity
) -> History`,language:"python"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold font-mono text-primary",children:"Model.predict()"}),e.jsx("p",{className:"text-muted-foreground",children:"Generate predictions for input samples."}),e.jsx(s,{code:`predictions = model.predict(
    x: Array,                        # Input features
    batch_size: int = 32,            # Prediction batch size
    verbose: int = 0                 # Logging verbosity
) -> Array`,language:"python"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold font-mono text-primary",children:"Model.evaluate()"}),e.jsx("p",{className:"text-muted-foreground",children:"Compute loss and metrics on a dataset."}),e.jsx(s,{code:`loss, *metrics = model.evaluate(
    x: Array,                        # Input features  
    y: Array,                        # True labels
    batch_size: int = 32,            # Evaluation batch size
    verbose: int = 1                 # Logging verbosity
) -> Tuple[float, ...]`,language:"python"})]})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"neural.layers"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-border",children:[e.jsx("th",{className:"text-left py-3 px-4 font-semibold",children:"Layer"}),e.jsx("th",{className:"text-left py-3 px-4 font-semibold",children:"Description"}),e.jsx("th",{className:"text-left py-3 px-4 font-semibold",children:"Parameters"})]})}),e.jsxs("tbody",{className:"text-muted-foreground",children:[e.jsxs("tr",{className:"border-b border-border/50",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-primary",children:"Dense"}),e.jsx("td",{className:"py-3 px-4",children:"Fully connected layer"}),e.jsx("td",{className:"py-3 px-4",children:"units, activation, use_bias"})]}),e.jsxs("tr",{className:"border-b border-border/50",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-primary",children:"Conv2D"}),e.jsx("td",{className:"py-3 px-4",children:"2D convolution layer"}),e.jsx("td",{className:"py-3 px-4",children:"filters, kernel_size, strides, padding"})]}),e.jsxs("tr",{className:"border-b border-border/50",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-primary",children:"LSTM"}),e.jsx("td",{className:"py-3 px-4",children:"Long Short-Term Memory"}),e.jsx("td",{className:"py-3 px-4",children:"units, return_sequences, dropout"})]}),e.jsxs("tr",{className:"border-b border-border/50",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-primary",children:"Attention"}),e.jsx("td",{className:"py-3 px-4",children:"Multi-head attention"}),e.jsx("td",{className:"py-3 px-4",children:"num_heads, key_dim, dropout"})]}),e.jsxs("tr",{className:"border-b border-border/50",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-primary",children:"Dropout"}),e.jsx("td",{className:"py-3 px-4",children:"Regularization layer"}),e.jsx("td",{className:"py-3 px-4",children:"rate"})]}),e.jsxs("tr",{className:"border-b border-border/50",children:[e.jsx("td",{className:"py-3 px-4 font-mono text-primary",children:"BatchNorm"}),e.jsx("td",{className:"py-3 px-4",children:"Batch normalization"}),e.jsx("td",{className:"py-3 px-4",children:"momentum, epsilon"})]})]})]})})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"neural.callbacks"}),e.jsx(s,{code:`from neural.callbacks import (
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
]`,language:"python"})]})]})});export{l as default};
