"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function WireframeGlobe() {
  const wireRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    if (wireRef.current) {
      wireRef.current.rotation.y = time * 0.08;
      wireRef.current.rotation.x = Math.sin(time * 0.05) * 0.15;
    }
    if (glowRef.current) {
      glowRef.current.rotation.y = time * 0.06;
      const scale = 1 + Math.sin(time * 0.5) * 0.02;
      glowRef.current.scale.setScalar(scale);
    }
  });

  return (
    <group>
      {/* Wireframe globe */}
      <mesh ref={wireRef}>
        <icosahedronGeometry args={[2, 2]} />
        <meshBasicMaterial
          color="#C7A34F"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>

      {/* Inner glow sphere */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[1.8, 32, 32]} />
        <meshBasicMaterial
          color="#C7A34F"
          transparent
          opacity={0.03}
        />
      </mesh>

      {/* Outer ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.8, 0.005, 16, 100]} />
        <meshBasicMaterial color="#C7A34F" transparent opacity={0.2} />
      </mesh>

      {/* Second ring tilted */}
      <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[3, 0.003, 16, 100]} />
        <meshBasicMaterial color="#C7A34F" transparent opacity={0.1} />
      </mesh>
    </group>
  );
}
