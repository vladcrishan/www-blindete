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

  // Zefyr
  $('#zefyr').on('click', IndividualGallery.setCurrentPreview)
  $('.img-zefyr').on('click', IndividualGallery.setPreview)
  $('#close-zefyr-preview').on('click', function () {
    $('#zefyrPreview').attr(
      'src',
      'images/kleinspitz-pomeranian/individual-gallery/zefyr/big/1.jpg'
    )
  })

  // Rubin
  $('#rubin').on('click', IndividualGallery.setCurrentPreview)
  $('.img-rubin').on('click', IndividualGallery.setPreview)
  $('#close-rubin-preview').on('click', function () {
    $('#rubinPreview').attr(
      'src',
      'images/kleinspitz-pomeranian/individual-gallery/rubin/big/1.jpg'
    )
  })

  // Uelsi
  $('#uelsi').on('click', IndividualGallery.setCurrentPreview)
  $('.img-uelsi').on('click', IndividualGallery.setPreview)
  $('#close-uelsi-preview').on('click', function () {
    $('#uelsiPreview').attr(
      'src',
      'images/kleinspitz-pomeranian/individual-gallery/uelsi/big/1.jpg'
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

  // White Chocolate
  $('#whiteChocolate').on('click', IndividualGallery.setCurrentPreview)
  $('.img-whiteChocolate').on('click', IndividualGallery.setPreview)
  $('#close-whiteChocolate-preview').on('click', function () {
    $('#whiteChocolatePreview').attr(
      'src',
      'images/persana-chinchilla/individual-gallery/whiteChocolate/big/1.jpg'
    )
  })

  // Vesna
  $('#vesna').on('click', IndividualGallery.setCurrentPreview)
  $('.img-vesna').on('click', IndividualGallery.setPreview)
  $('#close-vesna-preview').on('click', function () {
    $('#vesnaPreview').attr(
      'src',
      'images/persana-chinchilla/individual-gallery/vesna/big/1.jpg'
    )
  })

  // Honey
  $('#honey').on('click', IndividualGallery.setCurrentPreview)
  $('.img-honey').on('click', IndividualGallery.setPreview)
  $('#close-honey-preview').on('click', function () {
    $('#honeyPreview').attr(
      'src',
      'images/persana-chinchilla/individual-gallery/honey/big/1.jpg'
    )
  })

  // Borte
  $('#borte').on('click', IndividualGallery.setCurrentPreview)
  $('.img-borte').on('click', IndividualGallery.setPreview)
  $('#close-borte-preview').on('click', function () {
    $('#bortePreview').attr(
      'src',
      'images/persana-chinchilla/individual-gallery/borte/big/1.jpg'
    )
  })

  // Aira
  $('#aira').on('click', IndividualGallery.setCurrentPreview)
  $('.img-aira').on('click', IndividualGallery.setPreview)
  $('#close-aira-preview').on('click', function () {
    $('#airaPreview').attr(
      'src',
      'images/persana-chinchilla/individual-gallery/aira/big/1.jpg'
    )
  })

  // Evia
  $('#evia').on('click', IndividualGallery.setCurrentPreview)
  $('.img-evia').on('click', IndividualGallery.setPreview)
  $('#close-evia-preview').on('click', function () {
    $('#eviaPreview').attr(
      'src',
      'images/persana-chinchilla/individual-gallery/evia/big/1.jpg'
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
