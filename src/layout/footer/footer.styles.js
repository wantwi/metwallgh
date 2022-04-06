import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: #5a514f;
  height: 25vh;
  padding: 20px;
  justify-content: space-between;
 
  @media screen and (min-width: 1700px) {
    height: 15vh;
  }
`;

export const SocialWrapper = styled.div`

display: flex;
flex-direction: row;
align-items:flex-end

`;

export const ContactWrapper = styled.div`
padding-left: 25px;
h3{
  color:#f1f1f1;
  margin-bottom:20px;
}
p{
  color:#f1f1f1;
  text-align: justify;
  margin-top:18px

}




`
