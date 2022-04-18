// on file upload function
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
 
// on ar-hit track started and found events
const arEl = document.getElementsByTagName("a-scene")[0];
arEl.addEventListener('ar-hit-test-start', function() {
	document.getElementById("overlay").classList.remove("hide");
})
arEl.addEventListener('ar-hit-test-achieved', function() {
	document.getElementsByClassName("ar-help-window")[0].classList.add("hide");
})

