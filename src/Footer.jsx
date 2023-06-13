import React from "react";
import styled from "styled-components";
import {FaFacebook} from 'react-icons/fa';
import {AiFillTwitterCircle,AiFillInstagram} from "react-icons/ai";
import {CgWebsite} from "react-icons/cg";



export default function Footer (){
    return <Wrapper>
            <div className="Mail-To">
                <div><h6>Register With Your Mail To get Notified</h6></div>
                <div>
                <button type="button"  className="btn btn-success signIn-btn" >Register</button>
                </div>
            </div>



        <div className="Pri-Fo">
            <div>
                <h6>Know Us</h6>
                <div style={{display:"grid"}}>
                <a href="/">About</a>
                <a href="/">Contact Us</a>
                <a href="/">Latest News</a>
                
                </div>
            </div>

            <div>
                <h6>Connect With Us</h6>
                <div style={{display:"grid"}}>
                <a href="/"><FaFacebook /> FaceBook</a>
                <a href="/"><AiFillTwitterCircle /> Twitter</a>
                <a href="/"><AiFillInstagram /> Instagram</a>
                <a href="/"><CgWebsite /> Offical Website</a>
                </div>
            </div>

            <div>
                <h6>Make Money With Us</h6>
                <div style={{display:"grid"}}>
                <a href="/">Sell Your Products</a>
                <a href="/">Advertise Your Product</a>
                <a href="/">Become a Affliate</a>
                </div>
            </div>

            <div>
                <h6>Features Section</h6>
                <div style={{display:"grid"}}>
                <a href="/">Account</a>
                <a href="/">Return Center</a>
                <a href="/">Purchase Protection</a>
                <a href="/">App Download</a>
                <a href="/">Help</a>
                </div>
            </div>
        </div>
        
        {/* Sec-Fo */}
        <div className="Sec-Fo">
            <a href="/">Conditions of Use & Sale</a>
            <a href="/">Privacy Note</a>
            <a href="/">Interest based Ads</a>
                   
        </div>
         <div>
            <a href="/">
                <p>@{new Date().getFullYear()}, LocalMarket.com,Inc.</p>
             </a>
         </div>   
    </Wrapper>
    ;
}


const Wrapper = styled.section`
display:flex;
flex-direction:column;
justify-content: center;
align-items: center;
text-align:left;
margin-top:2px;
background-Color:#e3f2fd;
.Pri-Fo{
    display: flex;
    flex-direction: row;
    gap:7rem;
    margin:7rem 3rem;
    
    
}
.Sec-Fo{
    display:flex;
    gap:20px;
}
a{
    text-decoration:none;
    Color:gray;
}
a:hover{
    color:black;
}

.signIn-btn:hover {
  background-color: White; 
  color: Green;
  
}
.Mail-To{
    margin:1rem;
    padding:1rem;
    display:flex;
    background-color:white;
    justify-content: center;
    text-align:center;
    align-items: center;
    gap:4rem;
    transform:translateY(-50%);
    border-radius:5px;
}

`;