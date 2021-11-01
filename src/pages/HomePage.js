import React from 'react';
import MainLayout from '../layouts/Main';
import fetch from 'isomorphic-fetch';
import { Helmet } from 'react-helmet';

const HomePage = (props) => {
  return (
    <MainLayout>
      <Helmet>
        <title>home page of react redux ssr app</title>
        <meta name='description' content='this is an awesome react ssr app' />
        <meta
          name='keywords'
          content='react ssr, react ssr with router, react ssr with redux saga'
        />
        <meta name='author' content='Reza Sohrabi' />
      </Helmet>
      <ul>
        {props.staticContext.initialProps.map((post, index) => (
          <li key={index}>
            {Object.keys(post).map((key, i) => (
              <div key={i}>{post[key]}</div>
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
