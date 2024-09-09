import React from 'react';
import { FaHeartbeat, FaPills, FaMicroscope } from 'react-icons/fa';
import { RiHourglass2Fill } from 'react-icons/ri';
import './DynamicCard.css'
// DynamicCard component for displaying each card
const DynamicCard = ({ icon: Icon, text , number }) => (
  <div
    className="card"
    style={{
      width: '18rem',
      border: '1px solid #ddd',
      borderRadius: '3px',
      boxShadow: '12px 6px 20px rgba(0, 0, 0, 0.1) ',
      padding: '2rem',
      top: '60px',
    }}
  >
    
    <div className="d-flex align-items-center mb-3">
   
      <Icon size={35} color="#2abbc5ef" className="me-2" /> {/* Dynamic Icon */}
      <div className='num'>
      <p className='fs-2 fw-bold text-muted'> {number}</p>
      </div>
    </div>
    <div className="card-body">
      <p className="card-text ">{text}</p>
    </div>
  </div>
);



export default DynamicCard;
