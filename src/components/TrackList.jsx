import React from "react";
import { Link } from "react-router-dom";

const TrackList = ({ tracks, setTracks, setPlayingTrack }) => {
  const handleDelete = async (trackId) => {
    try {
      setTracks(tracks.filter((track) => track._id !== trackId));
    } catch (error) {
      console.error("Error deleting track:", error);
    }
  };

  return (
    <div className="track-list">
      <h2>Tracks</h2>

      <Link to="/add-track">
        <button>Add New Track</button>
      </Link>

      {tracks.length > 0 ? (
        <ul>
          {tracks.map((track) => (
            <li key={track._id} className="track-item">
              <strong>{track.title}</strong> by {track.artist}
              <Link to={`/edit-track/${track._id}`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => setPlayingTrack(track)}>Play</button>
              <button onClick={() => handleDelete(track._id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tracks available.</p>
      )}
    </div>
  );
};

export default TrackList;