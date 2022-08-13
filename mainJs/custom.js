(function($) {
	'use strict';
	// Mean Menu JS
	jQuery('.mean-menu').meanmenu({ 
		meanScreenWidth: "991"
	});
	// Scroll Event
	$(window).on('scroll', function(){
		var scrolled = $(window).scrollTop();
		if (scrolled > 300) $('.go-top').addClass('active');
		if (scrolled < 300) $('.go-top').removeClass('active');
	});  

	// Click Event JS
	$('.go-top').on('click', function() {
		$("html, body").animate({ scrollTop: "0" },  500);
	});

	
		// Hero Slider Wrap
		$('.hero-slider-wrap').owlCarousel({
			loop: true,
			margin: 0,
			nav: true,
			mouseDrag: false,
			thumbs: true,
			thumbsPrerendered: true,
			items: 1,
			dots: false,
			autoHeight: true,
			autoplay: true,
			smartSpeed: 1500,
			autoplayHoverPause: true,
		});
	
})(jQuery);

