import React from 'react';
import styled from 'styled-components';



export default function Error(){

    

    return <Wrapper>
        <div className='container'>
        <p className='fof'>404</p>
        <p>Requested page not exist!</p>
        <button type="button"  className="btn btn-success signIn-btn" >Redirect Home Page</button>
        </div>
    </Wrapper> ;
}

const Wrapper = styled.section`
display:flex;
text-align:center;
margin-bottom:2rem;
gap:1rem;
.signIn-btn:hover {
  background-color: White; 
  color: Green;
}

.fof{
    font-size:10rem;
  }
  `;