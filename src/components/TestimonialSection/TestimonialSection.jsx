import React from 'react';
import { Carousel, Card } from 'react-bootstrap';

function TestimonialSection() {
  return (
    <div className="container my-5">
      <h2 className="text-center fs-2 fw-bold text-muted">Testimonials</h2>

      <p className="text-center text-muted">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      <Carousel indicators={true} interval={3000} controls={false} className="mt-4">
        <Carousel.Item>
          <div className="d-flex justify-content-center">
            <Card className="m-2" style={{ maxWidth: '18rem' }}>
              <Card.Body>
                <Card.Text>
                  "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla veniam veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim."
                </Card.Text>
                <div className="d-flex align-items-center">
                  <img src="https://via.placeholder.com/50" alt="Jena Karlis" className="rounded-circle me-3" />
                  <div>
                    <h6 className="mb-0">Jena Karlis</h6>
                    <small className="text-muted">Store Owner</small>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card className="m-2" style={{ maxWidth: '18rem' }}>
              <Card.Body>
                <Card.Text>
                  "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam."
                </Card.Text>
                <div className="d-flex align-items-center">
                  <img src="https://via.placeholder.com/50" alt="Matt Brandon" className="rounded-circle me-3" />
                  <div>
                    <h6 className="mb-0">Matt Brandon</h6>
                    <small className="text-muted">Freelancer</small>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card className="m-2" style={{ maxWidth: '18rem' }}>
              <Card.Body>
                <Card.Text>
                  "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid."
                </Card.Text>
                <div className="d-flex align-items-center">
                  <img src="https://via.placeholder.com/50" alt="John Larson" className="rounded-circle me-3" />
                  <div>
                    <h6 className="mb-0">John Larson</h6>
                    <small className="text-muted">Entrepreneur</small>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Carousel.Item>
      </Carousel>
      <div className="text-center mt-4">
        {/* Green Points / Dots for Carousel Indicators */}
        <span className="dot mx-1 bg-success rounded-circle d-inline-block" style={{ width: '10px', height: '10px' }}></span>
        <span className="dot mx-1 bg-success rounded-circle d-inline-block" style={{ width: '10px', height: '10px' }}></span>
        <span className="dot mx-1 bg-success rounded-circle d-inline-block" style={{ width: '10px', height: '10px' }}></span>
      </div>
    </div>
  );
}

export default TestimonialSection;
