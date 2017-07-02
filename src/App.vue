<template>
  <div id="app">
  
    <div class="floating-menu float-left">
      <icon-button class="floating-icon" icon="logo" routerlinkto="/"></icon-button>
    </div>
  
    <div class="floating-menu float-right">
      <icon-button class="floating-icon" icon="menu" @iconclick="toggleMenu(true)"></icon-button>
    </div>
  
    <transition name="slide-down" apeear>
  
      <div v-if="open" class="overlay-menu" @click="toggleMenu(false)">
        <router-link to="/">HOME</router-link>
        <router-link to="/game">GAME</router-link>
        <router-link to="/front">FRONT END</router-link>
        <router-link to="/design">DESIGN</router-link>
        <router-link to="/contact">CONTACT</router-link>
        <a href="https://yiochen.github.com/blog" target="_blank">BLOG</a>
      </div>
    </transition>
  
    <router-view>
    </router-view>
  </div>
</template>

<style lang="scss" scoped>
@import "~assets/css/global.scss";

#app {
  position: relative;

  overflow: hidden;
  min-height: 100vh;
  box-sizing: border-box;
}

.floating-menu {
  position: fixed;
  z-index: 10;
  height: $menu-bar-min-height;
  display: flex;
  align-items: center;
  padding: 0 20px;
}

.float-left {
  left: 0;
  top: 0;
}

.float-right {
  right: 0;
  top: 0;
}

.floating-icon {
  opacity: 0.2;
  transition: all 0.3s ease;
}

.floating-icon:hover {
  opacity: 1;
}

.overlay-menu {
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  box-sizing: border-box;
  background: $colored-background;
  z-index: 11;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.overlay-menu>* {
  color: white;
  text-decoration: none;
  font-size: 36px;
  margin: 15px 0;
  font-weight: bold;
}
</style>

<script>
export default {
  data: function () {
    return {
      open: false
    };
  },
  methods: {
    toggleMenu: function (open) {
      this.open = open;
    }
  }
}
</script>
