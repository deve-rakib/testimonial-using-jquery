


// jQuery  start from here....

$(document).ready(function(){

  $(".owl-carousel").owlCarousel({

    margin: 15,
    loop: true,
    autoplay: true,
    lazyLoad: true,
    responsive: {
      0: {
        items: 1
      },
      365:{
        items: 1
      },
      768: {
        items: 2
      },
      1200: {
        items: 3
      },
      1800: {
        items: 3
      }
    }




  });
  

  



});