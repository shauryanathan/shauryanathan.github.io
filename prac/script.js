$(document).ready(function(){
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
			if (wScroll > $('.about').offset().top - ($(window).height() / 2)) {
				$('.about img').each(function(){
					$('.about img').addClass('is-showing')
				})
			}
	})
})