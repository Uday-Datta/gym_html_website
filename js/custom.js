$(document).ready(function(){
  $('.venobox').venobox(); 
    
  $('.team-slide').slick({
  dots: false,
  infinite: true,
      arrows: false,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 1,
      autoplay: false,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

    $('.test-slide').slick({
      dots: true,
      infinite: true,
          arrows: false,
      speed: 1000,
      slidesToShow: 2,
      slidesToScroll: 1,
          autoplay: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
    
    
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

});