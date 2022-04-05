import React from "react";
import Vid from "../video/vid.mp4";
import "video-react/dist/video-react.css";

import { Player } from "video-react";
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
      <VideoSection>
        {" "}
        <Player>
          <source src={Vid} />
        </Player>
      </VideoSection>
    </GridSection>
  );
};

export default SectionTwo;
