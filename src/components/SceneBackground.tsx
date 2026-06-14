import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, PresentationControls } from '@react-three/drei'
import * as THREE from 'three'
import { useMousePosition } from '../hooks/useMousePosition'

/**
 * 3D Developer Workbench Model
 * Renders a stylized 3D desktop/editor viewport representing full-stack code and mobile building:
 * - A glowing 3D floating laptop/screen panel displaying active code (glowing grid/code lines).
 * - A floating smartphone model on the side representing mobile/app engineering (Flutter/Dart).
 * - Floating code blocks, brackets, and glowing tags representing full-stack software development.
 */
function DeveloperWorkbench() {
  const groupRef = useRef<THREE.Group>(null)
  const screenRef = useRef<THREE.Mesh>(null)
  const phoneRef = useRef<THREE.Mesh>(null)
  const bracketLRef = useRef<THREE.Mesh>(null)
  const bracketRRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime()

    // Smooth overall floating movement
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(elapsed * 1.2) * 0.15
      groupRef.current.rotation.y = Math.sin(elapsed * 0.4) * 0.05
    }

    // Individual subtle rotations for developer parts
    if (screenRef.current) {
      screenRef.current.rotation.y = Math.sin(elapsed * 0.8) * 0.03
    }
    if (phoneRef.current) {
      phoneRef.current.rotation.x = Math.cos(elapsed * 1.0) * 0.05
      phoneRef.current.rotation.y = Math.sin(elapsed * 1.2) * 0.08
    }

    // Floating brackets rotations
    if (bracketLRef.current) {
      bracketLRef.current.position.y = Math.sin(elapsed * 1.5) * 0.1
      bracketLRef.current.rotation.y = elapsed * 0.1
    }
    if (bracketRRef.current) {
      bracketRRef.current.position.y = Math.cos(elapsed * 1.5) * 0.1
      bracketRRef.current.rotation.y = -elapsed * 0.1
    }
  })

  return (
    <group ref={groupRef} position={[0, -0.2, 0]}>
      {/* 1. Laptop / Monitor Screen Panel (Representing Web/Frontend/Backend) */}
      <mesh ref={screenRef} position={[-0.4, 0, 0]}>
        <boxGeometry args={[3.2, 2.0, 0.12]} />
        <meshStandardMaterial
          color="#1a1a1e"
          roughness={0.2}
          metalness={0.8}
        />
        
        {/* Glow Screen Surface displaying mockup lines of code */}
        <mesh position={[0, 0, 0.07]}>
          <planeGeometry args={[3.0, 1.8]} />
          <meshStandardMaterial
            color="#2e2518"
            emissive="#fbbf24"
            emissiveIntensity={0.25}
            roughness={0.1}
          />
          
          {/* Decorative code mockup bars */}
          {Array.from({ length: 6 }).map((_, i) => (
            <mesh key={i} position={[-0.8 + (i % 2 === 0 ? 0.2 : 0), 0.5 - i * 0.22, 0.01]}>
              <boxGeometry args={[1.2 + (i % 3 === 0 ? 0.4 : -0.2), 0.08, 0.01]} />
              <meshBasicMaterial color={i % 2 === 0 ? '#fbbf24' : '#d97706'} />
            </mesh>
          ))}
          <mesh position={[0.9, -0.4, 0.01]}>
            <sphereGeometry args={[0.25, 16, 16]} />
            <meshBasicMaterial color="#fbbf24" />
          </mesh>
        </mesh>

        {/* Laptop Stand Base */}
        <mesh position={[0, -1.15, -0.4]} rotation={[Math.PI / 2.2, 0, 0]}>
          <boxGeometry args={[1.0, 0.8, 0.08]} />
          <meshStandardMaterial color="#1a1a1e" roughness={0.3} metalness={0.8} />
        </mesh>
        <mesh position={[0, -1.0, -0.1]}>
          <cylinderGeometry args={[0.15, 0.15, 0.4]} />
          <meshStandardMaterial color="#1a1a1e" roughness={0.3} metalness={0.8} />
        </mesh>
      </mesh>

      {/* 2. Floating smartphone on the side (Representing Mobile Development / Flutter) */}
      <group ref={phoneRef} position={[1.8, -0.4, 1]}>
        <mesh>
          <boxGeometry args={[0.9, 1.8, 0.1]} />
          <meshStandardMaterial color="#121214" roughness={0.1} metalness={0.9} />
        </mesh>
        {/* Glow Phone Screen */}
        <mesh position={[0, 0, 0.06]}>
          <planeGeometry args={[0.8, 1.7]} />
          <meshStandardMaterial
            color="#d97706"
            emissive="#fbbf24"
            emissiveIntensity={0.35}
            roughness={0.1}
          />
        </mesh>
        {/* Phone Button indicator */}
        <mesh position={[0, -0.75, 0.08]}>
          <cylinderGeometry args={[0.05, 0.05, 0.02]} rotation={[Math.PI / 2, 0, 0]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      </group>

      {/* 3. Floating 3D Code Brackets "{ }" */}
      {/* Left Bracket */}
      <group ref={bracketLRef} position={[-2.4, 0.6, 0.5]}>
        <mesh>
          <torusGeometry args={[0.4, 0.08, 8, 24, Math.PI]} rotation={[0, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#fbbf24" emissive="#d97706" emissiveIntensity={0.5} />
        </mesh>
        <mesh position={[0, 0.4, 0]}>
          <boxGeometry args={[0.08, 0.4, 0.08]} />
          <meshStandardMaterial color="#fbbf24" />
        </mesh>
        <mesh position={[0, -0.4, 0]}>
          <boxGeometry args={[0.08, 0.4, 0.08]} />
          <meshStandardMaterial color="#fbbf24" />
        </mesh>
      </group>

      {/* Right Bracket */}
      <group ref={bracketRRef} position={[2.5, 0.8, -0.5]}>
        <mesh>
          <torusGeometry args={[0.4, 0.08, 8, 24, Math.PI]} rotation={[0, 0, -Math.PI / 2]} />
          <meshStandardMaterial color="#fbbf24" emissive="#d97706" emissiveIntensity={0.5} />
        </mesh>
        <mesh position={[0, 0.4, 0]}>
          <boxGeometry args={[0.08, 0.4, 0.08]} />
          <meshStandardMaterial color="#fbbf24" />
        </mesh>
        <mesh position={[0, -0.4, 0]}>
          <boxGeometry args={[0.08, 0.4, 0.08]} />
          <meshStandardMaterial color="#fbbf24" />
        </mesh>
      </group>
    </group>
  )
}

function SceneContents({ mouse }: { mouse: { nx: number; ny: number } }) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (!groupRef.current) return
    groupRef.current.rotation.y += (mouse.nx * 0.25 - groupRef.current.rotation.y) * 0.05
    groupRef.current.rotation.x += (-mouse.ny * 0.15 - groupRef.current.rotation.x) * 0.05
  })

  return (
    <group ref={groupRef}>
      {/* Studio developer lighting */}
      <ambientLight intensity={0.6} />
      <pointLight position={[6, 8, 6]} intensity={2.5} color="#fbbf24" />
      <pointLight position={[-6, -4, -6]} intensity={1.5} color="#d97706" />
      <directionalLight position={[0, 6, 2]} intensity={1.2} color="#ffffff" />

      <PresentationControls
        global
        config={{ mass: 1.5, tension: 400 }}
        snap={{ mass: 3, tension: 150 }}
        rotation={[0.1, 0.4, 0]}
        polar={[-Math.PI / 4, Math.PI / 4]}
        azimuth={[-Math.PI / 2, Math.PI / 2]}
      >
        <DeveloperWorkbench />
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
        camera={{ position: [0, 0, 7.5], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
      >
        <SceneContents mouse={mouse} />
      </Canvas>
    </div>
  )
}
