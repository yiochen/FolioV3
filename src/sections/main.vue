<template>
    <section class="fullscreen main-container">
        <div class="intro">
            <h1 class="hi">Hi</h1>
            <h2>I am Yiou</h2>
            <h5 class="description">I am a front-end developer / game developer</h5>
            
        </div>
        
        <ul class="nav-links">
            <li><router-link to="/game">Game</router-link></li>
            <li><router-link to="/front">Front-end</router-link></li>
            <li><router-link to="/design">Design</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
        </ul>
        
        
        <nav-arrow class="next-arrow" label="Game" @click="next(1)"></nav-arrow>
        
    </section>
</template>
<script>
    import scrollTo from '../services/scroll-service';
    export default {
        methods: {
            next: function(sectionIndex) {
                scrollTo(window.innerHeight * sectionIndex, 1000);
            }
        }
    }
</script>
<style scoped lang="scss">
    @import "../../static/css/global.scss";
    
    .hi {
        font-family: 'Lobster', cursive;
        font-size: 96px;
    }
    .intro {
        width: 400px;
        max-width: 100%;
        
        height: 400px;
        max-height: 100%;
        padding: 20px;
        box-sizing: border-box;
        background: $colored-background;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: flex-end; 
        flex-direction: column;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
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
        width: 400px;
        max-width: 100%;
        display: flex;
        justify-content: space-between;
        margin-left: auto;
        margin-right: auto;
        li {
            display: inline-block;
            a {
                text-decoration: none;
                color: $text-color;
            }
        }
    }

    @media(max-width: 800px) {
        .intro {
            height: 300px;
            width: 300px;
        }

        .nav-links {
            width: 300px;
        }
    }
    

    
</style>
