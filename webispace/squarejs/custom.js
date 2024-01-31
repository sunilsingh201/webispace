$(document).ready(function () {
  $(".home-slider").owlCarousel({
    items: 1,
    margin: 0,
    nav: false,
    navText: [
      '<span class="fa-solid fa-angle-left"></span>',
      '<span class="fa-solid fa-angle-right"></span>',
    ],
    dots: true,
    dotsData: false,
    loop: true,
    autoplay: true,
    smartSpeed: 2000,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
        smartSpeed: 1000,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  $(".services-slider").owlCarousel({
    items: 4,
    margin: 15,
    nav: false,
    navText: [
      '<span class="fa-solid fa-arrow-left"></span>',
      '<span class="fa-solid fa-arrow-right"></span>',
    ],
    dots: true,
    dotsData: false,
    loop: true,
    autoplay: true,
    smartSpeed: 2000,
    autoplayTimeout: 3000,
    // responsive: {
    //   0: {
    //     items: 1,
    //     smartSpeed: 1000,
    //   },
    //   600: {
    //     items: 1,
    //   },
    //   1000: {
    //     items: 1,
    //   },
    // },
  });

  $(".testimonial-carousel").owlCarousel({
    items: 1,
    margin: 0,
    nav: false,
    dots: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 6000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});
