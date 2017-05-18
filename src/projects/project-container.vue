<template>
    <!--<transition name="fade">-->
    <section class="fullscreen project-container">
        <!--<back-button :section="$route.params.section"></back-button>-->
        <router-view></router-view>
        <!--<back-button :section="$route.params.section"></back-button>-->
    </section>
    <!--</transition>-->
</template>

<script>
import router from '../routes.js';
module.exports = {
    methods: {
        goBack: () => router.go(-1)
    }
}
</script>

<style lang="scss">
@import "~assets/css/global.scss";

article {
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    padding: 10px;
    margin-bottom: 50px;
    figure {
        margin: 0;
    }
}

.normal-image {
    width: 100%;
}

.middle-image {
    width: 100%;
}

figcaption {
    text-align: center;
    margin-bottom: 30px;
}

.project-content {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
}

.project-markdown {
    position: relative;
    p {
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 20px;
    }
    img {
        width: 111%;
        margin-left: -5.5%;
    }
    a {
        text-decoration: none;
        font-weight: bold;
    }
}

@media (min-width: 800px) {
    .middle-image {
        width: 50%;
        margin-left: 25%;
    }
    article {
        margin-top: 100px;
        width: 100%;
        box-sizing: border-box;
    }
}
</style>

