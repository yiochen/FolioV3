<template>
    <h1 class="text">{{text}}</h1>
</template>

<script>
    export default {
        props: ["text"]
    };
</script>

<style scoped lang="scss">
    @import "../../static/css/global.scss";
    .text {
        position: absolute;
        bottom: 0;
        font-size: 144px;
        font-family: 'Lobster', cursive;
        white-space: nowrap;
        color: $background-text-color;
        z-index: 0;
        margin: 0;
    }
</style>