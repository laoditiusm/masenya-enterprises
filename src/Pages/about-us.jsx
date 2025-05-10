import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const AboutUs = () => {
  return (
    <div className="sect-container main" style={{ backgroundColor: '#fff', color: '#111' }}>
      <section className="section-bg sect-content" data-scroll-index="7" id='aboutus-sect'>
        <div className="responsive-container-block bigContainer">
          <div className="responsive-container-block Container">

            {/* Image Section */}
            <div className="imgContainer" data-aos="fade-up">
              <div
                id='aboutus-img'
                style={{
                  backgroundImage: "url('https://images.pexels.com/photos/115655/pexels-photo-115655.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800')",
                }}
              ></div>
            </div>

            {/* Text Section */}
            <div className="responsive-container-block textSide" style={{ color: '#f9a826' }} data-aos="fade-up">
              <p className="text-blk standard-header" style={{ color: '#111', fontWeight: 'bold' }}>
                About Us
              </p>
              <p className="text-blk subHeading" style={{ color: '#111' }}>
                <strong>Masenya Enterprises</strong> is a proudly local tech-driven company with a heart for innovation and a mind for business. Founded with the vision to help individuals thrive in the digital age, we specialize in building smart, scalable and beautifully designed solutions that make an impact.
                <br /><br />
                We are more than just developers - we are your tech partners. We take the time to understand your vision and craft custom solutions that fit like a glove. Whether you're a startup with a big idea or a growing company needing systems to match your scale, we are here to build with you, for you.
                <br /><br />
                At Masenya Enterprise, we take pride in delivering cutting-edge, scalable, and secure solutions tailored to your specific business needs. Our team of passionate and skilled experts ensures that each project we undertake is crafted with precision, designed for optimal performance, and built with long-term sustainability in mind.
                <br /><br />
                We understand that every business is unique, and our services are designed to align seamlessly with your objectives. From the first concept to final deployment, we ensure that all aspects of your digital transformation are handled with care, attention, and expertise.
              </p>
              <div className="content" style={{ marginTop: '20px' }}>
                <p style={{ color: '#96ccbf', fontSize: '1.7rem' }}>Your vision, our code 🚀</p>

                {/* Link to Services page */}
                <Link to="/services" className="cta-btn" >
                  Explore our Services
                </Link>
              </div>
            </div>

            {/* Decorative Dots */}
            <img
              className="redDots"
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/cw3.svg"
              alt="red decorative dots"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
