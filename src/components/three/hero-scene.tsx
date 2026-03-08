"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ParticleField } from "./particle-field";
import { WireframeGlobe } from "./wireframe-globe";
import * as THREE from "three";

function CameraController() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useFrame(() => {
    // Lerp camera position based on mouse
    target.current.x += (mouse.current.x * 0.5 - target.current.x) * 0.05;
    target.current.y += (mouse.current.y * 0.3 - target.current.y) * 0.05;
    camera.position.x = target.current.x;
    camera.position.y = target.current.y;
    camera.lookAt(0, 0, 0);
  });

  // Listen for mouse events
  if (typeof window !== "undefined") {
    const handleMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    if (!CameraController._listening) {
      window.addEventListener("mousemove", handleMove);
      CameraController._listening = true;
    }
  }

  return null;
}
CameraController._listening = false;

export default function HeroScene() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <WireframeGlobe />
          <ParticleField count={1500} spread={12} />
          <CameraController />
        </Suspense>
      </Canvas>
    </div>
  );
}
