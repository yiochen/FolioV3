<template>
    <section class="fullscreen">
        <div class="section-intro">I make games using Unity / Cocos2d-x and Javascript</div>
        <background-text text="Game Dev"></background-text>
        <!--
        <img v-lazy="'../../static/images/games/siegeLvl.png'">
        <img v-lazy="'../../static/images/games/cheese.jpg'">
        -->
        <project-card project-title="Cheese" 
            description="A fast paced zombie survival game"></project-card>
        <project-card project-title="SiegeNebula" 
            description="RTS game that lets you conquer the universe"
            project-path="projects/siege"></project-card>
        
        
        <nav-arrow class="next-arrow" label="Front End" @click="next(2)"></nav-arrow>
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