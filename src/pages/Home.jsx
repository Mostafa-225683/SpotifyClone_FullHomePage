import React from 'react';
import { useNavigate } from 'react-router-dom';
import songs from '../data/songs';

const albums = [
  { id: 1, name: "Hybrid Theory", image: "/images/global.png" },
  { id: 2, name: "Divide", image: "/images/topglobal.jpg" },
  { id: 3, name: "Like a Virgin", image: "/images/happyfavorites.jpg" },
];

const Home = ({ onSongSelect, onLike }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Good Afternoon</h2>

      {/* Album Cards */}
      <div>
        <h3>Albums</h3>
        <div className="row">
          {albums.map((album) => (
            <div
              key={album.id}
              className="card"
              onClick={() => navigate(`/album/${album.name}`)}
              style={{ cursor: "pointer" }}
            >
              <img src={album.image} alt={album.name} />
              <h3>{album.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Song Cards */}
      <div>
        <h3>Songs</h3>
        <div className="row">
          {songs.map((song) => (
            <div key={song.id} className="card">
              <img src={song.cover} alt={song.title} />
              <h3>{song.title}</h3>
              <p>{song.artist}</p>
              <div className="card-actions">
                <button class="play-btn" onClick={() => onSongSelect(song)}>Play</button>
                <button onClick={() => onLike(song)} className="favorite-btn">
                  ❤️
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
