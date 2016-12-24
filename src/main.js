// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

import VueLazyload from 'vue-lazyload';

Vue.use(VueLazyload, {
    preload: 1.3,
    loading: '../static/images/loading.png',
    attempt: 1
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
});
