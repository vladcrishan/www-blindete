//Navbar click active
$(document).ready(function () {

    // Active navbar button
    $(".nav a").on("click", function () {
        $(".nav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
    });

});

//FancyBox
$(document).ready(function () {
    $(".fancybox").fancybox();

    //Thumbnails
    $(document).ready(function () {
        $(".fancybox-thumb").fancybox({
            prevEffect: 'none',
            nextEffect: 'none',
            helpers: {
                thumbs: {
                    width: 75,
                    height: 50
                }
            }
        });
    });
});

//Include footer
$(function () {
    $("#footer").load("Footer.html");
});
