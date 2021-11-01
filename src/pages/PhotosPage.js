import React from 'react';
import fetch from 'isomorphic-fetch';
import MainLayout from '../layouts/Main';
import { Helmet } from 'react-helmet';

const ImageItem = ({ image }) => {
  return (
    <div>
      <div>{image.title}</div>
      <img src={image.url} />
    </div>
  );
};

const PhotosPage = (props) => {
  return (
    <MainLayout>
      <Helmet>
        <title>photos page</title>
        <meta name='description' content='there is great photos look' />
        <meta
          name='keywords'
          content='photos, user photos, albums'
        />
        <meta name='author' content='Jon Due' />
      </Helmet>
      {props.staticContext.initialProps.map((image) => (
        <ImageItem key={image.id} image={image} />
      ))}
    </MainLayout>
  );
};

PhotosPage.getInitialProps = () => {
  return fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.warn(error);
      return null;
    });
};

export default PhotosPage;
