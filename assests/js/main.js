	
	$(document).ready(function(){
    
    // TOGGLE SEARCH BAR
    	$('.search-main').click(function(){

    		$('.search-form-main').toggleClass('active-class');
    		$('.search-field').focus();
    	});

	});


	// MOBILE MENU
	function openNav(){

		document.getElementById("myNav").style.width = "100%";
	}

	function closeNav(){

		document.getElementById("myNav").style.width = "0%";
	}

