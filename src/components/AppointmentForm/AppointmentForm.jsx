import React from 'react';

const AppointmentForm = () => (
    <div className="bg-light py-5">
    <div className="container">
      <h2 className="text-center fw-bold">MAKE AN APPOINTMENT</h2>
      <hr
        style={{
          width: "60px",
          height: "4px",
          backgroundColor: "teal",
          margin: "0.5rem auto",
        }}
      />
      <p className="text-center text-muted mb-4">
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
      </p>
      <form>
        <div className="row mb-3">
          <div className="col-md-4">
            <input type="text" className="form-control" placeholder="Your Name" />
          </div>
          <div className="col-md-4">
            <input type="email" className="form-control" placeholder="Your Email" />
          </div>
          <div className="col-md-4">
            <input type="text" className="form-control" placeholder="Your Phone" />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-4">
            <input type="text" className="form-control" placeholder="Date (DD/MM/YYYY)" />
          </div>
          <div className="col-md-4">
            <select className="form-select">
              <option>Select Department</option>
              <option>Cardiology</option>
              <option>Neurology</option>
              <option>Orthopedics</option>
            </select>
          </div>
          <div className="col-md-4">
            <select className="form-select">
              <option>Select Doctor</option>
              <option>Dr. John Doe</option>
              <option>Dr. Jane Smith</option>
            </select>
          </div>
        </div>
        <div className="mb-3">
          <textarea className="form-control" placeholder="Message (Optional)" rows="3"></textarea>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">Make an Appointment</button>
        </div>
      </form>
    </div>
  </div>
);

export default AppointmentForm;
