// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light py-5">
      <div className="container">
        <div className="row">
          {/* Footer Column 1: Company Info */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="fw-bold text-muted">Medicico</h5>
            <p>A108 Adam Street<br />New York, NY 535022</p>
            <p>
              <strong>Phone:</strong> +1 5589 55488 55<br />
              <strong>Email:</strong> info@example.com
            </p>
            {/* Social Media Icons */}
            <div className="d-flex gap-3">
              <a href="#" className="text-muted"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-muted"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-muted"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-muted"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

          {/* Footer Column 2: Useful Links */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="fw-bold text-muted">Useful Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted">Home</a></li>
              <li><a href="#" className="text-muted">About us</a></li>
              <li><a href="#" className="text-muted">Services</a></li>
              <li><a href="#" className="text-muted">Terms of service</a></li>
              <li><a href="#" className="text-muted">Privacy policy</a></li>
            </ul>
          </div>

          {/* Footer Column 3: Our Services */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="fw-bold text-muted">Our Services</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted">Web Design</a></li>
              <li><a href="#" className="text-muted">Web Development</a></li>
              <li><a href="#" className="text-muted">Product Management</a></li>
              <li><a href="#" className="text-muted">Marketing</a></li>
              <li><a href="#" className="text-muted">Graphic Design</a></li>
            </ul>
          </div>

          {/* Footer Column 4: Miscellaneous Links */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="fw-bold text-muted">Hic solutasetp</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted">Molestiae accusamus iure</a></li>
              <li><a href="#" className="text-muted">Excepturi dignissimos</a></li>
              <li><a href="#" className="text-muted">Suscipit distinctio</a></li>
              <li><a href="#" className="text-muted">Dilecta</a></li>
              <li><a href="#" className="text-muted">Sit quas consectetur</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
