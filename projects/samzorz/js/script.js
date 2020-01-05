$(window).load(function(){
    $('#load').fadeOut(1000, function() {
        $('body').removeClass('loading');
    });
    $('.spinner').fadeOut(1000);
    $('html').css('overflow','auto');
    $('#twitch-widget').hide(0).show("slide", { direction: "down" }, 1000);
});

$(document).ready(function(){
    $.ajax({
        url: "https://api.twitch.tv/helix/streams?user_login=samzorz",
        dataType: 'json',
        headers: {
            'Client-ID': 'p9p2mqw3zxh97azwtp26yjr89o6q8xk'
        },
        success: function(channel)
        {
	console.log(channel);
            if (channel.data.length <= 0) {
                $(".live-check").append("<div class='offline'><p>Stream Offline</p></div>");
            } else {
                if(channel.data[0].type == "live"){
                    $(".live-check").append("<div class='live'><p><i class='fa fa-circle live-ticker' aria-hidden='true'></i>Live on Twitch!</p></div>");
                }else{
                    $(".live-check").append("<div class='offline'><p>Stream Offline</p></div>");
                }
            }
        }
    });
    $('.carousel-pc').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 15000
    });
    $('.carousel-mobile').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 15000
    });
    $('.carousel-sponsor').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 7500,
        arrows : false,
        draggable: false,
        touchMove: false,
        swipe: false
    });
    $('.carousel-sponsor-mini').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3500,
        arrows : false,
        draggable: false,
        touchMove: false,
        swipe: false
    });

    var nav = responsiveNav(".nav-collapse");

    setBindings();
});
function setBindings() {
    $('nav.nav-pc a').click(function (e) {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 90
        }, 1250, "easeInOutQuint");
        return false;
    });

    $('header a').click(function (e) {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 51
        }, 1250, "easeInOutQuint");
        return false;
    });
}
