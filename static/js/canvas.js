import * as THREE from './three.module.js'
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
	45,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
)
const canvas = document.getElementById('c')
const renderer = new THREE.WebGLRenderer({ canvas: canvas })
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)
let cubes = []
const res = 10
const parent = new THREE.Object3D()
const distBetweenDots = 1
for (var x = 0; x < res; x++) {
	for (var y = 0; y < res; y++) {
		for (var z = 0; z < res; z++) {
			const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1)
			const material = new THREE.MeshBasicMaterial({ color: 0xffffee })
			const cube = new THREE.Mesh(geometry, material)
			parent.attach(cube)
			cube.position.set(x - res / 2 + 0.5, y - res / 2 + 0.5, z)
			cube.position.multiplyScalar(distBetweenDots)
			console.log(cube.position)
			cubes.push(cube)
		}
	}
}



scene.add(parent)
const raycaster = new THREE.Raycaster()
const mouse = new THREE.Vector2()
const mouseOnDown = new THREE.Vector2()
camera.position.z = 20
const cubeColor = getCSSVar('--selected')

changeBackgroundCol(getCSSVar('--background'))

function animate() {
	requestAnimationFrame(animate)
	raycaster.setFromCamera(mouse, camera)
	// calculate objects intersecting the picking ray
	const intersects = raycaster.intersectObjects(parent.children)

	for (let i = 0; i < intersects.length; i++) {
		intersects[i].object.material.color.set(cubeColor)
	}
	renderer.render(scene, camera)
}
animate()

function getCSSVar(cssVar) {
	const color = getComputedStyle(document.documentElement)
		.getPropertyValue(cssVar)
		.replace(' ', '')
	return parseInt(color.slice(1), 16)
}

window.addEventListener(
	'resize',
	e => {
		renderer.setSize(window.innerWidth, window.innerHeight)
		camera.aspect = window.innerWidth / window.innerHeight
		camera.updateProjectionMatrix()
	},
	false
)

window.addEventListener('mousemove', onMouseMove, false)
function onMouseMove(event) {
	setMouse(mouse, event)
}
function setMouse(vecMouse, event) {
	vecMouse.x = (event.clientX / window.innerWidth) * 2 - 1
	vecMouse.y = -(event.clientY / window.innerHeight) * 2 + 1
}
canvas.addEventListener('pointerdown', onPointerDown, false)
function onPointerDown(event) {
	mouseOnDown.set(event.clientX, event.clientY)
}

function changeBackgroundCol(col) {
	renderer.setClearColor(col)
	scene.fog = new THREE.FogExp2(col, 0.05)
	//set each cube to complimentary color of background
	cubes.forEach(e => {
		e.material.color.set(0xffffff - col)
	})
}
