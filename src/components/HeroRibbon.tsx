import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import * as THREE from 'three';

function Ribbon() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(-4, -1.5, 0),
      new THREE.Vector3(-2, 0.5, 1),
      new THREE.Vector3(0, -0.5, -0.5),
      new THREE.Vector3(2, 1, 0.5),
      new THREE.Vector3(4, -0.5, 0),
    ], false, 'catmullrom', 0.5);
  }, []);

  const geometry = useMemo(() => {
    return new THREE.TubeGeometry(curve, 128, 0.15, 16, false);
  }, [curve]);

  const material = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#60a5fa'),
      metalness: 0.0,
      roughness: 0.1,
      transmission: 0.4,
      thickness: 0.5,
      envMapIntensity: 1.2,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
      ior: 1.5,
      transparent: true,
      opacity: 0.9,
    });
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      const scale = 1 + Math.sin(time * 0.5) * 0.05;
      meshRef.current.scale.set(scale, scale, scale);
      meshRef.current.rotation.y = Math.sin(time * 0.3) * 0.1;
      meshRef.current.position.y = Math.sin(time * 0.8) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry} material={material} position={[0, 0, 0]} />
  );
}

function AmbientGlow() {
  const lightRef = useRef<THREE.PointLight>(null);
  
  useFrame((state) => {
    if (lightRef.current) {
      const time = state.clock.getElapsedTime();
      lightRef.current.position.x = -2 + Math.sin(time * 0.5) * 0.5;
      lightRef.current.position.y = Math.sin(time * 0.7) * 0.3;
      lightRef.current.intensity = 0.4 + Math.sin(time * 0.4) * 0.1;
    }
  });

  return (
    <>
      <pointLight ref={lightRef} position={[-2, 0, 1]} color="#7c3aed" intensity={0.4} distance={8} />
      <pointLight position={[2, 0, -1]} color="#2563eb" intensity={0.3} distance={6} />
    </>
  );
}

export default function HeroRibbon() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />
        <Ribbon />
        <AmbientGlow />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}