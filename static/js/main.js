const arrow_button = document.getElementById('arrow-button')
const states = ['fa-arrows-alt-v', 'fa-arrows-alt-h']
let state = 0
let inPortrait = window.innerWidth < window.innerHeight
const buttons = document.getElementById('buttons')
if (inPortrait) {
	toggleClassName(buttons, 'portrait')
} else {
	toggleClassName(buttons, 'landscape')
}
arrow_button.addEventListener('click', () => {
	const element = document.getElementById('arrow-button')
	toggleClassName(element, 'rotated')
})
window.addEventListener('resize', e => {
	const tempInPortrait = window.innerWidth < window.innerHeight
	if (inPortrait != tempInPortrait) {
		inPortrait = tempInPortrait
		toggleClassName(buttons, 'landscape')
		toggleClassName(buttons, 'portrait')
	}
	const element = document.getElementById('buttons')
	if (element.className.includes('landscape')) element.className
})
function toggleClassName(element, className) {
	if (element.className.includes(className))
		element.className = element.className.replace(' ' + className, '')
	else element.className += ' ' + className
}
