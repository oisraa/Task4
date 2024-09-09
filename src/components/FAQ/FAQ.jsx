import React from 'react'
import './FAQ.css'
const FAQ = () => {
  return (
    <section className="faq-section py-5">
    <div className="container">
      <h2 className="text-center mb-3 text-muted fw-bold">Frequently Asked Questions</h2>
      <p className="text-center mb-5 text-muted">
        Necessitatibus eos consequatur ex aliquid fuga enim quidem sint consectetur velit
      </p>
      <div className="accordion" id="faqAccordion">
        {["Non consectetur a erat nam at lectus urna duis?", "Feugiat scelerisque varius morbi enim nunc faucibus?", "Dolor sit amet consectetur adipiscing elit pellentesque?", "Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?", "Tempus quam pellentesque nec nam aliquam sem et tortor?", "Perspiciatis quod quo quos nulla quo illum ullam?"].map((question, index) => (
          <div className="accordion-item mb-3" key={index}> {/* Add margin-bottom */}
            <h2 className="accordion-header" id={`heading${index}`}>
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="false" aria-controls={`collapse${index}`}>
                {question}
              </button>
            </h2>
            <div id={`collapse${index}`} className="accordion-collapse collapse" aria-labelledby={`heading${index}`} data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Answer for "{question}"
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default FAQ