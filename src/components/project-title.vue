<template>
    <div class="container">
        <h1 class="title"><slot></slot></h1>
        <div class="stat">
            <span class="date" v-if="date">{{date}}</span>
            <span v-if="date && languages">|</span>
            <span class="language" v-for="language in languageList">{{language}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            date: {
                type: String,
                default: ''
            },
            languages: {
                type: String,
                default: ''
            }
        },
        computed: {
            languageList: function() {
                return this.languages.split(' ');
            }
        }
    }
</script>
<style scoped lang="scss">
    @import "~assets/css/global.scss";
    .title {
       text-align: center;
       margin-bottom: 0;
       color: $text-color;
    }
    .stat {
        text-align: center;
    }
    .date {
        font-size: 14px;
        font-weight: bold;
        color: lighten($text-color , 20%);
    }
    .language {
        background: $text-color;
        color: white;
        margin-right: 10px;
        padding: 2px 5px;
        border-radius: 2px;
        font-size: 12px;
    }
    .container {
        margin-bottom: 20px;
    }

</style>
