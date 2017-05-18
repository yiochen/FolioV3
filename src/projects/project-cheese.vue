<template>
    <section>
    
        <project-title date="12/2016" languages="C++ Cocos2D-x">Cheese
    
            <github-ribbon link="https://github.com/yiochen/Cheese"></github-ribbon>
        </project-title>
    
        <article>
            <cloud-image name="game/SwissCONCEPT" format="middle-image">Designed by my teammate Simon Ouyang</cloud-image>
    
            <p>Swiss is a little employee from a big cheese factory. One day, he found that the spoiled cheese has the ability to turn human into cheesethirsty zombies! His evil boss already took advantage of that by gathering a horde of zombie soldiers in order to take over the world. Time is running out, Swiss needs to build his own troop from zombies to fight against the evil boss.</p>
            <cloud-image name="game/2"></cloud-image>
            <p>You play as swiss in this single player 2D survival game called
                <strong>Cheese</strong>. You control the player using arrow key. You can collect stray zombies by getting close enough to them. When two zombie hordes collide, the zombies will fight with their own abilities. As the game progress, the enemy zombies will get stronger. The game ends when you lose all your zombies.</p>
            <p>
                <strong>Cheese</strong> is a school project made by a team of three. We used C++ and Lua with Cocos2d-x. I worked on the coding part especially setting up the architecture. If you are interested in the detail, please visit our
                <a href="https://github.com/yiochen/Cheese">Github repository</a>
            </p>
    
            <p>To download and play this game, you can download
                <a href="https://github.com/yiochen/Cheese/releases/download/1.1/Cheese.zip">this zip</a>. It is only available for PC. You also need the
                <a href="https://www.microsoft.com/en-us/download/details.aspx?id=48145" target="_blank">Visual C++ Redistributable packages</a> if you don't have Visual Studio 2015 installed.</p>
            <cloud-image name="game/cheese_gif"></cloud-image>
            <div class="video-wrapper">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/jTbEh3jR60o" frameborder="0" allowfullscreen></iframe>
            </div>
        </article>
    
    </section>
</template>

<style scoped lang="scss">
.video-wrapper {
    position: relative;
    padding-bottom: 56.25%;
    /* 16:9 */
    padding-top: 25px;
    height: 0;
}

.video-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>