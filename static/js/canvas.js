const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
const material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
let cubes = [];
const res = 10;
const distBetweenDots = 1;
for (var x = 0; x<res; x++)
{
	for (var y = 0; y<res; y++)
	{
		for (var z = 0; z<res; z++)
		{
			const geometry = new THREE.BoxGeometry(.1, .1, .1);
			const cube = new THREE.Mesh(geometry, material);
			cube.position.set(x-res/2, y-res/2, z);
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

camera.position.z = 5;
function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();

window.addEventListener('resize', e=>
{
	renderer.setSize( window.innerWidth, window.innerHeight );
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
}, false)