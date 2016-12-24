<template>
    <section class="fullscreen">
        <div class="section-intro">I know a bit about photoshop</div>
        <background-text text="Design"></background-text>
        <!--
        <img v-lazy="'../../static/images/design/Mid-Autumn.png'">
        <img v-lazy="'../../static/images/design/Semiformal.png'">
        -->
        <project-card project-title="ChinaBlue"
            description="Poster design for campus club"><project-card>
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