import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createTrack, updateTrack, getTrackById } from "../services/trackService";

const TrackForm = () => {
  const [track, setTrack] = useState({ title: "", artist: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { trackId } = useParams(); 

  useEffect(() => {
    if (trackId) {
      const fetchTrack = async () => {
        try {
          const trackData = await getTrackById(trackId);
          setTrack({ title: trackData.title, artist: trackData.artist });
        } catch (err) {
          setError("Failed to fetch track data.");
        }
      };

      fetchTrack();
    }
  }, [trackId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrack((prevTrack) => ({
      ...prevTrack,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (trackId) {
        await updateTrack(trackId, track);
      } else {
        await createTrack(track);
      }
      navigate("/"); 
    } catch (err) {
      setError("Failed to submit track.");
    }
  };

  return (
    <div className="track-form">
      <h2>{trackId ? "Edit Track" : "Add New Track"}</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={track.title}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Artist:
          <input
            type="text"
            name="artist"
            value={track.artist}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">{trackId ? "Update Track" : "Add Track"}</button>
      </form>
    </div>
  );
};

export default TrackForm;
