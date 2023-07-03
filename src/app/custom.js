/*-------------------------------------------------------------------------
 * IPRESSUM - Custom jQuery Scripts
 * ------------------------------------------------------------------------

	1.	Plugins Init
	2.	Site Specific Functions
	3.	Shortcodes
	4.      Other Need Scripts (Plugins config, themes and etc)
	
-------------------------------------------------------------------------*/


jQuery(document).ready(function($){
	
	
/*------------------------------------------------------------------------*/
/*	1.	Plugins Init
/*------------------------------------------------------------------------*/




	
/*-----------PARALLAX INIT-------------*/
	function initParallax() {
		$('#counter').parallax("100%", 0.3);
		$('#partners').parallax("100%", 0.3);
		$('#testimonials').parallax("100%", 0.1);

	}
	initParallax();


/*-----------COUNTDOWN FOR OUR TEAM-------------*/


	jQuery('.counter-item').appear(function() {
		jQuery('.counter-number').countTo();
		jQuery(this).addClass('funcionando');
		console.log('funcionando');
	});


/*-----------school tab-------------*/
    $(window).load(function() {
		
		$('.nav-tabs a').click(function (e) {
		  e.preventDefault();
		  $(this).tab('show');
		})
		
    });

});

/*-----------------------WOW---------------------------*/

(function ($) {

	new WOW().init();

	jQuery(window).load(function() { 
		jQuery("#preloader").delay(100).fadeOut("slow");
		jQuery("#load").delay(100).fadeOut("slow");
	});

/*
	//jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
		}
	});

	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$('.navbar-nav li a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
		$('.page-scroll a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});*/

})(jQuery);




