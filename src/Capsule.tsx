import { ThreeElements, useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"


export function Capsule(props: any) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  useFrame((state, delta) => (meshRef.current.rotation.z += delta))
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
      rotation={[-Math.PI / 8,-Math.PI / 8, 0]}
      >
      <capsuleGeometry args={[1, 1, 1]}  />
      <meshStandardMaterial color={hovered ? 'white' : props.color} />
    </mesh>
  )
}