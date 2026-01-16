'use client'

import { useRef, useMemo, useState } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { RoundedBox } from '@react-three/drei'
import * as THREE from 'three'
import { TextureLoader } from 'three'

export default function PhoneModel({ position = [0, 0, 0] }: { position?: [number, number, number] }) {
  const phoneRef = useRef<THREE.Group>(null!)
  const [entranceProgress, setEntranceProgress] = useState(0)

  // Create BAMIS logo texture for screen
  const screenTexture = useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 1024
    canvas.height = 2048
    const ctx = canvas.getContext('2d')!

    // Gradient background (more realistic screen)
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
    gradient.addColorStop(0, '#F8F9FA')
    gradient.addColorStop(1, '#E9ECEF')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Load and draw the logo image - moved up and left for better centering
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.src = '/images/logo/bamis-logo-new.png'
    img.onload = () => {
      // Center the logo - adjusted position (moved up 150px and left 150px)
      const logoSize = 600
      const x = (canvas.width - logoSize) / 2 - 150
      const y = (canvas.height - logoSize) / 2 - 150
      ctx.drawImage(img, x, y, logoSize, logoSize)
      texture.needsUpdate = true
    }

    const texture = new THREE.CanvasTexture(canvas)
    texture.needsUpdate = true
    return texture
  }, [])

  // Entrance animation then gentle floating
  useFrame((state, delta) => {
    if (phoneRef.current) {
      // Entrance animation
      if (entranceProgress < 1) {
        setEntranceProgress(Math.min(entranceProgress + delta * 1.2, 1))
        const eased = 1 - Math.pow(1 - entranceProgress, 3) // easeOut cubic
        const baseY = position[1]
        phoneRef.current.position.y = baseY + (1 - eased) * 3
      } else {
        // Normal floating animation after entrance
        phoneRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      }

      phoneRef.current.rotation.y = -0.3 + Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
  })

  return (
    <group ref={phoneRef} position={position} rotation={[0.1, -0.3, 0]} scale={2.5}>
      {/* iPhone 16 Pro body - Exact 6.3" proportions (149.6mm x 71.5mm) with titanium finish */}
      <RoundedBox
        args={[0.715, 1.496, 0.0825]}
        radius={0.115}
        smoothness={16}
        castShadow
        receiveShadow
      >
        <meshPhysicalMaterial
          color="#5E5E60"
          metalness={0.98}
          roughness={0.08}
          clearcoat={1}
          clearcoatRoughness={0.02}
          envMapIntensity={1.5}
          reflectivity={0.9}
          ior={2.5}
        />
      </RoundedBox>

      {/* Screen with BAMIS logo - Ultra-thin bezels */}
      <RoundedBox
        args={[0.69, 1.47, 0.015]}
        radius={0.105}
        smoothness={12}
        position={[0, 0, 0.045]}
      >
        <meshPhysicalMaterial
          map={screenTexture}
          metalness={0.05}
          roughness={0.05}
          clearcoat={1}
          clearcoatRoughness={0.1}
          emissive="#000000"
          emissiveIntensity={0.1}
          transmission={0.02}
        />
      </RoundedBox>

      {/* Dynamic Island - precise proportions */}
      <RoundedBox
        args={[0.125, 0.037, 0.008]}
        radius={0.018}
        smoothness={8}
        position={[0, 0.65, 0.052]}
      >
        <meshPhysicalMaterial
          color="#000000"
          metalness={0.8}
          roughness={0.2}
          emissive="#000000"
          emissiveIntensity={0.3}
        />
      </RoundedBox>

      {/* iPhone 16 Pro Camera System - Realistic square module */}
      <group position={[-0.24, 0.54, -0.044]}>
        {/* Camera housing with rounded square design */}
        <RoundedBox
          args={[0.26, 0.26, 0.025]}
          radius={0.048}
          smoothness={12}
        >
          <meshPhysicalMaterial
            color="#1C1C1E"
            metalness={0.9}
            roughness={0.12}
            clearcoat={1}
            clearcoatRoughness={0.05}
            envMapIntensity={1.3}
          />
        </RoundedBox>

        {/* Main Camera (48MP Fusion) - top center */}
        <group position={[0, 0.075, 0.018]}>
          {/* Outer ring */}
          <mesh>
            <cylinderGeometry args={[0.055, 0.055, 0.01, 32]} />
            <meshPhysicalMaterial
              color="#0A0A0A"
              metalness={1}
              roughness={0.05}
              clearcoat={1}
            />
          </mesh>
          {/* Glass lens */}
          <mesh position={[0, 0.006, 0]}>
            <cylinderGeometry args={[0.042, 0.042, 0.004, 32]} />
            <meshPhysicalMaterial
              color="#0a0a2e"
              metalness={0.2}
              roughness={0.05}
              transmission={0.9}
              thickness={0.3}
              transparent
              ior={1.5}
            />
          </mesh>
        </group>

        {/* Ultra Wide Camera (13mm) - bottom left */}
        <group position={[-0.065, -0.055, 0.018]}>
          <mesh>
            <cylinderGeometry args={[0.05, 0.05, 0.01, 32]} />
            <meshPhysicalMaterial
              color="#0A0A0A"
              metalness={1}
              roughness={0.05}
              clearcoat={1}
            />
          </mesh>
          <mesh position={[0, 0.006, 0]}>
            <cylinderGeometry args={[0.038, 0.038, 0.004, 32]} />
            <meshPhysicalMaterial
              color="#0a0a2e"
              metalness={0.2}
              roughness={0.05}
              transmission={0.9}
              thickness={0.3}
              transparent
              ior={1.5}
            />
          </mesh>
        </group>

        {/* Telephoto 5x Camera (120mm) - bottom right */}
        <group position={[0.065, -0.055, 0.018]}>
          <mesh>
            <cylinderGeometry args={[0.05, 0.05, 0.01, 32]} />
            <meshPhysicalMaterial
              color="#0A0A0A"
              metalness={1}
              roughness={0.05}
              clearcoat={1}
            />
          </mesh>
          <mesh position={[0, 0.006, 0]}>
            <cylinderGeometry args={[0.038, 0.038, 0.004, 32]} />
            <meshPhysicalMaterial
              color="#0a0a2e"
              metalness={0.2}
              roughness={0.05}
              transmission={0.9}
              thickness={0.3}
              transparent
              ior={1.5}
            />
          </mesh>
        </group>

        {/* LiDAR Scanner */}
        <mesh position={[-0.09, 0.09, 0.022]}>
          <cylinderGeometry args={[0.025, 0.025, 0.01, 32]} />
          <meshStandardMaterial
            color="#000000"
            emissive="#1a1a3e"
            emissiveIntensity={0.3}
            metalness={0.5}
          />
        </mesh>

        {/* Flash - True Tone */}
        <mesh position={[0.09, 0.09, 0.022]}>
          <cylinderGeometry args={[0.032, 0.032, 0.01, 32]} />
          <meshStandardMaterial
            color="#FFFACD"
            emissive="#FFFACD"
            emissiveIntensity={0.6}
          />
        </mesh>
      </group>

      {/* Side buttons - titanium finish */}
      {/* Action Button (new in iPhone 16 Pro - replaces mute switch) */}
      <RoundedBox
        args={[0.095, 0.02, 0.07]}
        radius={0.008}
        smoothness={4}
        position={[-0.365, 0.48, 0]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <meshPhysicalMaterial
          color="#5E5E60"
          metalness={0.98}
          roughness={0.08}
          clearcoat={1}
          clearcoatRoughness={0.02}
        />
      </RoundedBox>

      {/* Volume Up button */}
      <RoundedBox
        args={[0.085, 0.02, 0.07]}
        radius={0.008}
        smoothness={4}
        position={[-0.365, 0.35, 0]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <meshPhysicalMaterial
          color="#5E5E60"
          metalness={0.98}
          roughness={0.08}
          clearcoat={1}
          clearcoatRoughness={0.02}
        />
      </RoundedBox>

      {/* Volume Down button */}
      <RoundedBox
        args={[0.085, 0.02, 0.07]}
        radius={0.008}
        smoothness={4}
        position={[-0.365, 0.24, 0]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <meshPhysicalMaterial
          color="#5E5E60"
          metalness={0.98}
          roughness={0.08}
          clearcoat={1}
          clearcoatRoughness={0.02}
        />
      </RoundedBox>

      {/* Power/Side button */}
      <RoundedBox
        args={[0.11, 0.02, 0.07]}
        radius={0.008}
        smoothness={4}
        position={[0.365, 0.3, 0]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <meshPhysicalMaterial
          color="#5E5E60"
          metalness={0.98}
          roughness={0.08}
          clearcoat={1}
          clearcoatRoughness={0.02}
        />
      </RoundedBox>

      {/* Apple logo - polished titanium */}
      <mesh position={[0, -0.45, -0.044]}>
        <circleGeometry args={[0.075, 32]} />
        <meshPhysicalMaterial
          color="#A8A8AA"
          metalness={0.95}
          roughness={0.05}
          clearcoat={1}
          clearcoatRoughness={0.02}
          reflectivity={0.9}
        />
      </mesh>
    </group>
  )
}
