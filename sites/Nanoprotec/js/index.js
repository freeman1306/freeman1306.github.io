$(document).ready(function () {
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function () {
        $(this).toggleClass('open');
    });
});


// $("main").onepage_scroll({
//     sectionContainer: "section", // контейнер, к которому будет применяться скролл
//     easing: "ease", // Тип анимации "ease", "linear", "ease-in", "ease-out", "ease-in-out"
//     animationTime: 1000, // время анимации
//     pagination: true, // скрыть или отобразить пагинатор
//     updateURL: false // обновлять URL или нет
// });


$(function () {
    var elWrap = $('#slider'),
        el = elWrap.find('.event'),
        indexImg = 1,
        indexMax = el.length,
        phase = 3000;

    function change() {
        el.fadeOut(500);
        el.filter(':nth-child(' + indexImg + ')').fadeIn(500);
    }

    function autoCange() {
        indexImg++;
        if (indexImg > indexMax) {
            indexImg = 1;
        }
        change();
    }
    var interval = setInterval(autoCange, phase);

    elWrap.mouseover(function () {
        clearInterval(interval);
    });
    elWrap.mouseout(function () {
        interval = setInterval(autoCange, phase);
    });

    elWrap.append('<span class="next"></span><span class="prev"></span>');
    var btnNext = $('span.next'),
        btnPrev = $('span.prev');

    btnNext.click(function () {
        indexImg++;
        if (indexImg > indexMax) {
            indexImg = 1;
        }
        change();
    });
    btnPrev.click(function () {
        indexImg--;
        if (indexImg < 1) {
            indexImg = indexMax;
        }
        change();
    });
});


$.scrollify({
    section: "section",
    sectionName: ".section",
    interstitialSection: "",
    easing: "easeOutExpo",
    scrollSpeed: 1100,
    offset: 0,
    scrollbars: true,
    standardScrollElements: "",
    setHeights: true,
    overflowScroll: true,
    updateHash: true,
    touchScroll: true,
    before: function () {},
    after: function () {},
    afterResize: function () {},
    afterRender: function () {}
});


$('#nav-icon1').on('click', function () {
    $('.menu').toggleClass('menu_active');
});