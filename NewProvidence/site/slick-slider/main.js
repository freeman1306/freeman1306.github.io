// https://github.com/kenwheeler/slick <--- дока


$(".slider").slick({

  // normal options...
  infinite: true,
  centerMode: true,
  nextArrow: '<button type="button" class="slick-next"><img src="./img/Arrow2.png"></button>',
  prevArrow: '<button type="button" class="slick-prev"><img src="./img/Arrow.png"></button>',
  // dots: true,
  slidesToShow: 1,


  // the magic
  // responsive: [{

  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 5,
  //       infinite: true
  //     }

  //   }, {

  //     breakpoint: 600,
  //     settings: {
  //       slidesToShow: 3,
  //       dots: true
  //     }

  //   }, {

  //     breakpoint: 300,
  //     settings: "unslick" // destroys slick

  //   }]
});