import React from 'react';

const LikedSongs = ({ likedSongs, onSongSelect, onRemove }) => {
  return (
    <div className="liked-songs-page">
      <h1>Liked Songs</h1>
      {likedSongs.length === 0 ? (
        <p>No liked songs yet!</p>
      ) : (
        <ul>
          {likedSongs.map((song) => (
            <li key={song.id} className="song-row">
              <div className="song-card" onClick={() => onSongSelect(song, likedSongs)}>
                <img src={song.cover} alt={song.title} />
                <div>
                  <h3>{song.title}</h3>
                  <p>{song.artist}</p>
                </div>
              </div>
              <button
                className="remove-btn"
                onClick={() => onRemove(song)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LikedSongs;
