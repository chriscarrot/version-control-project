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
            'opacity': '1', 'font-size':'48px'
		});
    }
});


// Dropdown Menu
var urlmenu = document.getElementById( 'menu' );
urlmenu.onchange = function() {
     window.open( this.options[ this.selectedIndex ].value );
};