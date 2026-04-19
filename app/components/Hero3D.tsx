"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, MeshTransmissionMaterial, Environment, Float, PerspectiveCamera } from "@react-three/drei";
import { useRef, Suspense, useMemo } from "react";
import * as THREE from "three";

function Gear({ color = "#ff6b35", ...props }) {
  const ref = useRef<THREE.Group>(null);
  
  // Use useMemo for geometry to avoid re-creation
  const gearGeometry = useMemo(() => new THREE.CylinderGeometry(1.5, 1.5, 0.4, 32), []);
  const toothGeometry = useMemo(() => new THREE.BoxGeometry(0.3, 0.5, 0.6), []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z += 0.005;
  });

  return (
    <group ref={ref} {...props}>
      <mesh geometry={gearGeometry}>
        <MeshTransmissionMaterial 
          backside
          samples={4} // Reduced samples for performance
          thickness={0.5}
          roughness={0.1}
          transmission={0.9}
          ior={1.2}
          color={color}
        />
      </mesh>
      {/* Reduced teeth count for performance */}
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh 
          key={i} 
          geometry={toothGeometry}
          position={[
            Math.cos((i / 8) * Math.PI * 2) * 1.5,
            Math.sin((i / 8) * Math.PI * 2) * 1.5,
            0
          ]}
          rotation={[0, 0, (i / 8) * Math.PI * 2]}
        >
          <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
        </mesh>
      ))}
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas 
        shadows 
        dpr={[1, 1.5]} // Limit DPR for performance
        gl={{ antialias: false, powerPreference: "high-performance" }} // Boost perf
      >
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
          
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />

          <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
            <Gear position={[1.5, 0.5, 0]} rotation={[0.5, 0, 0.5]} color="#ff6b35" scale={1.2} />
            <Gear position={[-1.5, -1, -1]} rotation={[1, 0, 0]} color="#4a5a6a" scale={0.8} />
          </Float>

          <Environment preset="warehouse" background={false} blur={1} />
        </Suspense>
      </Canvas>
    </div>
  );
}
