/* FUNCIONES INICIALES ******/
$(document).ready(function($) {	
	$('.menu-trigger').click(function(){
		$(".menu-responsive").slideToggle();
		return false;
	});
	
	$('#slider').lightSlider({
        item:1,
		loop:true,
		controls:false,
		enableDrag:false,
		slideMargin:0,
		pager:false,
        slideMove:1,
		mode:'fade',
        easing:'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
		pause:6000,
		auto:true,
	});
	
});
/****************************/
(function($){
	$(window).on("load",function(){
		
	$("body").mCustomScrollbar({
		theme:"minimal",
		mouseWheel:{ scrollAmount: 500 }
	});
		
	});
})(jQuery);