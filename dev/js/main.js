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
	// imask
  var phoneMask = new IMask(
    document.getElementById('phone'), {
      mask: '+{7}(000)000-00-00'
    });
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


});
