$(function(){
    $('.purecounter').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
    $(window).scroll(function() {
        $("nav").toggleClass("scroled", $(this).scrollTop() > 100);
        $(".scrollup").toggleClass("scrollupp", $(this).scrollTop() > 250);

    });
    
    $(window).scroll(function() {
        $("section").each(function() {

            var x = $(window).scrollTop() + $(window).height();
            var y = $(this).offset().top + $(this).height() / 2;

            if (x >= y) {
                $(this).addClass("activee");
            }

        })




    })

    $(window).on("load",function(){
        $(".loader-wrapper").fadeOut(2500);
   });

})