import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Player from './components/Player';
import RightSidebar from './components/RightSidebar';
import Home from './pages/Home';
import Library from './pages/Library';
import Search from './pages/Search';
import LikedSongs from './pages/LikedSongs';
import AlbumPage from './pages/AlbumPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import songs from './data/songs';

const App = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const [currentPlaylist, setCurrentPlaylist] = useState(songs);
  const [likedSongs, setLikedSongs] = useState([]);

  const handleSongSelect = (song, playlist = songs) => {
    setCurrentSong(song);
    setCurrentPlaylist(playlist);
  };

  const handleLikeSong = (song) => {
    setLikedSongs((prev) =>
      prev.find((likedSong) => likedSong.id === song.id) ? prev : [...prev, song]
    );
  };

  const handleRemoveLikedSong = (song) => {
    setLikedSongs((prev) => prev.filter((likedSong) => likedSong.id !== song.id));
  };

  return (
    <div className="container">
      <Sidebar likedSongsCount={likedSongs.length} />
      <div className="main">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home onSongSelect={handleSongSelect} onLike={handleLikeSong} />}
          />
          <Route
            path="/search"
            element={<Search onSongSelect={handleSongSelect} onLike={handleLikeSong} />}
          />
          <Route path="/library" element={<Library likedSongs={likedSongs} />} />
          <Route
            path="/liked-songs"
            element={
              <LikedSongs
                likedSongs={likedSongs}
                onSongSelect={handleSongSelect}
                onRemove={handleRemoveLikedSong}
              />
            }
          />
          <Route path="/album/:albumName" element={<AlbumPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
      <RightSidebar />
      <Player
        currentSong={currentSong}
        currentPlaylist={currentPlaylist}
        onNext={() => {
          const index = currentPlaylist.findIndex((s) => s.id === currentSong?.id);
          setCurrentSong(currentPlaylist[(index + 1) % currentPlaylist.length]);
        }}
        onPrev={() => {
          const index = currentPlaylist.findIndex((s) => s.id === currentSong?.id);
          setCurrentSong(currentPlaylist[(index - 1 + currentPlaylist.length) % currentPlaylist.length]);
        }}
        onLike={handleLikeSong}
      />
    </div>
  );
};

export default App;
