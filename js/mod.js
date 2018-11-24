jQuery(document).ready(function ($) {

    // Adjust profile image
    function fnResizeProfileImgHeight(a) {
        var aWidth = a.width();
        a.height(aWidth);
        a.find('.profile').height(aWidth);
    }
    if ($('.profile-img').length) {
        fnResizeProfileImgHeight($('.profile-img'));
    }
    if ($('.modal-profile-img').length) {
        fnResizeProfileImgHeight($('.modal-profile-img'));
    }



    $('#zip-city').on('keyup', function () {
        $('.input-results').removeClass('d-none');
    });
    $(document).on('click', function () {
        $('.input-results').addClass('d-none');
    });
    $('#zip-city').on('click', function (e) {
        e.stopPropagation();
        return false;
    });
    $('#legal-category').on('click', function () {
        $('.artificial-select').removeClass('d-none');
    });
    $(document).on('click', function () {
        $('.artificial-select').addClass('d-none');
    });
    var counter = 0;
    $('#legal-category').on('click', function (e) {
        if (counter === 0) {
            e.stopPropagation();
            counter = 1;
            return (counter, false);
        } else if (counter === 1) {
            $('.artificial-select').addClass('d-none');
            counter = 0;
            return (counter);
        }
    });

    $('.axn-close').on('click', function () {
        $(this).closest('.modal-container').addClass('d-none');
        $(this).closest('.modal').addClass('d-none');
    });
    $('.modal-click').on('click', function () {
        $(this).siblings().addClass('d-none');
        $(this).closest('.modal').addClass('d-none');
    });
    $('ul.artificial-select li').on('click', function () {
        $('#step-3, .modal').removeClass('d-none');
    });

    $('#no-category a').on('click', function () {
        $('#other-categories, .modal').removeClass('d-none');
    });

    $('.read-review a').on('click', function () {
        $('#client-review, .modal').removeClass('d-none');
        fnResizeProfileImgHeight($('.modal-profile-img'));
    });

    //ON RESIZE
    var rtime;
    var timeout = false;
    var delta = 200;

    function resizeend() {
        if (new Date() - rtime < delta) {
            setTimeout(resizeend, delta);
        } else {
            timeout = false;
            // Function here
            fnResizeProfileImgHeight($('.modal-profile-img'));
            fnResizeProfileImgHeight($('.profile-img'));

        }
    }
    $(window).resize(function () {
        rtime = new Date();
        if (timeout === false) {
            timeout = true;
            setTimeout(resizeend, delta);
        }
    });
    //ON RESIZE - End    

});