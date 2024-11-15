import axios from "axios";
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`;

const getAllTracks = async () => {
  try {
    const res = await axios.get(BASE_URL);
    return res.data;
  } catch (err) {
    throw new Error("Failed to fetch tracks");
  }
};

const getTrackById = async (trackId) => {
  try {
    const res = await axios.get(`${BASE_URL}/${trackId}`);
    return res.data;
  } catch (err) {
    throw new Error("Failed to fetch track");
  }
};

const createTrack = async (trackData) => {
  try {
    const res = await axios.post(BASE_URL, trackData);
    return res.data;
  } catch (err) {
    throw new Error("Failed to create track");
  }
};

const updateTrack = async (trackId, trackData) => {
  try {
    const res = await axios.put(`${BASE_URL}/${trackId}`, trackData);
    return res.data;
  } catch (err) {
    throw new Error("Failed to update track");
  }
};

const deleteTrack = async (trackId) => {
  try {
    await axios.delete(`${BASE_URL}/${trackId}`);
  } catch (err) {
    throw new Error("Failed to delete track");
  }
};

export { getAllTracks, getTrackById, createTrack, updateTrack, deleteTrack };
