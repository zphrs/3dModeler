const arrow_button = document.getElementById('arrow-button')
const states = ['fa-arrows-alt-v', 'fa-arrows-alt-h']
let state = 0

arrow_button.addEventListener('onclick', () => {
    ++state;
    const new_class = states[state % states.length]
    const old_class = document.getElementById('arrow-button-icon').className
    let current_class;
    states.forEach(state => {
        if (state in old_class)
            current_class = state;
    })
    arrow_button.getElementById('arrow-button-icon').className = old_class.replace(current_class, new_class)

})
