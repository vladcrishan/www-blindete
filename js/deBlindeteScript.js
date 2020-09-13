$(document).ready(function () {
  // navbar item on scroll
  $(document).on('scroll', activateLinks)

  // navbar item on click
  $('.nav a[href^="#"]').on('click', navClick)

  // navbar dropdown animation
  $('.navbar-default .navbar-nav > li.dropdown').hover(
    function () {
      $('ul.dropdown-menu', this).stop(true, true).slideDown('fast')
      $(this).addClass('open')
    },
    function () {
      $('ul.dropdown-menu', this).stop(true, true).slideUp('fast')
      $(this).removeClass('open')
    }
  )
})

// individual gallery clicks -> To be modified!!
$(document).ready(function () {
  // Calu
  $('#calu').on('click', IndividualGallery.setCurrentPreview)
  $('.img-calu').on('click', IndividualGallery.setPreview)
  $('#close-calu-preview').on('click', function () {
    $('#caluPreview').attr(
      'src',
      'images/ciobanesc-alb-elvetian/individual-gallery/calu/big/1.JPG'
    )
  })

  // Beauty
  $('#beauty').on('click', IndividualGallery.setCurrentPreview)
  $('.img-beauty').on('click', IndividualGallery.setPreview)
  $('#close-beauty-preview').on('click', function () {
    $('#beautyPreview').attr(
      'src',
      'images/ciobanesc-alb-elvetian/individual-gallery/beauty/big/1.jpg'
    )
  })

  // Iris
  $('#iris').on('click', IndividualGallery.setCurrentPreview)
  $('.img-iris').on('click', IndividualGallery.setPreview)
  $('#close-iris-preview').on('click', function () {
    $('#irisPreview').attr(
      'src',
      'images/ciobanesc-alb-elvetian/individual-gallery/iris/big/1.jpg'
    )
  })

  // Bobby
  $('#bobby').on('click', IndividualGallery.setCurrentPreview)
  $('.img-bobby').on('click', IndividualGallery.setPreview)
  $('#close-bobby-preview').on('click', function () {
    $('#bobbyPreview').attr(
      'src',
      'images/kleinspitz-pomeranian/individual-gallery/bobby/big/1.jpg'
    )
  })

  // Zorro
  $('#zorro').on('click', IndividualGallery.setCurrentPreview)
  $('.img-zorro').on('click', IndividualGallery.setPreview)
  $('#close-zorro-preview').on('click', function () {
    $('#zorroPreview').attr(
      'src',
      'images/kleinspitz-pomeranian/individual-gallery/zorro/big/1.JPG'
    )
  })

  // Zefyr
  $('#zefyr').on('click', IndividualGallery.setCurrentPreview)
  $('.img-zefyr').on('click', IndividualGallery.setPreview)
  $('#close-zefyr-preview').on('click', function () {
    $('#zefyrPreview').attr(
      'src',
      'images/kleinspitz-pomeranian/individual-gallery/zefyr/big/1.jpg'
    )
  })

  // Lili
  $('#lili').on('click', IndividualGallery.setCurrentPreview)
  $('.img-lili').on('click', IndividualGallery.setPreview)
  $('#close-lili-preview').on('click', function () {
    $('#liliPreview').attr(
      'src',
      'images/kleinspitz-pomeranian/individual-gallery/lili/big/1.jpg'
    )
  })

  // Zita
  $('#zita').on('click', IndividualGallery.setCurrentPreview)
  $('.img-zita').on('click', IndividualGallery.setPreview)
  $('#close-zita-preview').on('click', function () {
    $('#zitaPreview').attr(
      'src',
      'images/kleinspitz-pomeranian/individual-gallery/zita/big/1.jpg'
    )
  })

  // Linda
  $('#linda').on('click', IndividualGallery.setCurrentPreview)
  $('.img-linda').on('click', IndividualGallery.setPreview)
  $('#close-linda-preview').on('click', function () {
    $('#lindaPreview').attr(
      'src',
      'images/kleinspitz-pomeranian/individual-gallery/linda/big/1.jpg'
    )
  })

  // Princess
  $('#princess').on('click', IndividualGallery.setCurrentPreview)
  $('.img-princess').on('click', IndividualGallery.setPreview)
  $('#close-princess-preview').on('click', function () {
    $('#princessPreview').attr(
      'src',
      'images/kleinspitz-pomeranian/individual-gallery/princess/big/1.JPG'
    )
  })

  // Mozzart
  $('#mozzart').on('click', IndividualGallery.setCurrentPreview)
  $('.img-mozzart').on('click', IndividualGallery.setPreview)
  $('#close-mozzart-preview').on('click', function () {
    $('#mozzartPreview').attr(
      'src',
      'images/persana-chinchilla/individual-gallery/mozzart/big/1.jpg'
    )
  })

  // Sunny
  $('#sunny').on('click', IndividualGallery.setCurrentPreview)
  $('.img-sunny').on('click', IndividualGallery.setPreview)
  $('#close-sunny-preview').on('click', function () {
    $('#sunnyPreview').attr(
      'src',
      'images/persana-chinchilla/individual-gallery/sunny/big/1.jpg'
    )
  })

  // Napoleon
  $('#napoleon').on('click', IndividualGallery.setCurrentPreview)
  $('.img-napoleon').on('click', IndividualGallery.setPreview)
  $('#close-napoleon-preview').on('click', function () {
    $('#napoleonPreview').attr(
      'src',
      'images/persana-chinchilla/individual-gallery/napoleon/big/1.jpg'
    )
  })

  // Greta
  $('#greta').on('click', IndividualGallery.setCurrentPreview)
  $('.img-greta').on('click', IndividualGallery.setPreview)
  $('#close-greta-preview').on('click', function () {
    $('#gretaPreview').attr(
      'src',
      'images/persana-chinchilla/individual-gallery/greta/big/1.jpg'
    )
  })

  // Szofia
  $('#szofia').on('click', IndividualGallery.setCurrentPreview)
  $('.img-szofia').on('click', IndividualGallery.setPreview)
  $('#close-szofia-preview').on('click', function () {
    $('#szofiaPreview').attr(
      'src',
      'images/persana-chinchilla/individual-gallery/szofia/big/1.jpg'
    )
  })

  // Dalia
  $('#dalia').on('click', IndividualGallery.setCurrentPreview)
  $('.img-dalia').on('click', IndividualGallery.setPreview)
  $('#close-dalia-preview').on('click', function () {
    $('#daliaPreview').attr(
      'src',
      'images/persana-chinchilla/individual-gallery/dalia/big/1.jpg'
    )
  })

  // Bellie Jean
  $('#billieJean').on('click', IndividualGallery.setCurrentPreview)
  $('.img-billieJean').on('click', IndividualGallery.setPreview)
  $('#close-billieJean-preview').on('click', function () {
    $('#billieJeanPreview').attr(
      'src',
      'images/persana-chinchilla/individual-gallery/billiejean/big/1.jpg'
    )
  })
})

