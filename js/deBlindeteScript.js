//Navbar click active
$(document).ready(function () {

    // Active navbar button
    $(".nav a").on("click", function () {
        $(".nav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
    });

});

//Include footer
$(function () {
    $("#footer").load("Footer.html");
});
