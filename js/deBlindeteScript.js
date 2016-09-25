//Navbar click active
$(document).ready(function () {
    // Active navbar button
    $(".nav a").on("click", function () {
        $(".nav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
    });
});

// Smooth Scroll
$(document).ready(function () {
    $(document).on("scroll", activateLinks);

        //href^="#" -> href that starts with #
        $('.nav a').on('click', function (e) {
            $(document).off("scroll");
            
            $('a').each(function () {
                $(this).removeClass('active');
            });
            $(this).addClass('active');
          
            var target = this.hash,
                menu = target;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top+2
            }, 500, 'swing', function () {
                window.location.hash = target;
                $(document).on("scroll", activateLinks);
            });
        });
});

// Set link active based on position of scrollbar
function activateLinks(event) {
    $(".nav").find(".active").removeClass("active");

    // Scrollbar position
    var scrollPosition = $(document).scrollTop() + 50;

    // Go through every anchor that starts with #
    $('.nav a[href^="#"]').each(function () {

        // $(this) -> the anchor 
        var anchor = $(this);

        // $(this).attr("href") -> The href attribute of the anchor
        // $($(this).attr("href")) -> The section element from the href in every anchor
        var section = $(anchor.attr("href"));

        // Section position
        var sectionPosition = section.position().top;

        console.log("sectionPos: " + sectionPosition + " --- " + " sectionHeight: " + section.height() + " --- " + "scrollPos: " + scrollPosition);
        if (sectionPosition <= scrollPosition && sectionPosition + section.height() > scrollPosition) {
            anchor.parent().addClass("active");
        }
    });
}

//Include footer
$(function () {
    $("#footer").load("Footer.html");
});
