
import Vue from 'vue';
import VueRouter from 'vue-router';

import SiegeNebula from './projects/siege-nebula';
import ProjectCheese from './projects/project-cheese';
import ProjectChinaBlue from './projects/project-china-blue';

import HomePage from './home-page';
import ProjectContainer from './projects/project-container';

Vue.use(VueRouter);
const routes= [
    { path: '/', component: HomePage},
    { path: '/projects', component: ProjectContainer,
      children: [
          { path: 'siege', component: SiegeNebula},
          { path: 'cheese', component: ProjectCheese},
          { path: 'chinablue', component: ProjectChinaBlue}
      ]
    }
    
];

const router = new VueRouter({
    routes
});

export default router;