import React from 'react';
import styled from 'styled-components';

export default function TodayDeals(){
    return <Wrapper>
    <div style={{display:"flex"}}>
    <h4>Latest Mobiles</h4><span style={{marginLeft:"60rem"}}><a href='/'>See More</a></span>
    </div>

    <div style={{display:"flex"}}>

    <div className="card" style={{width: "15rem",display:"grid",justifyItems:"center",margin:"1rem"}}>
    <div>
      <img className="bd-placeholder-img card-img-top"
        style={{margin:"5px"}}
        src="https://m.media-amazon.com/images/I/41U0KBNRk5L._AC_UF226,226_FMjpg_.jpg"
        alt="img" 
         ></img>
    </div>
      <div className="card-body">
        <p className="card-text">Lava Agni 2 available.</p>
      </div>
      <div style={{marginBottom:"5px"}}>
      <a href="/" className="btn btn-primary">Buy Now</a>
      </div>
    </div>

    {/* 2nd deal */}

    <div className="card" style={{width: "15rem",display:"grid",justifyItems:"center",margin:"1rem"}}>
    <div>
      <img className="bd-placeholder-img card-img-top"
        style={{margin:"5px"}}
        alt="img"
        src="https://m.media-amazon.com/images/I/41lvprpWDjL._AC_UF226,226_FMjpg_.jpg" 
         ></img>
    </div>
      <div className="card-body">
        <p className="card-text">Redmi 12C.</p>
      </div>
      <div style={{marginBottom:"5px"}}>
      <a href="/" className="btn btn-primary">Buy Now</a>
      </div>
    </div>

     {/* 3nd deal */}

     <div className="card" style={{width: "15rem",display:"grid",justifyItems:"center",margin:"1rem"}}>
    <div>
      <img className="bd-placeholder-img card-img-top"
        style={{margin:"5px"}}
        alt="img"
        src="https://m.media-amazon.com/images/I/71HOERLKYqL._AC_UF226,226_FMjpg_.jpg"         ></img>
    </div>
      <div className="card-body">
        <p className="card-text">Realme Narzo N53.</p>
      </div>
      <div style={{marginBottom:"5px"}}>
      <a href="/" className="btn btn-primary">Buy Now</a>
      </div>
    </div>

     {/* 4nd deal */}

     <div className="card" style={{width: "15rem",display:"grid",justifyItems:"center",margin:"1rem"}}>
    <div>
      <img className="bd-placeholder-img card-img-top"
        style={{margin:"5px"}}
        alt="img"
        src="https://m.media-amazon.com/images/I/413+4T+ISML._AC_UF226,226_FMjpg_.jpg"         ></img>
    </div>
      <div className="card-body">
        <p className="card-text">Redmi A2.</p>
      </div>
      <div style={{marginBottom:"5px"}}>
      <a href="/" className="btn btn-primary">Buy Now</a>
      </div>
    </div>

     {/* 5nd deal */}

     <div className="card" style={{width: "15rem",display:"grid",justifyItems:"center",margin:"1rem"}}>
    <div>
      <img className="bd-placeholder-img card-img-top"
        style={{margin:"5px"}}
        alt="img"
        src="https://m.media-amazon.com/images/I/41xnfQ6+TCL._AC_UF226,226_FMjpg_.jpg"         ></img>
    </div>
      <div className="card-body">
        <p className="card-text">Vivo Smartphone.</p>
      </div>
      <div style={{marginBottom:"5px"}}>
      <a href="/" className="btn btn-primary">Buy Now</a>
      </div>
    </div>

     
    </div>

    

    </Wrapper>
}

const Wrapper =styled.section`

margin:0 1rem 0 1rem;
background-Color:#9BABB8;
padding:1rem;
    border-radius:5px;
    
   
`;