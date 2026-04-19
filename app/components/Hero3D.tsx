"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, Float, MeshTransmissionMaterial, PerspectiveCamera } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function IndustrialGear({ position, rotation, scale, speed = 0.3 }: { position: [number, number, number], rotation?: [number, number, number], scale?: number, speed?: number }) {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += state.clock.getDelta() * speed;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime + position[0]) * 0.001;
    }
  });

  const gearTeeth = useMemo(() => {
    const teeth = [];
    const count = 16;
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      teeth.push(
        <mesh 
          key={i} 
          position={[Math.cos(angle) * 1.9, Math.sin(angle) * 1.9, 0]}
          rotation={[0, 0, angle]}
        >
          <boxGeometry args={[0.5, 0.7, 0.4]} />
          <meshStandardMaterial color="#ff6b35" metalness={1} roughness={0.1} emissive="#ff6b35" emissiveIntensity={0.1} />
        </mesh>
      );
    }
    return teeth;
  }, []);

  return (
    <group ref={meshRef} position={position} rotation={rotation} scale={scale || 1}>
      <mesh>
        <cylinderGeometry args={[1.6, 1.6, 0.5, 64]} />
        <MeshTransmissionMaterial 
          backside
          thickness={1}
          roughness={0.05}
          transmission={0.95}
          ior={1.2}
          color="#2a3a4a"
        />
      </mesh>
      {gearTeeth}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.7, 0.7, 0.6, 32]} />
        <meshStandardMaterial color="#64748b" metalness={1} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.8, 32]} />
        <meshStandardMaterial color="#0a0e17" metalness={1} roughness={0.1} />
      </mesh>
    </group>
  );
}

function FloatingParticles() {
  const count = 200;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    return pos;
  }, []);

  const ref = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.05;
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.5;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute 
          attach="attributes-position" 
          count={count} 
          array={positions} 
          itemSize={3} 
        />
      </bufferGeometry>
      <pointsMaterial size={0.08} color="#ff6b35" transparent opacity={0.4} sizeAttenuation />
    </points>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 opacity-80">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={40} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow color="#ff6b35" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#64748b" />
        
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
          <IndustrialGear position={[-5, 2, -5]} scale={1.2} speed={0.4} />
          <IndustrialGear position={[5, -2, -2]} rotation={[0.5, 0.2, 0]} scale={1.5} speed={-0.3} />
          <IndustrialGear position={[-1, -4, 2]} rotation={[0.1, -0.5, 0.5]} scale={0.8} speed={0.6} />
          <IndustrialGear position={[4, 4, -8]} rotation={[0.1, 0.8, 0]} scale={2} speed={0.1} />
        </Float>
        
        <FloatingParticles />
        <Environment preset="warehouse" />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.2} />
      </Canvas>
    </div>
  );
}
