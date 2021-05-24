$(document).ready(function () {

    $('.js--section-features').waypoint(function (direction) {
        if (direction === 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });

    $('.js--scroll-to-portfolio').click(function () {
        $('html, body').animate({scrollTop: $('.js--scroll-portfolio').offset().top}, 1000);

    })

    $(function() {
// Select all links with hashes
        $('a[href*="#"]')
            // Remove links that don't actually link to anything
            .not('[href="#"]')
            .not('[href="#0"]')
            .click(function(event) {
                // On-page links
                if (
                    location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')
                    &&
                    location.hostname === this.hostname
                ) {
                    // Figure out element to scroll to
                    let target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    // Does a scroll target exist?
                    if (target.length) {
                        // Only prevent default if animation is actually gonna happen
                        event.preventDefault();
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 1000, function() {
                            // Callback after animation
                            // Must change focus!
                            const $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) { // Checking if the target was focused
                                return false;
                            } else {
                                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                                $target.focus(); // Set focus again
                            }
                        });
                    }
                }
            });
    })

    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    })

    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');

        var nameicon = $("#menuburger");

        nav.slideToggle(200);

        if (nameicon.attr("src") === "img/icons/menu-outline.svg"){
            nameicon.attr("src", "img/icons/close-outline.svg");
        } else {
            nameicon.attr("src", "img/icons/menu-outline.svg");
        }
    })



});