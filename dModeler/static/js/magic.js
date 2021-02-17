import * as canvas from './canvas.js';

const magicButton = document.getElementById('magic-button')
magicButton.addEventListener('click', updatePointsToServerMagic)

function setLoading(element, loading) {
	element.disabled = loading
	if (loading)
		document.getElementById('modal').style.display = "flex";
	else
	document.getElementById('modal').style.display = "none";
}

function updatePointsToServerMagic() {
	setLoading(magicButton, true)
	toggleClassName(magicButton, 'disabled')
	console.log(canvas.getPressedDots())
	const data = { pts: canvas.getPressedDots() }

	fetch('api/v1/getSimilarModels', {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		  },
		body: JSON.stringify(data)
	})
		.then(response => response.json())
		.then(data => {
			console.log('returned ', data.pts)
			setLoading(magicButton, false)
			toggleClassName(magicButton, 'disabled')
		})
		.catch((error) => {
			setLoading(magicButton, false)
			toggleClassName(magicButton, 'disabled')
			console.log("rip", error);
		});

}
