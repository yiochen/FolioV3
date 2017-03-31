<template>
    <!--<transition name="fade">-->
    <section>
        <div class="section-intro">
            <router-link to="/"><logo></logo></router-link>
            <p>I know a bit about Photoshop</p>
        </div>
        <background-text text="Design"></background-text>
        <!--
        <img v-lazy="'../../static/images/design/Mid-Autumn.png'">
        <img v-lazy="'../../static/images/design/Semiformal.png'">
        -->
        <project-card project-title="ChinaBlue"
            description="Poster design for campus club" project-path="projects/chinablue"></project-card>
    </section>
    <!--</transition>-->
</template>

<style scoped lang="scss">

    @import "../../static/css/global.scss";
    
   
</style>