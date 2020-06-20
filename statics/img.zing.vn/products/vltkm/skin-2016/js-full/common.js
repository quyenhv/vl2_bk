var swiper;
jQuery(document).ready(function() {

    if ($('.boxfbchat').length > 0) {
        $(".boxfbchat label").click(function() {
            if ($(this).hasClass("open")) {
                $(".boxfbchat").animate({
                    'bottom': 0
                }, 600);
                $(this).removeClass("open");
            } else {
                $(".boxfbchat").animate({
                    'bottom': -260
                }, 600);
                $(this).addClass("open");
            }
        })
    }


    if ($('#banner-event').length > 0) {
        Mainsite.initCarousel('#banner-event', '', '');
    }
    if ($('.fancybox').length > 0) {
        Mainsite.initFancybox('.fancybox');
    }

    jQuery('.top').unbind('click').bind('click', function() {
        jQuery('html, body').animate({
            scrollTop: 0
        }, 500, 'linear');
        return false;
    });

    // $('#block-char').BlockCharacter();
    /****** subpage scrolltop ******/
    if (jQuery('#scrolltop').size()) {
        $('#scrolltop').addScrollControl({
            initTop: 1500,
            offsetTop: 350,
            animation: false,
            offsetToScroll: 400,
            offsetLeft: 670,
            RelativeID: 'main-content'
        });
    }
    if ($('#breadcrumb').length > 0) {
        var content = $('#breadcrumb li:last').html().replace('&gt;', '')
        $('#breadcrumb li:last').html(content);
    }
    /****** subpage	******/

    if (jQuery('.article__detail .tab__detail').length > 0 && jQuery('#tabHeader').length > 0) {
        jQuery('#tabHeader li').eq(0).find('a').addClass('active');
        var curId = jQuery('#tabHeader li').eq(0).find('a').data('href');
        jQuery('.article__detail').find(curId).show();
        jQuery('#tabHeader > li > a').click(function() {
            jQuery('.article__detail .tab__detail').hide();
            jQuery('#tabHeader > li > a').removeClass('active');
            jQuery(this).addClass('active');
            var curId = jQuery(this).data('href');
            jQuery('.article__detail').find(curId).show();
            return false;
        });
    } else {
        jQuery('.tab__detail').show();
    }


    if ($('.intro .swiper-container').length > 0) {
        thuvienSwiper = new Swiper('.intro .swiper-container', {
            autoplay: {
                delay: 3000,
            },
            speed: 600,
            slidesPerView: 'auto',
            spaceBetween: 30,
            effect: 'slide', //"slide", "fade", "cube", "coverflow" or "flip"
            preventClicks: false,
            centeredSlides: true,
            disableOnInteraction: true,
            navigation: {
                nextEl: '.intro .swiper-button-next',
                prevEl: '.intro .swiper-button-prev',
            },
            pagination: {
                el: '.intro .swiper-pagination',
                type: 'bullets',
                clickable: true
            },
        });

        $('.intro .swiper-container a').on('mouseover', function() {
            thuvienSwiper.autoplay.stop();
        });
        $('.intro .swiper-container a').on('mouseout', function() {
            thuvienSwiper.autoplay.start();
        });
    }

    // Character
    // if($('#block-char .swiper-container').length!=0) {
    //     // var space = Modernizr.mq('screen and (max-width: 1024px)') == true ? 20 : 0;
    //     var charSlide = new Swiper('#block-char .swiper-container', {
    //         autoplay: {
    //             delay: 60000,
    //         },
    //         autoplay: false,
    //         speed: 600,
    //         slidesPerView: 'auto',
    //         centeredSlides: true,
    //         // spaceBetween: space,
    //         spaceBetween: 20,
    //         effect: 'slide',//"slide", "fade", "cube", "coverflow" or "flip"
    //         // autoHeight: true
    //         disableOnInteraction: true,
    //         // autoplayDisableOnInteraction:true,
    //         preventClicks: false,
    //         navigation: {
    //             nextEl: '#block-char .swiper-button-next',
    //             prevEl: '#block-char .swiper-button-prev',
    //         },
    //         pagination: {
    //             el: '#block-char .swiper-pagination',
    //             type: 'bullets',
    //             clickable: true
    //         },
    //     });
    // };

    if ($('#block-char').length > 0) {
        initSlideThumb('block-char');
    }

    function initSlideThumb(id) {
        var selector = '#' + id;
        var hloop = $('#charNumb').val();
        var arraySlide = new Object();
        var gallery = new Object();

        gallery.top = new Swiper(selector + ' .char-cont', {
            // pagination: {
            //     el: '#character .swiper-pagination',
            //     type: 'bullets',
            //     clickable: true
            // },
            navigation: {
                nextEl: selector + ' .swiper-button-next',
                prevEl: selector + ' .swiper-button-prev',
            },
            autoplay: {
                delay: 6000,
            },
            speed: 600,
            disableOnInteraction: true,
            preventClicks: false,
            loop: true,
            loopedSlides: hloop, //looped slides should be the same
        });

        gallery.thumbs = new Swiper(selector + ' .char-tab', {
            spaceBetween: 10,
            slidesPerView: 14,
            touchRatio: 0.2,
            loop: true,
            loopedSlides: hloop, //looped slides should be the same
            slideToClickedSlide: true,
            disableOnInteraction: true,
            preventClicks: true,
            // freeMode: true,
            // watchSlidesVisibility: true,
            // watchSlidesProgress: true,
        });

        arraySlide.id = gallery;
        arraySlide.id.top.controller.control = arraySlide.id.thumbs;
        arraySlide.id.thumbs.controller.control = arraySlide.id.top;
    }



})
var Mainsite = {};
Mainsite = (function($) {
    return {
        initFancybox: function(select) {
            if ($(select).length > 0) {
                $(select).fancybox({
                    openEffect: 'elastic',
                    autoCenter: true,
                    padding: [7, 7, 7, 7],
                    helpers: {
                        title: {
                            type: 'inside'
                        },
                        media: {}
                    },
                    nextEffect: 'elastic',
                    prevEffect: 'elastic'
                });
            }
        },
        initCarousel: function(element, prev, next) {
            if (jQuery.fn.jcarousel !== undefined) {
                if (jQuery(element).size()) {
                    $(element).jcarousel({
                        wrap: 'both'
                    });
                    $('.jcarousel-pagination').on('jcarouselpagination:active', 'a', function() {
                        $(this).addClass('active');
                    }).on('jcarouselpagination:inactive', 'a', function() {
                        $(this).removeClass('active');
                    }).jcarouselPagination();
                    $(element).jcarouselAutoscroll({
                        interval: 2000
                    });
                }
            }
        }
    }
})(jQuery);

