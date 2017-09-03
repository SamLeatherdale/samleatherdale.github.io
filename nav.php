<header id="page_header">
    <div class="header-title">
        <a class="inherit-link" href="<?php echo $resource_url; ?>"><h1 id="title">Sam Leatherdale</h1></a>
        <h2 id="subtitle">Programmer and Web Developer</h2>
    </div>

    <nav id="header_nav">
        <ul>
        <?php
            foreach ($menu_items as $item_name => $menu_item) {
        
            ?><li role="presentation" class="<?php echo ($page_name == $item_name) ? "active" : ""; ?>"><a class="inherit-link" href="<?php echo $resource_url.$menu_item->location.($local_mode ? ".php" : ".html"); ?>"><?php echo $item_name; ?></a></li><?php
        
            }
        ?>
        </ul>
    </nav>
</header>
