import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTrack } from "../services/trackService";

const TrackForm = () => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createTrack({ title, artist });
      navigate("/"); // Redirect to the home page
    } catch (err) {
      setError("Failed to add the track. Please try again.");
    }
  };

  return (
    <div className="track-form">
      <h2>Add New Track</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Artist:
          <input
            type="text"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            required
          />
        </label>
        <button type="submit">Add Track</button>
      </form>
    </div>
  );
};

export default TrackForm;
