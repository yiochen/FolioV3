// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

import VueLazyload from 'vue-lazyload';
import NavArrow from './components/nav-arrow';
import ProjectCard from './components/project-card';
import BackgroundText from './components/background-text';

Vue.use(VueLazyload, {
    preload: 1.3,
    loading: '../static/images/loading.png',
    attempt: 1
});

Vue.component("NavArrow", NavArrow);
Vue.component("ProjectCard", ProjectCard);
Vue.component("BackgroundText", BackgroundText);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
});
