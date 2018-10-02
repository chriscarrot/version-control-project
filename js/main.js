$(window).scroll(function () {
    if ($(this).scrollTop() < 90) {
        $('nav h1').css({
            'transition': '1s',
            'font-size': '48px'
        });

    }
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 90) {
        $('nav h1').css({
            'opacity': '1',
            'font-size': '0px'
        });
    }
});