<template>
    <vue-markdown :source="markdown"></vue-markdown>
</template>

<script>
    export default {
        data: function() {
            return {
                markdown:''
            };
        },
        props: {
            source: {
                type: String,
                default: ''
            }
        },
        created: function() {
            if (this.source) {
                this.$http.get(this.source).then((response)=>{
                    this.markdown = response.body
                });
            }
        },
        watch: {
            source: function (value) {
                console.log('value', value);
                if (value) {
                    
                    this.$http.get('/static/projects/siege-nebula.md').then((response)=>{
                    this.markdown = response.body
                    });
                }
            }
        }
    }
</script>

<style scoped>
    img {
        width: 100%;
    }
</style>