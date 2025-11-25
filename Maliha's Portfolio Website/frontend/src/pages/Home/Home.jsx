import React from 'react'
import Headers from '../../components/Header.jsx';
import Intro from './intro.jsx';
import About from './About.jsx';
import Projects from './Projects.jsx';
import Resume from './resume.jsx';
import Banner from './Banner.jsx';

export default function Home() {
  return (
    <div id='home'>
      <Headers />
      <Intro />
      <About />
      <Banner />
      <Projects />
      <Resume />
    </div>
  )
}
