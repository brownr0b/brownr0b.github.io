<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>BSQ</title>
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,300,500,700" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome-animation/0.0.10/font-awesome-animation.min.css">
    <style>
        *{
            margin:0;
            padding: 0;
        }
        html, body{
            height: 100%;
            width: 100%;
            font-family: 'Raleway', sans-serif;
        }

        .container{
            width: 100%;
            height: 100%;
            background-color: #282E34;
        }
        .coming-soon{
            background: rgba(22, 22, 22, 0.5);
            color: #f2f2f2;
            height: 100%;
            width: 100%;
            font-size: 48px;
            display: flex;
            justify-content:center;
            align-items: center;
            flex-direction: column;

        }
        h1{
            font-family: 'Raleway', sans-serif;
            font-weight: 300;
            font-size: 96px;
        }
        .loading{
            top:0;
            left:0;
            right:0;
            bottom:0;
            background-color:white;
            position: fixed;
            z-index: 9999;
        }

        .coming-soon > *{
            margin: 10px;
        }
        .back{
            bottom: 0;
            position: absolute;
            height: auto;
            width: 100%;
            text-align: center;
            margin: 0 0 50px 0;
        }
        .prev{
            display: inline-block;
            transition: all .5s ease;
            text-decoration: none;
            padding: 14px;
            color: #904e95;
            text-transform: uppercase;
            font-weight: 700;
            background-color: #f2f2f2;
            font-size: 16px;
            letter-spacing: 1px;
        }
        .prev:hover {
            color: #e96443;
            transition: color .5s ease;
        }

        /* Medium Devices, Desktops */
        @media only screen and (min-width : 992px) {
            body{
            .container{
                background: url("img/bg/StockSnap_S8E034E8Q0.jpg") no-repeat top center fixed !important;
                -webkit-background-size: cover !important;
                background-size: cover !important;
            }
        }
        }
    </style>
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
</head>
<body>
<div class="container">
    <div class="coming-soon">
        <h1>Coming Soon</h1>
        <div class="back"><a href="../thebb2/#workSection" class="prev">Go Back</a></div>
    </div>
</div>


<div class="loading"></div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script
    src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"
    integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU="
    crossorigin="anonymous"></script>
<script src="https://use.fontawesome.com/4f877a53c6.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.4.6/SmoothScroll.js"></script>
<script>
    $(document).ready(function(){
        setTimeout(function(){
            $('.loading').fadeOut(1000, 'easeOutQuad');
        },1000);

        allFade();
    });

    function allFade(){
        $('.prev').click(function (e) {
            event.preventDefault();
            newLocation = this.href;
            $('.loading').fadeIn(1000, 'easeInQuad', newpage);
        });

        newpage();

        function newpage() {
            window.location = newLocation;
        }
    }
</script>
<!-- <script src="js/script.js"></script> -->
</body>
</html>