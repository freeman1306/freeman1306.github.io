$(window).resize(function () {
    HeadHeight();

});

function HeadHeight() {
    var wHeight = $(window).height();
    $('#main').css('height', wHeight);
}

var trigger = document.querySelector('.trigger')

trigger.addEventListener('click', function () {
    trigger.classList.toggle("trigger--show");
    $(".departs").toggleClass('active');

});