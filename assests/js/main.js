 
  //PRELOADER

  function preloader(){

    var preloader = document.getElementsByClassName('preloader');


    preloader[0].style.display = 'none';

  }

  // MOBILE MENU

  function openNav(){

    document.getElementById("myNav").style.width = "100%";
  }

  function closeNav(){

    document.getElementById("myNav").style.width = "0%";
  }

	$(document).ready(function(){
    
  // TOGGLE SEARCH BAR
        	$('.search-main').click(function(){

    		$('.search-form-main').toggleClass('active-class');
    		$('.search-field').focus();
    	});

  // STICKY MENU 

  $(window).scroll(function(){

    if($(this).scrollTop() > 200){
      $('nav').addClass('sticky');
    }
    else{
      $('nav').removeClass('sticky');
    }
  });



  // PORTFOLIO ACTIVE BUTTON

    $('#all').click(function(){
   		
   		$('#all').addClass('active');

   		$('#design').removeClass('active');
   		$('#code').removeClass('active');
   		$('#Photography').removeClass('active');
   		$('#apps').removeClass('active');

   	});

   	$('#design').click(function(){
   		
   		$('#design').addClass('active');

   		$('#all').removeClass('active');
   		$('#code').removeClass('active');
   		$('#Photography').removeClass('active');
   		$('#apps').removeClass('active');


   	});

   	$('#code').click(function(){
   		
   		$('#code').addClass('active');

   		$('#all').removeClass('active');
   		$('#design').removeClass('active');
   		$('#Photography').removeClass('active');
   		$('#apps').removeClass('active');


   	});

   	$('#Photography').click(function(){
   		
   		$('#Photography').addClass('active');

   		$('#all').removeClass('active');
   		$('#design').removeClass('active');
   		$('#code').removeClass('active');
   		$('#apps').removeClass('active');

   	});

   	$('#apps').click(function(){
   		
   		$('#apps').addClass('active');

   		$('#all').removeClass('active');
   		$('#design').removeClass('active');
   		$('#code').removeClass('active');
   		$('#Photography').removeClass('active');


   	});

    // SCROLL TO TOP

    $(window).scroll(function(){

      if($(this).scrollTop() > 200){
        $('.scroll').fadeIn();
      }

      else{
        $('.scroll').fadeOut();
      }

    });

    // PORTFOLIO MIXITUP 

     var mixer = mixitup('.portfolio-container');

	   });

    //  CLIENTS SECTION SWIPER SLIDER 

        var swiper = new Swiper('.swiper-container', {
      slidesPerView: 2,
      spaceBetween: 10,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {

      768: {
      slidesPerView: 4
      },
      992: {
      slidesPerView: 6
      }
    }

    });




