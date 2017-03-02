
$(function() {
    var $navBtn = $('.button-desktop'),
        $headerNav = $(".header__nav"),
        $nav = $(".navigation"),
        $iconBar = $('.button-desktop .icon-bar'),
        $menu = $('.button-desktop .f-menu'),
        $navbarToggle = $('.navbar-toggle'),
        $overlay = $('#overlay');
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $($headerNav).outerHeight();

    $navbarToggle.click(function () {
        $(this).toggleClass('open');
        $overlay.toggleClass('open');
    });

    $(window).resize(function ()
    {
        if ($(window).width() > 992)
        {
            $(window).scroll(function(event){
                didScroll = true;
            });

            setInterval(function() {
                if (didScroll) {
                    hasScrolled();
                    didScroll = false;
                }
            }, 100);

            function hasScrolled() {
                var st = $(this).scrollTop();

                // Make sure they scroll more than delta
                if(Math.abs(lastScrollTop - st) <= delta)
                    return;

                // If they scrolled down and are past the navbar, add class .nav-up.
                // This is necessary so you never see what is "behind" the navbar.
                if (st > lastScrollTop && st > navbarHeight+150){
                    // Scroll Down
                    $($headerNav).removeClass('nav-down').addClass('nav-up');
                } else {
                    // Scroll Up
                    if(st + $(window).height()+100 < $(document).height()) {
                        $($headerNav).removeClass('nav-up').addClass('nav-down');
                    }
                }

                lastScrollTop = st;
            }

        } else
        {

        }
    }).resize();

    var $someImages = $('img.img-fit');
    objectFitImages($someImages);

    /*    // Detect objectFit support
     if('objectFit' in document.documentElement.style === false) {
     // assign HTMLCollection with parents of images with objectFit to variable
     var container = document.getElementsByClassName('js-box');
     // Loop through HTMLCollection
     for(var i = 0; i < container.length; i++) {
     // Asign image source to variable
     var imageSource = container[i].querySelector('img').src;
     // Hide image
     container[i].querySelector('img').style.display = 'none';
     // Add background-size: cover
     container[i].style.backgroundSize = 'cover';
     // Add background-image: and put image source here
     container[i].style.backgroundImage = 'url(' + imageSource + ')';
     // Add background-position: center center
     container[i].style.backgroundPosition = 'top center';
     }
     }
     */




    /* $navBtn.click(function() {
     $(this).toggleClass('open');
     $headerNav.toggleClass('prep close-n ');
     });


     $(window).resize(function ()
     {
     if ($(window).width() > 992)
     {
     $(window).scroll(function() {

     if ($(window).scrollTop() >= 50) {
     if ($navBtn.hasClass("open")) {
     return;
     }

     $nav.addClass("desktop").removeClass("close-d");
     $headerNav.removeClass("prep");
     $headerNav.addClass("close-n");
     $iconBar.addClass('active-icon-bar');
     $menu.addClass('active-menu');
     $navBtn.css({
     'box-shadow': '0px 5px 20px 0px rgba(173, 141, 99, 0.1)',
     'background': 'url(https://www.stolarstvi-siwy-fm.cz/images/pattern-wood.png) top left',
     'opacity': '1',
     'transition': '2s ease'
     });
     } else {
     $nav.removeClass("desktop").addClass("close-d");
     $headerNav.removeClass("close-n").removeClass("prep");
     $navBtn.css({
     'box-shadow': '',
     'background': '',
     'opacity': '0',
     'transition': '2s ease'
     }).removeClass("open");
     $iconBar.removeClass('active-icon-bar');
     $menu.removeClass('active-menu');

     }
     });
     } else
     {
     $(window).scroll(function() {

     if ($(window).scrollTop() >= 50) {
     $nav.removeClass("desktop").removeClass("close-d");
     $headerNav.removeClass("close-n").removeClass("prep");
     $iconBar.removeClass('active-icon-bar');
     $menu.removeClass('active-menu');
     $navBtn.css({
     'box-shadow': '',
     'background': '',
     'opacity': '',
     'transition': ''
     });
     } else {
     $nav.removeClass("desktop").removeClass("close-d");
     $headerNav.removeClass("close-n").removeClass("prep");
     $navBtn.css({
     'box-shadow': '',
     'background': '',
     'opacity': '',
     'transition': ''
     }).removeClass("open");
     $iconBar.removeClass('active-icon-bar');
     $menu.removeClass('active-menu');
     }
     });
     }
     }).resize();

     */


});