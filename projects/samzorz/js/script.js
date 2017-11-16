$(document).ready(function(){
    $(window).load(function(){
        $('#load').fadeOut(1000, function() {
            $('body').removeClass('loading');
        });
        $('.spinner').fadeOut(1000);
        $('html').css('overflow','auto');
        $('#twitch-widget').hide(0).show("slide", { direction: "down" }, 1500);
    });
    $.ajax({
        url: "https://api.twitch.tv/kraken/streams/samzorz",
        dataType: 'json',
        headers: {
            'Client-ID': 'p9p2mqw3zxh97azwtp26yjr89o6q8xk'
        },
        success: function(channel)
        {
            if (channel["stream"] == null)
            {
                $(".live-check").append("<div class='offline'><p>Stream Offline</p></div>");
            } else {
                $(".live-check").append("<div class='live'><p><i class='fa fa-circle live-ticker' aria-hidden='true'></i>Live on Twitch!</p></div>");
            }
        }
    });
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next, title',

            right: 'today, basicWeek,basicDay'
        },
        height: 300,
        defaultView: 'basicWeek',
        displayEventEnd: true,
        eventColor: '#0d0d0d',
        eventLimit: true,
        navLinks: true,
        timezone: 'local',
        eventTextColor: '#e5e5e5',
        eventBorderColor: '#0d0d0d',
        events: [
            {
                title: 'Day Off',
                start: '2017-06-11'
            },
            {
                title: 'Stream',
                start: '2017-06-12T06:00:00-07:00'
            },
            {
                title: 'Stream',
                start: '2017-06-13T06:00:00-07:00'
            },
            {
                title: 'Stream',
                start: '2017-06-14T06:00:00-07:00'
            },
            {
                title: 'Stream',
                start: '2017-06-15T06:00:00-07:00'
            },
            {
                title: 'Stream',
                start: '2017-06-16T06:00:00-07:00'
            },
            {
                title: 'Stream',
                start: '2017-06-17T22:00:00-07:00'
            }
        ]
    });
    if (window.innerWidth < 768 )  {
        $('#calendar').fullCalendar('changeView', 'basicDay');
    }
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
    $('.carousel-embed').slick({
        dots: true,
        infinite: false,
        customPaging : function(slider, i) {
            var thumb = $(slider.$slides[i]).data('thumb');
            return '<h1 id="embed">'+thumb+'</h1>';
        },
        fade: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false
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
    $( ".fa-calendar" ).tooltip({
    });
    $( ".fa-music" ).tooltip({
    });
    $( ".fa-handshake-o" ).tooltip({
    });
    $( ".fa-envelope-o" ).tooltip({
    });
    $( ".fa-question" ).tooltip({
    });
    $( ".fa-shopping-basket" ).tooltip({
    });
    $(function() {

        // Default
        jQuery.scrollSpeed(100, 750);

    });
    var nav = responsiveNav(".nav-collapse");

    setBindings();
    stopAll();
});
function setBindings() {
    $('nav.nav-pc a').click(function (e) {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 91
        }, 750);
        return false;
    });

    $('header a').click(function (e) {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 51
        }, 750);
        return false;
    });
}
function stopAll(){
    $("#slick-slide20").click(function(e){
        var video = $("#player-1").attr("src");
        var video2 = $("#player-2").attr("src");
        var video3 = $("#player-3").attr("src");
        var video4 = $("#player-4").attr("src");
        $("#player-1").attr("src","");
        $("#player-1").attr("src",video);
        $("#player-2").attr("src","");
        $("#player-2").attr("src",video2);
        $("#player-3").attr("src","");
        $("#player-3").attr("src",video3);
        $("#player-4").attr("src","");
        $("#player-4").attr("src",video4);
    });
    $("#slick-slide21").click(function(e){
        var video = $("#tw").attr("src");
        $("#tw").attr("src","");
        $("#tw").attr("src", video);
    });
}
