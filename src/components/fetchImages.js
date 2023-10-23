import axios from "axios";

const PEXELS_API_KEY =
  "AwKy8ZWSyAtO8qoyL7bFFr9PAKSSPI57X0CHx3so5OXsOtq4vdo6PraH";

// Function to fetch image data from Pexels API
const fetchImages = async (query) => {
  try {
    const response = await axios.get(
      `https://api.pexels.com/v1/search?query=${query}`,
      {
        headers: {
          Authorization: `Bearer ${PEXELS_API_KEY}`,
        },
      }
    );

    // Check if the request was successful
    if (response.status === 200) {
      return response.data.photos;
    } else {
      throw new Error("Failed to fetch images");
    }
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};

export default fetchImages;
