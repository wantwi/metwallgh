import styled from "styled-components";
import { device } from "../../utils/BreakPoints";

export const HeaderContaniner = styled.div`
  height: 80px;
  background: #2c3192;
  display: flex;
  flex-direction: column;

  img {
    width: 50em;
  }
`;
export const LogoWrapper = styled.div`
  align-self: start;
`;

export const SocialIconsWrapper = styled.div`
  align-self: end;
  margin-top: -35px;
  margin-right: 30px;
`;

export const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export const NavBar = styled.div`
  height: 45px;
  background: #00adef;
  display: flex;
  gap: 40px;
  flex-direction: row;
  justify-content: center;
  a {
    align-self: center;
    font-weight: bold;
  }
`;

export const TextSection = styled.div`
  display: flex;
  padding: 15px 40px;
  flex-direction: column;
  background: #c5c4e2;
  height: 200px;
  h3 {
    align-self: center;
    margin: 30px auto;
  }
  p {
    align-self: center;
    text-align: justify;
  }
`;

export const GridSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 45vh;
  gap: "40px";
  background: #fff;
  @media screen and (min-width: 1700px) {
    height: 25vh;
  }
`;

export const ServiceSection = styled.div`
  width: 15%;

  padding: 0 20px 0 30px;
  p {
    padding: 10px 0;
  }
`;
export const NewsSection = styled.div`
  width: 50%;

  padding: 0 20px;
  p {
    align-self: center;
    text-align: justify;
  }
`;

export const VideoSection = styled.div`
  width: 35%;
  padding: 0 20px;
`;

export const Title = styled.h2`
  font-family: sans;
  margin: 20px 0 20px 0;
`;

export const SearchWrapper = styled.div`
  position: relative;
  input {
    position: absolute;
    padding: 3px 5px;
    top: 10px;
    left: 100px;
  }
`;
