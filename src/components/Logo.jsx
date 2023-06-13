import React from "react";
import {NavLink} from "react-router-dom";


export default function Logo (){
    return (<NavLink to="/">
    <img src="/img/logo.png" alt="logo.png" className="logo"/>
  </NavLink>);
};

