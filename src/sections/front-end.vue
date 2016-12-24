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
        <nav-arrow class="next-arrow" label="Design"></nav-arrow>
    </section>
</template>

<style scoped lang="scss">

    @import "../../static/css/global.scss";
    
</style>