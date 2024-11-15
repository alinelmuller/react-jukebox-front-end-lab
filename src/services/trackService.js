import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`;

const getAllTracks = async () => {
  try {
    const res = await axios.get(BASE_URL);
    console.log(res.data);  // Log the data to make sure it's an array
    return res.data;  // Ensure this is an array
  } catch (err) {
    console.log(err);
    throw new Error("Error fetching tracks");
  }
};

const createTrack = async (track) => {
  try {
    const res = await axios.post(BASE_URL, track);
    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export { getAllTracks, createTrack };
