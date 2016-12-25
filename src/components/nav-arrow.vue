<template>
    <button class="arrow-container" @click="next()">
        <img src="../../static/images/Arrow.png">
        <span v-if="label">{{label}}</span>
    </button>
</template>
<script>
    export default {
        props:{
            label: {
                type: String
            }
        },methods: {
            next: function() {
                console.log('next');
                this.$emit('click');
            }
        }
    };
</script>
<style scoped lang="scss">
    .arrow-container {
        border: 0;
        span {
            position: absolute;
            left: calc(50% + 20px);
            font-size: 14px;
            white-space: nowrap;
        }
    }
</style>