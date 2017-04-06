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
$( ".cross" ).hide();

$( ".hamburger" ).click(function() {
	$( ".menu" ).slideToggle( "slow", function() {
		$( ".hamburger" ).hide();
		$( ".cross" ).show();
	});
});

$( ".cross" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});