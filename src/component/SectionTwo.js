import React from "react";
import Vid from "../video/vid.mp4";
import {
  GridSection,
  ServiceSection,
  NewsSection,
  VideoSection,
} from "../layout/header/header.styles";

const SectionTwo = () => {
  return (
    <GridSection>
      <ServiceSection />
      <NewsSection />
      <VideoSection>{/* <iframe src={Vid} /> */}</VideoSection>
    </GridSection>
  );
};

export default SectionTwo;
