$(document).ready(function() {
    new WOW().init();
  $('.burger-menu').on('click', function() {
    var menu = $('.menu1, .menu2');
    if(menu.hasClass('menu-hidden')) {
      menu.removeClass('menu-hidden');
      setTimeout(function() {
        menu.removeClass('menu-visually-hidden'); // Скрытое меню
      }, 20);
    } else {
      menu.addClass('menu-visually-hidden');
      menu.one('transitionend', function(e) {
        menu.addClass('menu-hidden');
      });
    }
  });
  
 /* setInterval(function() {
    var currentImage = $('.slider-img.img-curry').index();
    var nextImageIndex = currentImage + 1;
    var nextImage = $('.slider-img').eq(nextImageIndex);
    nextImage.click();
  }, 800);
  
     */
     $('.slider-curry img').animate({width: '125px'});
   $('.slider-curry h2, .slider-curry  h3, .slider-curry p, .slider-curry .rating-stars').animate({left: '0px'},500);
  
     
       
        
    $repeat =  setInterval(function(){
       var currentImageIndex = $('.slider-curry').index();
        var nextImageIndex = currentImageIndex + 1;
        var prevImageIndex = currentImageIndex - 1;
        
      
        if(nextImageIndex == ($('.slider-content:last').index()+ 1)) {
          $('.slider-content').removeClass('slider-curry');
        $('.slider-content').eq(0).addClass('slider-curry');
        $('.slider h2, .slider h3, .slider p, .slider .rating-stars').animate({left: '-500px'}, 1);
     $('.slider-curry h2, .slider-curry  h3, .slider-curry p, .slider-curry .rating-stars').animate({left: '0px'}, 500);
     $('.slider img').animate({width: '100px'}, 1);
      $('.slider-curry img').animate({width: '125px'});
        }
       else {
         $('.slider-content').removeClass('slider-curry');
        $('.slider-content').eq(nextImageIndex).addClass('slider-curry');
        $('.slider h2, .slider h3, .slider p, .slider .rating-stars').animate({left: '-500px'}, 1);
     $('.slider-curry h2, .slider-curry  h3, .slider-curry p, .slider-curry .rating-stars').animate({left: '0px'}, 500);
     $('.slider img').animate({width: '100px'}, 1);
      $('.slider-curry img').animate({width: '125px'});
       }
        
      }, 3000);
      
      $('.arrow-right').on('click', function() {
        var currentImageIndex = $('.slider-curry').index();
        var nextImageIndex = currentImageIndex + 1;
        var prevImageIndex = currentImageIndex - 1;
        $('.slider-content').eq(nextImageIndex).find('img').click();        //slide to right
     if(nextImageIndex == ($('.slider-content:last').index()+ 1)) {
   $('.slider-content').eq(0).find('img').click();
     }
      });
       $('.arrow-left').on('click', function() {
        var currentImageIndex = $('.slider-curry').index();
        var nextImageIndex = currentImageIndex + 1;
        var prevImageIndex = currentImageIndex - 1;
        $('.slider-content').eq(prevImageIndex).find('img').click();        //slide to left
     if(nextImageIndex == ($('.slider-content:first').index()- 1)) {
   $('.slider-content:last').find('img').click();
     }
      });
    
    $('.slider img').on('click', function() {
      
     clearInterval($repeat);
     
     $('.slider-content').removeClass('slider-curry');   // слайдер 
     $(this).parent().addClass('slider-curry');          // слайдер 
     $('.slider h2, .slider h3, .slider p, .slider .rating-stars').animate({left: '-500px'}, 1);
     $('.slider-curry h2, .slider-curry  h3, .slider-curry p, .slider-curry .rating-stars').animate({left: '0px'}, 500);
     $('.slider img').animate({width: '100px'}, 1);
     $(this).animate({width: '125px'});
    
     
     
    
 
     
     
      
  });
  
  
  $(window).scroll(function(){
  if ($(document).scrollTop() > 50) {
     
      $(".top-menu").addClass("sticky-menu");
      $('.sticky-bg').fadeIn(1000);
    } else {
      $(".top-menu").removeClass("sticky-menu");      // sticky top-menu
      $('.sticky-bg').fadeOut(1000);
    }
  });
  
     
   
   
   
   
   
  $('.watch-video').on('click', function() {
    $('.hidden-video').show(500);                         //show video
    $('.watch-video').hide();
  $('.Iphone-6').animate({height: '0px'}); 
  
  
    $('.video').attr('src', 'https://www.youtube.com/embed/6KItGlJn__U');
    $(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".video, .close-video"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			$('.hidden-video').hide(500);                        //hide video
    $('.watch-video').show(600);
    
    $('.Iphone-6').animate({height: '450px'},1000); 
    
    $('.video').attr('src', '');
		}
	});
  });
  $('.close-video').on('click', function() {
    
    $('.hidden-video').hide(500);                        //hide video
    $('.watch-video').show(600);
    $('.Iphone-6').animate({height: '450px'},1000);
    $('.video').attr('src', '');
  });
 
 /*
var links = document.querySelectorAll("button, [type=submit]");
for(var i = 0; i < links.length; i++){
links[i].addEventListener('click', function (event) {
    event.preventDefault();

    // Remove any old one
    var ripple = document.querySelector('.ripple');
    if (ripple) {
        ripple.remove();
    }

    // Setup
    var buttonWidth = this.offsetWidth,
        buttonHeight = this.offsetHeight;

    // Make it round!
    if(buttonWidth >= buttonHeight) {
        buttonHeight = buttonWidth;
    } else {
        buttonWidth = buttonHeight;
    }

    // Get the center of the element
    var x = event.offsetX==undefined?event.layerX:event.offsetX - buttonWidth / 2,
        y = event.offsetY==undefined?event.layerY:event.offsetY - buttonHeight / 2;  //эфект волны при клике на кнопку

    // Add the element
    var span = document.createElement('span');
    span.className = 'ripple';
    s = span.style;
    s.width = buttonWidth + 'px';
    s.height = buttonHeight + 'px';
    s.top = y + 'px';
    s.left = x + 'px';
    this.appendChild(span);
});
}
*/
  /*
  $('.arrow-right').on('click', function() {
    $('.slider-content').removeClass('slider-curry');
    $('.slider-content').eq(1).addClass('slider-curry');
   
     $('.slider h2, .slider h3, .slider p, .slider .rating-stars').animate({left: '-500px'}, 1);
     $('.slider-curry h2, .slider-curry  h3, .slider-curry p, .slider-curry .rating-stars').animate({left: '0px'});
     $('.slider img').animate({width: '100px'}, 1);
     $(this).animate({width: '125px'});
    
  });
 
  $('.arrow-right').on('click', function() {
        currentImageIndex = $('.slider-curry').index();
        if (nextImageIndex === $('.slider').children().length - 1) {
            nextImageIndex = 0;
        }
        else {
            nextImageIndex = currentImageIndex + 1;
        }
        content = $('.slider-content');
        nextImage = content.eq(nextImageIndex).find('.slider-img');
        $('.slider-img').removeClass('img-curry');
        nextImage.addClass('img-curry');
        content.removeClass('slider-curry');
        nextImage.parent().addClass('slider-curry');
    });
  
*/
//


  $('.right').on('click', function() {

 var currentScreenIndex = $('.slider-screen .current-screen').index();
      $('.current-screen').removeClass('current-screen');
      $('.next-screen').removeClass('next-screen');
 var nextScreenIndex = currentScreenIndex +1;
 var nextNextScreenIndex = nextScreenIndex +1;
 var nextScreen = $('.screen').eq(nextScreenIndex);
 nextScreen.addClass('current-screen');
      $('.screen').eq(nextNextScreenIndex).addClass('next-screen');

  });

    (function() {
        var arr = [window.Element, window.CharacterData, window.DocumentType];
        var args = [];

        arr.forEach(function (item) {
            if (item) {
                args.push(item.prototype);
            }
        });

        // from:https://github.com/jserz/js_piece/blob/master/DOM/ChildNode/remove()/remove().md
        (function (arr) {
            arr.forEach(function (item) {
                if (item.hasOwnProperty('remove')) {
                    return;
                }
                Object.defineProperty(item, 'remove', {
                    configurable: true,
                    enumerable: true,
                    writable: true,
                    value: function remove() {
                        this.parentNode.removeChild(this);
                    }
                });
            });
        })(args);
    })();

    var links = document.querySelectorAll("button, [type=submit]");
    for(var i = 0; i < links.length; i++){
        links[i].addEventListener('click', function (event) {
            event.preventDefault();

            // Remove any old one
            var ripple = document.querySelector('.ripple');
            if (ripple) {
                ripple.remove();
            }

            // Setup
            var buttonWidth = this.offsetWidth,
                buttonHeight = this.offsetHeight;

            // Make it round!
            if(buttonWidth >= buttonHeight) {
                buttonHeight = buttonWidth;
            } else {
                buttonWidth = buttonHeight;
            }

            // Get the center of the element
            var x = event.offsetX==undefined?event.layerX:event.offsetX - buttonWidth / 2,
                y = event.offsetY==undefined?event.layerY:event.offsetY - buttonHeight / 2;  //эфект волны при клике на кнопку

            // Add the element
            var span = document.createElement('span');
            span.className = 'ripple';
            s = span.style;
            s.width = buttonWidth + 'px';
            s.height = buttonHeight + 'px';
            s.top = y + 'px';
            s.left = x + 'px';
            this.appendChild(span);
        });
    }
  
  
  
  
  
  
    setTimeout(function() {
      $('.toggle-container button:nth-child(2)').click();
    }, 1000);
   var choose = $('.choose button');            //переключатель между кнопками еще не готов!!!
  choose.on('click', function() {
   choose.removeClass('active');
    $(this).addClass('active');
    $('.starter, .pro').fadeOut(600); 
    $('.starter, .pro').fadeIn(600);
    
  });





  
 

});