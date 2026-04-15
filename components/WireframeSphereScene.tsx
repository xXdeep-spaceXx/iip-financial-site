"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Sphere() {
  const meshRef = useRef<THREE.LineSegments>(null);

  const geometry = new THREE.WireframeGeometry(
    new THREE.SphereGeometry(1.6, 28, 18)
  );

  useFrame(() => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += 0.004;
    meshRef.current.rotation.x = 0.3;
  });

  return (
    <lineSegments ref={meshRef} geometry={geometry}>
      <lineBasicMaterial color="#b066c2" transparent opacity={0.55} />
    </lineSegments>
  );
}

export default function WireframeSphereScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 50 }}
      style={{ background: "transparent" }}
      gl={{ alpha: true, antialias: true }}
    >
      <Sphere />
    </Canvas>
  );
}
