const arrow_button = document.getElementById('arrow-button')
const states = ['fa-arrows-alt-v', 'fa-arrows-alt-h']
let state = 0

arrow_button.addEventListener('click', () => {
    const element = document.getElementById('arrow-button')
    if (element.className.includes('rotated')) 
        element.className = element.className.replace('rotated', '')
    else 
        element.className += ' rotated'
})
