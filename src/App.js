import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import Photo from "./Components/Photo.js"

function App() {
  const [photoObj, setPhotoObj] = useState(null);

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then(response => {
      const { url, title, copyright, date, explanation } = response.data;
      const photoObj = {
        url: url,
        title: title,
        copyright: copyright,
        date: date,
        explanation: explanation,
      }
      setPhotoObj(photoObj);
    })
    .catch(error => {
      console.log(error);
    })
  }, [])
  
  return (
    <div className="App">
      <h1>NASA Photo of the Day</h1>
      <Photo photoObj={photoObj} />
    </div>
  );
}

export default App;