// var scene, camera, renderer, material, orbit_control
// var mesh, leftside_mesh, rightside_mesh
// var start_time, animation_time, animating
// var angle, speed

// import * as THREE from "three"
// import { OrbitControls } from '@/node_modules/three/examples/jsm/controls/OrbitControls'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// import oc from 'three-orbit-controls'

// init()

// function init() {
//   animating = false
//   reset()

//   scene = new THREE.Scene()

//   const canvas = document.getElementById("c")

//   camera = new THREE.PerspectiveCamera(
//     40,
//     window.innerWidth / window.innerHeight,
//     1,
//     1000,
//   )
//   orbit_control = new THREE.OrbitControls(camera, canvas)
//   camera.position.set(4, 20, 40)
//   camera.lookAt(scene.position)
//   camera.updateProjectionMatrix()
//   orbit_control.maxDistance = 60
//   orbit_control.dampingFactor = 0.5
//   orbit_control.enableDamping = true
//   orbit_control.update()
//   orbit_control.enabled = true

//   material = new THREE.MeshPhongMaterial({
//     color: 0xfdfdf9,
//     transparent: false,
//     side: THREE.DoubleSide,
//   })

//   mesh = new THREE.Mesh(getPageGeometry(angle), material)
//   mesh.castShadow = true
//   mesh.receiveShadow = true
//   scene.add(mesh)

//   leftside_mesh = new THREE.Mesh(getPageGeometry(187), material)
//   leftside_mesh.castShadow = true
//   leftside_mesh.receiveShadow = true
//   scene.add(leftside_mesh)

//   rightside_mesh = new THREE.Mesh(getPageGeometry(-7), material)
//   rightside_mesh.castShadow = true
//   rightside_mesh.receiveShadow = true
//   scene.add(rightside_mesh)

//   light1 = new THREE.DirectionalLight(0xffffff, 0.65)
//   light1.position.set(-10, 25, 10)
//   light1.target.position.set(0, 0, 0)

//   light1.castShadow = true
//   light1.shadow.bias = -0.002
//   light1.shadow.camera.top = 40
//   light1.shadow.camera.bottom = -20
//   light1.shadow.camera.left = -40
//   light1.shadow.camera.right = 40
//   light1.shadow.camera.near = 1
//   light1.shadow.camera.far = 60
//   light1.shadow.mapSize.width = 2048
//   light1.shadow.mapSize.height = 2048

//   scene.add(light1)
//   scene.add(light1.target)

//   light2 = new THREE.AmbientLight(0xffffff, 0.3)
//   scene.add(light2)

//   light3 = new THREE.DirectionalLight(0xffffff, 0.05)
//   light3.position.set(20, 25, -20)
//   light3.target.position.set(0, 0, 0)

//   light3.castShadow = true
//   light3.shadow.bias = -0.002
//   light3.shadow.camera.top = 40
//   light3.shadow.camera.bottom = -20
//   light3.shadow.camera.left = -40
//   light3.shadow.camera.right = 40
//   light3.shadow.camera.near = 1
//   light3.shadow.camera.far = 60
//   light3.shadow.mapSize.width = 2048
//   light3.shadow.mapSize.height = 2048

//   scene.add(light3)
//   scene.add(light3.target)

//   renderer = new THREE.WebGLRenderer({
//     canvas: canvas,
//     antialias: true,
//   })
//   renderer.shadowMap.enabled = true
//   renderer.shadowMap.type = THREE.PCFSoftShadowMap
//   renderer.setPixelRatio(window.devicePixelRatio)
//   renderer.setSize(window.innerWidth, window.innerHeight)

//   window.addEventListener("resize", onWindowResize)

//   requestAnimationFrame(render)
// }

// function stop() {
//   animating = false
// }

// function play() {
//   animating = true
//   requestAnimationFrame(render)
// }

// function reset() {
//   start_time = -1
//   animation_time = -1
//   angle = -7
//   speed = 0.02
// }

// function getPageGeometry(angle_in_degrees) {
//   const geometry = new THREE.BufferGeometry()

//   const indices = []
//   const vertices = []
//   const normals = []

//   const page_length = 30
//   const page_width = 22
//   const angle_in_radians = (angle_in_degrees * Math.PI) / 180
//   const max_height = 3

//   const direction = angle_in_degrees > 90 ? -1 : 1
//   const length_segment_count = 10
//   const length_segment_size = page_length / length_segment_count

//   // generate vertices and normals for the curved planar surface

//   const length_curved_part =
//     direction * max_height * (Math.PI / 2 - angle_in_radians)
//   const curved_part_segment_count = 25
//   const curved_part_segment_size =
//     length_curved_part / curved_part_segment_count

//   let x, y, z, l, c, s
//   for (let i = 0; i <= curved_part_segment_count; i++) {
//     l = (i * curved_part_segment_size) / max_height
//     c = Math.cos(l)
//     s = Math.sin(l)
//     x = direction * max_height * (1 - c)
//     y = max_height * s

//     for (let j = 0; j <= length_segment_count; j++) {
//       z = j * length_segment_size - page_length / 2

//       vertices.push(x, y, z)
//       normals.push(-c, s * direction, 0)
//     }
//   }

//   // generate vertices and normals for the flat planar surface
//   const x_start = x
//   const y_start = y
//   const length_flat_part = page_width - length_curved_part
//   const flat_part_segment_count = 5
//   const flat_part_segment_size = length_flat_part / flat_part_segment_count

//   for (let i = 1; i <= flat_part_segment_count; i++) {
//     l = i * flat_part_segment_size
//     x = x_start + l * s * direction
//     y = y_start + l * c

//     for (let j = 0; j <= length_segment_count; j++) {
//       z = j * length_segment_size - page_length / 2

//       vertices.push(x, y, z)
//       normals.push(-c, s * direction, 0)
//     }
//   }

//   // generate indices (data for element array buffer)
//   const width_segment_count =
//     curved_part_segment_count + flat_part_segment_count
//   for (let i = 0; i < width_segment_count; i++) {
//     for (let j = 0; j < length_segment_count; j++) {
//       const a = i * (length_segment_count + 1) + (j + 1)
//       const b = i * (length_segment_count + 1) + j
//       const c = (i + 1) * (length_segment_count + 1) + j
//       const d = (i + 1) * (length_segment_count + 1) + (j + 1)

//       // generate two faces (triangles) per iteration
//       indices.push(a, d, b) // face one
//       indices.push(b, d, c) // face two
//     }
//   }

//   geometry.setIndex(indices)
//   geometry.setAttribute(
//     "position",
//     new THREE.Float32BufferAttribute(vertices, 3),
//   )
//   geometry.setAttribute("normal", new THREE.Float32BufferAttribute(normals, 3))

//   return geometry
// }

// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight
//   camera.updateProjectionMatrix()

//   renderer.setSize(window.innerWidth, window.innerHeight)
// }

// function render(render_time) {
//   if (animating === true) {
//     if (start_time < 0) {
//       start_time = render_time
//     }
//     const new_time = render_time - start_time
//     const delta = new_time - animation_time
//     animation_time = new_time

//     angle = angle + speed * delta
//     if (angle > 187) {
//       angle = -7.0
//     }

//     mesh.geometry.dispose()
//     const geom = getPageGeometry(angle)
//     mesh.geometry = geom
//   }
//   renderer.render(scene, camera)

//   requestAnimationFrame(render)
// }

export const ignore = {}
