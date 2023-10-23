import { useEffect, useState } from "react";
import fetchImages from "./fetchImages"; // Import the fetchImages function
import Images from "./Images";

const Gallery = ({ query }) => {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    // Fetch image data when the query changes
    const fetchData = async () => {
      try {
        const images = await fetchImages(query);
        setImageData(images);
      } catch (error) {
        // Handle errors
        console.error("Error fetching images:", error);
      }
    };

    fetchData();
  }, [query]);

  return (
    <div className="mt-10">
      <h2>{query} Pictures</h2>
      <Images imageSources={imageData.map((photo) => photo.src.medium)} />
    </div>
  );
};

export default Gallery;
