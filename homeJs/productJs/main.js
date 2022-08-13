(function ($) {
	"use strict";



/*=============================================
	=         Up Coming product Active        =
=============================================*/
$('.ucm-active').owlCarousel({
	loop: true,
	margin: 30,
	items: 4,
	autoplay: false,
	autoplayTimeout: 5000,
	autoplaySpeed: 1000,
	navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
	nav: true,
	dots: false,
	responsive: {
		0: {
			items: 1,
			nav: false,
		},
		575: {
			items: 2,
			nav: false,
		},
		768: {
			items: 2,
			nav: false,
		},
		992: {
			items: 3,
		},
		1200: {
			items: 4
		},
	}
});
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
	$(".ucm-active").trigger('refresh.owl.carousel');
});


/*=============================================
	=         Up Coming product Active        =
=============================================*/
$('.ucm-active-two').owlCarousel({
	loop: true,
	margin: 45,
	items: 5,
	autoplay: false,
	autoplayTimeout: 5000,
	autoplaySpeed: 1000,
	navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
	nav: true,
	dots: false,
	responsive: {
		0: {
			items: 1,
			nav: false,
			margin: 30,
		},
		575: {
			items: 2,
			nav: false,
			margin: 30,
		},
		768: {
			items: 2,
			nav: false,
			margin: 30,
		},
		992: {
			items: 3,
			margin: 30,
		},
		1200: {
			items: 5
		},
	}
});
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
	$(".ucm-active-two").trigger('refresh.owl.carousel');
});



/*=============================================
	=    		Isotope	Active  	      =
=============================================*/
$('.tr-product-active').imagesLoaded(function () {
	// init Isotope
	var $grid = $('.tr-product-active').isotope({
		itemSelector: '.grid-item',
		percentPosition: true,
		masonry: {
			columnWidth: '.grid-sizer',
		}
	});
	// filter items on button click
	$('.tr-product-menu-active').on('click', 'button', function () {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	});

});
//for menu active class
$('.tr-product-menu-active button').on('click', function (event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});


})(jQuery);