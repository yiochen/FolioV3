<template>
    <!--<transition name="fade">-->
    <section class="contact-container">
    
        <h1 class="title">More about me?</h1>
    
        <div class="contacts">
            <div class="contact-intro">
                <p>Hi, my name is
                    <i>Yiou Chen</i> (pronounced like "EE-Oh"). Thank you for stopping by. I graduated from Stony Brook University, with Bachelor of Science in Computer Science at
                    <span class="underline">May 2017</span>. I am actively seeking full time position as a software engineer. If you are looking for some one and my portfolio happened to interest you, shoot me a email! I will be more than happy to talk with you about my qualification. </p>
    
                <p>When I was in Stony Brook, I worked at CA Technologies as a software engineer intern. I played with
                    <i>Angular</i> and
                    <i>D3</i>. I built responsive data visualizations that were both performant and user-friendly. I like to think about code structure and state management. My strength are Front-end development and game programming, but I also try to keep a broad interest toward all kind of technologies.
                </p>
    
                <p>Most of my projects are hosted on
                    <a target="_blank" href="https://github.com/yiochen">Github</a>. Feel free to check them out! Wait, there is more, I am also keeping a
                    <a target="_blank" href="https://yiochen.github.io/blog/">blog</a>
                    <span class="small">(that no one reads)</span> on Web dev, game programming, etc. Check it out too!</p>
            </div>
            <div class="contact-icons">
                <div>
                    <icon-button icon="envelop" @iconclick="openEmail"></icon-button>
                </div>
                <icon-button icon="github" linkto="
                                                                        https://www.linkedin.com/in/yiouchen"></icon-button>
    
                <icon-button icon="linkedin" linkto="https://www.linkedin.com/in/yiouchen">
                </icon-button>
    
            </div>
            <transition name="fade">
                <div v-show="emailOpened" class="email" contenteditable="true">{{email}}</div>
            </transition>
    
        </div>
    </section>
    <!--</transition>-->
</template>
<script>
export default {
    data: function () {
        return {
            email: "chen." + "yiou" + "1992@gmail.com",
            emailOpened: false
        }
    },
    methods: {
        openEmail: function () {
            this.emailOpened = true;
        }
    }
}
</script>
<style scoped lang="scss">
@import "~assets/css/global.scss";
.title {
    font-family: "Lobster", cursive;
    font-size: 48px;
    width: 100%;
    text-align: center;
    margin-top: 30px;
    z-index: 2;
    position: relative;
    margin-top: 0;
    span.yiou-logo {
        color: $text-color;
        font-size: 60px;
    }
}

.contact-container {
    width: 100%;
    min-height: 100vh; // background: url(../../static/images/me_vertical_02.jpg);
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
        p {
            text-indent: 50px;
        }

        a {
            text-decoration: none;
        }
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

    .email {
        margin-top: 20px;
        background: white;
        width: 100%;
        padding: 10px;

        box-sizing: border-box;
        top: calc(100% + 10px);
        left: 0;
        z-index: 1;
    }

    .small {
        font-size: 0.5em;
    }
}
</style>