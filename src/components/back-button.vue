<template>
    <button @click="goBack()">&lt; BACK</button>
</template>
<style lang="scss" scoped>
    @import "../../static/css/variables.scss";

    button {
        border: none;
        font-size: 1em;
        font-weight: normal;
        padding: 10px 10px;
        line-height: 0.5;
        color: $text-color-light;
        transition: color 0.5s ease;
    }

    button:hover {
        color: $text-color;
        transition: color 0.5s ease;
    }
    @media (min-width: 800px) {
        button {
            font-size: 2em;
        }
    }
</style>
<script>
    import router from '../routes.js';
    module.exports = {
        methods: {
            goBack: () => router.go(-1)
        }
    }
</script>