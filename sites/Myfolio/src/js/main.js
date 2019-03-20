$(window).resize(function () {
    HeadHeight();

});

function HeadHeight() {
    var wHeight = $(window).height();
    $('#main').css('height', wHeight);
}