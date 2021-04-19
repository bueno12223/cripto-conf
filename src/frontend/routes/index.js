import Home from "../pages/home";
import Badges from "../pages/badgesList";
import BadgesNew from "../pages/badgesNew";

const routes = [
  {
    exact:true,
    path: '/',
    component: Home,
  },
  {
    exact:true,
    path: '/badges',
    component: Badges,
  },
  {
    exact:true,
    path: '/badgesNew',
    component: BadgesNew,
  }
];

export default routes;