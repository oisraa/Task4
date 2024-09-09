import React from 'react'
import './HelpSection.css'
const HelpSection = () => {
  return (
    <div className="div" style={{marginTop:'8rem'}}>
      <div
      className="text-white text-center py-5 mt-5 custom-bg-spacing" style={{ backgroundColor: '#2abbc5ef' , height:'60vh' }}
     
     >
        <div className="container">
          <h2 className="mb-3 fw-bold">In an emergency? Need help now?</h2>
          <p className="mb-4 fs-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button type="button" class="btn btn-outline-light btn-lg">Make an appointment</button>
        </div>
      </div>
      </div>
  )
}

export default HelpSection


