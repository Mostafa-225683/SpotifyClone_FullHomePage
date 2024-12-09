import React, { useState, useRef, useEffect } from 'react';

const Player = ({ currentSong, currentPlaylist, onNext, onPrev, onLike }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgressUpdate = () => {
    if (!audioRef.current) return;
    const currentTime = audioRef.current.currentTime;
    const duration = audioRef.current.duration || 1; // Prevent divide by zero
    setProgress((currentTime / duration) * 100);
  };

  useEffect(() => {
    if (audioRef.current && currentSong) {
      audioRef.current.src = currentSong.url;
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [currentSong]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('timeupdate', handleProgressUpdate);
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('timeupdate', handleProgressUpdate);
      }
    };
  }, []);

  return (
    <div className="player">
      {currentSong ? (
        <div className="song-info">
          <img src={currentSong.cover} alt={currentSong.title} />
          <div>
            <h3>{currentSong.title}</h3>
            <p>{currentSong.artist}</p>
          </div>
          <button onClick={() => onLike(currentSong)}>❤️</button>
        </div>
      ) : (
        <p className="no-song">No song selected</p> // Graceful fallback
      )}
      <audio ref={audioRef} hidden />
      <div className="player-controls">
        <button onClick={onPrev}>&lt;&lt;</button>
        <button onClick={togglePlayPause}>{isPlaying ? '⏸' : '▶️'}</button>
        <button onClick={onNext}>&gt;&gt;</button>
      </div>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${progress}%`, backgroundColor: '#1db954' }}
        ></div>
      </div>
    </div>
  );
};

export default Player;
