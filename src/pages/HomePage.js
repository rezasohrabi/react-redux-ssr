import React from 'react';
import MainLayout from '../layouts/Main';
import fetch from 'isomorphic-fetch';

const HomePage = (props) => {
  return (
    <MainLayout>
      <ul>
        {props.staticContext.initialProps.map((post, index) => (
          <li key={index}>
            {Object.keys(post).map((key, i) => (
              <div key={i}>{key}</div>
            ))}
          </li>
        ))}
      </ul>
    </MainLayout>
  );
};

HomePage.getInitialProps = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.warn(error);
    });
};

export default HomePage;