// (function($) {
//     $.fn.BlockCharacter = function(options) {
//         var defaults = {
//             speed: 2000,
//             activeClass: 'active',
//             fx: 'easeInOutQuart'
//         };
//         options = $.extend(defaults, options);
//         return this.each(function() {
//             var that = $(this);
//             var CharTabs = that.find('.char-tab li');
//             var CharContents = that.find('.char-cont > li');
//             CharTabs.first().addClass("active");
//             CharContents.first().addClass("active");
//             var items = $('.char-cont > li.active ul li');
//             items.each(function(idx) {
//                 var item = $(this);
//                 item.bind('mouseover', function() {
//                     items.find('p').css('display', 'none');
//                     item.find('p').css('display', 'block');
//                 });
//                 item.bind('mouseout', function() {
//                     item.find('p').css('display', 'none');
//                 });
//             });
//             CharTabs.each(function(index) {
//                 var tab = $(this).find('a');
//                 tab.bind('click mouseover', function(e) {
//                     e.preventDefault();
//                     CharTabs.removeClass(options.activeClass);
//                     CharTabs.eq(index).addClass(options.activeClass);
//                     CharContents.removeClass(options.activeClass);
//                     CharContents.eq(index).addClass(options.activeClass);
//                     items = CharContents.eq(index).find('ul li');
//                     items.each(function(idx) {
//                         var item = $(this);
//                         item.bind('mouseover', function() {
//                             items.find('p').css('display', 'none');
//                             item.find('p').css('display', 'block');
//                         });
//                         item.bind('mouseout', function() {
//                             item.find('p').css('display', 'none');
//                         });
//                     });
//                 });
//             });
//         });
//     };
// })(jQuery);