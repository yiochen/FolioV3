<template>
    <!--<transition name="fade">-->
    <section>
        <section-intro>
            <p class="no-bottom-margin">I also fiddle with the newest and coolest front-end technologies</p>
        </section-intro>
        <background-text text="front end"></background-text>
        <project-card project-title="Floral"
            description="An experiment to dynamically generated fancy floral pattern using a little bit of physics. Powered by PaperJS."
            project-path="projects/front/floral"
            techs="PaperJS"></project-card>

        <separator></separator>

        <project-card project-title="Solar"
            description="Sound visualizater made in good old Flash. It will respond to microphone input. Sing a song to it, you can power the solar system through evolution. 100% hand made physics involving verlet intergration." project-path="projects/front/solar"
            techs="Flash,ActionScript"></project-card>

        <separator></separator>

        <project-card project-title="deviMark"
            description="Simple mobile app for browsing, searching and bookmarking favorate pieces from DeviantArt.com. Powered by Ionic."
            project-path="projects/front/devimark"
            techs="Angular2,Ionic,Typescript,HTML,Sass"></project-card>

        <separator></separator>
        
        <project-card project-title="tMood"
            description="A Pebble watch app that can detect the emotional level around you. A [possible] cure to social awkwardness. Sounds like witchcraft, huh?"
            project-path="projects/front/tmood"
            techs="PebbleJS,Navigator api,Twitter api,IBM Alchemy api"></project-card>
        
    </section>
    <!--</transition>-->
</template>

<style scoped lang="scss">

    @import "~assets/css/global.scss";
    
</style>