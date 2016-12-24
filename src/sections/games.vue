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
            description="RTS game that lets you conquer the universe"></project-card>
        
        
        
    </section>
</template>
<script>
    import ProjectCard from '../components/project-card';
    import BackgroundText from '../components/background-text';
    export default {
        components: {ProjectCard, BackgroundText}
    }
</script>
<style scoped lang="scss">

    @import "../../static/css/global.scss";

    img {
        width: 100%;
    }
</style>