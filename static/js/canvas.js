import * as THREE from './three.module.js';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
let cubes = [];
const res = 10;
const parent = new THREE.Object3D();
const distBetweenDots = 1;
for (var x = 0; x<res; x++)
{
	for (var y = 0; y<res; y++)
	{
		for (var z = 0; z<res; z++)
		{
			const geometry = new THREE.BoxGeometry(.1, .1, .1);
			const material = new THREE.MeshBasicMaterial( { color: 0x808080 } );
			const cube = new THREE.Mesh(geometry, material);
			parent.attach(cube);
			cube.position.set(x-res/2+.5, y-res/2+.5, z);
			cube.position.multiplyScalar(distBetweenDots);
			console.log(cube.position);
			cubes.push(cube);
		}
	}
}
cubes.forEach(e=>
	{
		scene.add(e);
	}
)
// scene.add(parent);
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
camera.position.z = 20;
function animate() {
	requestAnimationFrame( animate );
	raycaster.setFromCamera( mouse, camera );
	// calculate objects intersecting the picking ray
	const intersects = raycaster.intersectObjects( scene.children );

	for ( let i = 0; i < intersects.length; i ++ ) {

		intersects[ i ].object.material.color.set( 0xff0000 );

	}
	renderer.render( scene, camera );
}
animate();

window.addEventListener('resize', e=>
{
	renderer.setSize( window.innerWidth, window.innerHeight );
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
}, false);

window.addEventListener( 'mousemove', onMouseMove, false );
function onMouseMove( event ) {

	// calculate mouse position in normalized device coordinates
	// (-1 to +1) for both components

	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

}

window.addEventListener('pointerdown', onPointerDown, false);
