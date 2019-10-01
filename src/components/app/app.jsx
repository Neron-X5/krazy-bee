import React, { useState, useEffect } from 'react';

import Carousel from '../carousel';

import './style.css';

function App () {
  const ALBUM_LISTING_API = 'https://jsonplaceholder.typicode.com/albums';
  const maxItems = 10;

  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch(ALBUM_LISTING_API).then(response => response.json()).then(data => {
      data = data.slice(0, maxItems);
      setAlbums(data);
    });
  }, []);

  useEffect(() => {
  }, [albums]);

  if (!albums.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className='app'>
      {albums.map((album, index) => (
        <div className='album-container' key={index}>
          <div className='album-info'>
            <h2>{album.title}</h2>
            <p>{`id: ${album.id}, userId: ${album.userId}`}</p>
          </div>
          <Carousel album={album} />
        </div>)
      )}
    </div>
  );
}

export default App;
