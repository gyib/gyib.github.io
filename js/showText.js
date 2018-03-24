document.addEventListener("touchmove", function(e) { e.preventDefault() });
$(window).ready(function(){
	setTimeout ("$('#welcome').show('slow');",2000);
});