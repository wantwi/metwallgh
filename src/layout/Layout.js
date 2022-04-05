import React from "react";
import Section from "../component/Section";
import SectionTwo from "../component/SectionTwo";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <Section />
      <SectionTwo />
      <Footer/>
    </div>
  );
};

export default Layout;
