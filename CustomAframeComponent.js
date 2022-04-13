AFRAME.registerComponent('remove-xr-buttons', {
	init: function () {
		document.querySelector('a-scene').addEventListener('loaded', function () {
			console.log("removing xr buttons");
			try{
				document.getElementsByClassName("a-enter-vr-button")[0].remove();
				console.log("removed vr")
				document.getElementsByClassName("a-enter-ar-button")[0].remove();
				console.log("removed ar")
			}
			catch(err){
				console.log(err)
			}
		})
	}
});

