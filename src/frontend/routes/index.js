
import BadgesList from "../pages/badgesList";
import BadgesNew from "../pages/badgesNew";

const routes = [
  {
    exact:true,
    path: '/',
    component: BadgesList,
  },
  {
    exact:true,
    path: '/new',
    component: BadgesNew,
  }
];

export default routes;