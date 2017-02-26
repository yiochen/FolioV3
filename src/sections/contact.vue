<template>
    <transition name="fade">
    <section class="fullscreen contact-container">
        <img class="background" v-lazy="'../../static/images/me_vertical_02.png'">
        
        <h1 class="title"><router-link to="/"><logo></logo></router-link>More about me?</h1>

        <div class="contacts">
            <div class="contact-icons">
                <a class="contact-icon" @click="openEmail">
                    <span class="icon-envelop"></span>
                </a>
                <a class="contact-icon" href="https://github.com/yiochen" target="_blank">
                    <span class="icon-github"></span>
                </a>

                <a class="contact-icon" href="https://www.linkedin.com/in/yiouchen" target="_blank">
                    <span class="icon-linkedin"></span>
                </a>
                <transition name="fade">
                    <div v-if="emailOpened" class="email" contenteditable="true">{{email}}</div>
                </transition>
            </div>
            
        </div>
    </section>
    </transition>
</template>
<script>
    export default {
        data: function() {
            return {
                email: "chen."+"yiou"+"1992@gmail.com",
                emailOpened: false
            }
        },
        methods: {
            openEmail: function() {
                this.emailOpened = true;
            }
        }
    }
</script>
<style scoped lang="scss">
    @import "../../static/css/global.scss";
    .title {
        font-family: "Lobster", cursive;
        font-size: 48px;
        width: 100%;
        text-align: center;
        margin-top: 30px;
        z-index: 1;
        position: relative;
        span.yiou-logo {
            color: $text-color;
            font-size: 60px;
        }
    }
    .background {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        object-fit: cover;
        opacity: .2;
        
    }

    .contacts {

        width: 400px;
        max-width: 100%;
        font-size: 20px;
        height: 400px;
        max-height: 100%;
        padding: 20px;
        box-sizing: border-box;
        position: absolute;
        display: flex;
        flex-direction: column;

        justify-content: center;
        align-items: center;
        
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        
        &::before {
            content: '';
            height: 100%;
            width: calc(100vw + 100vh);
            background: $colored-background;
            opacity: .5;
            z-index: -1;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%) rotate(10deg);
            
        }
        .contact-icons {
            width: 100%;
            display: flex;
            justify-content: space-around;
            position: relative;
        }
        .contact-icon {
            color: $text-color;
            text-decoration: none;
            font-size: 40px;

        }

        .email {
            background: white;
            width: 100%;
            padding: 10px;
            position: absolute;
            top: 100%;
            left: 0;
        }
    }
</style>