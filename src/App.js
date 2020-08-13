import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [photoObj, setPhotoObj] = useState(null);

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2020-08-12")
    .then(response => {
      const { hdurl, title, copyright, date, explanation } = response.data;
      const photoObj = {
        hdurl: hdurl,
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
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <Photo photoObj={photoObj}/>
    </div>
  );
}

export default App;


{/*https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2020-08-12*/}