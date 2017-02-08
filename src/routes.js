
import Vue from 'vue';
import VueRouter from 'vue-router';

import SiegeNebula from './projects/siege-nebula';
import ProjectCheese from './projects/project-cheese';
import ProjectChinaBlue from './projects/project-china-blue';

import MainView from './sections/main';
import GameView from './sections/games';
import FrontEndView from './sections/front-end';
import DesignView from './sections/design';
import ContactView from './sections/contact';

import HomePage from './home-page';
import ProjectContainer from './projects/project-container';

Vue.use(VueRouter);
const routes= [
    { path: '/', component: MainView },
    { path: '/game', component: GameView },
    { path: '/front', component: FrontEndView },
    { path: '/design', component: DesignView },
    { path: '/contact', component: ContactView },
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