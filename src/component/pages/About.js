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
    <p>MEDIPHARM provides you a healthy service !,Even In case of Emergency LockDown</p>
  </div>
  
  <h2 style={{"textAlign":"center"}}>Our Team</h2>
  <div className="row" style={{height:"20px"}}>
    <div className="column">
      <div className="card">
        <img src="https://media.istockphoto.com/photos/ambulance-van-on-highway-with-flashing-lights-picture-id911803146?b=1&k=20&m=911803146&s=170667a&w=0&h=wblnVWLaaUgjAi6-so7XkR3VSZPiIVQe_fIngh7Nb34=" alt="Jane" style={{ "width":"100%","height":"150px" }}/>
        <div className="container">
          <h2 class="title">TRANSPORTATION</h2>
          <p className="title">OUR TRANSPORTATION</p>
          <p class="title">WE PROVIDE A AMBULANCE TRANSPORATION IN CASE OF EMERGENCY</p>
          <p class="title">medipharm@example.com</p>
          <p><button className="button">Contact</button></p>
        </div>
      </div>
    </div>
  
    <div className="column">
      <div className="card">
        <img src="https://images.unsplash.com/photo-1577401132921-cb39bb0adcff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVkaWNpbmVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="Mike" style={{ "width":"100%","height":"150px" }}/>
        <div className="container">
          <h2 class="title">MEDICINES</h2>
          <p className="title">HIGH CLASS MEDICINES</p>
          <p class="title">WE PROVIDE ALL TYPE OF MEDICINES FOR SEVERE DISEASE</p>
          <p class="title">MEDIPHARM@example.com</p>
          <p><button className="button">Contact</button></p>
        </div>
      </div>
    </div>
  
    <div className="column">
      <div className="card">
        <img src="https://media.istockphoto.com/photos/medical-worker-wearing-personal-protective-equipment-doing-corona-picture-id1297810407?b=1&k=20&m=1297810407&s=170667a&w=0&h=1v5rc9sDIJvyjESAhNDksU2_oDKvUPbcEqYYVqYikEw=" alt="John" style={{ "width":"100%" ,"height":"150px" }}/>
        <div className="container">
          <h2 class="title">COVID CARE</h2>
          <p class="title">EMERGENCY</p>
          <p class="title">WE PROVIDE ALL TYPE OF MEDICINE FOR COVID</p>
          <p class="title">covidmedipharm@example.com</p>
          <p><button className="button">Contact</button></p>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
  </div>
  );
}
