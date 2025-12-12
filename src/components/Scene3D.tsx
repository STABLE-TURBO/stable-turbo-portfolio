import { Canvas, extend, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Box, Torus, Icosahedron } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

extend({ Group: THREE.Group });
import { useFrame } from "@react-three/fiber";

const FloatingShape = ({ position, shape, color, speed = 1, distort = 0.3 }: {
  position: [number, number, number];
  shape: "sphere" | "box" | "torus" | "icosahedron";
  color: string;
  speed?: number;
  distort?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
    }
  });

  const renderShape = () => {
    switch (shape) {
      case "sphere":
        return (
          <Sphere args={[1, 32, 32]} ref={meshRef}>
            <MeshDistortMaterial
              color={color}
              attach="material"
              distort={distort}
              speed={2}
              roughness={0.2}
              metalness={0.8}
            />
          </Sphere>
        );
      case "box":
        return (
          <Box args={[1.5, 1.5, 1.5]} ref={meshRef}>
            <meshStandardMaterial
              color={color}
              metalness={0.9}
              roughness={0.1}
              wireframe
            />
          </Box>
        );
      case "torus":
        return (
          <Torus args={[1, 0.4, 16, 32]} ref={meshRef}>
            <meshStandardMaterial
              color={color}
              metalness={0.8}
              roughness={0.2}
              emissive={color}
              emissiveIntensity={0.2}
            />
          </Torus>
        );
      case "icosahedron":
        return (
          <Icosahedron args={[1, 0]} ref={meshRef}>
            <meshStandardMaterial
              color={color}
              metalness={0.9}
              roughness={0.1}
              wireframe
            />
          </Icosahedron>
        );
    }
  };

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1}>
      <group position={position} scale={0.6}>
        {renderShape()}
      </group>
    </Float>
  );
};

const SceneContent = () => {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#60a5fa" />
      <spotLight
        position={[0, 10, 0]}
        angle={0.5}
        penumbra={1}
        intensity={1}
        color="#2563eb"
      />

      <FloatingShape position={[-4, 2, -2]} shape="sphere" color="#3b82f6" speed={0.8} />
      <FloatingShape position={[4, -1, -3]} shape="box" color="#60a5fa" speed={0.6} />
      <FloatingShape position={[-3, -2, -4]} shape="torus" color="#2563eb" speed={1.2} />
      <FloatingShape position={[3, 3, -5]} shape="icosahedron" color="#93c5fd" speed={0.7} />
      <FloatingShape position={[0, -3, -2]} shape="sphere" color="#1d4ed8" speed={0.9} distort={0.5} />
      <FloatingShape position={[-5, 0, -6]} shape="icosahedron" color="#60a5fa" speed={0.5} />
      <FloatingShape position={[5, 1, -4]} shape="torus" color="#3b82f6" speed={1} />
    </>
  );
};

interface Scene3DProps {
  className?: string;
}

export const Scene3D = ({ className }: Scene3DProps) => {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className || ''}`}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <SceneContent />
        </Suspense>
      </Canvas>
    </div>
  );
};
