// src/components/NowPlaying.jsx
import React from "react";

const NowPlaying = ({ track }) => {
  if (!track) return null; 

  return (
    <div className="now-playing">
        <strong>Now Playing:</strong> {track.title} by {track.artist}
    </div>
  );
};

export default NowPlaying;