import React from 'react'
import './Title.css'
const Title = ({ title, description }) => {
  return (
    <>
    {/* <div className='title fs-1 fw-bold text-muted'>
        <h2>About Us</h2>
        </div>
        <div className='desc'>
        <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. </p>

    </div> */}
  <div className="text-center my-5">
      <figure className="fs-1 fw-bold text-muted">
        <blockquote className="blockquote mb-1">
          <p style={{ fontSize: '2.5rem' }}>{title}</p> {/* Larger font size */}
        </blockquote>
        {/* Green line */}
        <hr style={{ width: '100px', height: '7px', backgroundColor: '#1fe7f6', margin: '0 auto' }} />
      </figure>
      <figure className="text-center">
        <figcaption className="blockquote-footer mt-3 fw-bold">
          {description}
        </figcaption>
      </figure>
    </div>
    </>
  )
}

export default Title