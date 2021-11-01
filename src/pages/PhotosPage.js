import React from 'react';
import fetch from 'isomorphic-fetch';
import MainLayout from '../layouts/Main';

const ImageItem = ({image}) => {
    return (
        <div>
            <div>{image.title}</div>
            <img src={image.url} />
        </div>
    )
}

const PhotosPage = (props) => {
    console.log(props.staticContext.initialProps)
    return (
        <MainLayout>
            {props.staticContext.initialProps.map((image) => (
                <ImageItem key={image.id} image={image} />
            ))}
        </MainLayout>
    )
}

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