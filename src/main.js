// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import router from './routes';
import App from './App';

import VueLazyload from 'vue-lazyload';
import VueMarkdown from 'vue-markdown';
import VueResource from 'vue-resource';
import MarkdownLoader from './components/markdown-loader';

import NavArrow from './components/nav-arrow';
import ProjectCard from './components/project-card';
import BackgroundText from './components/background-text';
import ProjectTitle from './components/project-title';
import GithubRibbon from './components/github-ribbon';
import Logo from './components/logo';
import CloudImage from './components/cloud-image';
import BackButton from './components/back-button';
import CloudVideo from './components/cloud-video';

Vue.use(VueLazyload, {
    preload: 1.3,
    loading: '../static/images/loading.png',
    attempt: 1
});
Vue.use(VueResource);

Vue.component("NavArrow", NavArrow);
Vue.component("ProjectCard", ProjectCard);
Vue.component("BackgroundText", BackgroundText);
Vue.component("ProjectTitle", ProjectTitle);
Vue.component("GithubRibbon", GithubRibbon);
Vue.component("VueMarkdown", VueMarkdown);
Vue.component("MarkdownLoader", MarkdownLoader);
Vue.component("Logo", Logo);
Vue.component("CloudImage", CloudImage);
Vue.component("BackButton", BackButton);
Vue.component("CloudVideo", CloudVideo);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router: router
});

router.beforeEach(function (to, from, next) {
  window.scrollTo(0, 0);
  next();
});
