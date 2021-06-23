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

$(document).ready(function(){
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
			if (wScroll > $('.about').offset().top - ($(window).height() / 2)) {
				$('.about h1').each(function(){
					$('.about h1').addClass('is-showing')
				})
			}
	})
})

$(document).ready(function(){
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
			if (wScroll > $('.about').offset().top - ($(window).height() / 2)) {
				$('.about p').each(function(){
					$('.about p').addClass('is-showing')
				})
			}
	})
})

$(document).ready(function(){
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
			if (wScroll > $('.table').offset().top - ($(window).height() / 2)) {
				$('.table table').each(function(){
					$('.table table').addClass('is-showing')
				})
			}
	})
})
