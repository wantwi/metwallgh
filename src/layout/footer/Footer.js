import React from "react";
import SocialComponent from "../../component/socialComponent";
import { FooterContainer, SocialWrapper, ContactWrapper } from "./footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <ContactWrapper>
        <h3>Contact Us</h3>
        <p>Spintex Road, Shell Signboard</p>
        <p>P. O. Box TN 487, Tehie Nungua Estates</p>
        <p>info@metwallgroup.com</p>
        <p>Monday - Friday: 8:30 am - 5:30 pm</p>
        <p>Digital Address: GZ-190-0635</p>
      </ContactWrapper>
      <SocialWrapper>
        <SocialComponent />
      </SocialWrapper>
    </FooterContainer>
  );
};

export default Footer;
