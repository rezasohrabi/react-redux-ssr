import React from 'react';
import MainLayout from '../layouts/Main';
import fetch from 'isomorphic-fetch';

const UsersPage = (props) => {
  return <MainLayout>his is users page</MainLayout>;
};

UsersPage.getInitialProps = () => {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.warn(error);
      return null;
    });
};

export default UsersPage;
