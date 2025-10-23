'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei'
import * as THREE from 'three'

function AnimatedSphere({ position, color, scale }: { position: [number, number, number]; color: string; scale: number }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[1, 100, 100]} scale={scale} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.6}
          speed={2.5}
          roughness={0.1}
          metalness={0.9}
          emissive={color}
          emissiveIntensity={0.3}
        />
      </Sphere>
    </Float>
  )
}

export default function BackgroundAnimation() {
  return (
    <div className="absolute inset-0 opacity-40 pointer-events-none">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-purple-500/5 to-transparent" />
      
      {/* 3D Canvas */}
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#00E0FF" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#7B61FF" />
        <pointLight position={[0, 0, 0]} intensity={2} color="#00E0FF" />
        
        {/* Main animated spheres */}
        <AnimatedSphere position={[2, 1, 0]} color="#00E0FF" scale={2} />
        <AnimatedSphere position={[-2, -1, -2]} color="#7B61FF" scale={1.5} />
        <AnimatedSphere position={[0, 2, -3]} color="#FF61E6" scale={1.2} />
      </Canvas>
    </div>
  )
}