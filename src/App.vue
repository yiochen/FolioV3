<template>
  <div id="app">
    <main-view></main-view>
  </div>
</template>

<script>
import Hello from './components/Hello'
import MainView from './sections/main'
export default {
  name: 'app',
  components: {
    MainView
  }
}
</script>

<style>
  @import '../static/css/global.scss';
</style>
