<template>
    <transition name="fade">
    <section class="fullscreen">
        <div class="section-intro">
            <router-link to="/"><logo></logo></router-link>
            <p>I also fiddle with the newest and coolest front-end technologies</p>
        </div>
        <background-text text="front end"></background-text>
        <!--
        <img v-lazy="'../../static/images/front/floral.png'">
        <img v-lazy="'../../static/images/front/solar.png'">
        -->
        <project-card project-title="Floral"
            description="Dynamically generated floral pattern"
            project-path="projects/floral"></project-card>
        <project-card project-title="Solar"
            description="Sound visualizater made in good old Flash" project-path="projects/solar"></project-card>
        <project-card project-title="deviMark"
            description="A simple Ionic app for saving favorate pieces from DeviantArt.com"
            project-path="projects/devimark"></project-card>
        <project-card project-title="tMood"
            description="A Pebble watch app for detecting the emotional level around you"
            project-path="projects/tmood"></project-card>
        
    </section>
    </transition>
</template>
<script>
    import scrollTo from '../services/scroll-service';
    export default {
        methods: {
            next: function(sectionIndex) {
                scrollTo(window.innerHeight * sectionIndex, 1000);
            }
        }
    }
</script>
<style scoped lang="scss">

    @import "../../static/css/global.scss";
    
</style>