import React from "react";
import Headers from "../../components/Header.jsx";
import Intro from "./intro.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Resume from "./resume.jsx";
import Banner from "./Banner.jsx";
import Contact from "./Contact.jsx";
import Footer from "../../components/Footer.jsx";
import UpArrow from "./UpArrow.jsx";
import { useSelector } from "react-redux";

export default function Home() {
  const { portfolioData } = useSelector((state) => state.root);
  return (
    <div>
      {portfolioData && (
        <div id="home">
          <Headers />
          <Intro />
          <About />
          <Banner />
          <Projects />
          <Resume />
          <Contact />
          <Footer />
          <UpArrow />
        </div>
      )}
    </div>
  );
}
