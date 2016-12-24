<template>
    <section class="fullscreen contact-container">
        <img class="background" v-lazy="'../../static/images/me_vertical_02.png'">
        <h1 class="title">More about me?</h1>

        <div class="contacts">
            <p>EMAIL: chen.yiou1992@gmail.com</p>
            <p>Github: https://github.com/yiochen</p>
            <p>LinkedIn: https://www.linkedin.com/in/yiouchen</p>
        </div>
    </section>
</template>

<style scoped lang="scss">
    @import "../../static/css/global.scss";
    .title {
        font-family: "Lobster", cursive;
        font-size: 48px;
        width: 100%;
        text-align: center;
        margin-top: 30px;
        z-index: 1;
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
        margin: 50px 20px;
        z-index: 0;
        position: relative;
        padding: 30px 0;
        box-sizing: border-box;
        
        &::before {
            content: '';
            height: 150%;
            width: 150%;
            background: $colored-background;
            opacity: .5;
            z-index: -1;
            position: absolute;
            transform-origin: 0 0 0;
            transform: rotate(10deg) translate(-20%, -30%);
        }
    }
</style>