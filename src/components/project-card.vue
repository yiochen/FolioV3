<template>
    <router-link :to="projectPath" v-if="projectPath">
        <div class="card hover-darken" >
            
            <h2 class="title">{{projectTitle}}</h2>
        
            <p class="description">{{description}}</p>
        </div>
    </router-link>
    
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
            },
            projectPath: {
                type: String,
                default: ''
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
    a{
        color: $text-color;
        text-decoration: none;
        display: block;
        margin-top: 20px;
    }
    .card {
        padding: 10px 25px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        z-index: 1;
        position: relative;
        box-sizing: border-box;
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
    @media(min-width: 800px) {
        a {
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
        }
    }
</style>