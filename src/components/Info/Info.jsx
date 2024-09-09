import React from 'react'
import './Info.css'
const Info = () => {
  return (
    <section className="container py-5">
    <div className="row">
      {/* Contact Cards Section */}
      <div className="col-lg-4 d-flex flex-column gap-4">
        {/* Address Card */}
        <div className="card shadow-sm p-4 text-center mb-4">
          <i className="bi bi-geo-alt fs-1 text-primary mb-3"></i> {/* Address Icon */}
          <h5 className="card-title">Address</h5>
          <p className="card-text">A108 Adam Street, New York, NY 535022</p>
        </div>

        {/* Row for Call Us and Email Us Cards */}
        <div className="row g-3">
          {/* Call Us Card */}
          <div className="col-md-6">
            <div className="card shadow-sm p-4 text-center">
              <i className="bi bi-telephone fs-1 text-primary mb-3"></i> {/* Phone Icon */}
              <h5 className="card-title">Call Us</h5>
              <p className="card-text">+1 5589 55488 55</p>
            </div>
          </div>
          {/* Email Us Card */}
          <div className="col-md-6">
            <div className="card shadow-sm p-4 text-center">
              <i className="bi bi-envelope fs-1 text-primary mb-3"></i> {/* Email Icon */}
              <h5 className="card-title">Email Us</h5>
              <p className="card-text">info@example.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="col-lg-8">
        <div className="card shadow-sm p-4">
          <form>
            <div className="row mb-3">
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Your Name" />
              </div>
              <div className="col-md-6">
                <input type="email" className="form-control" placeholder="Your Email" />
              </div>
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Subject" />
            </div>
            <div className="mb-3">
              <textarea className="form-control" rows="4" placeholder="Message"></textarea>
            </div>
           {/* Centered Button */}
           <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary">Send Message</button>
              </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Info