<template>
    <div class="card" >
        <h2 class="title">{{projectTitle}}</h2>
        <p class="description">{{description}}</p>
    </div>
    
</template>

<script>
    export default {
        props: {
            projectTitle: {
                type: String,
                default: 'Title'
            },
            description: {
                type: String,
                default: 'description'
            }
        },
        methods:{
            
            isWrapped: function() {
                return false;
            }
        }
    };
</script>

<style scoped lang="scss">
    @import "../../static/css/global.scss";
    .card {
        margin-top: 20px;
        padding: 10px 25px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .title {
        flex-shrink: 0;
        display: inline-block;
        font-size: 48px;
        margin-right: 20px;
        margin-bottom: 0;
    }
    .description {
        display: inline-block;
        width: 50%;
        font-size: 18px;
        flex-grow: 1;
        margin-bottom: 0;
    }
</style>