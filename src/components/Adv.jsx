import React from "react";
import styled from "styled-components";
import Carousel from 'react-bootstrap/Carousel';


export default function Adv () {
    return <Wrapper>
        <div className="carousel slide carousel-fade">
      <Carousel className="carousel-inner" controls={false} indicators={false}>
        <Carousel.Item className="carousel-item active" interval={1500}>
          <img
            className="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
            width="800"
            height="400"
            alt="adv-01"
            src="./img/adv-01.jpg"
          >
          </img>
        </Carousel.Item>
        <Carousel.Item className="carousel-item" interval={1500}>
        <img
        className="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
        width="800"
        height="400"
        alt="adv02"
        src="./img/adv02.jpg"      >
      </img>
        </Carousel.Item>
        <Carousel.Item className="carousel-item" interval={1500}>
        <img
        className="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
        width="800"
        height="400"
        alt="adv03"
        src="./img/adv03.jpg"      >
      </img>
        </Carousel.Item>
      </Carousel>
    </div>
    </Wrapper>
};

const Wrapper = styled.section`
    margin-top:0.1rem;
    .carousel-inner{
        height:11rem;
    }
`;