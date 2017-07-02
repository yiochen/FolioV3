<template>
    <a v-if="linkto" class="contact-icon" v-bind:class="[iconClass]" :href="linkto" target="_blank">
    </a>
    <router-link v-else-if="routerlinkto" class="contact-icon" v-bind:class="[iconClass]" :to="routerlinkto">
    </router-link>
    
    <a v-else class="contact-icon" v-bind:class="[iconClass]" @click="onClick()">
    </a>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            default: ''
        },
        linkto: {
            type: String,
            default: ''
        },
        routerlinkto: {
            type: String,
            default: ''
        }
    },
    computed: {
        iconClass: function () {
            return this.icon ? 'icon-' + this.icon : '';
        }
    },
    methods: {
        onClick: function () {
            this.$emit('iconclick');
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~assets/css/global.scss";

.contact-icon {
    color: $text-color;
    text-decoration: none;
    font-size: 40px;
    display: block;
    cursor: pointer;
}
</style>
