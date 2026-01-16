'use client'

import { useRef, useEffect, useState, useMemo, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { RoundedBox, Text3D, Center, Environment, Preload } from '@react-three/drei'
import * as THREE from 'three'
import PhoneModel from './PhoneModel'

function Card3DModel() {
  const groupRef = useRef<THREE.Group>(null!)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [entranceProgress, setEntranceProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const maxScroll = 1000
      const progress = Math.min(scrollY / maxScroll, 1)
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Entrance animation
      if (entranceProgress < 1) {
        setEntranceProgress(Math.min(entranceProgress + delta * 1.2, 1))
        const eased = 1 - Math.pow(1 - entranceProgress, 3) // easeOut cubic
        groupRef.current.position.y = (1 - eased) * 3
      }

      // Scroll-based rotation
      const targetRotationY = scrollProgress * Math.PI * 2
      const targetRotationX = Math.sin(scrollProgress * Math.PI) * 0.15

      groupRef.current.rotation.y += (targetRotationY - groupRef.current.rotation.y) * 0.1
      groupRef.current.rotation.x += (targetRotationX - groupRef.current.rotation.x) * 0.1
    }
  })

  // Create a gradient texture for card - Green and Yellow
  const gradientTexture = useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 512
    canvas.height = 512
    const ctx = canvas.getContext('2d')!

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
    gradient.addColorStop(0, '#10B981') // Emerald green
    gradient.addColorStop(0.5, '#22C55E') // Green
    gradient.addColorStop(1, '#FCD34D') // Yellow

    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    const texture = new THREE.CanvasTexture(canvas)
    texture.needsUpdate = true
    return texture
  }, [])

  // Card number with proper spacing
  const cardNumber = '5412  7512  3456  7890'

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Main card body - HIGH QUALITY with RoundedBox */}
      <RoundedBox
        args={[3.4, 2.1, 0.12]}
        radius={0.08}
        smoothness={8}
        castShadow
        receiveShadow
      >
        <meshPhysicalMaterial
          map={gradientTexture}
          metalness={0.6}
          roughness={0.3}
          clearcoat={1}
          clearcoatRoughness={0.2}
          reflectivity={0.8}
          envMapIntensity={1.2}
        />
      </RoundedBox>

      {/* Holographic overlay layer */}
      <mesh position={[0, 0, 0.065]} rotation={[0, 0, scrollProgress * Math.PI]}>
        <planeGeometry args={[3.3, 2.0]} />
        <meshPhysicalMaterial
          transparent
          opacity={0.15}
          metalness={1}
          roughness={0}
          transmission={0.1}
          thickness={0.5}
          color="#FBBF24"
          emissive="#FBBF24"
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* BAMIS Logo - improved visibility */}
      <Center position={[-1.1, 0.7, 0.065]}>
        <Text3D
          font="/fonts/helvetiker_bold.typeface.json"
          size={0.18}
          height={0.02}
          curveSegments={8}
          bevelEnabled
          bevelThickness={0.01}
          bevelSize={0.005}
          bevelSegments={3}
        >
          BAMIS
          <meshStandardMaterial
            color="#FBBF24"
            emissive="#FBBF24"
            emissiveIntensity={0.5}
            metalness={0.8}
            roughness={0.2}
          />
        </Text3D>
      </Center>

      {/* EMV Chip - realistic with rounded edges */}
      <RoundedBox
        args={[0.38, 0.3, 0.05]}
        radius={0.02}
        smoothness={4}
        position={[-0.9, 0.25, 0.085]}
      >
        <meshPhysicalMaterial
          color="#C9B037"
          metalness={1}
          roughness={0.15}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </RoundedBox>

      {/* Chip contacts pattern */}
      {[0, 1, 2].map((row) =>
        [0, 1, 2].map((col) => (
          <mesh
            key={`chip-${row}-${col}`}
            position={[-0.95 + col * 0.08, 0.29 - row * 0.06, 0.11]}
          >
            <boxGeometry args={[0.06, 0.04, 0.005]} />
            <meshStandardMaterial color="#8B7328" metalness={1} roughness={0.3} />
          </mesh>
        ))
      )}

      {/* Contactless waves - more defined */}
      {[0, 1, 2, 3].map((i) => (
        <mesh
          key={`wave-${i}`}
          position={[-0.3 + i * 0.07, 0.25, 0.065]}
          rotation={[0, 0, Math.PI / 4]}
        >
          <torusGeometry args={[0.04 + i * 0.025, 0.008, 12, 24, Math.PI]} />
          <meshStandardMaterial
            color="#FBBF24"
            emissive="#FBBF24"
            emissiveIntensity={0.3}
            metalness={0.5}
            roughness={0.2}
          />
        </mesh>
      ))}

      {/* Card Number - HIGH DEFINITION 3D TEXT */}
      <Center position={[0, -0.15, 0.065]}>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.14}
          height={0.015}
          curveSegments={12}
          letterSpacing={0.02}
          bevelEnabled
          bevelThickness={0.008}
          bevelSize={0.004}
          bevelSegments={2}
        >
          {cardNumber}
          <meshStandardMaterial
            color="#FFFFFF"
            emissive="#FFFFFF"
            emissiveIntensity={0.2}
            metalness={0.3}
            roughness={0.4}
          />
        </Text3D>
      </Center>

      {/* Cardholder name */}
      <Center position={[-0.8, -0.55, 0.065]}>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.08}
          height={0.01}
          curveSegments={8}
          bevelEnabled={false}
        >
          CARD HOLDER
          <meshStandardMaterial
            color="#CCCCCC"
            metalness={0.2}
            roughness={0.6}
          />
        </Text3D>
      </Center>

      {/* Valid thru */}
      <Center position={[0.5, -0.55, 0.065]}>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.08}
          height={0.01}
          curveSegments={8}
          bevelEnabled={false}
        >
          12/28
          <meshStandardMaterial
            color="#CCCCCC"
            metalness={0.2}
            roughness={0.6}
          />
        </Text3D>
      </Center>

      {/* VISA Logo - HIGH DEFINITION */}
      <Center position={[1.15, -0.75, 0.07]}>
        <Text3D
          font="/fonts/helvetiker_bold.typeface.json"
          size={0.22}
          height={0.02}
          curveSegments={10}
          bevelEnabled
          bevelThickness={0.01}
          bevelSize={0.005}
          bevelSegments={2}
        >
          VISA
          <meshStandardMaterial
            color="#FFFFFF"
            emissive="#FFFFFF"
            emissiveIntensity={0.3}
            metalness={0.5}
            roughness={0.2}
          />
        </Text3D>
      </Center>

      {/* MRU Currency indicator */}
      <Center position={[-1.2, -0.75, 0.065]}>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.09}
          height={0.01}
          curveSegments={8}
          bevelEnabled={false}
        >
          MRU
          <meshStandardMaterial
            color="#10B981"
            emissive="#10B981"
            emissiveIntensity={0.2}
            metalness={0.6}
            roughness={0.3}
          />
        </Text3D>
      </Center>

      {/* Holographic security strip */}
      <mesh position={[0, 0.5, 0.063]}>
        <planeGeometry args={[3.2, 0.15]} />
        <meshPhysicalMaterial
          color="#10B981"
          transparent
          opacity={0.3}
          metalness={1}
          roughness={0}
          iridescence={1}
          iridescenceIOR={1.5}
          iridescenceThicknessRange={[100, 800]}
        />
      </mesh>

      {/* Card back magnetic strip */}
      <mesh position={[0, 0.5, -0.065]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[3.3, 0.4]} />
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.3}
          roughness={0.7}
        />
      </mesh>
    </group>
  )
}

