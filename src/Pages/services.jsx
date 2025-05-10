import React from 'react';

const Services = () => {
    return (
        <div className='sect-container main' id='service-sect'>
            <div className="container sect-content" data-scroll-index="3">
                <p className="text-blk heading standard-header" id='ServiceHeading'>Our Services</p>

                <section className="services">
                    <div className="card" data-aos="zoom-in">
                        <div className="content">
                            <div className="icon"><i className="fa fa-code"></i></div>
                            <h3 style={{color: "#fff", marginBottom: "2rem"}} >Website Development</h3>
                            <p>
                                From clean, modern designs to fully functional e-commerce platforms:
                                <ul>
                                    <li>Responsive & mobile-friendly layouts</li>
                                    <li>SEO optimization & analytics</li>
                                    <li>Content management & admin dashboards</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className="card" data-aos="zoom-in">
                        <div className="content">
                            <div className="icon"><i className="fa fa-mobile"></i></div>
                            <h3 style={{color: "#fff", marginBottom: "2rem"}} >Mobile App Development</h3>
                            <p>
                                iOS, Android or both — we build apps that perform and impress:
                                <ul>
                                    <li>Cross-platform compatibility</li>
                                    <li>Intuitive and modern UI/UX design</li>
                                    <li>Push notifications and offline support</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className="card" data-aos="zoom-in">
                        <div className="content">
                            <div className="icon"><i className="fa fa-paint-brush"></i></div>
                            <h3 style={{color: "#fff", marginBottom: "2rem"}} >Custom Systems and Software</h3>
                            <p>
                                Need something unique? We build it from scratch:
                                <ul>
                                    <li>Tailor-made software to fit your workflow</li>
                                    <li>Integrated APIs and third-party services</li>
                                    <li>Scalable and secure infrastructure</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className="card" data-aos="zoom-in">
                        <div className="content">
                            <div className="icon"><i className="fa fa-laptop"></i></div>
                            <h3 style={{color: "#fff", marginBottom: "2rem"}} >Maintenance & Support</h3>
                            <p>
                                We don’t just build, we grow with you:
                                <ul>
                                    <li>24/7 technical support and updates</li>
                                    <li>Performance monitoring & error handling</li>
                                    <li>Continuous improvements based on user feedback</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </section>

                {/* Additional Detail Sections */}
                <section className="split-section light" data-aos="fade-up">
  <div className="split-container">
    <div className="split-text">
      <h3 className='standard-header'>Our Development Philosophy</h3>
      <p>We don't just build solutions — we craft experiences that drive engagement and growth🎯:</p>
      <ul>
        <li>Agile and adaptive workflows for rapid delivery</li>
        <li>Clean, maintainable, and scalable codebases</li>
        <li>Design thinking baked into every stage</li>
      </ul>
    </div>
    <div
      className="split-image"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=compress&cs=tinysrgb&dpr=2&w=800')",
      }}
      data-aos="fade-up"
    ></div>
  </div>
</section>

<section className="split-section dark" data-aos="fade-up">
  <div className="split-container reverse">
    <div className="split-text">
      <h3 className='standard-header'>How We Help You Succeed</h3>
      <p>We align our strategies with your goals to ensure meaningful results📊:</p>
      <ul>
        <li>Data-driven decisions for measurable impact</li>
        <li>End-to-end support from ideation to launch</li>
        <li>Continuous optimization based on user feedback</li>
      </ul>
    </div>
    <div
      className="split-image"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=compress&cs=tinysrgb&dpr=2&w=800')",
      }}
      data-aos="fade-up"
    ></div>
  </div>
</section>


                
            </div>
        </div>
    );
};

export default Services;
