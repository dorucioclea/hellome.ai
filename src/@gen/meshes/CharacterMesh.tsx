/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 public/@meshes/character.glb --types --shadows --transform --resolution 1024 --root public/@meshes --output src/@gen/meshes/CharacterMesh.tsx
*/

import { useRef } from "react"

import { useGLTF } from "@react-three/drei"
import type * as THREE from "three"
import { type GLTF } from "three-stdlib"

export type GLTFResult = GLTF & {
  nodes: {
    stacy: THREE.SkinnedMesh
    mixamorigHips: THREE.Bone
  }
  materials: {}
}

type ActionName =
  | "pockets"
  | "rope"
  | "swingdance"
  | "jump"
  | "react"
  | "shrug"
  | "wave"
  | "golf"
  | "idle"
type GLTFActions = Record<ActionName, THREE.AnimationAction>

export function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null)
  const { nodes, materials, animations } = useGLTF(
    "/../../character-transformed.glb",
  ) as GLTFResult
  // const { actions } = useAnimations<GLTFActions>(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Stacy" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            name="stacy"
            geometry={nodes.stacy.geometry}
            material={nodes.stacy.material}
            skeleton={nodes.stacy.skeleton}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload("/../../character-transformed.glb")