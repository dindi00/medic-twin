"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function HumanModel({ highlights }: any) {
  const getColor = (organ: string) => {
    const found = highlights.find((h: any) => h.organ === organ);
    if (!found) return "lightgray";
    return found.color;
  };

  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <OrbitControls />

      {/* Body */}
      <mesh>
        <boxGeometry args={[1.5, 3, 0.5]} />
        <meshStandardMaterial color="lightgray" />
      </mesh>

      {/* Heart */}
      <mesh position={[0, 0.5, 0.3]}>
        <sphereGeometry args={[0.3]} />
        <meshStandardMaterial color={getColor("heart")} />
      </mesh>

      {/* Liver */}
      <mesh position={[0.5, 0, 0.3]}>
        <boxGeometry args={[0.6, 0.3, 0.3]} />
        <meshStandardMaterial color={getColor("liver")} />
      </mesh>

      {/* Bone / Blood */}
      <mesh position={[-0.5, -1, 0.3]}>
        <boxGeometry args={[0.4, 0.4, 0.4]} />
        <meshStandardMaterial color={getColor("bone")} />
      </mesh>
    </Canvas>
  );
}