import React from 'react';

const Songs = ({ num, image, name, albumName, date, duration }) => {
  return (
    <div className="song-row">
      <p>{num}</p>
      <div className="song-info">
        <img src={image} alt="Album" />
        <div>
          <h3>{albumName}</h3>
          <p>{name}</p>
        </div>
      </div>
      <p>{date}</p>
      <p>{duration}</p>
      <button className="play-btn">Play</button>
    </div>
  );
};

export default Songs;
