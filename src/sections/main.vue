<template>
    <section class="fullscreen main-container">
        <div class="intro">
            <h1 class="hi">Hi</h1>
            <h2>I am Yiou</h2>
            <h5 class="description">I am a front-end developer / game developer</h5>
            
        </div>
        <p class="notice">This site is currently under development. Please excuse its appearance now. :)</p>
    </section>
</template>

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

    @media(max-width: 760px) {
        .intro {
            width: 300px;
            height: 300px;
        }
    }
</style>
