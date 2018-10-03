$(window).scroll(function () {
    if ($(this).scrollTop() < 50) {
        $('nav h1').css({
            'transition': '1s',
            'font-size': '48px'
        });

    }
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
        $('nav h1').css({
            'opacity': '1',
            'font-size': '0px'
        });
    }
});