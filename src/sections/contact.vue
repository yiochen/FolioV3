<template>
    <transition name="fade">
    <section class="fullscreen contact-container">
        
        <h1 class="title"><router-link to="/"><logo></logo></router-link>More about me?</h1>

        <div class="contacts">
            <p class="contact-intro">Hi, my name is Yiou Chen. Nice to meet you. I am a senior at Stony Brook University, graduating soon at May 2017. My strength are Front-end development and game programming, but I also try to keep a broad interest toward all kind of technologies. I am actively looking for a post-graduation full time opportunity as a software engineer. If you are interested, feel free to shoot me a email. I will be more than happy to talk to you.</p>
            <div class="contact-icons">
                <div>
                <a class="contact-icon icon-envelop" @click="openEmail">
                </a>
                </div>
                <a class="contact-icon icon-github" href="https://github.com/yiochen" target="_blank">
                </a>

                <a class="contact-icon icon-linkedin" href="https://www.linkedin.com/in/yiouchen" target="_blank">
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
        z-index: 2;
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
        opacity: 1;
        
    }
    .contact-container {
        
        background: url(../../static/images/me_vertical_02.jpg);
        background-size: cover;
        background-position: center;
    }
    .contacts {

        width: 100%;
        max-width: 600px;
        font-size: 20px;
        margin-left: auto;
        margin-right: auto;
        padding: 20px 20px;
        position: relative;
        box-sizing: border-box;
        
        display: flex;
        flex-direction: column;

        justify-content: center;
        align-items: center;
        z-index: 0;
        
        .contact-intro {
            z-index: 1;
            text-indent: 50px;
        }
        &::before {
            content: '';
            height: 100%;
            width: calc(100vw + 100vh);
            background: $colored-background;
            opacity: 1;
            position: absolute;
            left: 50%;
            top: 50%;
            z-index: 1;
            opacity: 0.5;
            transform: translate(-50%, -50%) rotate(10deg);
            
        }
        .contact-icons {
            width: 100%;
            display: flex;
            justify-content: space-around;
            position: relative;
            z-index: 1;
        }
        .contact-icon {
            color: $text-color;
            text-decoration: none;
            font-size: 40px;
            display: block;
            cursor: pointer;
        }

        .email {
            background: white;
            width: 100%;
            padding: 10px;
            position: absolute;
            box-sizing: border-box;
            top: calc(100% + 10px);
            left: 0;
            z-index: 1;
        }
    }
</style>