<template>
    <section class="fullscreen">
        <div class="section-intro"> I also fiddle with the newest and coolest front-end technologies</div>
        <background-text text="front end"></background-text>
        <!--
        <img v-lazy="'../../static/images/front/floral.png'">
        <img v-lazy="'../../static/images/front/solar.png'">
        -->
        <project-card project-title="Floral"
            description="Dynamically generated floral pattern"></project-card>
        <project-card project-title="Solar"
            description="Space shooter game using Three.js"></project-card>
        <project-card project-title="deviMark"
            description="A simple Ionic app for saving favorate pieces from DeviantArt.com"></project-card>
        <project-card project-title="tMood"
            description="A Pebble watch app for detecting the emotional level around you"></project-card>
        <nav-arrow class="next-arrow" label="Design" @click="next(3)"></nav-arrow>
    </section>
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