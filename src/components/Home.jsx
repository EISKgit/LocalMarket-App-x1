import React from "react";
import styled from "styled-components";
import Adv from "./Adv";
import SaleOne from "./SaleOne";
import TodayDeals from "./TodayDeals";

export default function Home() {
  return (
    <Wrapper>
      <Adv />
      <SaleOne />
      <TodayDeals />
    </Wrapper>
  );
}

const Wrapper = styled.section``;
