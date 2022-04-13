const reticle = document.querySelector('[ar-hit-test]');

function previewFile() {
	const preview = document.getElementById("entityUpload")
	const file = document.querySelector('input[type=file]').files[0];
	const reader = new FileReader();

	reader.addEventListener("load", function () {
		// convert image file to base64 string
		preview.setAttribute("gltf-model", reader.result)
	}, false);

	if (file) {
		reader.readAsDataURL(file);
	}
	 
	//delete default model
	document.getElementById("defaultModel").remove();
}

document.querySelector('a-scene').addEventListener('loaded', function () {
	console.log("removing ar buttons");
	document.getElementsByClassName('a-enter-vr-button')[0].remove();
	document.getElementsByClassName('a-enter-ar-button')[0].remove();
})
