/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 public/@meshes/book2.glb --types --shadows --transform --resolution 1024 --root public/@meshes --output src/@gen/meshes/Book2Mesh.tsx
*/

import { useGLTF, useTexture } from "@react-three/drei"
import { GroupProps, useFrame } from "@react-three/fiber"
import { motion } from "framer-motion-3d"
import { castArray } from "lodash"
import { easing } from "maath"
import type * as THREE from "three"
import { VideoTexture } from "three"
import { type GLTF } from "three-stdlib"
import { useSnapshot } from "valtio"

import { state } from "@/components/books/BookCustomizer/store"

type GLTFResult = GLTF & {
  nodes: {
    Plane: THREE.Mesh
    Plane019: THREE.Mesh
    sites: THREE.Mesh
  }
  materials: {
    ["Material.002"]: THREE.MeshStandardMaterial
  }
}

// type Book2MeshProps = JSX.IntrinsicElements["group"] & {
//   // add
// }

type Book2MeshProps = {
  // add
}

export function Book2Mesh({ ...props }: Book2MeshProps) {
  const { nodes, materials } = useGLTF(
    "/@meshes/book2-transformed.glb",
  ) as GLTFResult

  const geometry = nodes.sites.geometry
  const material = materials["Material.002"]

  const texture = useTexture(
    "/images/sitchenko-infant-drawing.jpeg",
    // "/images/sitchenko-infant-drawing-bw.png",
    (props) => {
      const texture = castArray(props)[0]

      // texture.rotation = 0.2
      texture.repeat.set(2.2, 1.02)
    },
  )
  const snap = useSnapshot(state)

  useFrame((state, delta) =>
    easing.dampC(material.color, snap.color, 0.25, delta),
  )

  const video = document.getElementById("webcam") as HTMLVideoElement
  const textureWebcam = new VideoTexture(video)
  textureWebcam.offset.set(0.3, 0)

  material.map = texture
  // material.map = textureWebcam

  const opacity = ["intro", "book"].includes(snap.page) ? 1 : 0

  material.opacity = opacity

  // materials["Material.002"].color = new Color(255,255,255)

  if (!["intro", "book"].includes(snap.page)) {
    return null
  }

  return (
    //   <motion.div
    //   className=""
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: snap.page === "book" ? 1 : 0 }}
    //   transition={{
    //     type: "spring",
    //     damping: 7,
    //     stiffness: 30,
    //     restDelta: 0.001,
    //     duration: 0.6,
    //     delay: 0.2,
    //     delayChildren: 0.2,
    //   }}
    // >
    <motion.group
      {...props}
      dispose={null}
      position={[0, 0, 0]}
      scale={0.28}
      rotation={[0, 0, Math.PI / 2]}

      // opacity={}
    >
      {/* <mesh
        castShadow={true}
        receiveShadow={true}
        geometry={nodes.Plane.geometry}
        material={nodes.Plane.material}
        scale={15.38}
      /> */}
      <mesh
        castShadow={true}
        receiveShadow={true}
        geometry={nodes.Plane019.geometry}
        // material={materials["Material.002"]}
        // color="white"
        // position={[0.21, 0.31, 0.21]}
        position={[0.15, -1.01, 0.1]}
        rotation={[Math.PI / 2, 0, 0]}
        // material-roughness={0.2}
      >
        <meshStandardMaterial color="#e0ddcc" />
      </mesh>
      <mesh
        castShadow={true}
        receiveShadow={true}
        geometry={geometry}
        material={material}
        material-roughness={0.711}
        // position={[0, 0, 0]}
        // rotation={[0, 0, Math.PI / 2]}
        // material-roughness={1.0}
        // scale={1.0}
        // scale={0.15}
      >
        {/* <Circle
          scale={0.7}
          // args={[1, 1, 1]} // Width, height, depth. Default is [1, 1, 1]
          // radius={0.5} // Radius of the rounded corners. Default is 0.05
          // smoothness={4} // The number of curve segments. Default is 4
          // creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
          position={[0, -0.7, 0.16]}
          // material={materials["Material.002"]}
          // map={textureWebcam}
        >
          <Decal
            // position={[0.1, -0.7, 0]}
            rotation={[0, 0, -Math.PI / 2]}
            //  position={[0, 0.04, 0.15]}
            //  rotation={[0, 0, 0]}
            //  scale={0.8}
            map={textureWebcam}
            map-anisotropy={16}
          />
        </Circle> */}
        {/* <Decal
        position={[0.1, -0.7, 0]}
         rotation={[0, 0, -Math.PI /2]}
        //  position={[0, 0.04, 0.15]}
        //  rotation={[0, 0, 0]}
         scale={0.8}
         map={textureWebcam}
         map-anisotropy={16}
       />  */}
      </mesh>
    </motion.group>

    // </motion.div>
  )
}

useGLTF.preload("/@meshes/book2-transformed.glb")
