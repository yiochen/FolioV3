<template>
  <div id="app">
  
    <div class="floating-menu float-left">
      <icon-button class="floating-icon" icon="home" routerlinkto="/"></icon-button>
    </div>
  
    <div class="floating-menu float-right">
      <icon-button class="floating-icon" icon="menu"></icon-button>
    </div>
  
    <router-view>
  
    </router-view>
  
  </div>
</template>

<style lang="scss">
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
</style>

<script>
export default {
  methods: {

  }
}
</script>
