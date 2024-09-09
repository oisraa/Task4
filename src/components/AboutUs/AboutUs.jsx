import React from "react";
import { FaPlayCircle } from "react-icons/fa"; // FontAwesome video play icon


const AboutUs = ({ title, subtitle, imageUrl, mainText, points , title1 }) => {
  return (
    <div className="container my-5">
      {/* Section Header */}
      <div className="text-center mb-4 ">
        <h2 className="fw-bold fs-1 text-muted">{title}</h2>
        <hr
          style={{
            width: "60px",
            height: "4px",
            backgroundColor: "teal",
            margin: "0.5rem auto",
          }}
        />
        <p className="text-muted">{subtitle}</p>
      </div>

      {/* Content Row */}
      <div className="row justify-content-center align-items-center">
        {/* Image Section */}
        <div className="col-md-5 text-center position-relative ">
          <img
            src={imageUrl}
            alt="About Us"
            className="img-fluid rounded"
            style={{ maxWidth: "100%" }}
          />
          <FaPlayCircle
            size={70}
            color="teal"
            className="position-absolute"
            style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
          />
        </div>

        {/* Text Section */}
        <div className="col-md-6 mt-4 mt-md-0 ">
          <h4 className="fw-bold mb-3 text-muted ">{mainText.heading}</h4>
          <p className="text-muted mb-4">{mainText.paragraph}</p>
          <ul className="text-muted">
            {points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <h2 className="text-muted fs-6 ">{title1}</h2>
        </div>
        
      </div>

    </div>
   
  );
};
export default AboutUs