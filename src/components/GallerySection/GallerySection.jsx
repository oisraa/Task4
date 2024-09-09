import React from 'react'

const GallerySection = () => {
  return (
    
     <section className="text-center mb-5">
     <h2 className="mb-3">Gallery</h2>
     <p className="text-muted mb-4">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
     <div id="galleryCarousel" className="carousel slide" data-bs-ride="carousel">
       <div className="carousel-inner">
        
         <div className="carousel-item active">
           <div className="d-flex justify-content-center">
             <img src="/assets/img/doctors/doctors-1.jpg" className="d-block w-25" alt="Gallery Image 1" />
             <img src="gallery2.jpg" className="d-block w-25" alt="Gallery Image 2" />
             <img src="gallery3.jpg" className="d-block w-25" alt="Gallery Image 3" />
             <img src="gallery4.jpg" className="d-block w-25" alt="Gallery Image 4" />
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
 
  )
}

export default GallerySection