import React from 'react'
import "../css/aboutme.css"
import mukembiCV from "../resouces/mukembiCV.pdf"
import Mukembimain from "../resouces/Mukembimain.png"

const aboutme = () => {
  return (
    <div className='about_me' id='aboutme'>
        <h1>Who is Mukembi?</h1>
        <img src={Mukembimain} alt="Mukembi Leviticus" className='mukembi'/>
        <h3>Full-Stack Web Developer.</h3>
        <p>I'm a Full-stack web developer with 5+ years of experience in building small and medium websites. I build live internet things.</p>
        <p>My passion for programming begun in 2018 when I bought my first laptop. The curiosity in me could not let met settle until I became a developer.</p>
        <h4>1. Tech Stack (MERN):</h4>
        <ul>
          <li>Frontend: HTML5, CSS3, ReactJS, and React-Redux.</li>
          <li>Backend: NordJs & ExpressJs.</li>
          <li>Database: MongoDB.</li>
          <li>API: RESTful.</li>
        </ul>
        <h4>2. WordPress:</h4>
        <p>I will develop, design, and re-design a WordPress website with the latest trending designs, tools, and technology. The website will be built as per your requirements.</p>
        <h4>Some of my services include:</h4>
        <ul>
          <li>Latest WordPress Installation and Setup.</li>
          <li>Fully Responsive Website (Mobile Friendly).</li>
          <li>WordPress Design & Development.</li>
          <li>Custom login.</li>
          <li>WordPress Customization.</li>
          <li>WordPress Speed Optimization.</li>
          <li>SEO Optimized Sites (Premium SEO Plugins).</li>
        </ul>
        <h4>Projects I have worked on:</h4>
        <ul>
          <li>An online bus ticketing site.</li>
          <li>A question and answer site for technology enthusiasts.</li>
          <li>A computer technology information site.</li>
          <li>An online movie shop.</li>
          <li>Assignment solutions websites.</li>
          <li>A social media marketing website for connecting influencers and brands.</li>
          <li>A WordPress technology magazine.</li>
        </ul>
        <h3>Technoking.</h3>
        <p>I love technology. I believe technology is changing the world at a rapid rate. Then WHY shouldn't I be part of the change?</p>
        <h3>Electric Cars Devotee.</h3>
        <p>I'm the greatest Nikola Tesla, Elon Musk, Tesla, BasiGo, and electric cars fan from Kenya. I believe this is the future.</p>
        <p>I talk about Tesla electric cars at <a href="https://twitter.com/teslacarsonly">@teslacarsonly</a> & cars in Kenya at <a href="https://twitter.com/kenyacarsonly">@kenyacarsonly</a> on Twitter.</p>
        <h3>Entrepreneur.</h3>
        <p>My Entrepreneurship journey begun in 2018 immediately after completion of my high school studies. Since then I have several businesses and failed several times.</p>
        <p>My greatest breakthrough was Technaire.com, a technology reviews website. I sold the business while still young due to financial constraints.</p>
        <button className='cv_button'><a href={mukembiCV} download="mukembiCV">DOWNLOAD RESUME</a></button>
    </div>
  )
}

export default aboutme