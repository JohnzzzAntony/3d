"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Environment, Float, MeshTransmissionMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AnimatedBlob() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.cos(time * 0.2) * 0.2;
    meshRef.current.rotation.y = Math.sin(time * 0.2) * 0.2;
  });

  return (
    <Sphere ref={meshRef} args={[1, 100, 100]} scale={2.5}>
      <MeshDistortMaterial
        color="#18181b"
        speed={1.5}
        distort={0.4}
        radius={1}
        metalness={0.9}
        roughness={0.1}
      />
    </Sphere>
  );
}

function GlassPanel({ position, rotation }: { position: [number, number, number], rotation: [number, number, number] }) {
  return (
    <mesh position={position} rotation={rotation}>
      <boxGeometry args={[4, 6, 0.1]} />
      <MeshTransmissionMaterial
        backside
        samples={4}
        thickness={0.5}
        roughness={0}
        transmission={1}
        ior={1.2}
        chromaticAberration={0.02}
        anisotropicBlur={0.1}
        clearcoat={1}
        clearcoatRoughness={0}
        color="#ffffff"
      />
    </mesh>
  );
}

export default function PremiumBackground() {
  return (
    <div className="fixed inset-0 z-[-1] bg-[#050505]">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <fog attach="fog" args={["#050505", 5, 20]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={2} />
        <pointLight position={[-10, -10, -10]} color="#3f3f46" intensity={2} />

        <Suspense fallback={null}>
          <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
            <AnimatedBlob />
          </Float>
          
          <GlassPanel position={[-4, 2, -2]} rotation={[0.2, 0.4, 0]} />
          <GlassPanel position={[5, -3, -1]} rotation={[-0.1, -0.3, 0.2]} />
          
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
}

import { Suspense } from "react";
