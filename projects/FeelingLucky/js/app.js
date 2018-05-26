var options = {
    url: "data/games.json",

    theme: "bootstrap",

    getValue: "name",

    list: {
        match: {
            enabled: true
        },
        sort: {
            enabled: true
        },
        maxNumberOfElements: 5
    }
};

$("#game").easyAutocomplete(options);

$(document).ready(function(){


    $('#searchForm').submit(function(){
        event.preventDefault();

        var game = $('input[name="game"]').val();

        $.ajax({
            url: "https://api.twitch.tv/kraken/streams?game=" + game,
            dataType: 'json',
            headers: {
                'Client-ID': 'p9p2mqw3zxh97azwtp26yjr89o6q8xk'
            },
            success: function(data)
            {
                var total = data._total.valueOf();

                if(total <= 100){
                    var offset = [
                        (data._total.valueOf())
                    ];
                }else if(total > 100 && total <= 200){
                    var offset = [
                        (data._total.valueOf() - 100)
                    ];
                }else if(total > 200 && total <= 300){
                    var offset = [
                        (data._total.valueOf() - 100),
                        (data._total.valueOf() - 200)
                    ];
                }else if(total > 300 && total <= 400){
                    var offset = [
                        (data._total.valueOf() - 100),
                        (data._total.valueOf() - 200),
                        (data._total.valueOf() - 300)
                    ];
                }else if(total > 400 && total <= 500){
                    var offset = [
                        (data._total.valueOf() - 100),
                        (data._total.valueOf() - 200),
                        (data._total.valueOf() - 300),
                        (data._total.valueOf() - 400)
                    ];
                }else if(total > 500 && total <= 600){
                    var offset = [
                        (data._total.valueOf() - 100),
                        (data._total.valueOf() - 200),
                        (data._total.valueOf() - 300),
                        (data._total.valueOf() - 400),
                        (data._total.valueOf() - 500)
                    ];
                }else if(total > 600 && total <= 700){
                    var offset = [
                        (data._total.valueOf() - 100),
                        (data._total.valueOf() - 200),
                        (data._total.valueOf() - 300),
                        (data._total.valueOf() - 400),
                        (data._total.valueOf() - 500),
                        (data._total.valueOf() - 600)
                    ];
                }else if(total > 700 && total <= 800){
                    var offset = [
                        (data._total.valueOf() - 100),
                        (data._total.valueOf() - 200),
                        (data._total.valueOf() - 300),
                        (data._total.valueOf() - 400),
                        (data._total.valueOf() - 500),
                        (data._total.valueOf() - 600),
                        (data._total.valueOf() - 700)
                    ];
                }else if(total > 800 && total <= 900){
                    var offset = [
                        (data._total.valueOf() - 100),
                        (data._total.valueOf() - 200),
                        (data._total.valueOf() - 300),
                        (data._total.valueOf() - 400),
                        (data._total.valueOf() - 500),
                        (data._total.valueOf() - 600),
                        (data._total.valueOf() - 700),
                        (data._total.valueOf() - 800)
                    ];
                }else if(total > 900 && total <= 1000){
                    var offset = [
                        (data._total.valueOf() - 100),
                        (data._total.valueOf() - 200),
                        (data._total.valueOf() - 300),
                        (data._total.valueOf() - 400),
                        (data._total.valueOf() - 500),
                        (data._total.valueOf() - 600),
                        (data._total.valueOf() - 700),
                        (data._total.valueOf() - 800),
                        (data._total.valueOf() - 900)
                    ];
                }else if(total > 1000 && total <= 1100){
                    var offset = [
                        (data._total.valueOf() - 100),
                        (data._total.valueOf() - 200),
                        (data._total.valueOf() - 300),
                        (data._total.valueOf() - 400),
                        (data._total.valueOf() - 500),
                        (data._total.valueOf() - 600),
                        (data._total.valueOf() - 700),
                        (data._total.valueOf() - 800),
                        (data._total.valueOf() - 900),
                        (data._total.valueOf() - 1000)
                    ];
                }else if(total > 1100 && total <= 1200){
                    var offset = [
                        (data._total.valueOf() - 100),
                        (data._total.valueOf() - 200),
                        (data._total.valueOf() - 300),
                        (data._total.valueOf() - 400),
                        (data._total.valueOf() - 500),
                        (data._total.valueOf() - 600),
                        (data._total.valueOf() - 700),
                        (data._total.valueOf() - 800),
                        (data._total.valueOf() - 900),
                        (data._total.valueOf() - 1000),
                        (data._total.valueOf() - 1100)
                    ];
                }else if(total > 1200 && total <= 1300){
                    var offset = [
                        (data._total.valueOf() - 100),
                        (data._total.valueOf() - 200),
                        (data._total.valueOf() - 300),
                        (data._total.valueOf() - 400),
                        (data._total.valueOf() - 500),
                        (data._total.valueOf() - 600),
                        (data._total.valueOf() - 700),
                        (data._total.valueOf() - 800),
                        (data._total.valueOf() - 900),
                        (data._total.valueOf() - 1000),
                        (data._total.valueOf() - 1100),
                        (data._total.valueOf() - 1200)
                    ];
                }else if(total > 1300 && total <= 1400){
                    var offset = [
                        (data._total.valueOf() - 100),
                        (data._total.valueOf() - 200),
                        (data._total.valueOf() - 300),
                        (data._total.valueOf() - 400),
                        (data._total.valueOf() - 500),
                        (data._total.valueOf() - 600),
                        (data._total.valueOf() - 700),
                        (data._total.valueOf() - 800),
                        (data._total.valueOf() - 900),
                        (data._total.valueOf() - 1000),
                        (data._total.valueOf() - 1100),
                        (data._total.valueOf() - 1200),
                        (data._total.valueOf() - 1300)
                    ];
                }else if(total > 1400 && total <= 1500){
                    var offset = [
                        (data._total.valueOf() - 100),
                        (data._total.valueOf() - 200),
                        (data._total.valueOf() - 300),
                        (data._total.valueOf() - 400),
                        (data._total.valueOf() - 500),
                        (data._total.valueOf() - 600),
                        (data._total.valueOf() - 700),
                        (data._total.valueOf() - 800),
                        (data._total.valueOf() - 900),
                        (data._total.valueOf() - 1000),
                        (data._total.valueOf() - 1100),
                        (data._total.valueOf() - 1200),
                        (data._total.valueOf() - 1300),
                        (data._total.valueOf() - 1400)
                    ];
                }else if(total > 1500 && total <= 1600){
                    var offset = [
                        (data._total.valueOf() - 100),
                        (data._total.valueOf() - 200),
                        (data._total.valueOf() - 300),
                        (data._total.valueOf() - 400),
                        (data._total.valueOf() - 500),
                        (data._total.valueOf() - 600),
                        (data._total.valueOf() - 700),
                        (data._total.valueOf() - 800),
                        (data._total.valueOf() - 900),
                        (data._total.valueOf() - 1000),
                        (data._total.valueOf() - 1100),
                        (data._total.valueOf() - 1200),
                        (data._total.valueOf() - 1300),
                        (data._total.valueOf() - 1400),
                        (data._total.valueOf() - 1500)
                    ];
                }else if(total > 1600 && total <= 1700){
                    var offset = [
                        (data._total.valueOf() - 100),
                        (data._total.valueOf() - 200),
                        (data._total.valueOf() - 300),
                        (data._total.valueOf() - 400),
                        (data._total.valueOf() - 500),
                        (data._total.valueOf() - 600),
                        (data._total.valueOf() - 700),
                        (data._total.valueOf() - 800),
                        (data._total.valueOf() - 900),
                        (data._total.valueOf() - 1000),
                        (data._total.valueOf() - 1100),
                        (data._total.valueOf() - 1200),
                        (data._total.valueOf() - 1300),
                        (data._total.valueOf() - 1400),
                        (data._total.valueOf() - 1500),
                        (data._total.valueOf() - 1600)
                    ];
                }else if(total > 1700 && total <= 1800){
                    var offset = [
                        (data._total.valueOf() - 100),
                        (data._total.valueOf() - 200),
                        (data._total.valueOf() - 300),
                        (data._total.valueOf() - 400),
                        (data._total.valueOf() - 500),
                        (data._total.valueOf() - 600),
                        (data._total.valueOf() - 700),
                        (data._total.valueOf() - 800),
                        (data._total.valueOf() - 900),
                        (data._total.valueOf() - 1000),
                        (data._total.valueOf() - 1100),
                        (data._total.valueOf() - 1200),
                        (data._total.valueOf() - 1300),
                        (data._total.valueOf() - 1400),
                        (data._total.valueOf() - 1500),
                        (data._total.valueOf() - 1600),
                        (data._total.valueOf() - 1700)
                    ];
                }else if(total > 1800 && total <= 1900){
                    var offset = [
                        (data._total.valueOf() - 100),
                        (data._total.valueOf() - 200),
                        (data._total.valueOf() - 300),
                        (data._total.valueOf() - 400),
                        (data._total.valueOf() - 500),
                        (data._total.valueOf() - 600),
                        (data._total.valueOf() - 700),
                        (data._total.valueOf() - 800),
                        (data._total.valueOf() - 900),
                        (data._total.valueOf() - 1000),
                        (data._total.valueOf() - 1100),
                        (data._total.valueOf() - 1200),
                        (data._total.valueOf() - 1300),
                        (data._total.valueOf() - 1400),
                        (data._total.valueOf() - 1500),
                        (data._total.valueOf() - 1600),
                        (data._total.valueOf() - 1700),
                        (data._total.valueOf() - 1800)
                    ];
                }else if(total > 1900 && total <= 2000){
                    var offset = [
                        (data._total.valueOf() - 100),
                        (data._total.valueOf() - 200),
                        (data._total.valueOf() - 300),
                        (data._total.valueOf() - 400),
                        (data._total.valueOf() - 500),
                        (data._total.valueOf() - 600),
                        (data._total.valueOf() - 700),
                        (data._total.valueOf() - 800),
                        (data._total.valueOf() - 900),
                        (data._total.valueOf() - 1000),
                        (data._total.valueOf() - 1100),
                        (data._total.valueOf() - 1200),
                        (data._total.valueOf() - 1300),
                        (data._total.valueOf() - 1400),
                        (data._total.valueOf() - 1500),
                        (data._total.valueOf() - 1600),
                        (data._total.valueOf() - 1700),
                        (data._total.valueOf() - 1800),
                        (data._total.valueOf() - 1900)
                    ];
                }else{
                    var offset = [
                        (data._total.valueOf() - 100),
                        (data._total.valueOf() - 200),
                        (data._total.valueOf() - 300),
                        (data._total.valueOf() - 400),
                        (data._total.valueOf() - 500),
                        (data._total.valueOf() - 600),
                        (data._total.valueOf() - 700),
                        (data._total.valueOf() - 800),
                        (data._total.valueOf() - 900),
                        (data._total.valueOf() - 1000),
                        (data._total.valueOf() - 1100),
                        (data._total.valueOf() - 1200),
                        (data._total.valueOf() - 1300),
                        (data._total.valueOf() - 1400),
                        (data._total.valueOf() - 1500),
                        (data._total.valueOf() - 1600),
                        (data._total.valueOf() - 1700),
                        (data._total.valueOf() - 1800),
                        (data._total.valueOf() - 1900),
                        (data._total.valueOf() - 2000)
                    ];
                }

                var totalOffset = offset[Math.floor(Math.random()*offset.length)];
                if (totalOffset < 0){
                    totalOffset = 0;
                }

                // console.log(total);
                console.log(offset);
                console.log(totalOffset);

                $.ajax({
                    url: "https://api.twitch.tv/kraken/streams?game=" + game + "&offset=" + totalOffset + "&limit=100",
                    dataType: 'json',
                    headers: {
                        'Client-ID': 'p9p2mqw3zxh97azwtp26yjr89o6q8xk'
                    },
                    success: function(data1)
                    {
                        // $.each(data1.streams, function(index, element) {
                        //     console.log(element.channel.display_name);
                        // });

                        var random = data1.streams[Math.floor(Math.random()*data.streams.length)];
                        console.log(random);

                        var preview = "<div>" + random.channel.display_name + "</div><div style='font-weight: bold !important;'>" + random.channel.status + "</div><div>Viewers: " + random.viewers + "</div><a href='" + random.channel.url + "'><img src='" + random.preview.medium + "'></a>";

                        $('#content').html(preview);

                        //window.location.href = random.channel.url;
                    }
                });
            }
        });
    });
});