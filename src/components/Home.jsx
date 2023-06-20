import {React, useEffect } from "react";
import styled from "styled-components";
import Adv from "./Adv";
import SaleOne from "./SaleOne";
import TodayDeals from "./TodayDeals";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import getDataMethod  from "../state/actionCreator";

export default function Home() {
  // const ApiData = useSelector((state) => state.ApiData);
  console.log(useSelector((state) => state));
  const API = "https://fakestoreapi.com/products";
  const dispatch = useDispatch();

  useEffect(() => {
    getData(API);
  }, []); 
  
  const getData = async (url) => {
    try{
      const res = await axios.get(url);
      const products = await res.data;
      console.log(products);
      dispatch(getDataMethod(products));
    }
    catch(error){
      console.log(error);
    }
  };




  return (
    <Wrapper>
     
      <Adv />
      <SaleOne />
      <TodayDeals />
    </Wrapper>
  );
}

const Wrapper = styled.section``;
