(function ($) {
    var $subListCons = $(".sub-list-con");
    $subListCons.bind('hover click', function () {
        $(this)
            .siblings()
            .removeClass('show')
        .end()
            .addClass('show');
    });
    $(".select-btn").bind('click', function () {
        $(".team-select").toggleClass('select-active');
    })
    $(".team-select").blur(function () {
        $(this).removeClass('select-active');
    });

    // collapse control
    $('.collapse').click(function () {
        $('.header-inner').toggleClass('show-sub-site');
    })

})(jQuery);
