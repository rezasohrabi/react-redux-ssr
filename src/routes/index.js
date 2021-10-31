import { HomePage, UsersPage } from '../pages';

const paths = [
  {
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    path: '/users',
    component: UsersPage,
  },
];

export default paths;
