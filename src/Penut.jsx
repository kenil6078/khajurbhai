import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Environment } from '@react-three/drei'

function AnimatedModel({ url }) {
  const { scene } = useGLTF(url)
  const ref = useRef()
  // Animate model rotation on Y axis (continuous rotation)
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01 // Adjust speed as needed
    }
  })
  // Scale up the model for better visibility
  return <primitive ref={ref} object={scene} scale={[10, 10, 10]} />
}

const Penut = () => {
  return (
   <div className="mode w-full px-[20rem] py-[1rem] bg-[#FEE685]">
     <div
      style={{
        width: '60vw',
        height: '80vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ marginTop: '100px', width: '50vw', height: '900px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', zIndex: 10, top: '6rem', left: '9rem', width: '100%', height: '100%' }}>
          <h1 style={{ color: '#fff', fontSize: '7rem', fontWeight: 'bold' }}>Peanuts</h1>
        </div>
        <Canvas
          camera={{ position: [0, 10, 20], fov: 5 }}
        >
          {/* Standard lights */}
          <ambientLight intensity={0.7} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[0, 5, 5]} intensity={0.5} />
          <spotLight position={[-10, 10, 10]} angle={0.3} intensity={0.7} />
          {/* Drei Environment for more realistic lighting */}
          <Environment preset="sunset" />
          <Suspense fallback={null}>
            <AnimatedModel url="/peanuts.glb" />
          </Suspense>
        </Canvas>
      </div>
    </div>
   </div>
  )
}

export default Penut