export default function CreditCard3D({ className }: { className?: string }) {
  // Detect mobile for performance optimization
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  return (
    <div className="h-[300px] md:h-[400px] lg:h-[500px] w-full relative">
      <Canvas
        shadows={!isMobile}
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{
          antialias: !isMobile, // Disable AA on mobile for performance
          alpha: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2,
          powerPreference: "high-performance",
          failIfMajorPerformanceCaveat: false,
          preserveDrawingBuffer: false,
          pixelRatio: Math.min(typeof window !== 'undefined' ? window.devicePixelRatio : 1, 2) // Cap at 2
        }}
        dpr={isMobile ? [0.75, 1] : [1, 2]} // Lower DPR on mobile
        performance={{ min: 0.5 }}
      >
        {/* Enhanced Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1.2}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-5, 3, -5]} intensity={0.4} color="#FFFFFF" />
        <pointLight position={[5, -3, 5]} intensity={0.3} color="#FFFFFF" />
        <spotLight
          position={[0, 5, 3]}
          angle={0.5}
          penumbra={1}
          intensity={0.8}
          castShadow
          shadow-mapSize-width={512}
          shadow-mapSize-height={512}
        />

        <Suspense fallback={null}>
          {/* Environment for realistic reflections */}
          <Environment preset="city" resolution={256} />

          {/* iPhone in background */}
          <PhoneModel position={[2.5, 0, -2]} />

          {/* The 3D Card (in front) */}
          <Card3DModel />

          {/* Preload all assets */}
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  )
}
