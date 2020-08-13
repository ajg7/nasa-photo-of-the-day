import React from "react";
import "../App.css";

function Photo(props) {
  const { url, title, copyright, date, explanation } = props.photoObj;
  return (
    <div>
        <img src={url} alt={title}></img>
        <h2>{title}</h2>
        <h3>{copyright}</h3>
        <p>{date}</p>
        <p>{explanation}</p>
    </div>
  );
}

export default Photo;