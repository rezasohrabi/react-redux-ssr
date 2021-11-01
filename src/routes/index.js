import { HomePage, UsersPage, PhotosPage } from '../pages';

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
  {
    path: '/photos',
    component: PhotosPage
  }
];

export default paths;
