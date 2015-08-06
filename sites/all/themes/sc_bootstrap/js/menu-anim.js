jQuery(document).ready(function($) {
	/*add class to remove the border*/
	$("nav ul li").on("click", function(e) {
		e.preventDefault();
		if($(this).hasClass("nav-ul-li-remove-border")){
			$(this).removeClass("nav-ul-li-remove-border");
		}
		else{
			$(this).addClass("nav-ul-li-remove-border");	
		}
	});

	/*add calss to remove padding*/
	$("nav ul li a").on("click", function(e) {
		e.preventDefault();
		if($(this).hasClass("nav-ul-li-a-remove-padding")){
			$(this).removeClass("nav-ul-li-a-remove-padding");
		}
		else{
			$(this).addClass("nav-ul-li-a-remove-padding");	
		}
	});


});