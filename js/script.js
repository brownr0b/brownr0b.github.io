$(document).ready(function(){
    //alert(navigator.appName);

    //$('#top').hide();
    $('.loading').fadeOut(1000, 'easeOutQuad');

    //Decides what color the menu button is on load based on the current location.
    var scrolltop = $(this).scrollTop();
    if(scrolltop >= $("#homeSection").offset().top + $("#homeSection").height()) {
        $('#menu').css("color", "rgba(34,34,34,.8)");
    }
    else {
        $('#menu').css("color", "#f2f2f2");
    }

    if(scrolltop >= $(".view-all").offset().top + $(".view-all").height()){
        $('#menu').css("color", "#f2f2f2");
    }

    //Changes the color of the menu button after a certain point in the web page.
    $(window).on('scroll',function() {
         var scrolltop = $(this).scrollTop();

         if(scrolltop >= $("#homeSection").offset().top + $("#homeSection").height()) {
             $('#menu').css("color", "rgba(34,34,34,.8)");
        }else {
             $('#menu').css("color", "#f2f2f2");
        }

        if(scrolltop >= $(".view-all").offset().top + $(".view-all").height()){
            $('#menu').css("color", "#f2f2f2");
        }
    });

     pushOpen();
     setBindings();
     workModal();
     allFade();
});

function pushOpen(){

    //Allows toggling of the navigation when click on the menu button.
    //Obtaining the click state allows the icon to toggle between bars and times.
    $('#menu').click(function(){
        if($(this).attr('data-click-state') == 1) {
            $(this).attr('data-click-state', 0);
            $(this).find('i').hasClass('fa-times');
            $('#menu').find('i').removeClass('fa-times');
            $('#menu').find('i').addClass('fa-bars');
            $('#top-nav').animate({
                marginTop: "-75px"
            },250);
            $('#menu').animate({
                marginTop: "0"
            },250);
        } else {
            $(this).attr('data-click-state', 1);
            $(this).find('i').hasClass('fa-bars');
            $('#menu').find('i').removeClass('fa-bars');
            $('#menu').find('i').addClass('fa-times');
            $('#top-nav').animate({
                marginTop: "5px"
            },250);
            $('#menu').animate({
                marginTop: "80px"
            },250);
        }
    });

    //Allows the user to close the navigation by clicking outside the container.
    $('.overlay').click(function(event) {
        if(!$(event.target).closest('#menu').length) {
            if($('#menu').is(":visible")) {
                $('#menu').attr('data-click-state', 0);
                $('#menu').find('i').removeClass('fa-times');
                $('#menu').find('i').addClass('fa-bars');
                $('#top-nav').animate({
                    marginTop: "-75px"
                },250);
                $('#menu').animate({
                    marginTop: "0"
                },250);
            }
        }
    })
}

function setBindings(){

    //Creates a smooth scrolling effect to the selected element.
    $('.nav').click(function (e) {

        if($('#menu').is(":visible")) {
            $('#menu').attr('data-click-state', 0);
            $('#menu').find('i').removeClass('fa-times');
            $('#menu').find('i').addClass('fa-bars');
            $('#top-nav').animate({
                marginTop: "-75px"
            },250);
            $('#menu').animate({
                marginTop: "0"
            },250);
        }

        $('html,body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1500, 'easeInOutQuint');

        ////If the link that is selected has an href of "#contact", the first input field will come into focus for the user.
        // if($(this).attr('href') === '#contact'){
        //     $('#name').focus();
        // }

        return false;
    });

    //Automatically closes the navigation after an option is selected.
    $('.top-container a').click(function (e) {
        $('#menu').attr('data-click-state', 0);
        $('#menu').find('i').removeClass('fa-times');
        $('#menu').find('i').addClass('fa-bars');
        $('#top-nav').animate({
            marginTop: "-75px"
        },250);
        $('#menu').animate({
            marginTop: "0"
        },250);

        $('html,body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1500, 'easeInOutQuint');

        // if($(this).attr('href') === '#contact'){
        //     $('#name').focus();
        // }

        return false;
    });
}

//Fades out the page when clicking the "View All" button within the work section.
function allFade(){
    $('.all').click(function (e) {
        event.preventDefault();
        newLocation = this.href;
        $('.loading').fadeIn(500, 'easeInQuad', newpage);
    });
    newpage();
    function newpage() {
        window.location = newLocation;
    }
}

//A popup section that provides a closer look at each individual project.
function workModal(){
    $('.work .zoom').click(function(){

        $('.openWork').css('display','flex').hide().fadeIn('slow');
        $('.modal-bg').css('display','block').hide().fadeIn('slow');
        $('.modal-content').css('display','block').hide().fadeIn('slow');
        $('.modal-content').css('paddingRight', '17px');

        //Obtains the src of the img in the ".work" element that is closest to the clicked object.
        var url = $(this).closest('.work').find('img.preview').attr('src');

        //Removes the file extension from the variable url
        url = url.substring(0, url.length - 4);
        $('.modal-img').prepend('<img id="img" src="' + url +'Full.jpg" />');
        $('body').css('overflow','hidden');

        //wraps links around the image and text to allow the user access to a live view of the web page.
        if(url.indexOf("workOne") > 0){
            $('#img').wrap("<a href='projects/samzorz'></a>");
            $('.view h3').wrap("<a href='projects/samzorz'></a>");
        }else if(url.indexOf("workTwo") >0){
            $('#img').wrap("<a href='https://brownr0b.github.io'></a>");
            $('.view h3').wrap("<a href='https://brownr0b.github.io'></a>");
        }else if(url.indexOf("workThree") >0){
            $('#img').wrap("<a href='projects/calmWeather'></a>");
            $('.view h3').wrap("<a href='projects/calmWeather'></a>");
        }
    });

    //Closes the modal if the user clicks outside it.
    $('.modal-bg').click(function(){
        $('.modal-content').css('paddingRight', '0');
        $('.openWork').fadeOut(500);
        $('.modal-img a').fadeOut(500, function() { $(this).remove(); });
        $('.view h3').unwrap();
        $('body').css('overflow','auto');
    });
}