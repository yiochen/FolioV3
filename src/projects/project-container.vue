<template>
    <div>
        <router-link to="/"><nav-arrow orientation="left"></nav-arrow></router-link>
        <router-view></router-view>
       <router-link to="/"><nav-arrow orientation="left"></nav-arrow></router-link>
    </div>

</template>

<script>
    import projects from '../services/project-manager';
    
</script>

<style lang="scss">
    article {
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 50px;
        padding: 10px;
        margin-bottom: 50px;
        figure {
            margin: 0;
        }
    }
    .normal-image {
        width: 100%;
    }
    
    .middle-image {
        width: 100%;
    }
    figcaption {
        text-align: center;
        margin-bottom: 30px;
    }
    .project-content {
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
    }

    .project-markdown {
        position: relative;        
        p {
            width: 90%;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 20px;
        }
        img {
            width: 111%;
            margin-left: -5.5%;
        }
        a {
            text-decoration: none;
            font-weight: bold;
        }
    }

    @media (min-width: 600px) {
        .middle-image {
            width: 50%;
            margin-left: 25%;
        }
        article {
            margin-top: 100px;
            width: 100%;
            box-sizing: border-box;
        }
    }
</style>

