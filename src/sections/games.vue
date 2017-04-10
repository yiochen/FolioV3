<template>
    <section class="fullscreen">
        <section-intro>
            <p class="no-bottom-margin">I make games using <i>Unity</i> and <i>Cocos2d-x</i></p>
        </section-intro>
        <background-text text="Game Dev"></background-text>
        <project-card project-title="Cheese" 
            description="Gather a horde of zombies with different abilities and fight over the evil employees of the cheese factory! A fast paced zombie survival game built using Cocos2d-x. "
            project-path="projects/game/cheese"
            techs="Cocos2D-x,C++,Lua"></project-card>

        <separator></separator>
        <project-card project-title="SiegeNebula" 
            description="Train your troops, gather crystals, upgrade your ships, travel through space. you need a good strategy to succeed in this space colonization. This is a realtime strategy game that lets you play as a space commander against sneaky AI."
            project-path="projects/game/siege"
            techs="Unity,C#"></project-card>

        <separator></separator>
        <project-card project-title="Make Love Not War"
            description="A 3D shoot-em-up game. Currently under development."
            project-path="projects/game/mlnw"
            techs="Unity,C#"></project-card>
    </section>
</template>

<style scoped lang="scss">

    @import "~assets/css/global.scss";

</style>