"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function WavePoints() {
  const pointsRef = useRef<THREE.Points>(null);
  
  const count = 50;
  const sep = 1.2;
  
  const { positions, step } = useMemo(() => {
    const positions = new Float32Array(count * count * 3);
    let i = 0;
    for (let x = 0; x < count; x++) {
      for (let z = 0; z < count; z++) {
        positions[i++] = (x - count / 2) * sep;
        positions[i++] = 0;
        positions[i++] = (z - count / 2) * sep;
      }
    }
    return { positions, step: 0 };
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime();
    const pos = pointsRef.current.geometry.attributes.position.array as Float32Array;
    
    let i = 0;
    for (let x = 0; x < count; x++) {
      for (let z = 0; z < count; z++) {
        const xPos = pos[i * 3];
        const zPos = pos[i * 3 + 2];
        // Create a wave effect
        pos[i * 3 + 1] = Math.sin(xPos * 0.3 + time) * 0.5 + Math.cos(zPos * 0.3 + time) * 0.5;
        i++;
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.08} 
        color="#0ea5e9" 
        transparent 
        opacity={0.4} 
        sizeAttenuation 
      />
    </points>
  );
}

export default function TechWaveBackground() {
  return (
    <div className="fixed inset-0 z-[-1] bg-[#020617]">
      <Canvas camera={{ position: [0, 15, 30], fov: 75 }}>
        <fog attach="fog" args={["#020617", 10, 60]} />
        <WavePoints />
      </Canvas>
    </div>
  );
}
