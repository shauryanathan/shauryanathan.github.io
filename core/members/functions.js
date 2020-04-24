$(document).ready(function() {
	
    $(window).scroll(function() {
    if($(document).scrollTop() > 180) {
        $('nav').addClass('is-showing');
    }
    else {
    $('nav').removeClass('is-showing');
    }
  });
});


$(document).ready(function(){
	$('.Sidhya').dblclick(function(){
		$('.Sidhya').toggleClass('clicked')
	})
})

$(document).ready(function(){
	$('.khush').dblclick(function(){
		$('.khush').toggleClass('clicked')
	})
})