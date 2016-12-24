<template>
  <div id="app">
    <main-view></main-view>
    <game-view></game-view>
    <front-end-view></front-end-view>
    <design-view></design-view>
    <contact-view></contact-view>
  </div>
</template>

<script>
import Hello from './components/Hello';
import MainView from './sections/main';
import GameView from './sections/games';
import FrontEndView from './sections/front-end';
import DesignView from './sections/design';
import ContactView from './sections/contact';

export default {
  name: 'app',
  components: {
    MainView,
    GameView,
    FrontEndView,
    DesignView,
    ContactView
  }
};
</script>

<style>
  @import '../static/css/global.scss';
</style>
