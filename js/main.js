$(window).scroll(function () {
    if ($(this).scrollTop() < 40) {
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


// Dropdown
var urlmenu = document.getElementById('menu');
urlmenu.onchange = function () {
    window.open(this.options[this.selectedIndex].value);
};