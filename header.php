<?php
if (empty($compile)) {
    $compile = FALSE;
}
$hosted_url = "https://samleatherdale.github.io/";
$local_url = "/samleatherdale.github.io/";
$github_url = "https://github.com/samleatherdale";
$local_mode = (!$compile && ($_SERVER["HTTP_HOST"] == "localhost"));
$site_url = ($local_mode) ? $local_url : $hosted_url;
$resource_url = ($local_mode) ? "/samleatherdale.github.io/" : "/";
$extension = ($compile) ? ".html" : ".php";
$menu_items = array(
    "Home" => (object) [
        "location" => "index"
    ],
    "About Me" => (object) [
        "location" => "about"
    ]
);
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<?php
if ($compile) {
    $date = new DateTime(); ?>
    <!--Compiled on <?=$date->format("d/m/Y h:i:sA P T")?>-->
<?php } ?>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<meta name="author" content="Sam Leatherdale" />
<?php
    $page_title = $page_name." - ";
    if ($page_name == "Home") {
        $page_title = "";
    }
?>
<title><?=$page_title?>Sam Leatherdale</title>

<!--Iconography-->
<link rel="apple-touch-icon" sizes="180x180" href="<?=$resource_url?>icons/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="<?=$resource_url?>icons/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="<?=$resource_url?>icons/favicon-16x16.png">
<link rel="manifest" href="<?=$resource_url?>icons/manifest.json">
<link rel="mask-icon" href="<?=$resource_url?>icons/safari-pinned-tab.svg" color="#4b6dff">
<link rel="shortcut icon" href="<?=$resource_url?>icons/favicon.ico">
<meta name="msapplication-config" content="<?=$resource_url?>icons/browserconfig.xml">
<meta name="theme-color" content="#4b6dff">

<!--Site Verification-->
<meta name="google-site-verification" content="0NgNnS4oEaM3B9gVBRs7b13zsvUWKXs8B-ykVraGxLY" />
<!--Google Analytics-->
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-105820957-1', 'auto');
  ga('send', 'pageview');

</script>
<!--Hosted Resources-->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-XdYbMnZ/QjLh6iI4ogqCTaIjrFk87ip+ekIjefZch0Y+PvJ8CDYtEs1ipDmPorQ+" crossorigin="anonymous">
<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,600,700" rel="stylesheet">

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.min.js" integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=" crossorigin="anonymous"></script>

<!--Local Resources-->
<link rel="stylesheet" type="text/css" href="<?=$resource_url?>css/style.css<?=(!$local_mode) ? "?v=".microtime(true) : ""?>" />