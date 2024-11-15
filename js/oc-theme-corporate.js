//menu header
$('.js-mobile').on('click', function(){
	$(this).toggleClass("js-mobile--close");
	$("html").toggleClass("js-locked");
	// $(".nav-menu").slideToggle();
	// e.preventDefault();
	$(".header-nav").fadeToggle();
});


$(window).scroll(function () {
	if ($(this).scrollTop() > 10) {
		$("#header").addClass("fixed");
	}
	else {
		$("#header").removeClass("fixed");
	}
});




$(function () {
	var headerHeight = $('#header').outerHeight();
	var urlHash = location.hash;
	if (urlHash) {
		$('body,html').stop().scrollTop(0);
		setTimeout(function () {
			var target = $(urlHash);
			var position = target.offset().top - headerHeight;
			$('body,html').stop().animate({scrollTop: position}, 1000);
		}, 100);
	}
	
	jQuery('.js-scroll').click(function(e) {
		$(".header-nav").fadeOut();
		$(".js-mobile").removeClass("js-mobile--close");
		jQuery('html,body').animate({ scrollTop: jQuery(this.hash).offset().top - headerHeight}, 1000);
		return false;
		e.preventDefault();
	});
});