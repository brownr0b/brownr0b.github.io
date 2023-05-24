const maps = [
    "Backstab",
    "Deadlypass",
    "BridgeTooFar",
    "Dammage",
    "HarborEdge",
    "Honor",
    "LittleBigEye",
    "MissileCrisis",
    "ColdFront",
    "RussianBorder",
    "SpecialOp",
    "TheBlackGold",
    "TheNest"
];

$(function(){
    async function outputserver(){
        const response = await fetch('http://beta.openspy.net/api/servers/bfield1942ps2');
        const data = await response.json();
        // i = 0;
        // while (i < data.length){
        //     $("#container").append("<div class='server-" + i + "'/>");
        //     $(".server-"+i).html("<div class='servername'>" + data[i].hostname + "</div>").append("<div class='players'>" + data[i].numplayers + "/" + data[i].maxplayers + " Players" + "</div>").append("<div class='mapname'>" + maps[data[i].mapname] + "</div>").append("<div class='map'><img src='https://ps2online.com/oslist/maps/bf2mc/" + data[i].mapname +".png'/></div>");
        //     i++;
        // }

        for (let i = 0; i < data.length; i++) {
            $("#container").append("<div class='server-" + i + "'/>");
            $(".server-"+i).append("<div class='map'><a href='content/maps/" + data[i].mapname +".png'><img src='content/maps/" + data[i].mapname +".png'/></a></div>").append("<div class='servername'>" + data[i].hostname + "</div>").append("<div class='players'>" + data[i].numplayers + "/" + data[i].maxplayers + " Players" + "</div>").append("<div class='mapname'>" + maps[data[i].mapname] + "</div>");
        }
    }
    outputserver();

    // function outputserver(){
    //     $.getJSON('http://beta.openspy.net/api/servers/bfield1942ps2', function(data) {
    //         // i = 0;
    //         // while (i < data.length){
    //         //     $("#container").append("<div class='server-" + i + "'/>");
    //         //     $(".server-"+i).append("<div class='servername'>" + data[i].hostname + "</div>").append("<div class='players'>" + data[i].numplayers + "/" + data[i].maxplayers + " Players" + "</div>").append("<div class='mapname'>" + maps[data[i].mapname] + "</div>").append("<div class='map'><img src='https://ps2online.com/oslist/maps/bf2mc/" + data[i].mapname +".png'/></div>");
    //         //
    //         //     // console.log(data[i].hostname + " | " + data[i].numplayers + "/" + data[i].maxplayers + " Players | " + maps[data[i].mapname]);
    //         //     // $(".servername").append(data[i].hostname);
    //         //     // $(".players").append(data[i].numplayers + "/" + data[i].maxplayers + " Players");
    //         //     // $(".mapname").append(maps[data[i].mapname]);
    //         //     // $(".map").append('<img class="map" src="https://ps2online.com/oslist/maps/bf2mc/'+ data[i].mapname +'.png" />');
    //         //     i++
    //         // }
    //     });
    // }
    //
    // outputserver();
});
