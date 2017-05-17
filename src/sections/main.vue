<template>
    <section class="main-container">
        <div class="nav-links">
            <router-link to="/game">Game</router-link>
            <router-link to="/front">FrontEnd</router-link>
            <router-link to="/design">Design</router-link>
            <router-link to="/contact">About</router-link>
            <a href="https://yiochen.github.io/blog/">Blog</a>
        </div>
        <transition name="fade" appear>
            <div class="intro">
                <h1 class="hi">Hi</h1>
                <h2>I am
                    <router-link to="/contact" class="yiou">Yiou</router-link>
                </h2>
                <h5 class="description">I am a passionate
                    <router-link to="/front" class="underline role">front-end developer</router-link>
                    <span class="ampersand">&amp;</span>
                    <router-link to="/game" class="underline role">game developer</router-link>
                </h5>
            </div>
        </transition>
    
    </section>
</template>

<style scoped lang="scss">
@import "~assets/css/global.scss";

.main-container {
    width: 100%;
}

.hi {
    font-family: 'Lobster', cursive;
    font-size: 96px;
}

.intro {
    width: 400px;
    max-width: 100%;

    height: 400px;
    padding: 20px;
    box-sizing: border-box;
    background: $colored-background;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    margin-top: calc(45vh - 200px);
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
    @include folded-corner;
}

.ampersand {
    margin-right: 5px;
    margin-left: 5px;
    font-size: 1.5em;
    line-height: 1;
    font-style: italic;
}

.description {
    text-align: right;
    font-family: serif;
    font-style: italic;
    margin: 0;
}

.underline {
    text-decoration: none;

    border-bottom: 1px solid $text-color;
    padding-bottom: 2px;
}

.role {
    color: $text-color;

    transition: all 0.3s ease;
}

.role:hover {
    color: $background-color;
    border-bottom: 1px solid white;
    padding-bottom: 5px;
}

.yiou {
    text-decoration: none;
    font-style: italic;
    color: $text-color;
    font-weight: bold;
    padding-right: 7px;

    transition: all 0.3s ease;
}

.yiou:hover {
    color: white;
}

.notice {
    position: absolute;
    top: 0;
}

.nav-links {
    margin-top: 20px;
    width: 400px;
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    a {
        padding: 10px 5px;
        display: inline-block;

        text-decoration: none;
        color: $text-color;
        @extend .hover-darken;
    }
}

@media(max-width: 548px) {
    .intro {
        height: 300px;
        width: 300px;
    }

    .nav-links {
        width: 300px;
        margin-top: 10px;
        li {
            padding: 0;
        }
        li:hover {
            background: transparent;
        }
    }
}
</style>
