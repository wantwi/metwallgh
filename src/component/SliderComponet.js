import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image1 from "../images/img1.jpg";
import Image2 from "../images/img2.jpg";
import Image3 from "../images/img3.jpg";
import { Silder } from "../layout/header/header.styles";
import styled from "styled-components";

function SliderComponet() {
  return (
    <div>
      <Carousel showThumbs={false}>
        <div>
          <img src={Image1} className="slider-image" />

          <p className="legend" style={styles.legend}>Legend 1</p>
        </div>
        <div>
          <img src={Image2} className="slider-image" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={Image3} className="slider-image" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
}

export default SliderComponet;

const styles = {
  legend:{
    bottom:"200px",
    background:"#8f8482",
    padding:"50px 15px"
  }
}
