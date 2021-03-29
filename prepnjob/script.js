$(document).ready(function(){
			$(window).scroll(function(){
				var wScroll = $(this).scrollTop();
				if (wScroll > $('.steps').offset().top - ($(window).height() / 2)) {
					$('.steps h1').each(function(){
						$('.steps h1').addClass('is-showing')
					})
				}
			})
		})

$(document).ready(function(){
			$(window).scroll(function(){
				var wScroll = $(this).scrollTop();
				if (wScroll > $('.images').offset().top - ($(window).height() / 2)) {
					$('.images').each(function(){
						$('.images').addClass('is-showing')
					})
				}
			})
		})