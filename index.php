<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>thebobbybrown.</title>
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,300,500,700" rel="stylesheet">
        <!--<link href="https://fonts.googleapis.com/css?family=Gloria+Hallelujah" rel="stylesheet">-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome-animation/0.0.10/font-awesome-animation.min.css">
    <link rel="stylesheet" href="css/styles.min.css">
    <link rel="stylesheet" href="css/fontawesome-pro-core.css">
    <link rel="stylesheet" href="css/fontawesome-pro-solid.css">
    <link rel="stylesheet" href="css/fontawesome-pro-brands.css">
    <link rel="stylesheet" href="css/fontawesome-pro-light.css">
    <link rel="stylesheet" href="css/fontawesome-pro-regular.css">
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">
</head>
<body>

    <nav id="top-nav">
        <div class="top-container">
            <a href="#aboutSection">About</a>
            <a href="#workSection">Projects</a>
            <a href="#contact">Contact</a>
        </div>
    </nav>

    <div class="overlay">
        <nav id="menu">
            <i class="fa fa-bars"></i>
        </nav>
        <section id="homeSection">
            <div class="homeContent">
                <h1>Bobby Brown</h1>
            </div>
            <div class="social">
                <div>
                    <a href="https://www.linkedin.com/in/therobertbrown/" target="_blank" class="fa-stack fa-lg" title="linkedin">
                        <i class="fa fa-square fa-stack-2x"></i>
                        <i class="fab fa-linkedin-in fa-stack-1x fa-inverse"></i>
                    </a>
                    <a href="https://twitter.com/geeuhteen" target="_blank" class="fa-stack fa-lg">
                        <i class="fa fa-square fa-stack-2x"></i>
                        <i class="fab fa-twitter fa-stack-1x fa-inverse"></i>
                    </a>
                    <a href="https://www.instagram.com/thebobbybrown/" target="_blank" class="fa-stack fa-lg">
                        <i class="fa fa-square fa-stack-2x"></i>
                        <i class="fab fa-instagram fa-stack-1x fa-inverse"></i>
                    </a>
                </div>
            </div>
            <div class="drop">
                <a href="#aboutSection" class="nav fa-stack fa-lg faa-vertical faa-slow animated">
                    <i class="fa fa-square fa-stack-2x"></i>
                    <i class="far fa-angle-down fa-stack-1x fa-inverse" aria-hidden="true"></i>
                </a>
            </div>
        </section>
        <section id="aboutSection">
            <div class="aboutContent">
                <div class="aboutInfo">
                    <p>I am a Front End Developer from Indianapolis, Indiana. I design and develop my projects with a simplistic approach through the use of HTML, CSS, and jQuery.</p>
                    <p> If you are interested in having a website built, or simply have an inquiry - please contact me <a href="#contact" class="nav">here</a>.</p>
                </div>
                <div class="aboutStuff">
                    <div class="stuff">
                        <div class="aboutImg"><i class="far fa-pencil" aria-hidden="true"></i></div>
                        <h1>Experience</h1>
                        <p>Four years of school learning the ins and outs of web development.</p>
                        <p>View some of the courses I've taken <a href="https://www.linkedin.com/in/therobertbrown">here</a>.</p>
                    </div>
                    <div class="stuff">
                        <div class="aboutImg"><i class="far fa-code" aria-hidden="true"></i></div>
                        <h1>Hand-coded</h1>
                        <p>Personalized experience on a per-client basis.</p>
                    </div>
                    <div class="stuff">
                        <div class="aboutImg"><i class="far fa-mobile" aria-hidden="true"></i></div>
                        <h1>Responsive Design</h1>
                        <p>Ensuring that your website looks its best regardless of the device it's viewed on.</p>
                    </div>
                </div>
            </div>
        </section>
        <section id="workSection">
            <div class="workContent">
                <h1>Projects</h1>
                <div class="workPics">
                    <div class="work shadow">
                        <img class="preview" src="img/work/workOne.jpg">
                        <div class="zoom">
                            <i class="far fa-search-plus" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div class="work shadow">
                        <img class="preview" src="img/work/workTwo.jpg">
                        <div class="zoom">
                            <i class="far fa-search-plus" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div class="work shadow">
                        <img class="preview" src="img/work/workThree.jpg">
                        <div class="zoom">
                            <i class="far fa-search-plus" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
                <div class="view-all"><a href="all.php" class="all">View All</a></div>
            </div>
        </section>
        <section id="contact">
            <div class="contactContent">
                <div class="contact">
                    <h1>
                        <script type="text/javascript">
                            var phrases = [
                                "Let's Do Something",
                                "Hit Me Up",
                                "Contact Me",
                                "Questions?"
                            ];
                            var scripts = document.getElementsByTagName('script');
                            var this_script = scripts[scripts.length - 1];
                            this_script.parentNode.replaceChild(document.createTextNode(phrases[Math.floor(Math.random()*phrases.length)]), this_script);
                        </script>
                    </h1>
                    <div class="form-container">
                        <form action="confirmation.php" method="post">
                            <input name="name" type="text" class="feedback-input" placeholder="Name" id="name" required>
                            <input name="email" type="email" class="feedback-input" id="email" placeholder="Email" required>
                            <textarea name="comments" class="feedback-input" id="comment" placeholder="Comment" required></textarea>
                            <input type="submit" name="send" value="SEND" id="button"/>
                        </form>
                    </div>

                </div>
            </div>
        </section>
        <section id="footer">
            <div class="social">
                <div id="top">
                    <a href="#homeSection" class="nav"><i class="fa fa-angle-up" aria-hidden="true"></i></a>
                </div>
                <div class="media">
                    <a href="https://www.linkedin.com/in/therobertbrown/" target="_blank" class="fa-stack fa-lg">
                        <i class="fa fa-square fa-stack-2x"></i>
                        <i class="fab fa-linkedin-in fa-stack-1x  fa-inverse"></i>
                    </a>
                    <a href="https://twitter.com/geeuhteen" target="_blank" class="fa-stack fa-lg">
                        <i class="fa fa-square fa-stack-2x"></i>
                        <i class="fab fa-twitter fa-stack-1x  fa-inverse"></i>
                    </a>
                    <a href="https://www.instagram.com/thebobbybrown/" target="_blank" class="fa-stack fa-lg">
                        <i class="fa fa-square fa-stack-2x"></i>
                        <i class="fab fa-instagram fa-stack-1x  fa-inverse"></i>
                    </a>
                </div>
            </div>
        </section>
    </div>

    <div class="loading"></div>

    <div class="openWork">
        <div class="modal-bg"></div>
        <div class="modal-content">
            <div class="modal-img"></div>
            <div class="view">
                <h3>View Live Site</h3>
            </div>
        </div>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script
            src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"
            integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU="
            crossorigin="anonymous">
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.4.6/SmoothScroll.min.js"></script>
    <script src="js/script.min.js"></script>
</body>
</html>