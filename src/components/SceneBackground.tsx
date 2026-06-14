import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls, PresentationControls } from '@react-three/drei'
import * as THREE from 'three'
import { useMousePosition } from '../hooks/useMousePosition'

/**
 * Premium 3D tech-core node structure.
 * This displays a beautiful central abstract core with orbiting rings, floating shards,
 * and glowing connections, creating a premium high-tech look.
 */
function TechCore() {
  const coreRef = useRef<THREE.Mesh>(null)
  const ring1Ref = useRef<THREE.Mesh>(null)
  const ring2Ref = useRef<THREE.Mesh>(null)
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime()
    
    // Core rotations
    if (coreRef.current) {
      coreRef.current.rotation.y = elapsed * 0.3
      coreRef.current.rotation.x = elapsed * 0.15
    }

    // Opposite spinning outer rings
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = elapsed * 0.2
      ring1Ref.current.rotation.y = elapsed * 0.4
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = -elapsed * 0.3
      ring2Ref.current.rotation.z = elapsed * 0.2
    }

    // Hover floating
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(elapsed * 1.5) * 0.15
    }
  })

  return (
    <group ref={groupRef}>
      {/* 1. Core Sphere (Glow glass with metallic wireframe look) */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1.4, 1]} />
        <meshStandardMaterial
          color="#d97706"
          emissive="#fbbf24"
          emissiveIntensity={0.6}
          roughness={0.1}
          metalness={0.9}
          wireframe
        />
      </mesh>

      {/* Solid inner core glowing ball */}
      <mesh>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshBasicMaterial color="#fbbf24" />
      </mesh>

      {/* 2. Outer Ring 1 */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[2.2, 0.08, 16, 100]} />
        <meshStandardMaterial
          color="#d97706"
          emissive="#b45309"
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* 3. Outer Ring 2 */}
      <mesh ref={ring2Ref} rotation={[0, -Math.PI / 4, 0]}>
        <torusGeometry args={[2.6, 0.05, 16, 100]} />
        <meshStandardMaterial
          color="#fbbf24"
          emissive="#f59e0b"
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* 4. Small Orbiting Satellites / Tech Nodes */}
      {Array.from({ length: 5 }).map((_, i) => {
        const angle = (i / 5) * Math.PI * 2
        const radius = 3.2
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius
        return (
          <Float key={i} speed={2} floatIntensity={1.5}>
            <mesh position={[x, (i % 2 === 0 ? 0.6 : -0.6), z]}>
              <octahedronGeometry args={[0.22, 0]} />
              <meshStandardMaterial
                color="#fbbf24"
                emissive="#d97706"
                roughness={0.1}
                metalness={0.95}
              />
            </mesh>
          </Float>
        )
      })}
    </group>
  )
}

function SceneContents({ mouse }: { mouse: { nx: number; ny: number } }) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (!groupRef.current) return
    // Dynamic mouse parallax effect
    groupRef.current.rotation.y += (mouse.nx * 0.35 - groupRef.current.rotation.y) * 0.05
    groupRef.current.rotation.x += (-mouse.ny * 0.25 - groupRef.current.rotation.x) * 0.05
  })

  return (
    <group ref={groupRef}>
      {/* Premium studio lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[6, 6, 6]} intensity={2} color="#fbbf24" />
      <pointLight position={[-6, -4, -6]} intensity={1.5} color="#d97706" />
      <directionalLight position={[0, 5, 0]} intensity={1} color="#ffffff" />

      {/* Detailed center TechCore */}
      <PresentationControls
        global
        config={{ mass: 2, tension: 500 }}
        snap={{ mass: 4, tension: 150 }}
        rotation={[0, 0, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.5, Math.PI / 1.5]}
      >
        <TechCore />
      </PresentationControls>
    </group>
  )
}

export default function SceneBackground({ dim = false }: { dim?: boolean }) {
  const mouse = useMousePosition()
  const dpr = useMemo<[number, number]>(() => [1, 1.5], [])

  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10"
      style={{ opacity: dim ? 0.35 : 0.95 }}
      aria-hidden="true"
    >
      <Canvas
        dpr={dpr}
        camera={{ position: [0, 0, 7.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <SceneContents mouse={mouse} />
      </Canvas>
    </div>
  )
}
