import React from 'react'
import './Pricing.css'
const Pricing = () => {
  return (
    <section className="pricing-section py-5 text-center">
      <div className="container">
        <h2 className="mb-3 text-muted fw-bold">Pricing</h2>
        <p className="mb-5 text-muted">
          Necessitatibus eos consequatur ex aliquid fuga enim quidem sint consectetur velit
        </p>
        <div className="row justify-content-center">
          {/* Free Plan */}
          <div className="col-md-3 mb-4">
            <div className="card shadow-sm border-light">
              <div className="card-body">
                <h5 className="card-title text-muted">Free</h5>
                <p className="card-text pricing-price">
                  <span className="pricing-currency text-muted">$</span>0
                  <span className="pricing-duration text-muted">/month</span>
                </p>
                <ul className="list-unstyled text-muted">
                  <li>Aida dere</li>
                  <li>Nec feugiat nisl</li>
                  <li>Nulla at volutpat dola</li>
                  <li className="text-muted"><del>Massa ultricies mi</del></li>
                </ul>
                <button type="button" className="btn btn-success">Buy now</button>
              </div>
            </div>
          </div>
          {/* Business Plan */}
          <div className="col-md-3 mb-4">
            <div className="card shadow-sm border-light featured">
            
              <div className="card-body">
                <h5 className="card-title text-muted fw-bold">Business</h5>
                <p className="card-text pricing-price">
                  <span className="pricing-currency text-muted">$</span>19
                  <span className="pricing-duration text-muted">/month</span>
                </p>
                <ul className="list-unstyled text-muted">
                  <li>Aida dere</li>
                  <li>Nec feugiat nisl</li>
                  <li>Nulla at volutpat dola</li>
                  <li className="text-muted"><del>Massa ultricies mi</del></li>
                </ul>
                <button type="button" className="btn btn-success">Buy now</button>
              </div>
            </div>
          </div>
          {/* Developer Plan */}
          <div className="col-md-3 mb-4">
            <div className="card shadow-sm border-light">
              <div className="card-body">
                <h5 className="card-title text-muted fw-bold">Developer</h5>
                <p className="card-text pricing-price text-muted">
                  <span className="pricing-currency text-muted">$</span>29
                  <span className="pricing-duration text-muted">/month</span>
                </p>
                <ul className="list-unstyled text-muted">
                  <li>Aida dere</li>
                  <li>Nec feugiat nisl</li>
                  <li>Nulla at volutpat dola</li>
                  <li>Massa ultricies mi</li>
                </ul>
                <button type="button" className="btn btn-success">Buy now</button>
              </div>
            </div>
          </div>
          {/* Ultimate Plan */}
          <div className="col-md-3 mb-4">
            <div className="card shadow-sm border-light">
              <div className="card-body">
                <h5 className="card-title text-muted fw-bold">Ultimate</h5>
                <p className="card-text pricing-price text-muted">
                  <span className="pricing-currency text-muted">$</span>49
                  <span className="pricing-duration text-muted">/month</span>
                </p>
                <ul className="list-unstyled text-muted">
                  <li>Aida dere</li>
                  <li>Nec feugiat nisl</li>
                  <li>Nulla at volutpat dola</li>
                  <li>Massa ultricies mi</li>
                </ul>
                <button type="button" className="btn btn-success">Buy now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing