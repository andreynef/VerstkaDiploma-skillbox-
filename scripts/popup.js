$(document).ready(function() {
	//script for popups
	$('.show_popup').click(function () {
		$('div.'+$(this).attr("rel")).fadeIn(500);
		$("body").append("<div class='overlay'></div>");
		$('.overlay').show().css({'filter' : 'alpha(opacity=80)'});
		return false;				
	});	
	$('.popup__close').click(function () {
		$(this).parent().fadeOut(100);
		$('.overlay').remove('.overlay');
		return false;
	});
	
});