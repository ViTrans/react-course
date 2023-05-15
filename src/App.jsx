import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [photos, setPhotos] = useState([]);
  function getPhotos() {
    return axios
      .get("https://picsum.photos/v2/list?limit=8")
      .then((response) => {
        return response.data;
      });
  }
  useEffect(() => {
    getPhotos().then((images) => {
      setPhotos(images);
    });
  }, []);
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {photos.map((photo) => (
          <img key={photo.id} src={photo.download_url} alt={photo.author} />
        ))}
      </div>
    </>
  );
}

export default App;
