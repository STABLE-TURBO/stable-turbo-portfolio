import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshWobbleMaterial, Icosahedron, Torus, Sphere, Octahedron, Points, PointMaterial, Environment } from '@react-three/drei';
import { useRef, useMemo, Suspense } from 'react';
import type { Mesh, Points as ThreePoints } from 'three';

const AnimatedIcosahedron = ({ position, scale, speed }: { position: [number, number, number]; scale: number; speed: number }) => {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Icosahedron ref={meshRef} args={[scale, 1]} position={position}>
        <MeshDistortMaterial
          color="#3b82f6"
          distort={0.3}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.7}
        />
      </Icosahedron>
    </Float>
  );
};

const AnimatedTorus = ({ position, scale }: { position: [number, number, number]; scale: number }) => {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <Torus ref={meshRef} args={[scale, scale * 0.3, 16, 32]} position={position}>
        <MeshWobbleMaterial
          color="#60a5fa"
          factor={0.3}
          speed={1}
          roughness={0.3}
          metalness={0.6}
          transparent
          opacity={0.6}
        />
      </Torus>
    </Float>
  );
};

const AnimatedSphere = ({ position, scale }: { position: [number, number, number]; scale: number }) => {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[scale, 32, 32]} position={position}>
        <MeshDistortMaterial
          color="#93c5fd"
          distort={0.4}
          speed={3}
          roughness={0.1}
          metalness={0.9}
          transparent
          opacity={0.5}
        />
      </Sphere>
    </Float>
  );
};

const AnimatedOctahedron = ({ position, scale }: { position: [number, number, number]; scale: number }) => {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.5;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={0.6} floatIntensity={1.2}>
      <Octahedron ref={meshRef} args={[scale]} position={position}>
        <MeshDistortMaterial
          color="#2563eb"
          distort={0.2}
          speed={1}
          roughness={0.2}
          metalness={0.9}
          transparent
          opacity={0.8}
          wireframe
        />
      </Octahedron>
    </Float>
  );
};

const ParticleField = () => {
  const count = 100;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  const pointsRef = useRef<ThreePoints>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#3b82f6"
        size={0.05}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
};

const SceneContent = () => {
  return (
    <>
      <AnimatedIcosahedron position={[-3, 1.5, -2]} scale={0.8} speed={1} />
      <AnimatedIcosahedron position={[3.5, -1, -3]} scale={0.6} speed={1.5} />
      <AnimatedTorus position={[2, 2, -1]} scale={0.7} />
      <AnimatedTorus position={[-2.5, -2, -2]} scale={0.5} />
      <AnimatedSphere position={[0, -2.5, -1]} scale={0.4} />
      <AnimatedSphere position={[-4, 0, -3]} scale={0.3} />
      <AnimatedOctahedron position={[4, 0, -2]} scale={0.5} />
      <AnimatedOctahedron position={[-1, 3, -2]} scale={0.4} />
      <ParticleField />
    </>
  );
};

export const Scene3D = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Environment preset="night" />
          <SceneContent />
        </Suspense>
      </Canvas>
    </div>
  );
};