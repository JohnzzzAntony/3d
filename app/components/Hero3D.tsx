"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, MeshTransmissionMaterial, Environment, Float, PerspectiveCamera, ContactShadows } from "@react-three/drei";
import { useRef, Suspense, useMemo } from "react";
import * as THREE from "three";

function Gear({ color = "#ffffff", ...props }) {
  const ref = useRef<THREE.Group>(null);
  
  const gearGeometry = useMemo(() => new THREE.CylinderGeometry(1.5, 1.5, 0.4, 64), []);
  const toothGeometry = useMemo(() => new THREE.BoxGeometry(0.3, 0.4, 0.6), []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z += 0.003;
  });

  return (
    <group ref={ref} {...props}>
      <mesh geometry={gearGeometry}>
        <MeshTransmissionMaterial 
          backside
          samples={8}
          thickness={0.8}
          roughness={0.05}
          transmission={1}
          ior={1.5}
          chromaticAberration={0.06}
          anisotropicBlur={0.1}
          color={color}
        />
      </mesh>
      {Array.from({ length: 12 }).map((_, i) => (
        <mesh 
          key={i} 
          geometry={toothGeometry}
          position={[
            Math.cos((i / 12) * Math.PI * 2) * 1.5,
            Math.sin((i / 12) * Math.PI * 2) * 1.5,
            0
          ]}
          rotation={[0, 0, (i / 12) * Math.PI * 2]}
        >
          <meshPhysicalMaterial 
            color={color} 
            metalness={0.9} 
            roughness={0.1} 
            reflectivity={1} 
          />
        </mesh>
      ))}
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 opacity-80">
      <Canvas 
        shadows 
        dpr={[1, 2]} 
        gl={{ antialias: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={45} />
          
          <ambientLight intensity={0.2} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} castShadow />
          <pointLight position={[-10, 10, -5]} intensity={1} color="#ff6b35" />

          <Float speed={2} rotationIntensity={0.6} floatIntensity={0.6}>
            <Gear position={[1.8, 0, 0]} rotation={[0.4, 0.2, 0]} color="#ffffff" scale={1.3} />
            <Gear position={[-2.2, -1.2, -1]} rotation={[1.1, 0.3, 0.5]} color="#ff6b35" scale={0.9} />
          </Float>

          <ContactShadows 
            position={[0, -3.5, 0]} 
            opacity={0.4} 
            scale={15} 
            blur={2.5} 
            far={4.5} 
          />

          <Environment preset="city" />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
