import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  return (
    <div className="sect-container main" id="landing">
      <div className='cont'>
      <div className="hero sect-content" data-aos="fade-up">
        <div className="badge" data-aos="fade-in">Proudly Local, Tech-Driven Innovation</div>
        <div className="headline" data-aos="fade-up">
          Shaping the Future – <span className="highlight">Your Vision, Our Code</span>
        </div>
        <div className="subtext" data-aos="fade-up">
          Transforming ideas into dynamic digital solutions. Whether you need a stunning website, a robust mobile app, or a custom-built system to streamline your business — we have the skills, passion, and experience to bring your vision to life.
        </div>

        <div className="services" data-aos="fade-up">
          <div className="service"><i className="fas fa-check-circle"></i> Websites</div>
          <div className="service"><i className="fas fa-check-circle"></i> Mobile Applications</div>
          <div className="service"><i className="fas fa-check-circle"></i> Custom Systems & Software</div>
          <div className="service"><i className="fas fa-check-circle"></i> Maintenance & Support</div>
        </div>
      </div>

      {/* Tiles Section */}
      <div className="tiles-container">
        <p data-aos="fade-up" className='standard-header'>Our Solutions in Action</p>
        <div className="tiles">
          <div className="tile" data-aos="zoom-in">
            <div className="tile-icon"><i className="fas fa-laptop-code"></i></div>
            <h3>Web Development</h3>
            <p>We craft responsive, user-friendly websites that ensure a seamless experience across all devices.</p>
          </div>
          <div className="tile" data-aos="zoom-in" data-aos-delay="100">
            <div className="tile-icon"><i className="fas fa-mobile-alt"></i></div>
            <h3>Mobile Applications</h3>
            <p>Our custom mobile apps are designed to engage users and elevate your business on the go.</p>
          </div>
          <div className="tile" data-aos="zoom-in" data-aos-delay="200">
            <div className="tile-icon"><i className="fas fa-cogs"></i></div>
            <h3>Custom Systems</h3>
            <p>Tailored software solutions to meet your unique business needs and optimize operations.</p>
          </div>
          <div className="tile" data-aos="zoom-in" data-aos-delay="300">
            <div className="tile-icon"><i className="fas fa-headset"></i></div>
            <h3>Support & Maintenance</h3>
            <p>Ongoing support and maintenance to ensure your systems stay up-to-date and functional.</p>
          </div>
        </div>
      </div>

      <div className="company-details">
        <section className="split-section dark" data-aos="fade-up">
          <div className="split-container">
            <div className="split-text">
              <p className='standard-header'>Our Expertise</p>
              <p>
                We understand that every business is unique, and our services are designed to align seamlessly with your objectives. From the first concept to final deployment, we ensure that all aspects of your digital transformation are handled with care, attention, and expertise.
              </p>
              <p>Our core areas of specialization include:</p>
              <ul>
                <li>
                  <i className="fas fa-check-circle"></i> {'  '}
                  <strong>  Web Development</strong> - We design responsive, user-friendly websites that not only look great but also deliver an exceptional user experience, optimized for speed, security, and scalability.
                </li>
                <li>
                  <i className="fas fa-check-circle"></i>{'  '}
                  <strong>Mobile App Development</strong> - Whether you're looking for native or cross-platform applications, we build apps that engage users and drive growth, all while maintaining high standards of performance and security.
                </li>
                <li>
                 <i className="fas fa-check-circle"></i>{' '}
                  <strong>Custom Systems & Software</strong> - We offer tailored software solutions that streamline your business operations, increase efficiency, and ensure your long-term success in the digital space.
                </li>
                <li>
                  <i className="fas fa-check-circle"></i>{' '}
                  <strong>Maintenance and Support</strong> - We offer ongoing support and maintenance to ensure your systems stay up-to-date and functional. Our team is always available to assist you with any issues or updates you may need.
                </li>
              </ul>
            </div>
            <div
              className="split-image"
              style={{
                backgroundImage: "url('https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800')",
              }}
              data-aos="fade-up"
            ></div>
          </div>
        </section>

        <section className="split-section light" data-aos="fade-up">
          <div className="split-container reverse">
            <div className="split-text">
              <p className='standard-header'>How We Work</p>
              <p>Our structured, proven process turns ideas into tangible products that deliver results. We listen, iterate, and partner with you to craft solutions that solve real problems.</p>

              <div className="process-flow">
                <div className="process-step">
                  <div className="step-icon">
                    <i className="fas fa-search"></i>
                  </div>
                  <div className="step-text">
                    <strong>1. Discovery</strong>
                    <p>In-depth understanding of your vision and challenges.</p>
                  </div>
                </div>
                <div className="arrow-icon">
                  <i className="fas fa-arrow-right"></i>
                </div>

                <div className="process-step">
                  <div className="step-icon">
                    <i className="fas fa-pencil-alt"></i>
                  </div>
                  <div className="step-text">
                    <strong>2. Design & Build</strong>
                    <p>Crafting elegant, functional solutions that meet your needs.</p>
                  </div>
                </div>
                <div className="arrow-icon">
                  <i className="fas fa-arrow-right"></i>
                </div>

                <div className="process-step">
                  <div className="step-icon">
                    <i className="fas fa-cogs"></i>
                  </div>
                  <div className="step-text">
                    <strong>3. Support & Evolve</strong>
                    <p>We are committed to ensuring your growth, with ongoing support and improvements.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="split-section dark" data-aos="fade-up">
          <div className="split-container reverse">
            <div className="split-text">
              <p className='standard-header'>Why Choose Us</p>
              <p>We’re more than just a development agency — we’re your long-term digital partner. Our collaborative approach, expertise, and commitment to your success make us the ideal team to bring your ideas to life.</p>
              <ul>
                <li><i className="fas fa-check-circle"></i><strong> Vision-Driven:</strong> We build what matters most to you.</li>
                <li><i className="fas fa-check-circle"></i><strong> Experienced Team:</strong> Our team combines years of experience in tech and business.</li>
                <li><i className="fas fa-check-circle"></i><strong> Reliable Support:</strong> We provide ongoing assistance and growth opportunities even after launch.</li>
              </ul>
            </div>
            <div
              className="split-image"
              style={{
                backgroundImage: "url('https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800')",
              }}
              data-aos="fade-up"
            ></div>
          </div>
        </section>
      </div>
      </div>
    </div>
  );
};

export default Home;
