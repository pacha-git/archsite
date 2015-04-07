<!DOCTYPE html>
<html>
  <head><link rel="stylesheet" type="text/css" href="css/bootstrap.css"></head>
    <body>
      <ul class="breadcrumb">
        <li clasee="active">Home</li>
        <li><a href="#">Library</a></li>
      </ul>
      <br>
      <div class="panel panel-primary">
        <div class="panel-heading">
          <h3 class="panel-title">Current Laptop Temperature:</h3>
        </div>
        <div class="panel-body">
          <?php
          $output = shell_exec('sensors');
          echo $output;
          ?>
        </div>
      </div>
    <br>

    <h1>Add me on Steam if you wish:</h1>
      <a href="http://steamcommunity.com/id/pach-a">
        <img src="http://csgo-stats.com/pach-a/graphic.png">
      </a>
    </body>
</html>
