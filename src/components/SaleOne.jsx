import React from "react";
import styled from "styled-components";
import MoviesProm from "./MoviesProm";


export default function SaleOne () {
    return <Wrapper>
         <div className="row row-cols-1 row-cols-md-3 g-5 sales-div">
      <div className="col cardOne">
        <div className="card">
          <img
            className="bd-placeholder-img card-img-top imgOne"
            width="100%"
            height="140"
            alt="img"
            src="./img/grocery.jpg"
          >
          </img>
          <div className="card-body">
            <h5 className="card-title">20-40% off</h5>
            <p className="card-text">
            Shop from wide range of products of your favourite.
            </p>
          </div>
        </div>
      </div>
      <div className="col cardTwo">
      <div className="card ">
        <img
          className="bd-placeholder-img card-img-top imgTwo"
          width="100%"
          height="140"
          alt="img"
          src="./img/Electronic.jpg"        >
        </img>
        <div className="card-body">
          <h5 className="card-title">60-70% off</h5>
          <p className="card-text">
          Electronics Sale- Grab best deals and offers on Electronics. 
          </p>
        </div>
      </div>
    </div>
    <div className="col cardThree">
    <div className="card">
      <img
        className="bd-placeholder-img card-img-top imgThree"
        width="100%"
        height="140"
        alt="img"
        src="./img/recom.jpeg"      >
      </img>
      <div className="card-body">
        <h5 className="card-title">Suggestion Sale</h5>
        <p className="card-text">
        Sony INZONE H7 Wireless Gaming Headset - Up to 40 hours | PS5 | 
        </p>
      </div>
    </div>
  </div>
  <div className="col cardFour">
  <div classNameName="signIN" style={{margin: "10px", backgroundColor: '#DDE6ED', padding:'15px', borderRadius:'5px'}}>
  <button type="button"  className="btn btn-success signIn-btn" >Sign In</button>
  <h5>To Watch Free Shows</h5>
  </div>
  <div className="card" style={{marginTop:"1rem"}}>
    <img
      className="bd-placeholder-img card-img-top imgFour"
      width="100%"
      height="140"
      alt="img"
      src="./img/shoe.jpg"      >

    </img>
    <div className="card-body">
      <h5 className="card-title">Today Special</h5>
      <p className="card-text">
      Buy Footwear for Men. Huge Collection of Men's Footwear. Avail low price offers and discounts.       </p>
    </div>
  </div>
  
</div>
     <MoviesProm />
    </div>
    </Wrapper>
};

const Wrapper = styled.section`
margin:2rem 2rem;
.sales-div{
  display:flex;
  justify-content: center;
  
}
.card{
    border-radius:5px;
    box-shadow:0 0 20px 2px rgb(155, 164, 181);
    transition:1s;
}
.card:hover{
    transform:scale(1.1);
}
.imgFour{
    height:18rem;
}
.imgThree{
    height:20rem;
}
.imgTwo{
    height:20rem;
}
.imgOne{
    height:20rem;
}

.cardOne {
    
    width:22rem;
}

h5{
  margin:1rem;
  display:inline;
}

.signIn-btn {
  
  
  
}

.signIn-btn:hover {
  background-color: White; 
  color: Green;
  
}


`;