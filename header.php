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
    <!--Compiled on <?php echo $date->format("d/m/Y h:i:sA P T"); ?>-->
<?php } ?>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<meta name="author" content="Sam Leatherdale" />
<?php
    $page_title = $page_name." - ";
    if ($page_name == "Home") {
        $page_title = "";
    }
?>
<title><?php echo $page_title; ?>Sam Leatherdale</title>

<!--Iconography-->
<link rel="shortcut icon" href="<?php echo $resource_url; ?>icon/favicon.ico">

<!--Site Verification-->

<!--Google Analytics-->

<!--Hosted Resources-->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-XdYbMnZ/QjLh6iI4ogqCTaIjrFk87ip+ekIjefZch0Y+PvJ8CDYtEs1ipDmPorQ+" crossorigin="anonymous">
<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,600,700" rel="stylesheet">

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.min.js" integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=" crossorigin="anonymous"></script>

<!--Local Resources-->
<link rel="stylesheet" type="text/css" href="<?php echo $resource_url; ?>/css/style.css<?php echo (!$local_mode) ? "?v=".microtime(true) : ""; ?>" />