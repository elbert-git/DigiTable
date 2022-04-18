const elToolTipParent = document.getElementById("toolTipParent");
let toolTipIsVisible = false;
let isMobile = false;
let isAR = false;
 
function ToggleHelp(){
	// toggle visibility of tool window
	if(toolTipIsVisible){
		//remove tool tip
		elToolTipParent.classList.add("hide");
	}
	else{
		//add tool tip
		elToolTipParent.classList.remove("hide");
	}
	 
	
	//toggle vars
	toolTipIsVisible = !toolTipIsVisible;
}
 
// add click event to help button
document.getElementById("helpButton").addEventListener("click", function() {
	ToggleHelp();
});
