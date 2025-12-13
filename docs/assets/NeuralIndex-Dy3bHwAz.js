import{j as e,Z as s,S as t,L as r}from"./index-CCB1KzH_.js";import{D as l,C as a,a as o}from"./CodeBlock-YvfAWVXH.js";import{A as i}from"./arrow-right-BDBoaGng.js";const m=()=>e.jsx(l,{project:"neural",children:e.jsxs("div",{className:"space-y-12",children:[e.jsxs("header",{className:"space-y-4",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium",children:[e.jsx(s,{className:"w-4 h-4"}),"v2.0 Released"]}),e.jsx("h1",{className:"text-4xl md:text-5xl font-bold",children:"Neural Documentation"}),e.jsx("p",{className:"text-xl text-muted-foreground max-w-2xl",children:"A high-performance neural network framework designed for rapid prototyping and production deployment. Build, train, and deploy AI models with ease."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"Quick Install"}),e.jsx(a,{code:"pip install neural-framework",language:"bash"})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"Why Neural?"}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors",children:[e.jsx(s,{className:"w-8 h-8 text-primary mb-4"}),e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Blazing Fast"}),e.jsx("p",{className:"text-muted-foreground text-sm",children:"Optimized CUDA kernels and automatic mixed precision training for maximum GPU utilization."})]}),e.jsxs("div",{className:"p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors",children:[e.jsx(t,{className:"w-8 h-8 text-primary mb-4"}),e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Production Ready"}),e.jsx("p",{className:"text-muted-foreground text-sm",children:"Built-in model versioning, A/B testing support, and comprehensive monitoring tools."})]}),e.jsxs("div",{className:"p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors",children:[e.jsx(o,{className:"w-8 h-8 text-primary mb-4"}),e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Flexible Architecture"}),e.jsx("p",{className:"text-muted-foreground text-sm",children:"Modular design lets you customize every layer while maintaining high-level abstractions."})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"Quick Example"}),e.jsx(a,{filename:"train.py",language:"python",code:`from neural import Model, layers, optimizers

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
model.fit(X_train, y_train, epochs=50, batch_size=32)`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"Next Steps"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsxs(r,{to:"/docs/neural/quickstart",className:"inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors",children:["Quick Start Guide",e.jsx(i,{className:"w-4 h-4"})]}),e.jsxs(r,{to:"/docs/neural/api",className:"inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-secondary transition-colors",children:["API Reference",e.jsx(i,{className:"w-4 h-4"})]})]})]})]})});export{m as default};