// navbar active class
function navClick() {
  $(document).off('scroll')

  $('.nav').find('.active').removeClass('active')
  $(this).parent().addClass('active')

  $('html, body')
    .stop()
    .animate(
      {
        scrollTop: $(this.hash).offset().top
      },
      500,
      function () {
        $(document).on('scroll', activateLinks)
      }
    )
}

// Set link active based on position of scrollbar
function activateLinks() {
  $('.nav').find('.active').removeClass('active')

  // Scrollbar position
  var scrollPosition = $(document).scrollTop() + 50

  // Go through every anchor that starts with #
  $('.nav a[href^="#"]').each(function () {
    var section = $(this.hash)
    var sectionPosition = section.offset().top
    if (
      sectionPosition <= scrollPosition &&
      sectionPosition + section.height() + 130 > scrollPosition
    ) {
      $(this).parent().addClass('active')
    }
  })
}

// Include footer
$(function () {
  $('#footer').load('footer.html')
})

// Individual gallery logic
IndividualGallery = {
  currentPreview: '',

  setCurrentPreview: function () {
    currentPreview = '#' + this.id + 'Preview'
  },

  // Setting the preview picture at individual gallery
  setPreview: function () {
    $(currentPreview).attr('src', this.src.replace('400x300', 'big'))
  }
}
