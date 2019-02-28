
	new WOW().init();


// Wawe effect
	
$(".Wawe").on("mousedown", function(e) {

  var clickY = e.pageY - $(this).offset().top;
  var clickX = e.pageX - $(this).offset().left;

  var el = this;
  var svg = '<svg><circle cx="' + parseInt(clickX) + '" cy="' + parseInt(clickY) + '" r="' + 0 + '"></circle></svg>'

  $(this).find('svg').remove();
  $(this).append(svg);

  var c = $(el).find("circle");
  c.animate({
    "r": $(el).width() * 2
  }, {
    duration: 600,
    step: function(val) {
      c.attr("r", val);
    },
    complete: function() {
      c.fadeOut(400);
    }
  });
});

// Wawe effect End


$(document).ready(function(){
	window.onscroll = function (e) {
	  document.getElementById('hero-section').style.transform="translatey("+(e.currentTarget.scrollY * 1.15) + "px)";
	};
});


if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}



$(document).scroll(function(){
	var top_offset = $(window).scrollTop();
	if (top_offset == 0) {
		$('#w-navbar').removeClass('W-Fixed');
	} else {
		$('#w-navbar').addClass('W-Fixed');
	}
});




 