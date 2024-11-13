$(document).ready(function () {

  // $(".owl-carousel").owlCarousel();
  $('.owl-carousel').owlCarousel({
    loop: true, //Vong lap
    margin: 10, // k/c giua cac item
    nav: false, // Nut dieu huong
    dots: true, // dau tron chuyen slide
    autoplay: true, // Tu dong chuyen slide
    autoplayTimeout: 1500, // ms
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
