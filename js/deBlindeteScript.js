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

    // Bobby
    $('#bobby').on('click', IndividualGallery.setCurrentPreview);
    $('.img-bobby').on('click', IndividualGallery.setPreview);
    $('.close-bobby-preview').on('click', function () {
        $('#bobbyPreview').attr('src', 'images/individual-gallery/masculi-bobby/1.JPG');
    });

    // Zorro
    $('#zorro').on('click', IndividualGallery.setCurrentPreview);
    $('.img-zorro').on('click', IndividualGallery.setPreview);
    $('.close-zorro-preview').on('click', function () {
        $('#zorroPreview').attr('src', 'images/individual-gallery/masculi-zorro/1.JPG');
    });

    // Zefyr
    $('#zefyr').on('click', IndividualGallery.setCurrentPreview);
    $('.img-zefyr').on('click', IndividualGallery.setPreview);
    $('.close-zefyr-preview').on('click', function () {
        $('#zefyrPreview').attr('src', 'images/individual-gallery/masculi-zefyr/1.JPG');
    });

    // Lili
    $('#lili').on('click', IndividualGallery.setCurrentPreview);
    $('.img-lili').on('click', IndividualGallery.setPreview);
    $('.close-lili-preview').on('click', function () {
        $('#liliPreview').attr('src', 'images/individual-gallery/femele-lili/1.JPG');
    });

    // Zita
    $('#zita').on('click', IndividualGallery.setCurrentPreview);
    $('.img-zita').on('click', IndividualGallery.setPreview);
    $('.close-zita-preview').on('click', function () {
        $('#zitaPreview').attr('src', 'images/individual-gallery/femele-zita/1.JPG');
    });

    // Linda
    $('#linda').on('click', IndividualGallery.setCurrentPreview);
    $('.img-linda').on('click', IndividualGallery.setPreview);
    $('.close-linda-preview').on('click', function () {
        $('#lindaPreview').attr('src', 'images/individual-gallery/femele-linda/1.JPG');
    });

    // Princess
    $('#princess').on('click', IndividualGallery.setCurrentPreview);
    $('.img-princess').on('click', IndividualGallery.setPreview);
    $('.close-princess-preview').on('click', function () {
        $('#princessPreview').attr('src', 'images/individual-gallery/femele-princess/1.JPG');
    });

    // Mozzart
    $('#mozzart').on('click', IndividualGallery.setCurrentPreview);
    $('.img-mozzart').on('click', IndividualGallery.setPreview);
    $('.close-mozzart-preview').on('click', function () {
        $('#mozzartPreview').attr('src', 'images/individual-gallery/masculi-mozzart/1.JPG');
    });

    // Sunny
    $('#sunny').on('click', IndividualGallery.setCurrentPreview);
    $('.img-sunny').on('click', IndividualGallery.setPreview);
    $('.close-sunny-preview').on('click', function () {
        $('#sunnyPreview').attr('src', 'images/individual-gallery/masculi-sunny/1.JPG');
    });

    // Greata
    $('#greta').on('click', IndividualGallery.setCurrentPreview);
    $('.img-greta').on('click', IndividualGallery.setPreview);
    $('.close-greta-preview').on('click', function () {
        $('#gretaPreview').attr('src', 'images/individual-gallery/femele-greta/1.JPG');
    });

    // Szofia
    $('#szofia').on('click', IndividualGallery.setCurrentPreview);
    $('.img-szofia').on('click', IndividualGallery.setPreview);
    $('.close-szofia-preview').on('click', function () {
        $('#szofiaPreview').attr('src', 'images/individual-gallery/femele-szofia/1.JPG');
    });

    // Dalia
    $('#dalia').on('click', IndividualGallery.setCurrentPreview);
    $('.img-dalia').on('click', IndividualGallery.setPreview);
    $('.close-dalia-preview').on('click', function () {
        $('#daliaPreview').attr('src', 'images/individual-gallery/femele-dalia/1.JPG');
    });

    // Bellie Jean
    $('#bellie-jean').on('click', IndividualGallery.setCurrentPreview);
    $('.img-bellie-jean').on('click', IndividualGallery.setPreview);
    $('.close-bellie-jean-preview').on('click', function () {
        $('#bellie-jeanPreview').attr('src', 'images/individual-gallery/femele-billiejean/1.jpg');
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
