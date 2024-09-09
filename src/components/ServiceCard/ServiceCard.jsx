import React from 'react';

const ServiceCard = ({ icon, title, description }) => (
  <div className="col-md-4 text-center mb-4">
    <div className="rounded-circle bg-light p-4 d-inline-block mb-3">
      {icon}
    </div>
    <h5 className="fw-bold">{title}</h5>
    <p className="text-muted">{description}</p>
  </div>
);

export default ServiceCard;
