$(function() {

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

  //     new WOW.WOW({
  //   live:false
  // }).init();

	// imask
  var phoneMask = new IMask(
    document.getElementById('callback'), {
      mask: '+{7}(000)000-00-00'
    });
   var phoneMask = new IMask(
    document.getElementById('tour'), {
      mask: '+{7}(000)000-00-00'
    });
    var phoneMask = new IMask(
    document.getElementById('callback__popup'), {
      mask: '+{7}(000)000-00-00'
    });
    var phoneMask = new IMask(
    document.getElementById('written-form'), {
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
$('a[href="#callback__form-popup"],a[href="#thanks"],a[href="#text"],a[href="#written"]').magnificPopup({
    type: 'inline',
    focus: 'input',
    removalDelay: 500,
    closeMarkup: '<button title="%title%" type="button" class="modal-close mfp-close">&times;</button>',
    callbacks: {
        beforeOpen: function () {
            this.st.mainClass = this.st.el.attr('data-effect');}},
    midClick: true});
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
        vimeo: {
          index: 'vimeo.com/',
          id: '/',
          src: '//player.vimeo.com/video/%id%?autoplay=1'
        },
        gmaps: {
          index: '//maps.google.',
          src: '%id%&output=embed'
        }
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

});
