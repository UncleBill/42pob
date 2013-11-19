(function ($) {
    // select team
    // ===========
    var $subListCons = $(".sub-list-con");
    $subListCons.each(function (index) {
        $(this).bind("mouseover", function () {
            var $this = $(this),
                prevAll = $this.prevAll(),
                nextAll = $this.nextAll(),
                $target = $this.siblings();

            var prevAllHeight = 0,
                nextAllHeight = 0;

            prevAll.each(function () {
                prevAllHeight += $(this).height()
            })
            nextAll.each(function () {
                nextAllHeight += $(this).height()
            });

            $this.
                siblings()
                .removeClass('show')
                .end()
                .addClass('show');

            var subListHeight = $this.find('.sub-list').height();
            console.log(nextAllHeight, subListHeight);

            if (nextAllHeight <= subListHeight && (prevAllHeight + 20) > subListHeight) {
                $this.find('.sub-list').addClass('sub-list-btm');
            }

            })
    })

    $(".team-select").bind('click', function (e) {
        e.stopPropagation();
        $(".team-select").toggleClass('select-active');
    })

    // control collapse 
    // =================
    $('.collapse').click(function (e) {
        e.stopPropagation();
        $('.header-inner').toggleClass('show-sub-site');
    })

    $(document).click(function () {
        // hide menu
        $(".team-select").removeClass('select-active');
        $('.header-inner').removeClass('show-sub-site');
    })


    // slider
    // ==============================
    var $slider = $("#slider-inner"),
        $sliderItems = $("#slider .slider-item"),
        $size = $sliderItems.size(),
        $controllerCon = $("#slider-controller"),
        $controlText = '',
        stepWidth = 630,
        stepTime = 600,
        sliderTimer;

    // add controllers
    $controlText = (new Array($size + 1)).join("<i class='slider-control-item'></i>");
    $("#slider-controller").html($controlText);


    // slider animate
    $("#slider").hover(function () {
        clearInterval(sliderTimer);
    }, function () {
        sliderTimer = setInterval(sliderAnim, stepTime * 10);
    });

    function counter(n) {
        if (arguments.length === 0) {
            var ret = parseInt($slider.attr('data-counter'), 10);
            if (ret === undefined) {
                ret = 0;
            }
            return ret;
        } 
        if (n === $size) {
            n = 0;
        }
        $slider.attr('data-counter', n);
    }

    function sliderAnim() {
        var c = counter();
        if (c === $size) {
            animateTo(0);
        }
        animateTo(c);
    }

    function animateTo(value) {
        $(".slider-control-item").removeClass('slider-item-cur')
        $(".slider-control-item:nth("+value+")").addClass('slider-item-cur');
        $slider.stop(true, true).animate({'margin-left': -(value * stepWidth) + 'px' }, function () {
            counter(value + 1);
        });
    }

    $('.slider-control-item').each(function (n) {
        $(this).bind('mouseover', function () {
            console.log(n, counter());
            if ((n+1) === counter()) {
                return;
            }
            animateTo(n);
        })
    });

    sliderTimer = setInterval(sliderAnim, stepTime * 2);


    // search input
    // ============
    $("#search").focus(function () {
        $(this).addClass('focus');
    }).blur(function () {
        if ($(this).val() === '') {
            $(this).removeClass('focus');
        }
    })


    // interactive scroll
    // ==================
    function scroll() {
        $(".interactive-item:nth(0)").animate({'margin-top': '-68px'}, 2000, function () {
            $(this).appendTo($(this).css('margin-top','').parent())
            setTimeout(scroll, 5000);
        });
    }
    scroll();

})(jQuery);
