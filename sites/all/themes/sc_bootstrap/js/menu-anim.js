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

	
		//hide menu
		$(document).ready(function () {
    		$(document).click(function (e) {
        		var clickover = e.target.className;
        		var _opened = $("#nav-menu").hasClass("in");
        		if (_opened === true) {
        			
        			//Restoring border
        			$("nav ul li").removeClass("nav-ul-li-remove-border");

					//Restoring padding
					$("nav ul li a").removeClass("nav-ul-li-a-remove-padding");
				
            		//Closing the menu
            		$("button.navbar-toggle").click();
        		}
        		
    		});
		});

});


