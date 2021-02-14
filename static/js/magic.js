const magicButton = document.getElementById('magic-button')
magicButton.addEventListener('click', magicButtonClicked)

function setLoading(loading) {
	if (loading) {
		magicButton.disabled = true
	} else {
		magicButton.disabled = true
	}
}

function magicButtonClicked() {
	console.log('clicked')
	setLoading(true)
	toggleClassName(magicButton, 'disabled')
	const data = { pts: [0, 0, 0, 1, 1, 2] }

	fetch('/api/v1/debug/getSimilarModels', {
		method: 'POST',
		body: JSON.stringify(data),
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
