import React from "react";
import Vid from "../video/vid.mp4";
import "video-react/dist/video-react.css";
import ReactPlayer from "react-player";
import { Player } from "video-react";
import {
  GridSection,
  ServiceSection,
  NewsSection,
  VideoSection,
  Title,
} from "../layout/header/header.styles";

const SectionTwo = () => {
  return (
    <GridSection>
      <ServiceSection>
        <Title>Our Service</Title>
        <p>Archetectual Desgin</p>
        <p>Building Construction</p>
        <p>Steel Fabrication</p>
        <p>Real Estate Development</p>
        <p>Interior Desgin</p>
      </ServiceSection>
      <NewsSection>
        <Title>Industry News</Title>
        <p>
          Where does it come from? Contrary to popular belief, Lorem Ipsum is
          not simply random text. It has roots in a piece of classical Latin
          literature from 45 BC, making it over 2000 years old. Richard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia,
          looked up one of the more obscure Latin words, consectetur, from a
          Lorem Ipsum passage, and going through the cites of the word in
          classical literature, discovered the undoubtable source. Lorem Ipsum
          comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et.
        </p>
      </NewsSection>
      <VideoSection>
        <Title>Post Video</Title>
        <ReactPlayer
        className="videPlayer"
        
         
        
        
        url="https://www.youtube.com/watch?v=I-kach9rCKA"
        
        />

        
      </VideoSection>
    </GridSection>
  );
};

export default SectionTwo;
