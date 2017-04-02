<template>
    <router-link :to="projectPath" v-if="projectPath">
        <div class="card hover-darken" >
            
            <h2 class="title">{{projectTitle}}</h2>
        
            <div class="description">
                {{description}}
                <p class="techs" v-if="techList.length"><span class="tech" v-for="item in techList">{{item}}</span></p>
            </div>
            
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
            },
            techs: {
                type: String,
                default: ''
            }
        },
        computed: {
            techList: function() {
                return this.techs.split(',').filter(item=>item);
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
    }
    .card {
        padding: 30px 25px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        z-index: 1;
        position: relative;
        box-sizing: border-box;
    }


    .title {
        font-weight: 400;
        padding-bottom: 20px;
        font-style: italic;
        flex-shrink: 0;
        display: inline-block;
        font-size: 48px;
        margin-right: 20px;
        margin-bottom: 0;
    }
    .description {
        display: inline-block;
        
        width: 70%;
        font-size: 18px;
        flex-grow: 1;
        margin-bottom: 0;
    }
    .techs {
        margin-top: 10px;
        @extend .no-bottom-margin;
    }
    .tech {
        display: inline-block;
        color: $text-color;
        background: $colored-background;
        padding: 2px 5px;
        margin-right: 10px;
        margin-bottom: 5px;
    }
    @media(min-width: 800px) {
        a {
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
        }
    }
</style>