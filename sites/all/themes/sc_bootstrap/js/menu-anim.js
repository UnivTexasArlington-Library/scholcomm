jQuery(document).ready(function($) {
	// add class to remove the border
	$("nav ul li").on("click", function(e) {
		e.preventDefault();
		if($(this).hasClass("nav-ul-li-remove-border")){
			$(this).removeClass("nav-ul-li-remove-border");
		}
		else{
			$(this).addClass("nav-ul-li-remove-border");
		
		}
	});

	//add class to remove padding
	$("nav ul li a").on("click", function(e) {
		e.preventDefault();
		if($(this).hasClass("nav-ul-li-a-remove-padding")){
			$(this).removeClass("nav-ul-li-a-remove-padding");
		}
		else{
			$(this).addClass("nav-ul-li-a-remove-padding");	
		}
	});

	/*$('html').click(function () {
		if($("nav ul li").hasClass("nav-ul-li-remove-border")){
			$("nav ul li").removeClass("nav-ul-li-remove-border");
		}*/
    /*if (e.target.id == 'li.first.expanded.dropdown.active') {
        //do something
        $("nav ul li").removeclass("nav-ul-li-remove-border");
    } else {
        //do something
    }*/
	/*});*/

});


