import React, { useState, useEffect } from "react";
import { getAllTracks } from "../services/trackService";
import TrackList from "./TrackList";
import NowPlaying from "./NowPlaying";

const Home = () => {
  const [tracks, setTracks] = useState([]);
  const [error, setError] = useState(null);
  const [playingTrack, setPlayingTrack] = useState(null);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const data = await getAllTracks();
        setTracks(data);
      } catch (err) {
        setError("Failed to fetch tracks.");
      }
    };

    fetchTracks();
  }, []);

  
  return (
    <div className="home">

      <h1>Reactville Jukebox</h1>
      <NowPlaying track={playingTrack} />
      {error && <p className="error">{error}</p>}
      <TrackList tracks={tracks} setTracks={setTracks} setPlayingTrack={setPlayingTrack} /> 
      
    </div>
  );
};

export default Home;
