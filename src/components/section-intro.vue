<template>
    <transition name="slide-down" appear>
        <div class="section-intro 
        overhead-banner
    ">
            <!--<router-link to="/">
                                <logo></logo>
                            </router-link>-->
            <slot></slot>
        </div>
    </transition>
</template>

<style lang="scss" scoped>
@import "~assets/css/global.scss";
.section-intro {

    display: flex;
    align-items: center;
    min-height: $menu-bar-min-height;

    font-size: 24px;



    p {
        margin: 0;
    }
}
</style>