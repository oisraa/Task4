import React from 'react'
import "./Doctors.css"
const Doctors = () => {
  return (
    <div className="container my-5">
      {/* Doctors Section */}
      <section className="text-center mb-5">
        <h2 className="mb-3">Doctors</h2>
        <p className="text-muted mb-4">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        <div className="row justify-content-center">
          {/* Doctor Card 1 */}
          <div className="col-md-3 mb-4">
            <div className="card shadow-sm h-100">
              <img src="/assets/img/doctors/doctors-1.jpg" className="card-img-top img-fluid" alt="Walter White" />
              <div className="card-body">
                <h5 className="card-title">Walter White</h5>
                <p className="card-text text-muted">Chief Medical Officer</p>
              </div>
            </div>
          </div>
          {/* Doctor Card 2 */}
          <div className="col-md-3 mb-4">
            <div className="card shadow-sm h-100">
              <img src="/assets/img/doctors/doctors-2.jpg" className="card-img-top img-fluid" alt="Sarah Jhonson" />
              <div className="card-body">
                <h5 className="card-title">Sarah Jhonson</h5>
                <p className="card-text text-muted">Anesthesiologist</p>
              </div>
            </div>
          </div>
          {/* Doctor Card 3 */}
          <div className="col-md-3 mb-4">
            <div className="card shadow-sm h-100">
              <img src="/assets/img/doctors/doctors-3.jpg" className="card-img-top img-fluid" alt="William Anderson" />
              <div className="card-body">
                <h5 className="card-title">William Anderson</h5>
                <p className="card-text text-muted">Cardiology</p>
              </div>
            </div>
          </div>
          {/* Doctor Card 4 */}
          <div className="col-md-3 mb-4">
            <div className="card shadow-sm h-100">
              <img src="/assets/img/doctors/doctors-4.jpg" className="card-img-top img-fluid" alt="Amanda Jepson" />
              <div className="card-body">
                <h5 className="card-title">Amanda Jepson</h5>
                <p className="card-text text-muted">Neurosurgeon</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="text-center mb-5">
        <h2 className="mb-3">Gallery</h2>
        <p className="text-muted mb-4">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        <div id="galleryCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
   
            <div className="carousel-item active">
              <div className="d-flex justify-content-center">
                <img src="/assets/img/gallery/gallery-1.jpg" className="d-block w-25 img-thumbnail" alt="Gallery Image 1" />
                <img src="/assets/img/gallery/gallery-2.jpg" className="d-block w-25 img-thumbnail" alt="Gallery Image 2" />
                <img src="/assets/img/gallery/gallery-3.jpg" className="d-block w-25 img-thumbnail" alt="Gallery Image 3" />
                <img src="/assets/img/gallery/gallery-4.jpg" className="d-block w-25 img-thumbnail" alt="Gallery Image 4" />
              </div>
            </div>
        
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#galleryCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#galleryCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </div>
  )
}

export default Doctors