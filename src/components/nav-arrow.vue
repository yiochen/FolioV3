<template>
    <div class="arrow-container">
        <img src="../../static/images/Arrow.png">
        <span v-if="label">{{label}}</span>
    </div>
</template>
<script>
    export default {
        props:{
            label: {
                type: String
            }
        }
    };
</script>
<style scoped lang="scss">
    .arrow-container {
        span {
            position: absolute;
            top: 5px;
            left: 20px;
            font-size: 14px;
            white-space: nowrap;
        }
    }
</style>