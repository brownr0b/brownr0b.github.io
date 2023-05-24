$(function(){

    $('.video').attr('src', 'https://www.youtube.com/embed/EV98ySK3KdE');
    $('.setup-1').addClass("active");

    function swapVideo(){
        $('.setup-1').click(function(){
            if($('.video').attr('src') == 'https://www.youtube.com/embed/zFbXv3yc36Y'){
                $('.setup-2').removeClass("active");
                $('.setup-1').addClass("active");
                $('.video').attr('src', 'https://www.youtube.com/embed/EV98ySK3KdE');
            }
        });

        $('.setup-2').click(function(){
            if($('.video').attr('src') == 'https://www.youtube.com/embed/EV98ySK3KdE'){
                $('.setup-1').removeClass("active");
                $('.setup-2').addClass("active");
                $('.video').attr('src', 'https://www.youtube.com/embed/zFbXv3yc36Y');
            }
        });
    }
    swapVideo();
});
