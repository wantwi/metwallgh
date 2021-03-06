import React from "react";
import { Grid, Col, Row } from "react-styled-flexboxgrid";
import {
  HeaderContaniner,
  LogoWrapper,
  SocialIconsWrapper,
  NavBar,
  SearchWrapper,
} from "./header.styles";
import Logo from "../../images/logo.jpg";
import SliderComponet from "../../component/SliderComponet";
import SocialComponent from "../../component/socialComponent";

// export const HeaderContaniner = styled.div`
//   height: 70px;
//   background: "green";
// `;

// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
// `;

function Header() {
  return (
    <>
      <HeaderContaniner>
        <LogoWrapper>
          <img className="img" src={Logo} />
        </LogoWrapper>
        <SocialIconsWrapper>
          <SocialComponent />
        </SocialIconsWrapper>
      </HeaderContaniner>
      <NavBar>
        <a>Home</a>
        <a>About Us</a>
        <a>Projects</a>
        <a>Services</a>
        <a>Contact Us</a>
        <SearchWrapper>
          <input placeholder="search" />
        </SearchWrapper>
      </NavBar>
      <SliderComponet />
    </>
  );
}

export default Header;
