$(document).ready(function() {
    (function() {
        try {
            const compareSliderContainer = document.querySelector(".compare-slider-box");
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        observer.unobserve(compareSliderContainer)
                    }
                }
                )
            }
            );
            observer.observe(compareSliderContainer)
        } catch (e) {
            console.warn(e)
        }
    }
    )();
    if (!!$(".item-tile-compare .tile-slider").offset()) {
        $(".item-tile-compare .tile-slider").each(function() {
            setTimeout( () => {
                $(this).slick({
                    dots: false,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    touchThreshold: 100,
                    variableWidth: false,
                    infinite: false,
                    adaptiveHeight: false,
                    rows: 1,
                    swipeToSlide: true,
                    swipe: false,
                    touchMove: false,
                    autoplay: false,
                    autoplaySpeed: 5e3,
                    zIndex: 9999,
                    prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev slider-button-small slider-button-small-prev"></span>',
                    nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next slider-button-small slider-button-small-next"></span>',
                    responsive: [{
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3
                        }
                    }, {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2
                        }
                    }, {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1
                        }
                    }]
                })
            }
            , 50)
        })
    }
    if (!!$(".compare-slider-box").offset()) {
        $(".compare-slider-box .slider").each(function() {
            $(this).slick({
                dots: false,
                slidesToShow: 2,
                slidesToScroll: 1,
                touchThreshold: 100,
                variableWidth: false,
                infinite: false,
                adaptiveHeight: true,
                rows: 1,
                swipeToSlide: true,
                swipe: true,
                touchMove: true,
                autoplay: false,
                autoplaySpeed: 5e3,
                prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev slider-button-main slider-button-main-prev"></span>',
                nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next slider-button-main slider-button-main-next"></span>',
                responsive: [{
                    breakpoint: 1024,
                    settings: {
                        dots: true,
                        slidesToShow: 1,
                        prevArrow: false,
                        nextArrow: false
                    }
                }]
            })
        })
    }
    $(document).on("click", ".page-preview-show-text-more", function() {
        $(this).prev().removeClass("page-preview-text-more");
        $(this).remove()
    });
    Fancybox.bind("[data-fancybox]", {})
});