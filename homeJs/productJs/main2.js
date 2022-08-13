(function ($) {
  


    
   
      

        var heroSlider2 = $('.hero-slider-five , .series-slider-active ');
        heroSlider2.slick({
            
            arrows: true,
            autoplay: false,
            autoplaySpeed: 5000,
            dots: false,
            pauseOnFocus: false,
            pauseOnHover: false,
            fade: true,
            infinite: true,
            slidesToShow: 1,
            prevArrow: '<button type="button" class="slick-prev"> .</button>',
            nextArrow: '<button type="button" class="slick-next">.</i></button>',
            responsive: [
                {
                  breakpoint: 767,
                  settings: {
                    dots: false,
                  }
                }
            ]
        });
    
      
    

    


})(jQuery);	



