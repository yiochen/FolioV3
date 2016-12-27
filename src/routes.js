
import Vue from 'vue';
import VueRouter from 'vue-router';

import SiegeNebulaProject from './projects/siege-nebula';
import HomePage from './home-page';
import ProjectContainer from './projects/project-container';

Vue.use(VueRouter);
const routes= [
    { path: '/', component: HomePage},
    { path: '/projects', component: ProjectContainer,
      children: [
          { path: 'siege', component: SiegeNebulaProject}
      ]
    }
    
];

const router = new VueRouter({
    routes
});

export default router;