$(function() {

  svg4everybody({});

	// imask
  var phoneMask = new IMask(
    document.getElementById('questions-phone'), {
      mask: '+{7}(000)000-00-00'
    });
   var phoneMask = new IMask(
    document.getElementById('tour-phone'), {
      mask: '+{7}(000)000-00-00'
    });
    var phoneMask = new IMask(
    document.getElementById('callback-phone'), {
      mask: '+{7}(000)000-00-00'
    });
    var phoneMask = new IMask(
    document.getElementById('written-phone'), {
      mask: '+{7}(000)000-00-00'
    });

 // park slider
  $(".park").owlCarousel({
  	items: 1,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    dots: false,
    autoHeight:true,
    nav:true,
    navText: ['<span class="slider__nav-prev slider__nav"></span>',
      '<span class="slider__nav-next slider__nav"></span>']
});
// Card slider 
$(".card__info-slider").owlCarousel({
		items:1,
		loop: true,
    dots: false,
    autoHeight: true,
    center: true,
    smartSpeed:500,
    nav: true
});
  /* MODAL "FORM-CALLBACK" */
$('a[href="#callback"],a[href="#thanks"],a[href="#text"],a[href="#written"]').magnificPopup({
    type: 'inline',
    focus: 'input',
    removalDelay: 500,
    callbacks: {
        beforeOpen: function () {
            this.st.mainClass = this.st.el.attr('data-effect');
          }},
    midClick: true
  });
/* MODAL "VIDEO" */
  $('.js-video').magnificPopup({
    type: 'iframe',
    removalDelay: 500,
    iframe: {
      markup: '<div class="modal modal-video mfp-with-anim">'+
              '<div class="mfp-iframe-scaler">'+
              '<div class="mfp-close modal-close"></div>'+
              '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
              '</div>'+
              '</div>', 
      patterns: {
        youtube: {
          index: 'youtube.com/',
          id: 'v=', 
          src: '//www.youtube.com/embed/%id%?autoplay=1'
        },
      },
      srcAction: 'iframe_src',
    },
    callbacks: {
      beforeOpen: function() {
        this.st.mainClass = this.st.el.attr('data-effect');
      },
      open: function() {
      }
    }
  });

// Выбор дома
$('ul.layout__nav').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('.layout').find('.card').fadeOut(300).removeClass('active').eq($(this).index()).delay(200).fadeIn(300).addClass('active');
  });
// Выбор помещения
$('ul.card__select').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('.card').find('div.card__info').fadeOut(200).removeClass('active').eq($(this).index()).delay(100).fadeIn(200).addClass('active');
  });
    //======== sellscopyright =========
    var sells_timer = "";
    $(".sells-copyright-block").on("mouseover", function(){
      sells_timer = setTimeout(function(){
        $(".sells-copyright-block__pop-up").fadeIn(200);
      }, 700);
  });
  $(".sells-copyright-block").on("mouseout", function(event){
    if($(".sells-copyright-block__pop-up").css("display")=="none"){
      clearTimeout(sells_timer);
    }else{
    $(".sells-copyright-block__pop-up")[0].style.display ="none";
    }
   });
    // ======= end ========
  // Cookie
//   Cookies.remove('zrc');
//  var cookieOptions = { expires: 30, path: '/' };
//   if (Cookies.set('zrc') == undefined) {
//     setTimeout(function() {
//     Cookies.set('zrc', 'true', cookieOptions);
//     $('.cookie').addClass('cookie__show');
//   }, 3000);
//  }
// $('.cookie__btn').click(function(){
//     $('.cookie').removeClass('cookie__show').delay('500').fadeOut();
// });
}); //jquery
/* PRELOADER */
$(window).on('load', (function() {
  $('.preloader').delay(400).fadeOut('slow');
}));
