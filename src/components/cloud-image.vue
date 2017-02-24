<template>
    <figure>
        <img :class="format"
        v-lazy="path"/>
        <figcaption :class="format"><slot></slot></figcaption>
    </figure>
    
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
                return Cloud.getPath(this.name);
            }
        }
    }
</script>