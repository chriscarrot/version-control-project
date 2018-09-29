$(window).scroll(function() {
    if ($(this).scrollTop() > 100) { //use `this`, not `document`
        $('nav h1').css({
            'opacity': '0', 'transition':'.2s', 'font-size':'0px'
		});

    }
});

$(window).scroll(function() {
    if ($(this).scrollTop() < 100) { //use `this`, not `document`
        $('nav h1').css({
            'opacity': '1', 'font-size':'60px'
		});
    }
});