
import Badges from "../pages/badgesList";
import BadgesNew from "../pages/badgesNew";

const routes = [
  {
    exact:true,
    path: '/',
    component: Badges,
  },
  {
    exact:true,
    path: '/badgesNew',
    component: BadgesNew,
  }
];

export default routes;