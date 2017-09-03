<?php
    $page_name = "About Me";
    include("header.php");
?>
<style>

</style>
</head>
<body>
    <?php include("nav.php"); ?>
    <main>
        <div id="content" class="wrap">
            <h2>About Me</h2>
            <p>Hi, I'm Sam Leatherdale. I'm currently studying Computer Science at Western Sydney University, and working as a web developer. I love working on programming and web projects in my spare time, most of which are on my <a href="<?=$github_url?>">GitHub page</a>.
            </p>
            <p>In 2015 - 2016, I was a student of the Western Sydney Institute of TAFE NSW, Australia, where I studied the Certificate IV in Programming, the Certificate IV in Web Based Technologies, and the Diploma of Information Technology. During my time at TAFE, I won the Student of the Year award for Information Technology. You can see the promotional video that was made for the awards ceremony here: <a href="https://www.youtube.com/watch?v=BdAlXuwlHoQ" target="_blank">https://www.youtube.com/watch?v=BdAlXuwlHoQ</a>
            </p>

            <p>I mainly use the languages listed below:</p>
            <h4>Web</h4>
            <ul>
                <li>HTML/CSS (including SASS/SCSS)</li>
                <li>JavaScript (including jQuery and TypeScript)</li>
                <li>PHP</li>
                <li>MySQL/MariaDB</li>
            </ul>
            <h4>Desktop</h4>
            <ul>
                <li>C#.NET</li>
                <li>Python</li>
            </ul>
            <p>I am also familiar with Java and Visual Basic, but currently do not use them in any active projects.</p>
            
            <h3>Achievements</h3>
            <p>In October 2016, I won the WorldSkills National competition for Web Development. It was a tough 3 day competition and skills including original webpage design, client-side scripting, server-side programming, database creation and interaction, and Photoshop/Illustrator design were tested.</p>

            <p>I also attended the National Computer Science School at the University of Sydney in January 2016.</p>
        </div>
    </main>
    <?php include("footer.php") ?>
</body>
</html>
