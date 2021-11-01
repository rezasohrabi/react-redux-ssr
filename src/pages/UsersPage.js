import React from 'react';
import Helmet from 'react-helmet';
import MainLayout from '../layouts/Main';
import fetch from 'isomorphic-fetch';
import './UsersPage.scss';

const TableHeader = () => {
  const titles = [
    'id',
    'name',
    'username',
    'email',
    'address',
    'phone',
    'website',
    'company',
  ];
  const header = titles.map((title, index) => <th key={index}>{title}</th>);
  return header;
};

const TableRows = ({ users }) => {
  const rows = users.map((user, index) => (
    <tr key={index}>
      {Object.keys(user).map((key, i) => (
        <td key={i}>{JSON.stringify(user[key])}</td>
      ))}
    </tr>
  ));
  return rows;
};

const UsersPage = (props) => {
  return (
    <MainLayout>
      <Helmet>
        <title>photos page</title>
        <meta name='description' content='there is great photos look' />
        <meta name='keywords' content='photos, user photos, albums' />
        <meta name='author' content='Jon Due' />
      </Helmet>
      <table className='table'>
        <TableHeader />
        <TableRows users={props.staticContext.initialProps} />
      </table>
    </MainLayout>
  );
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
