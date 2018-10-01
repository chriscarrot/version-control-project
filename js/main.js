var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

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


