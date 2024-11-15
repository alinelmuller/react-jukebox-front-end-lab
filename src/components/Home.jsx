import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllTracks } from "../services/trackService";
import TrackList from "./TrackList";

const Home = () => {
  const [tracks, setTracks] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const data = await getAllTracks();
        console.log(data);  // Add this line to see what you are getting
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
      {error && <p className="error">{error}</p>}
      <button onClick={() => navigate("/add-track")} className="add-track-button">
        Add New Track
      </button>
      <TrackList tracks={tracks} />
    </div>
  );
};

export default Home;
