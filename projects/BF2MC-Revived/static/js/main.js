$(function(){

    // $.getJSON('http://beta.openspy.net/api/servers/', function(data) {
    //     console.log(data[11]);
    // });
    //
    // $.getJSON('http://beta.openspy.net/api/servers/', function(data) {
    //     $('.playercount').html(data[11].players + " players currently online");
    //     console.log('Numbers of active players: ' + data[11].players);
    // });
    // $.getJSON('http://beta.openspy.net/api/servers/bfield1942ps2', function(data) {
    //     // console.log(data);
    //
    //     $('.servercount').html(data.length + " active servers");
    //
    //     var players = data.map(data => data.numplayers).reduce((a, b) => a + b);
    //     $('.playercount').html(players + " players in-game");
    //
    // });

    async function loadstats(){
        const response = await fetch('http://beta.openspy.net/api/servers/bfield1942ps2');
        const data = await response.json();
        $('.servercount').html(data.length + " active servers");
        const players = data.map(data => data.numplayers).reduce((a, b) => a + b);
        if(players === 1) return $('.counts').html(data.length + " active servers | " + players + " player in-game");
        if(players != 1) return $('.counts').html(data.length + " active servers | " + players + " players in-game");
    };

    loadstats();

    setInterval(function(){
        loadstats();
    }, 10000);

    // function time(){
    //     var now = moment(1683910800000).format('DD MMMM YYYY h A');
    //
    //     $('.live').html("Battlefield 2: Modern Combat Multiplayer is now <span style='color:red;'>LIVE</span><br> as of " + now);
    // }
    //
    // time();

});
