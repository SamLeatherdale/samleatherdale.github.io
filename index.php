<?php
    $page_name = "Home";
    include("header.php");
?>
<body>
    <?php include("nav.php"); ?>

    <main>
        <div id="content" class="wrap">
            <h2>GitHub Projects</h2>
            <p>The following projects are hosted right here on GitHub Pages.</p>
        <?php
            $projects = [
                "Ultra Motherload" => (object) [
                    "location" => "ultramotherload",
                    "icon" => "ultramotherload.png",
                    "description" => "View and modify Super Motherload map files in a simple JavaScript editor.",
                    "desktop_only" => true
                ],
                "YouTube Timeline" => (object) [
                    "location" => "youtubetimeline",
                    "icon" => "youtubetimeline.png",
                    "description" => "See the entire history of any YouTube channel without scrolling forever.",
                    "desktop_only" => false
                ],
                "Discord Text Generator" => (object) [
                    "location" => "discordtextgenerator",
                    "icon" => "discordtextgenerator.png",
                    "description" => "Convert text to Discord's Regional Text Indicator characters, and split large messages.",
                    "desktop_only" => false
                ],
                "Erppy Mobile" => (object) [
                    "location" => "erppymobile",
                    "icon" => "erppymobile.png",
                    "description" => "A mobile friendly adaptation of Barry Martin's Hopalong Orbits Visualizer.",
                    "desktop_only" => false
                ],
                "Grid Game" => (object) [
                    "location" => "gridgamejs",
                    "icon" => "gridgame.png",
                    "description" => "A simple game where the objective is to find a randomly selected tile within a grid.",
                    "desktop_only" => true
                ],
            ];
            foreach ($projects as $project_title => $project) {
                $project_main = $hosted_url.$project->location;
                $project_source = $github_url.$project->location ?>
            <div class="project">
                <div class="project-main">
                    <div class="project-icon-column">
                        <a class="project-icon" href="<?=$project_main?>" style="background-image: url('<?=$resource_url.'icons/projects/'.$project->icon?>');"></a>
                        <a class="project-source-mobile" href="<?=$project_source?>" target="_blank">
                            <div class="btn btn-primary">
                                <i class="fa fa-code"></i><span class="project-source-label">View Source</span>
                            </div>
                        </a>
                    </div>
                    <a class="project-text inherit-link" href="<?=$project_main?>">
                        <h3 class="project-title"><?=$project_title?><?php
                        if (!$project->desktop_only) {
                        ?><i class="project-responsive fa fa-mobile"></i>
                    <?php
                        } ?></h3>
                        <p class="project-description"><?=$project->description?></p>
                    </a>
                </div>
                <div class="project-source">
                    <div class="vflex">
                        <a class="btn btn-primary" href="<?=$project_source?>" target="_blank">
                            <i class="fa fa-code"></i><span class="project-source-label">View Source</span>
                        </a>
                    </div>
                </div>
            </div>
        <?php
            }
        ?>
        </div>
    </main>

    <?php include("footer.php"); ?>
</body>
</html>
