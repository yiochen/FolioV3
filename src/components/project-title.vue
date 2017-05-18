<template>
    <transition name="slide-down" appear>
    
        <div class="overhead-banner container">
            <router-link :to="'/'+
                                                                                                $route.params.section" class="section-name">
                {{router. getNicePrintFromSection ( $route.params.section)}}
            </router-link>
            <h1 class="title">
                <slot></slot>
            </h1>
            <div class="stat">
                <span class="date" v-if="date">{{date}}</span>
                <span v-if="date && languages">|</span>
                <span class="language" v-for="language in languageList">{{language}}</span>
            </div>
        </div>
    </transition>
</template>

<script>
import router from '../routes';
export default {
    data: function () {
        return {
            router: router
        }
    },
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
        languageList: function () {
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
    font-weight: bold;
}

.stat {
    text-align: center;
}

.date {
    font-size: 14px;
    font-weight: bold;
    color: lighten($text-color, 20%);
}

.language {
    background: white;
    color: $text-color;

    margin-right: 10px;
    padding: 2px 5px;
    border-radius: 2px;
    font-size: 12px;
}

.container {
    margin-bottom: 20px;
    min-height: 170px;
    padding-left: 0;
}

.section-name {
    color: white;
    text-decoration: none;
    background: $text-color;
    padding: 5px 20px;
    font-weight: bold;
}
</style>
