import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import Photo from "./Components/Photo.js"
import styled from "styled-components"


const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.tertiaryColor};
  text-shadow: 1px 1px ${({ theme }) => theme.secondaryColor};
  box-shadow: 12px 12px ${({ theme }) => theme.secondaryColor};
  border: 5px solid;


    &:hover {
      font-size: 2rem;
    }
`

function App() {
  const [photoObj, setPhotoObj] = useState(null);

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2020-08-3")
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
      <StyledHeader>
        <h1>NASA Photo of the Day</h1>
      </StyledHeader>
      <Photo photoObj={photoObj} />
    </div>
  );
}

export default App;