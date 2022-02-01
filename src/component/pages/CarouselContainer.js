import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./sidebar.css";


const CarouselContainer = () => {
  return (
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={2000} style={{'height':"300px"}}>
        <img style={{'height':"400px"}}
          className="d-block w-100"
          src={"https://media.istockphoto.com/photos/long-and-dark-hospital-hallway-picture-id108162808?b=1&k=20&m=108162808&s=170667a&w=0&h=LJDGM5pEfyQC7e1auaTNMqMytM2TrkDd65Ou3MvCR7E="}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="don">MEDICINE</h3>
          <p className="dons">DEALS HEALTH ISSUE</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000} style={{'height':"300px"}}>
        <img style={{'height':"400px"}}
          className="d-block w-100"
          src={"https://media.istockphoto.com/photos/lighted-halloween-pumpkin-jack-o-lantern-wearing-covid-ppe-mask-on-picture-id1272072577?b=1&k=20&m=1272072577&s=170667a&w=0&h=IuoxFL3tUdauZdt78s8gj63PhBdTW-y2q8PIKBcyxd0="}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className="don">MEDICALS</h3>
          <p className="dons">HEALTHIFY YOU</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000} style={{'height':"300px"}}>
        <img
           style={{'height':"400px"}}
          className="d-block w-100"
          src={"https://images.unsplash.com/photo-1472145246862-b24cf25c4a36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMG1lZGljYWwlMjBob3Jpem9udGFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className="don">MEDICALS</h3>
          <p className="dons">BOOSTS YOUR HEALTH</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselContainer;