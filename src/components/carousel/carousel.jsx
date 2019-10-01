import React, { useState, useEffect } from 'react';
import InfiniteCarousel from 'react-leaf-carousel';

import Slide from '../slide';

import './style.css';

const Carousel = ({ album = {} }) => {
  const ALBUM_PHOTOS_API = 'https://jsonplaceholder.typicode.com/photos?albumId={album_id}';
  const [albumData, setAlbumData] = useState([]);

  useEffect(() => {
    fetch(ALBUM_PHOTOS_API.replace(/\{album_id\}/, album.id)).then(response => response.json()).then(data => {
      setAlbumData(data);
    });
  }, [album.id]);

  useEffect(() => {}, [albumData]);

  const settings = {
    arrows: true,
    breakpoints: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
    ],
    dots: false,
    lazyLoad: true,
    showSides: false,
    sidesOpacity: 0.5,
    sideSize: 0.1,
    slidesToScroll: 5,
    slidesToShow: 5,
    // scrollOnDevice: true,
    swipe: true
  };

  if (!albumData.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className='infinite-slider'>
      <InfiniteCarousel className='infinite-slider' {...settings}>
        {albumData.map((slide, index) => (<Slide key={index} album={slide} />))}
      </InfiniteCarousel>
    </div>
  );
};

export default Carousel;
