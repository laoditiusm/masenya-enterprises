import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSending, setIsSending] = useState(false); // <-- Spinner state

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(
      'service_p4pr6th',         // Your EmailJS service ID
      'template_j5h0c4a',        // Your EmailJS template ID
      form.current,
      'r6yu_6-PRS-_rhjDy'        // Your EmailJS public key
    )
    .then((result) => {
      setShowSuccess(true);
      setIsSending(false);
      form.current.reset();
      setTimeout(() => setShowSuccess(false), 4000);
    }, (error) => {
      console.error(error.text);
      setIsSending(false);
      alert('Failed to send message, please try again.');
    });
  };

  return (
    <div className='sect-container main' id='contact-sect'>

      {/* ✅ Success Popup */}
      {showSuccess && (
        <div className="popup-success">
          <p>✅ Your message has been sent!</p>
        </div>
      )}

      <section className="section-bg content-box sect-content" data-scroll-index="7" data-aos="fade-up">
        <div className="overlay pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 d-flex align-items-center">
                <div className="contact-info">
                  <h1 className="standard-header">Let's talk</h1>
                  <p>
                    Have questions or need assistance? Our team at Masenya Enterprise is here 
                    to help! Whether you're curious about our services or ready to start a new project,
                    we’re just a message away. Reach out today, and let's create something amazing together!
                  </p>
                  <ul className="contact-info">
                    <li>
                      <div className="info-left"><i className="fas fa-mobile-alt"></i></div>
                      <div className="info-right"><h4>+27 888 8883</h4></div>
                    </li>
                    <li>
                      <div className="info-left"><i className="fas fa-at"></i></div>
                      <div className="info-right"><h4>info@masenyaenterprise.co.za</h4></div>
                    </li>
                    <li>
                      <div className="info-left"><i className="fas fa-map-marker-alt"></i></div>
                      <div className="info-right"><h4>Cape Town, South Africa</h4></div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-6 d-flex align-items-center">
                <div className="contact-form">
                  <form ref={form} onSubmit={sendEmail}>
                    <input type="hidden" name="form-name" value="contactForm" />
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            name="nameField"
                            className="form-control"
                            placeholder="Enter Your Name *"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter Your Email *"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            rows="4"
                            name="message"
                            className="form-control"
                            placeholder="Enter Your Message *"
                            required
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <button type="submit" className="cta-btn" id="contact-btn" disabled={isSending}>
                          {isSending ? (
                            <>
                              <i className="fas fa-spinner fa-spin"></i> Sending...
                            </>
                          ) : (
                            <>
                              Send Us <i className="fas fa-arrow-right"></i>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
