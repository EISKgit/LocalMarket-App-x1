import React from "react";
import styled from "styled-components";


export default function MoviesProm(){
    return <Wrapper>

    <div className="moviesBox">
    
       
    <div class="card text-bg-dark box">
      <img
        class="bd-placeholder-img bd-placeholder-img-lg card-img"
        alt="poster"
        src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/the-flash-et00047401-1682497281.jpg"
      >
    </img>
      <div class="card-img-overlay">
        <h5 class="card-title">The Flash</h5>
        <p class="card-text">
        English,Hindi,Telugu,Tamil 
        </p>
        <button type="button" className="btn btn-light btn-outline-info">Watch Now</button>
      </div>
    </div>

    <div class="card text-bg-dark box">
      <img
        class="bd-placeholder-img bd-placeholder-img-lg card-img"
        alt="poster"
        src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/john-wick-chapter-4-et00311714-1679379542.jpg"
      >
    </img>
      <div class="card-img-overlay">
        <h5 class="card-title">John Wick: Chapter 4</h5>
        <p class="card-text">
        English,Hindi,Tamil 
        </p>
        <button type="button" className="btn btn-light btn-outline-info">Watch Now</button>
      </div>
    </div>

   
      
  
    </div>
    
  </Wrapper>
}

const Wrapper =styled.section`
width:60%;
height:200px;
.moviesBox {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap:25px;
  grid-row-gap: 25px;
  place-content:center;
}

`;