import React from 'react';
import MainLayout from '../layouts/Main';

const UsersPage = (props) => {
  return <MainLayout>his is users page</MainLayout>;
};

UsersPage.getInitialProps = () => {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

export default UsersPage;
