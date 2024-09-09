import React from "react";
import './ContactSection.css'
const ContactSection = () => {
  return (
    <section className="contact-section py-5">
      <div className="container">
        {/* Contact Title and Description */}
        <h2 className="text-center mb-3">Contact</h2>
        <p className="text-center mb-5">
          Necessitatibus eos consequatur ex aliquid fuga enim quidem sint consectetur velit
        </p>
        
        {/* Embedded Google Map with Width Control */}
        <div className="row justify-content-center">
          <div className="col-lg"> 
            <div className="map-responsive">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373631531682!3d-37.8162792797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5772f1aa0b6d5f!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1603244616568!5m2!1sen!2sus"
                width="100%"
                height="400"
              
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default ContactSection;
