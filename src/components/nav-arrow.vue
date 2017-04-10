<template>
    <button class="arrow-container" @click="next()">
        <img src="assets/images/Arrow.png" :class="orientation">
        <span v-if="label">{{label}}</span>
    </button>
</template>
<script>
    export default {
        props:{
            label: {
                type: String
            },
            orientation: {
                type: String,
                default: 'down'
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

    .left {
        transform: rotate(90deg);
    }
    .right {
        transform: rotate(-90deg);
    }
    .up {
        transform: rotate(180deg);
    }
    .down {}
</style>