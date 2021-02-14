const magicButton = document.getElementById('magic-button')
magicButton.addEventListener('click', magicButtonClicked)



function setLoading(loading) {
    if (loading) {
        magicButton.disabled = true;
    } else {
        magicButton.disabled = true
    }
}
let response = ""
function magicButtonClicked() {
    console.log('called')
    setLoading(true);
    toggleClassName(magicButton, 'disabled')
    const data = { 'pts': [0, 0, 0, 1, 1, 2] }
	const getRequest = new XMLHttpRequest();
	const url = "/api/debug/getSimilarModels?pts="+encodeURIComponent(data['pts']);
	getRequest.open("POST", url, true);
	getRequest.onreadystatechange = function () {
		console.log("LOOL")
		if (getRequest.readyState === 4 && getRequest.status === 200) {
			var json = JSON.parse(getRequest.responseText);
			console.log(json);
		}
		else
		{
			console.log(getRequest.responseText);
		}
	};
	fetch('/api/v1/debug/getSimilarModels?pts='+JSON.stringify(data), {
		method: 'POST',
		body: data
	})
		// .then(response => response.json())
		.then(data => {
            console.log('returned ', data)
            setLoading(false);
			response = data.json();
            toggleClassName(magicButton, 'disabled')
		})
		.catch(error => {
			console.error('Error:', error)
		})
	

}