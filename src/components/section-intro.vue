<template>
    <transition 
        name="slide-down"
        appear>
        <div class="section-intro">
            <router-link to="/"><logo></logo></router-link>
            <slot></slot>
        </div>
    </transition>
</template>

<style lang="scss" scoped>
    @import "~assets/css/global.scss";
        .section-intro {
        background: $colored-background;
        position: relative;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        min-height: 50px;
        padding: 20px;
        font-size: 24px;
        @include folded-corner;
        p {
            margin: 0;
        }
    }


    @media (min-width: 800px) {
        .section-intro {
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
        }
    }
</style>