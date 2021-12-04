$(document).ready(function(){
    
    var typed = new Typed('.element', {
    strings: ["First sentence.", "Second sentence."],
    backSpeed: 40,
    typeSpeed: 40,
    loop: true,
    });]

    $(".owl-carousel").owlCarousel({
        loop: true,
        dots: true,
        autoplay: true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:3
            },
            2000:{
                items:5
            }
        }
    });
  });
  
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
      }
    }
  });
});
