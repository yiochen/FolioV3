<template>
    <section class="fullscreen">
        <div class="section-intro">I know a bit about photoshop</div>
        <background-text text="Design"></background-text>
        <!--
        <img v-lazy="'../../static/images/design/Mid-Autumn.png'">
        <img v-lazy="'../../static/images/design/Semiformal.png'">
        -->
        <project-card project-title="ChinaBlue"
            description="Poster design for campus club" project-path="projects/chinablue"></project-card>
        
        <nav-arrow class="next-arrow" label="Contact" @click="next(4)"></nav-arrow>
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