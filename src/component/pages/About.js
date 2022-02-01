import React from 'react';
import Footer from '../layout/Footer';
import NavBar from '../layout/NavBar';
import "./About.css"
export default function About() {
  return (
      <div className='container-bg'>
          <NavBar/>
    <div className="about-section">
    <h1>About Us Page</h1>
    <p>Some text about who we are and what we do.</p>
    <p>Resize the browser window to see that this page is responsive by the way.</p>
  </div>
  
  <h2 style={{"textAlign":"center"}}>Our Team</h2>
  <div className="row">
    <div className="column">
      <div className="card">
        <img src="" alt="Jane" style={{ "width":"100%" }}/>
        <div className="container">
          <h2>Jane Doe</h2>
          <p className="title">CEO  Founder</p>
          <p>Some text that describes me lorem ipsum ipsum lorem.</p>
          <p>jane@example.com</p>
          <p><button className="button">Contact</button></p>
        </div>
      </div>
    </div>
  
    <div className="column">
      <div className="card">
        <img src="" alt="Mike" style={{ "width":"100%" }}/>
        <div className="container">
          <h2>Mike Ross</h2>
          <p className="title">Art Director</p>
          <p>Some text that describes me lorem ipsum ipsum lorem.</p>
          <p>mike@example.com</p>
          <p><button className="button">Contact</button></p>
        </div>
      </div>
    </div>
  
    <div className="column">
      <div className="card">
        <img src="" alt="John" style={{ "width":"100%" }}/>
        <div className="container">
          <h2>John Doe</h2>
          <p class="title">Designer</p>
          <p>Some text that describes me lorem ipsum ipsum lorem.</p>
          <p>john@example.com</p>
          <p><button className="button">Contact</button></p>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
  </div>
  );
}
