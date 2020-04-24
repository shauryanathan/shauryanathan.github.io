$(document).ready(function(){
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
			if (wScroll > $('.about').offset().top - ($(window).height() / 2)) {
				$('.about-text').each(function(){
					$('.about-text').addClass('is-showing')
				})
			}
	})
})

$(document).ready(function(){
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
			if (wScroll > $('.events').offset().top - ($(window).height() / 2)) {
				$('.events button').each(function(){
					$('.events button').addClass('is-showing')
				})
			}
	})
})
$(document).ready(function(){
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
			if (wScroll > $('.team').offset().top - ($(window).height() / 2)) {
				$('.row-team figure').each(function(){
					$('.row-team figure').addClass('is-showing')
				})
			}
	})
})
$(document).ready(function() {
    $(".member-btn").click(function() {
        $(".member").toggleClass("member-open", 500)

    })
})


$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});