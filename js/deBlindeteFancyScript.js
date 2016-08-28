//FancyBox
$(document).ready(function () {
//    $(".fancybox").fancybox();

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
            },
            padding: 0
        });
    });
});