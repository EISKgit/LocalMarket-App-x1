import React from "react";
import styled from "styled-components";
import {RiShoppingCartFill} from 'react-icons/ri';
import {ImSearch} from 'react-icons/im';




export default function NavItems () {
    return <Wrapper>
      <nav className="navbar navbar-expand-lg  " style={{backgroundColor: "#e3f2fd"}}>

  <div className="container-fluid">
    <a className="navbar-brand nav-text" href="/">LocalMarket</a>
    <ul className="Add-box1">
    <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle nav-text" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Address
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item nav-text" href="/">Current Address</a></li>
            <li><a className="dropdown-item nav-text" href="/">Add/Remove Address</a></li>
            
          </ul>
        </li>
      </ul>
    <form className="d-flex Add-box" role="search">
        <input className="form-control me-1" type="search" placeholder="Search Items" aria-label="Search"/>
        <button className="btn btn-outline-info btn-light btn-primary" type="submit"><ImSearch /></button>
      </form>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

      

        <li className="nav-item">
          <a className="nav-link active nav-text" aria-current="page" href="/">Account</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active nav-text" aria-current="page" href="/">Orders & Return</a>
        </li>
        
        <li className="nav-item">
        <div className="cart-div">
          {/* <FontAwesomeIcon icon="fa-regular fa-cart-arrow-down" bounce /> */}
          
          
          <a className="nav-link active nav-text cart-link" href="/" style={{fontSize:"17px",display:"flex"}}><RiShoppingCartFill className="cart-icon"  size={30} /><span className="cart-count">0</span>
          <h6 style={{}}>Cart</h6>
          </a>
        </div>
        </li>
        
        
      </ul>
     
    </div>
  </div>
</nav>
    </Wrapper>
};

const Wrapper = styled.section`
.cart-count{
  margin-top:-9px;
  margin-left:-15px;
  position:absolute;
  background-color:#D3D3D3;
  
  height:25px;
  width:25px;
  
  text-align:center;
  border-radius:100%;
}
  .navbar-brand{
    margin-left:2rem;
  }
  .Add-box1{
    margin-left:8rem;
  }
  .Add-box{
    margin-left:1rem;

  }
  .navbar-nav{
    font-size:1rem;
    display:flex;
    gap:10px;
  }

  .collapse{
    
    margin-left:7rem;
    
  }

  ul{
    list-style-type: none;
    
  } 

  .dropdown-toggle{
    padding:15px 15px 0px 0px;
  }

  .nav-link:hover{
    color:#537188;
  }
  .cart-div{
    position:relative;
  }

  .cart-icon{
    position:relative;
  }
 

`;