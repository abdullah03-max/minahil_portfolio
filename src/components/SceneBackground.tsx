import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, PresentationControls } from '@react-three/drei'
import * as THREE from 'three'
import { useMousePosition } from '../hooks/useMousePosition'

/**
 * 3D Holographic Cyber Globe representing Global Web & Mobile Engineering.
 * Renders an abstract glowing sphere with a highly detailed, rotating cybernetic grid, 
 * orbital code orbits, floating data brackets, and dynamic light flares.
 */
function HologramGlobe() {
  const globeRef = useRef<THREE.Group>(null)
  const sphereRef = useRef<THREE.Mesh>(null)
  const ringXRef = useRef<THREE.Mesh>(null)
  const ringYRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime()

    // Smooth floating movement
    if (globeRef.current) {
      globeRef.current.position.y = Math.sin(elapsed * 1.5) * 0.15
      globeRef.current.rotation.y = elapsed * 0.1
    }

    // Inner wireframe sphere rotation
    if (sphereRef.current) {
      sphereRef.current.rotation.y = elapsed * 0.25
      sphereRef.current.rotation.z = Math.sin(elapsed * 0.5) * 0.2
    }

    // Interactive counter-rotating outer code rings
    if (ringXRef.current) {
      ringXRef.current.rotation.y = elapsed * 0.4
    }
    if (ringYRef.current) {
      ringYRef.current.rotation.x = -elapsed * 0.3
    }
  })

  // Pre-generate random coordinate points for floating particles surrounding the globe
  const points = useMemo(() => {
    const arr = []
    for (let i = 0; i < 30; i++) {
      const u = Math.random()
      const v = Math.random()
      const theta = u * 2.0 * Math.PI
      const phi = Math.acos(2.0 * v - 1.0)
      const r = 2.4 + Math.random() * 0.8
      const x = r * Math.sin(phi) * Math.cos(theta)
      const y = r * Math.sin(phi) * Math.sin(theta)
      const z = r * Math.cos(phi)
      arr.push(new THREE.Vector3(x, y, z))
    }
    return arr
  }, [])

  return (
    <group ref={globeRef}>
      {/* 1. Core Sphere (Inner glowing core representing full-stack code energy) */}
      <mesh>
        <sphereGeometry args={[0.9, 32, 32]} />
        <meshStandardMaterial
          color="#d97706"
          emissive="#fbbf24"
          emissiveIntensity={0.8}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* 2. Cyber Web / Tech Grid (Middle wireframe layer representing clean code architecture) */}
      <mesh ref={sphereRef}>
        <icosahedronGeometry args={[1.6, 2]} />
        <meshStandardMaterial
          color="#fbbf24"
          emissive="#d97706"
          emissiveIntensity={0.5}
          roughness={0.2}
          metalness={0.8}
          wireframe
        />
      </mesh>

      {/* 3. Horizontal Code Orbit (Orbital rings represent frontend & mobile paths) */}
      <mesh ref={ringXRef}>
        <torusGeometry args={[2.2, 0.05, 16, 100]} />
        <meshStandardMaterial
          color="#fbbf24"
          emissive="#d97706"
          emissiveIntensity={0.6}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* 4. Vertical Code Orbit */}
      <mesh ref={ringYRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.5, 0.03, 8, 80]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#fbbf24"
          emissiveIntensity={0.4}
          roughness={0.1}
          metalness={0.95}
          wireframe
        />
      </mesh>

      {/* 5. Orbiting Tech Nodes / Data Points */}
      {points.map((pt, i) => (
        <Float key={i} speed={1.5} floatIntensity={1.2}>
          <mesh position={pt}>
            <boxGeometry args={[0.08, 0.08, 0.08]} />
            <meshBasicMaterial color={i % 2 === 0 ? '#fbbf24' : '#d97706'} />
          </mesh>
        </Float>
      ))}

      {/* 6. Glowing Bracket Elements Floating Near the Cyber Globe */}
      <Float speed={2} floatIntensity={1.8}>
        <group position={[-2.4, 0.6, 0.2]}>
          <mesh>
            <torusGeometry args={[0.3, 0.06, 8, 24, Math.PI]} rotation={[0, 0, Math.PI / 2]} />
            <meshStandardMaterial color="#fbbf24" emissive="#d97706" emissiveIntensity={0.7} />
          </mesh>
        </group>
      </Float>
      <Float speed={2.2} floatIntensity={1.6}>
        <group position={[2.4, -0.6, -0.2]}>
          <mesh>
            <torusGeometry args={[0.3, 0.06, 8, 24, Math.PI]} rotation={[0, 0, -Math.PI / 2]} />
            <meshStandardMaterial color="#fbbf24" emissive="#d97706" emissiveIntensity={0.7} />
          </mesh>
        </group>
      </Float>
    </group>
  )
}

function SceneContents({ mouse }: { mouse: { nx: number; ny: number } }) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (!groupRef.current) return
    // Dynamic mouse parallax effect
    groupRef.current.rotation.y += (mouse.nx * 0.3 - groupRef.current.rotation.y) * 0.05
    groupRef.current.rotation.x += (-mouse.ny * 0.2 - groupRef.current.rotation.x) * 0.05
  })

  return (
    <group ref={groupRef}>
      {/* Dynamic atmospheric lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[6, 8, 6]} intensity={3} color="#fbbf24" />
      <pointLight position={[-6, -4, -6]} intensity={2} color="#b45309" />
      <directionalLight position={[0, 5, 2]} intensity={1.5} color="#ffffff" />

      {/* PresentationControls for premium drag interaction */}
      <PresentationControls
        global
        config={{ mass: 1.5, tension: 400 }}
        snap={{ mass: 3, tension: 150 }}
        rotation={[0.1, 0.2, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.5, Math.PI / 1.5]}
      >
        <HologramGlobe />
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
      style={{ opacity: dim ? 0.3 : 0.95 }}
      aria-hidden="true"
    >
      <Canvas
        dpr={dpr}
        camera={{ position: [0, 0, 7.2], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
      >
        <SceneContents mouse={mouse} />
      </Canvas>
    </div>
  )
}
