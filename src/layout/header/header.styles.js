import styled from "styled-components";

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
  height: 40px;
  background: #00adef;
  display: flex;
  gap: 40px;
  flex-direction: row;
  justify-content: center;
  a {
    align-self: center;
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
  height: 39vh;
  padding: 20px;
  gap: "40px";
`;

export const ServiceSection = styled.div`
  height: 100%;
  border: 1px solid #fff;
  flex-grow: 1;
  background: #fff;
  padding-left: 30px;
  p {
    padding: 10px 0;
  }
`;
export const NewsSection = styled.div`
  flex-grow: 3.5;
  height: 100%;
  border: 1px solid #fff;
  max-width: 600px;
  padding: 0 50px 0 0;
  p {
    align-self: center;
    text-align: justify;
    margin-right: 50px;
  }
`;

export const VideoSection = styled.div`
  flex-grow: 2;
  height: 100%;

  iframe {
    width: 100%;
    height: 100%;
  }
`;

export const Title = styled.h2`
  font-family: sans;
  margin: 0 0 20px 0;
`;
