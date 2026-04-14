"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Center, Environment } from "@react-three/drei";
import * as THREE from "three";

function AtomModel() {
  const { scene } = useGLTF("/models/atom.glb");
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((_, delta) => {
    groupRef.current.rotation.y += delta * 0.35;
  });

  return (
    <Center>
      <group ref={groupRef}>
        <primitive object={scene} />
      </group>
    </Center>
  );
}

interface AtomSceneProps {
  size: number;
}

export default function AtomScene({ size }: AtomSceneProps) {
  return (
    <Canvas
      gl={{ alpha: true, antialias: true }}
      camera={{ position: [0, 0, 5], fov: 40 }}
      style={{ width: size, height: size, display: "block" }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 4, 4]} intensity={1.5} />
      <pointLight position={[-3, 2, 2]} intensity={1.0} color="#a0c8ff" />
      <pointLight position={[2, -2, -3]} intensity={0.6} />

      {/* Suspense is required — useGLTF suspends until the file finishes loading */}
      <Suspense fallback={null}>
        <AtomModel />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}

useGLTF.preload("/models/atom.glb");
