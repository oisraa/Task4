import React from 'react';
import { Button } from 'react-bootstrap';

const Hero = ({ bgImg, desc, title, firstBtn }) => {
  return (
    <div
      className="hero d-flex align-items-center justify-content-center text-center position-relative"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '90vh', // Adjust height as needed
      }}
    >
      {/* Overlay to darken the background for better text readability */}
      <div className="position-absolute w-100 h-100 bg-dark opacity-50"></div>

      {/* Transparent White Box Content Wrapper */}
      <div className="position-relative p-4 bg-white bg-opacity-75 rounded" style={{ maxWidth: '1000px', zIndex: 1 }}>
        <h1 className="text-dark">{title}</h1>
        <p className="text-dark">{desc}</p>
        <Button variant="primary" className="bg-my-primary">
          {firstBtn}
        </Button>
      </div>
      
    </div>
  );
};

export default Hero;
