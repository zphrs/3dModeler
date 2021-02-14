import * as THREE from './three.module.js';
export default class point {
	/**
	 * 
	 * @param {THREE.Mesh} geometry 
	 */
	constructor(mesh)
	{
		this.selected = false;
		this.mesh = mesh;
		this.defaultColor = this.mesh.material.color;
		this.toggleState = false;
	}
	select()
	{
		this.mesh.object
		this.selected = true;
	}

	toggle(color) {
		this.mesh.material.color.set(this.toggleState ? color: this.defaultColor)
		this.toggleState = !this.toggleState
	}
}