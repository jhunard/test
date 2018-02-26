<!DOCTYPE html>
<html data-ng-app="beta" lang="en" class="no-js">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="css/index.css">
</head>
<body>
<!--This is for Navigation Bar Section-->
<nav>
  <div class="hidescroll">
    <a href="#/Profile"><img class="profile-picture" src="img/Linux.png" width="50px" height="50px" alt="profile-picture">
    <a class="navitem" href="#/Profile"><span>John Doe</span></a>
    <a class="navitem effects" href="#/Home"><i class="material-icons">home</i><span>Home</span></a>
    <a class="navitem effects1" href="#/Mails"><i class="material-icons">chrome_reader_mode</i><span>Mails</span></a>
    <a class="navitem effects6" href="#/Analytics"><i class="material-icons">code</i><span>Analytics</span></a>
    <a class="navitem effects7" href="#/Settings"><i class="material-icons">settings</i><span>Settings</span></a>
    <a class="navitem effects8" href="#/Help"><i class="material-icons">help</i><span>Help</span></a>
<!-- REMOVED BUT ADDED IF THERE IS OTHER FEATURES
    <a class="navitem effects2" href="#"><i class="material-icons">folder</i><span>Projects</span></a>
    <a class="navitem effects3" href="#"><i class="material-icons">movie</i><span>Videos</span></a>
    <a class="navitem effects4" href="#"><i class="material-icons">book</i><span>Tutorials</span></a>
    <a class="navitem effects5" href="#"><i class="material-icons">description</i><span>Documentation</span></a>
-->
  </div>
</nav>
  <!--This is End of Navigation Bar Section-->
<div class="container">
<div class="content-wrapper">
<div ng-view>

</div>
</div> <!-- .content-wrapper -->
</div>
<iframe src="animated-footer/index.html" style="border-style: none;margin-bottom:-50px;" width="100%"  scrolling="no" onload="this.style.height=this.contentDocument.body.scrollHeight +'px';"></iframe>
 <!--ANGULAR CODES HERE!-->
<script src="js/angular.min.js"></script>
<script src="js/angular-route.js"></script>
<script type="text/javascript" src="js/app.js"></script>
<!--END OF ANGULAR CODES-->
</body>
</html>