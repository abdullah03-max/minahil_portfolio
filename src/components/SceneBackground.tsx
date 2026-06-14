import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere, Torus, Icosahedron } from '@react-three/drei'
import * as THREE from 'three'
import { useMousePosition } from '../hooks/useMousePosition'

/**
 * A single glowing sphere with subtle distortion, used as the
 * "signature" floating object across the hero / section backdrops.
 */
function GlowSphere({
  position,
  scale,
  color,
  speed = 1,
}: {
  position: [number, number, number]
  scale: number
  color: string
  speed?: number
}) {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.x = state.clock.elapsedTime * 0.08 * speed
    ref.current.rotation.y = state.clock.elapsedTime * 0.12 * speed
  })

  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={1.2}>
      <Sphere ref={ref} args={[1, 64, 64]} position={position} scale={scale}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.35}
          speed={1.4}
          roughness={0.15}
          metalness={0.6}
          emissive={color}
          emissiveIntensity={0.35}
        />
      </Sphere>
    </Float>
  )
}

function GlowTorus({
  position,
  scale,
  color,
  speed = 1,
}: {
  position: [number, number, number]
  scale: number
  color: string
  speed?: number
}) {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.x = state.clock.elapsedTime * 0.15 * speed
    ref.current.rotation.z = state.clock.elapsedTime * 0.1 * speed
  })
  return (
    <Float speed={speed * 0.8} rotationIntensity={0.6} floatIntensity={1.5}>
      <Torus ref={ref} args={[1, 0.32, 32, 100]} position={position} scale={scale}>
        <meshStandardMaterial
          color={color}
          roughness={0.2}
          metalness={0.8}
          emissive={color}
          emissiveIntensity={0.4}
        />
      </Torus>
    </Float>
  )
}

function GlowIcosahedron({
  position,
  scale,
  color,
  speed = 1,
}: {
  position: [number, number, number]
  scale: number
  color: string
  speed?: number
}) {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.x = state.clock.elapsedTime * 0.1 * speed
    ref.current.rotation.y = state.clock.elapsedTime * 0.18 * speed
  })
  return (
    <Float speed={speed * 1.1} rotationIntensity={0.5} floatIntensity={1.1}>
      <Icosahedron ref={ref} args={[1, 0]} position={position} scale={scale}>
        <meshStandardMaterial
          color={color}
          roughness={0.1}
          metalness={0.9}
          emissive={color}
          emissiveIntensity={0.5}
          wireframe
        />
      </Icosahedron>
    </Float>
  )
}

/**
 * Group of objects that gently parallax with the mouse position.
 */
function SceneContents({ mouse }: { mouse: { nx: number; ny: number } }) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (!groupRef.current) return
    groupRef.current.rotation.y += (mouse.nx * 0.15 - groupRef.current.rotation.y) * 0.02
    groupRef.current.rotation.x += (-mouse.ny * 0.1 - groupRef.current.rotation.x) * 0.02
  })

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#60A5FA" />
      <pointLight position={[-5, -3, -5]} intensity={1} color="#00D4FF" />

      <GlowSphere position={[3.2, 1.2, -2]} scale={1.4} color="#2563EB" speed={1} />
      <GlowSphere position={[-3.4, -1.4, -3]} scale={1.9} color="#4F46E5" speed={0.7} />
      <GlowTorus position={[-2.6, 1.8, -4]} scale={0.9} color="#00D4FF" speed={1.2} />
      <GlowIcosahedron position={[3.6, -1.6, -3]} scale={1.1} color="#60A5FA" speed={0.9} />
      <GlowSphere position={[0, 2.6, -5]} scale={1} color="#3B82F6" speed={1.3} />
    </group>
  )
}

/**
 * Full-bleed canvas background for hero & accent sections.
 * `dim` lowers overall intensity for use behind dense content sections.
 */
export default function SceneBackground({ dim = false }: { dim?: boolean }) {
  const mouse = useMousePosition()

  const dpr = useMemo<[number, number]>(() => [1, 1.5], [])

  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10"
      style={{ opacity: dim ? 0.35 : 0.85 }}
      aria-hidden="true"
    >
      <Canvas
        dpr={dpr}
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <SceneContents mouse={mouse} />
      </Canvas>
    </div>
  )
}
