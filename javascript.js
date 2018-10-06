

            $(document).ready(function ($) {
                if ($('.navbar').length >= 1){
                // grab the initial top offset of the navigation 
                    var stickyNavTop = $('.navbar').offset().top;
                    // our function that decides weather the navigation bar should have "fixed" css position or not.
                    var stickyNav = function () {
                        var scrollTop = $(window).scrollTop(); // our current vertical position from the top
                        // if we've scrolled more than the navigation, change its position to fixed to stick to top,
                        // otherwise change it back to relative
                        if (scrollTop > stickyNavTop) {
                            $('.navbar').addClass('sticky');
                            $('.navbar-brand').addClass('blok');
                            $('.navbar-brand').removeClass('non');
                        } else {
                            $('.navbar').removeClass('sticky');
                            $('.navbar-brand').addClass('non');
                            $('.navbar-brand').removeClass('blok');
                        }
                    };
                    stickyNav();
                    // and run it again every time you scroll
                    $(window).scroll(function () {
                        stickyNav();
                    });
                }
                $(".ab").click(function () {

                    $('.coverFull').height($(document).height());

                    $('.coverFull').fadeToggle();
                    $('.coverFull').css({ display: "block" });
                });
            });

// navigation function end 

// a tag hash# click function 
     
            $(function () {
                $('a[href*=#]:not([href=#])').click(function () {
                    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                        var target = $(this.hash);
                        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                        if (target.length) {
                            $('html,body').animate({
                                scrollTop: target.offset().top
                            }, 1000);
                            return false;
                        }
                    }
                });
            });
    
