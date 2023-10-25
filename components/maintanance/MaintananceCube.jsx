'use client';

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";

export default function MaintenanceCube() {
  return (
    <div className="w-screen h-screen m-0">
      <Canvas>
        <OrbitControls enableZoom={false} enablePan={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 1, 2]} />
        <Cube />
      </Canvas>
    </div>
  );
}

function Cube() {
  const mesh = useRef(null);

  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.3;
      mesh.current.rotation.y += delta * 0.3;
      mesh.current.rotation.z += delta * 0.3;
    }
  });

  return (
    <group ref={mesh}>
      {Array.from({ length: 6 }, (_, index) => (
        <Face key={index} position={getFacePosition(index)} rotation={getFaceRotation(index)} />
      ))}
    </group>
  );
}

function Face({ position, rotation }) {
  return (
    <mesh position={position} rotation={rotation}>
      <boxGeometry args={[2.5, 2.5, 0.01]} />
      <meshStandardMaterial color={"purple"} />
    </mesh>
  );
}

function getFacePosition(index) {
  const facePositions = [
    [0, 0, 1.26], // Front
    [0, 0, -1.26], // Back
    [-1.26, 0, 0], // Left
    [1.26, 0, 0], // Right
    [0, 1.26, 0], // Top
    [0, -1.26, 0], // Bottom
  ];
  return facePositions[index];
}

function getFaceRotation(index) {
  const faceRotations = [
    [0, 0, 0], 
    [0, Math.PI, 0],
    [0, -Math.PI / 2, 0], 
    [0, Math.PI / 2, 0], 
    [-Math.PI / 2, 0, 0], 
    [Math.PI / 2, 0, 0], 
  ];
  return faceRotations[index];
}