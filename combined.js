    function toggle(div_id) {
        var el = document.getElementById(div_id);
        if (el.style.display == 'none') {
            el.style.display = 'block';
        } else {
            el.style.display = 'none';
        }
    }

    function blanket_size(popUpDivVar) {
        if (typeof window.innerWidth != 'undefined') {
            viewportheight = window.innerHeight;
        } else {
            viewportheight = document.documentElement.clientHeight;
        }
        if ((viewportheight > document.body.parentNode.scrollHeight) && (viewportheight > document.body.parentNode.clientHeight)) {
            blanket_height = viewportheight;
        } else {
            if (document.body.parentNode.clientHeight > document.body.parentNode.scrollHeight) {
                blanket_height = document.body.parentNode.clientHeight;
            } else {
                blanket_height = document.body.parentNode.scrollHeight;
            }
        }
        var blanket = document.getElementById('blanket');
        blanket.style.height = blanket_height + 'px';
        var popUpDiv = document.getElementById(popUpDivVar);
        popUpDiv_height = blanket_height / 2 - 200; //200 is half popup's height
        popUpDiv.style.top = popUpDiv_height + '-px';
    }

    function window_pos(popUpDivVar) {
        if (typeof window.innerWidth != 'undefined') {
            viewportwidth = window.innerHeight;
        } else {
            viewportwidth = document.documentElement.clientHeight;
        }
        if ((viewportwidth > document.body.parentNode.scrollWidth) && (viewportwidth > document.body.parentNode.clientWidth)) {
            window_width = viewportwidth;
        } else {
            if (document.body.parentNode.clientWidth > document.body.parentNode.scrollWidth) {
                window_width = document.body.parentNode.clientWidth;
            } else {
                window_width = document.body.parentNode.scrollWidth;
            }
        }
        var popUpDiv = document.getElementById(popUpDivVar);
        window_width = window_width / 2 - 200; //200 is half popup's width
        popUpDiv.style.left = window_width + 'px';
    }

    function popup(windowname) {
            blanket_size(windowname);
            window_pos(windowname);
            toggle('blanket');
            toggle(windowname);
        }
        // Michael Jordan pop-up

    function toggle(popUpDivmj) {
        var el = document.getElementById(popUpDivmj);
        if (el.style.display == 'none') {
            el.style.display = 'block';
        } else {
            el.style.display = 'none';
        }
    }

    function blanket_size(popUpDivVar) {
        if (typeof window.innerWidth != 'undefined') {
            viewportheight = window.innerHeight;
        } else {
            viewportheight = document.documentElement.clientHeight;
        }
        if ((viewportheight > document.body.parentNode.scrollHeight) && (viewportheight > document.body.parentNode.clientHeight)) {
            blanket_height = viewportheight;
        } else {
            if (document.body.parentNode.clientHeight > document.body.parentNode.scrollHeight) {
                blanket_height = document.body.parentNode.clientHeight;
            } else {
                blanket_height = document.body.parentNode.scrollHeight;
            }
        }
        var blanket = document.getElementById('blanket');
        blanket.style.height = blanket_height + 'px';
        var popUpDiv = document.getElementById(popUpDivVar);
        popUpDiv_height = blanket_height / 2 - 498; //200 is half popup's height
        popUpDiv.style.top = popUpDiv_height + '-px';
    }

    function window_pos(popUpDivVar) {
        if (typeof window.innerWidth != 'undefined') {
            viewportwidth = window.innerHeight;
        } else {
            viewportwidth = document.documentElement.clientHeight;
        }
        if ((viewportwidth > document.body.parentNode.scrollWidth) && (viewportwidth > document.body.parentNode.clientWidth)) {
            window_width = viewportwidth;
        } else {
            if (document.body.parentNode.clientWidth > document.body.parentNode.scrollWidth) {
                window_width = document.body.parentNode.clientWidth;
            } else {
                window_width = document.body.parentNode.scrollWidth;
            }
        }
        var popUpDiv = document.getElementById(popUpDivVar);
        window_width = window_width / 2 - 498; //200 is half popup's width
        popUpDiv.style.left = window_width + 'px';
    }

    function popup(windowname) {
            blanket_size(windowname);
            window_pos(windowname);
            toggle('blanket');
            toggle(windowname);
        }
        //abraham lincoln

    function abrahamlincoln() {
        var myWindow = window.open("http://quotesfans.com/wp-content/uploads/2015/03/Abraham-Lincoln-Quotes-19.jpg", "_blank",
            "toolbar=yes, scrollbars=yes, resizable=yes, top=400, left=600, width=525, height=300");
    }
    $("a[href='#top']").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });
    $("a[href='#ctabutton']").click(function() {
        $("html, body").animate({
            scrollTop: 2300
        }, "slow");
        return false;
    });
    $("a[href='#empire']").click(function() {
        $("html, body").animate({
            scrollTop: 2700
        }, "slow");
        return false;
    });
    jQuery(function($) {
        var close = $('.tb-close').fadeOut(0);
        var calling = $('.tb-main');
        var togg = true;
        $('.tb-btn').click(function() {
            if (togg) {
                close.fadeIn(200);
                calling.animate({
                    height: 1379
                });
            } else {
                calling.animate({
                    height: 80
                });
                close.fadeOut(200);
            }
            togg = !togg;
        });
    });
    jQuery(function($) {
        $(window).on("scroll", function() {
            if ($(this).scrollTop() > 100) {
                $(".header").addClass(".header-short");
            } else {
                $(".header").removeClass("not-.menu-short ");
            }
        });
    });
    $('.empire-click').click(function() {
        $('html, body').animate({
            scrollTop: $('#empire').position().top
        }, 'slow');
        return false;
    });
    $("a[href='#top']").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });
    $("a[href='#top']").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });
    $("a[href='#ctabutton']").click(function() {
        $("html, body").animate({
            scrollTop: 2300
        }, "slow");
        return false;
    });
    $("a[href='http://www.aeropostale.com/girls-clothing/features/two-you/family.jsp?categoryId=84199616#84163056']").click(function() {
        $('html, body').animate({
            scrollTop: $('#84163056').position().top
        }, 'slow');
        return false;
    });