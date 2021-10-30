import { HomePage, UsersPage } from '../pages';
import UsersPage from '../pages/UsersPage';
const paths = [
  {
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
      path: '/users',
      component: UsersPage,
  }
];

export default paths;
