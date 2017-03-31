<template>
    
    <section class="fullscreen">
        <div class="section-intro">
            <router-link to="/"><logo></logo></router-link>
            <p>I make games using Unity and Cocos2d-x</p>
        </div>
        <background-text text="Game Dev"></background-text>
        <!--
        <img v-lazy="'../../static/images/games/siegeLvl.png'">
        <img v-lazy="'../../static/images/games/cheese.jpg'">
        -->
        <project-card project-title="Cheese" 
            description="A fast paced zombie survival game"
            project-path="projects/cheese"></project-card>
        <project-card project-title="SiegeNebula" 
            description="RTS game that lets you conquer the universe"
            project-path="projects/siege"></project-card>
    </section>
</template>

<style scoped lang="scss">

    @import "../../static/css/global.scss";

</style>