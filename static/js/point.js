import * as THREE from './three.module.js';
export default class point extends THREE.Object3D {
	/**
	 * 
	 * @param {THREE.Mesh} geometry 
	 */
	constructor(mesh)
	{
		super()
		this.selected = false;
		this.add(mesh);
		this.mesh = mesh;
		this.defaultColor = this.mesh.material.color.clone();
		this.toggleState = false;
	}
	select()
	{
		this.mesh.object
		this.selected = true;
	}

	toggle(color) {
		this.toggleState = ! this.toggleState;
		console.log(this.toggleState === true ? color : this.defaultColor);
		console.log(this.toggleState, color, this.defaultColor);
		this.mesh.material.color.set(this.toggleState ? color : this.defaultColor)
	}
}