$(document).ready(function () {


  // $(".owl-carousel").owlCarousel();
  $('.owl-carousel').owlCarousel({
    loop: false, //Vong lap
    margin: 10, // k/c giua cac item
    nav: true, // Nut dieu huong
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })

});
