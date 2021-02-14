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
			cube.position.set(x - res / 2 + 0.5, y - res / 2 + 0.5, z-res/2+.5)
			cube.position.multiplyScalar(distBetweenDots)
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

var onDownCoords = [0, 0];
var down = false, isHold = false, isDrag = false, isPan = false;
var topOrBottom = 0;
var timeOutEvent, zoomInEvent;
var rotVel = [0, 0];
var rot = [0, 0];
var rotOnDown = [0, 0];
document.addEventListener("pointerdown", e =>
{
	rotVel = [0, 0];

	if ((e.pointerType == "mouse" && (e.button == 0)) || e.pointerType != "mouse")
	{
		onDownCoords = [e.clientX, e.clientY];
		topOrBottom = e.clientY/window.innerHeight == .5? 0: e.clientY/window.innerHeight <.5 ?-1:1;
		down = true;
		isHold = false;
		isDrag = false;
		rotOnDown = [everyObj.rot[0], everyObj.rot[1], 0];
	}
});
document.addEventListener("pointerup", pUp);

function pUp(e)
{
	if (down)
	{
		down = false;
		isPan = false;
		clearTimeout(timeOutEvent);
		clearInterval(zoomInEvent);
		if (!isHold && !isDrag && (Math.abs(onDownCoords[0]-e.clientX)<10 || Math.abs(onDownCoords[1]-e.clientY)<10))
		{
			onclick(e)
		}
	}
}
function onclick(e)
{
	setMouse(mouse, e);
	raycaster.setFromCamera(mouse, camera)
	// calculate objects intersecting the picking ray
	const intersects = raycaster.intersectObjects(parent.children)

	for (let i = 0; i < intersects.length; i++) {
		intersects[i].object.material.color.set(cubeColor)
	}
}
function setMouse(vecMouse, event) {
	vecMouse.x = (event.clientX / window.innerWidth) * 2 - 1
	vecMouse.y = -(event.clientY / window.innerHeight) * 2 + 1
}
document.addEventListener("pointermove", e=> {
	if (down && !isDrag && (Math.abs(onDownCoords[0]-e.clientX)>10 || Math.abs(onDownCoords[1]-e.clientY)>10))
	{
		isDrag = true;
	}
	if (down && !isHold && isDrag && !isPan)//ensures pan is pan - allowing different thing for a hold and then a drag
	{
		clearTimeout(timeOutEvent);
		isHold = false;
		isPan = true;
	}
	if (isPan)
	{
		var x = (onDownCoords[1]-e.clientY)/Math.min(window.innerHeight, window.innerWidth);
		rot[0] = rotOnDown[0] - x*Math.PI*2;
		rot[0] = Math.min(Math.max(rot[0], -Math.PI/2), Math.PI/2);
		var x = (onDownCoords[0]-e.clientX)/Math.min(window.innerHeight, window.innerWidth);
		rot[1] = rotOnDown[1] - x*Math.PI*1.5;
		parent.setRotationFromEuler(new THREE.Euler(rot[0], rot[1], 0, 'XYZ'));
	}
})

function changeBackgroundCol(col) {
	renderer.setClearColor(col)
	scene.fog = new THREE.FogExp2(col, 0.05)
	cubes.forEach(e => {
		e.material.color.set(0xffffff - col)
	})
}