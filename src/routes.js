import Vue from "vue";
import VueRouter from "vue-router";

import SiegeNebula from "./projects/siege-nebula";
import ProjectCheese from "./projects/project-cheese";
import ProjectChinaBlue from "./projects/project-china-blue";
import ProjectFloral from "./projects/project-floral";
import ProjectSolar from "./projects/project-solar";
import ProjectDevimark from "./projects/project-devimark";
import ProjectTMood from "./projects/project-tmood";
import ProjectMLNW from "./projects/project-make-love-not-war";

import MainView from "./sections/main";
import GameView from "./sections/games";
import FrontEndView from "./sections/front-end";
import DesignView from "./sections/design";
import ContactView from "./sections/contact";

import ProjectContainer from "./projects/project-container";

Vue.use(VueRouter);
const routes = [
  { path: "/", component: MainView, nicePrint: "HOME" },
  { path: "/game", component: GameView, nicePrint: "GAME" },
  { path: "/front", component: FrontEndView, nicePrint: "FRONT END" },
  { path: "/design", component: DesignView, nicePrint: "DESIGN" },
  { path: "/contact", component: ContactView, nicePrint: "CONTACT" },
  {
    path: "/projects/:section",
    component: ProjectContainer,
    children: [
      { path: "siege", component: SiegeNebula },
      { path: "cheese", component: ProjectCheese },
      { path: "chinablue", component: ProjectChinaBlue },
      { path: "floral", component: ProjectFloral },
      { path: "solar", component: ProjectSolar },
      { path: "devimark", component: ProjectDevimark },
      { path: "tmood", component: ProjectTMood },
      { path: "mlnw", component: ProjectMLNW }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});
router.getNicePrintFromSection = function(section) {
  let filtered = routes.filter(route => route.path.includes(section));
  if (filtered.length > 0) {
    return filtered[0].nicePrint;
  }
};

export default router;
