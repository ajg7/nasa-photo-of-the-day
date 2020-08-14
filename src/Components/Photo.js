import React from "react";
import "../App.css";
import styled, { keyframes } from "styled-components";

const kf = keyframes`
  100%{
    opacity: 1;
    transform: scale(1);
  }

`
const StyledPhoto = styled.div`
  background-color: ${props => props.theme.primaryColor};
  opacity: 0;
  transform: scale(10) rotateZ(180deg);
  animation: ${kf} 0.5s ease-in-out forwards;
  h2, h3, .date, p {
    color: ${props => props.theme.tertiaryColor};
    font-weight: ${props => props.theme.bolded};
  }
`

function Photo(props) {
    if (!props.photoObj) {
        return <h3>Loading...</h3>
    }
  const { url, title, copyright, date, explanation } = props.photoObj;
  return (
    <div>
        <StyledPhoto>
          <img src={url} alt={title}></img>
          <h2>{title}</h2>
          <h3>{copyright}</h3>
          <p className="date">{date}</p>
          <p>{explanation}</p>
        </StyledPhoto>
    </div>
  );
}

export default Photo;
