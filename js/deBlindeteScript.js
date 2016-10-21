$(document).ready(function () {

    // navbar item on scroll
    $(document).on("scroll", activateLinks);

    // navbar item on click
    $('.nav a[href^="#"]').on('click', navClick);

    // navbar dropdown animation
    $('.navbar-default .navbar-nav > li.dropdown').hover(function () {
        $('ul.dropdown-menu', this).stop(true, true).slideDown('fast');
        $(this).addClass('open');
    }, function () {
        $('ul.dropdown-menu', this).stop(true, true).slideUp('fast');
        $(this).removeClass('open');
    });

});

// individual gallery clicks -> To be modified!!
$(document).ready(function () {

    // Calu
    $('#calu').on('click', IndividualGallery.setCurrentPreview);
    $('.img-calu').on('click', IndividualGallery.setPreview);
    $('.close-calu-preview').on('click', function () {
        $('#caluPreview').attr('src', 'images/individual-gallery/masculi-calu/1.JPG');
    });

    // Beauty
    $('#beauty').on('click', IndividualGallery.setCurrentPreview);
    $('.img-beauty').on('click', IndividualGallery.setPreview);
    $('.close-beauty-preview').on('click', function () {
        $('#beautyPreview').attr('src', 'images/individual-gallery/femele-beauty/1.JPG');
    });
    
    // Iris
    $('#iris').on('click', IndividualGallery.setCurrentPreview);
    $('.img-iris').on('click', IndividualGallery.setPreview);
    $('.close-iris-preview').on('click', function () {
        $('#irisPreview').attr('src', 'images/individual-gallery/femele-iris/1.JPG');
    });

});

// navbar active class
function navClick() {
    $(document).off("scroll");

    $(".nav").find(".active").removeClass("active");
    $(this).parent().addClass('active');

    $('html, body').stop().animate({
        'scrollTop': $(this.hash).offset().top
    }, 500, function () {
        $(document).on("scroll", activateLinks);
    });
}

// Set link active based on position of scrollbar
function activateLinks() {
    $(".nav").find(".active").removeClass("active");

    // Scrollbar position
    var scrollPosition = $(document).scrollTop() + 50;

    // Go through every anchor that starts with #
    $('.nav a[href^="#"]').each(function () {
        var section = $(this.hash);
        var sectionPosition = section.offset().top;
        if (sectionPosition <= scrollPosition && sectionPosition + section.height() + 130 > scrollPosition) {
            $(this).parent().addClass("active");
        }
    });
}

// Include footer
$(function () {
    $("#footer").load("Footer.html");
});

// Individual gallery logic
IndividualGallery = {

    currentPreview: "",

    setCurrentPreview: function () {
        currentPreview = '#' + this.id + 'Preview';
    },

    // Setting the preview picture at individual gallery
    setPreview: function () {
        $(currentPreview).attr('src', this.src);
    }
}
