<template>
    <video :class="format" autoplay loop controls>
        <source v-bind:src="path" type="video/mp4">
    </video>
</template>

<script>
    import Cloud from '../services/cloudinary-helper';
    module.exports = {
        props: {
            'name': String,
            'format': {
                type: String,
                default: 'normal-image'
            }
        },
        computed: {
            path: function() {
                return Cloud.getVideoPath(this.name);
            }
        }
    }
</script>