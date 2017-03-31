<template>
   
    <section class="main-container">
        <div class="nav-links">
                <router-link to="/game">Game</router-link>
                <router-link to="/front">FrontEnd</router-link>
                <router-link to="/design">Design</router-link>
                <router-link to="/contact">Contact</router-link>
                <a href="http://yiou.me/blog/">Blog</a>
            </div>
        <div class="intro">
            <h1 class="hi">Hi</h1>
            <h2>I am Yiou</h2>
            <h5 class="description">I am a front-end developer / game developer</h5>
        </div>
        
        
    </section>
</template>

<style scoped lang="scss">
    @import "../../static/css/global.scss";
    
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

    .description {
        text-align: right;
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
        
        }

        a:hover {
            background: $background-text-color;
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
