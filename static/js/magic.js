const magicButton = document.getElementById('magic-button')
magicButton.addEventListener('click', updatePointsToServerMagic)

function setLoading(element, loading) {
	element.disabled = loading
}

function updatePointsToServerMagic() {
	setLoading(magicButton, true)
	toggleClassName(magicButton, 'disabled')
	const data = { pts: [0, 0, 0, 1, 1, 2] }

	fetch('/api/v1/getSimilarModels', {
		method: 'POST',
		body: data
	})
		.then(response => response.json())
		.then(data => {
			console.log('returned ', data)
			setLoading(false)
			toggleClassName(magicButton, 'disabled')
		})
		.catch(error => {
			console.error('Error:', error)
		})

}
