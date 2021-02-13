import * as THREE from './three.module.js';
class point {
	/**
	 * 
	 * @param {THREE.Mesh} geometry 
	 */
	constructor(mesh)
	{
		this.selected = false;
		this.mesh = mesh;
	}
	select()
	{
		this.mesh.object
		this.selected = true;
	}
}