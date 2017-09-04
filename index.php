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
                "YouTube Timeline" => (object) [
                    "location" => "/youtubetimeline",
                    "icon" => "youtubetimeline.png",
                    "description" => "See the entire history of any YouTube channel without scrolling forever."
                ],
                "Discord Text Generator" => (object) [
                    "location" => "/discordtextgenerator",
                    "icon" => "discordtextgenerator.png",
                    "description" => "Convert text to Discord's Regional Text Indicator characters, and split large messages."
                ],
                "Erppy Mobile" => (object) [
                    "location" => "/erppymobile",
                    "icon" => "erppymobile.png",
                    "description" => "A mobile friendly adaptation of Barry Martin's Hopalong Orbits Visualizer."
                ],
                "Grid Game" => (object) [
                    "location" => "/gridgamejs",
                    "icon" => "gridgame.png",
                    "description" => "A simple game where the objective is to find a randomly selected tile within a grid."
                ],
            ];
            foreach ($projects as $project_title => $project) { ?>
            <div class="project">
                <div class="project-content clearfix">
                    <a class="project-main inherit-link clearfix" href="<?=$project->location?>">
                        <div class="project-icon" style="background-image: url('<?=$resource_url.'icons/projects/'.$project->icon?>');"></div>
                        <div class="project-text">
                            <h3 class="project-title"><?=$project_title?></h3>
                            <p class="project-description"><?=$project->description?></p>
                        </div>
                    </a>
                    <a class="project-source" href="<?=$github_url.$project->location?>" target="_blank">
                        <div class="vtable">
                            <p class="vtable-content"><i class="fa fa-code"></i>View Source</p>
                        </div>
                    </a>
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
