$(function() {
// Timer

// Дата окончания формат: год, месяц, день
var deadline = '2019-06-01';

// Инициализация таймера
initializeClock('clockdown', deadline);
initializeClock('clockdown-2', deadline);
// Высчитываем оставшееся время
function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
   'total': t,
   'days': days,
   'hours': hours,
   'minutes': minutes,
   'seconds': seconds
  };
}
// Переносим данные в див
function initializeClock(id, endtime){
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
	var hoursSpan = clock.querySelector('.hours');
	var minutesSpan = clock.querySelector('.minutes');
	var secondsSpan = clock.querySelector('.seconds');
  function updateClock(){
  var t = getTimeRemaining(endtime);
  	daysSpan.innerHTML = ('0' + t.days).slice(-2);
  	hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
  	minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
  	secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  if(t.total<=0){
   clearInterval(timeinterval);
  }
}

updateClock(); // запустите функцию один раз, чтобы избежать задержки
var timeinterval = setInterval(updateClock,1000);
}




  svg4everybody({});
	// imask
  var phoneMask = new IMask(
    document.getElementById('questions-phone'), {
      mask: '+{7}(000)000-00-00'
    });
   var phoneMask = new IMask(
    document.getElementById('callback-phone'), {
      mask: '+{7}(000)000-00-00'
    });
    var phoneMask = new IMask(
    document.getElementById('questions-phone--bottom'), {
      mask: '+{7}(000)000-00-00'
    });
$('.sl__thumbs').owlCarousel({
    loop: true,
    nav: false,
    items: 1,
    margin: 20,
    dots: false,
    slideTransition: 'ease-out',
    smartSpeed: 450,
    thumbs: true,
    thumbsPrerendered: true,
    thumbContainerClass: 'owl__thumbs',
    thumbItemClass: 'owl__thumbs-item',
    animateOut: 'fadeOut',
    animateIn: 'fadeIn'
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

});
/* PRELOADER */
$(window).on('load', (function() {
  $('.preloader').delay(400).fadeOut('slow');
}));
