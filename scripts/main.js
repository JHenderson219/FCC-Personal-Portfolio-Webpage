const projects = [{
	name:"Placeholder Project",
	imageCaption:"This is a placeholder image caption.",
	imageURL:"https://upload.wikimedia.org/wikipedia/commons/c/c4/PM5544_with_non-PAL_signals.png",
	projectLink:"#"
}];

console.log (JSON.stringify(projects));
function generateProjectTiles(projObj){
	return projObj.map(function(e){
		return 
	});
}

/* Thanks to Glenn Smith on CodePen (https://codepen.io/g13nn/pen/eHGEF) for the jQuery for the hamburger menu */
//$(".menu").hide();
//$( ".cross" ).hide();

$( ".hamburger" ).click(function() {
		console.log(document.getElementsByClassName("menu")[0].style.display)
		document.getElementsByClassName("menu")[0].style.display = "flex";
		document.getElementsByClassName("menu")[0].style.position = "absolute";
		document.getElementsByClassName("menu-link")[0].style.display = "flex";
		$( ".hamburger" ).hide();
		$( ".cross" )[0].style.display = "flex";

});

$( ".cross" ).click(function() {
		$( ".cross" )[0].style.display= "none";
		document.getElementsByClassName("menu")[0].style.display = "none";
		$( ".hamburger" )[0].style.display = "flex";
});