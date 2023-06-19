import React from "react";
import styled from "styled-components";
import Adv from "./Adv";
import SaleOne from "./SaleOne";
import TodayDeals from "./TodayDeals";
import { useSelector } from "react-redux";

export default function Home() {
  const name = useSelector(state => state.name.name);
 
 
  return (
    <Wrapper>
    <h1>{name}</h1>
      <Adv />
      <SaleOne />
      <TodayDeals />
    </Wrapper>
  );
}

const Wrapper = styled.section``;
