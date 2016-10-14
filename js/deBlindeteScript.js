// Navbar
$(document).ready(function () {

    // navbar item on scroll
    $(document).on("scroll", activateLinks);

    // navbar item on click
    $('.nav a[href^="#"]').on('click', function (e) {
        $(document).off("scroll");

        $(".nav").find(".active").removeClass("active");
        $(this).parent().addClass('active');

        $('html, body').stop().animate({
            'scrollTop': $(this.hash).offset().top
        }, 500, function () {
            $(document).on("scroll", activateLinks);
        });
    });

    // navbar dropdown animation
    $('.navbar-default .navbar-nav > li.dropdown').hover(function () {
        $('ul.dropdown-menu', this).stop(true, true).slideDown('fast');
        $(this).addClass('open');
    }, function () {
        $('ul.dropdown-menu', this).stop(true, true).slideUp('fast');
        $(this).removeClass('open');
    });
});

// Set link active based on position of scrollbar
function activateLinks(event) {
    $(".nav").find(".active").removeClass("active");

    // Scrollbar position
    var scrollPosition = $(document).scrollTop() + 50;

    // Go through every anchor that starts with #
    $('.nav a[href^="#"]').each(function () {
        var section = $(this.hash);
        var sectionPosition = section.offset().top;
        if (sectionPosition <= scrollPosition && sectionPosition + section.height() + 100 > scrollPosition) {
            $(this).parent().addClass("active");
        }
    });
}

//Include footer
$(function () {
    $("#footer").load("Footer.html");
});
