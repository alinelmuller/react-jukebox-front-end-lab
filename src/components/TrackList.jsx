import React from "react";

const TrackList = ({ tracks }) => {
  if (!Array.isArray(tracks)) {
    return <p>Tracks data is not available</p>;
  }

  return (
    <div className="track-list">
      <h2>Tracks</h2>
      {tracks.length > 0 ? (
        <ul>
          {tracks.map((track) => (
            <li key={track._id} className="track-item">
              <strong>{track.title}</strong> by {track.artist}
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
