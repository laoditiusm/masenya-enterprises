import './App.css'
import './footerStyle.css'
import './landingPageStyle.css'
import './aboutUsStyle.css'
import './servicesStyle.css'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import ScrollToTop from './ScrollToTop';

import ContactUs from './Pages/contact-us';
import Services from './Pages/services';
import Home from './Pages/home';
import NotFound from './Pages/not-found';
import AboutUs from './Pages/about-us';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './imgs/ME-logo.png';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useState } from 'react';


// This is the layout that uses useLocation
function MainLayout() {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact-us';
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <ScrollToTop />
      <div className="app-container">
        <Navbar bg="black" variant="dark" expand="lg" expanded={expanded} onToggle={setExpanded} className="sticky-navbar">
          <Container>
            <Navbar.Brand
              as={Link}
              to={location.pathname}
              onClick={(e) => {
                e.preventDefault(); // Prevent navigation since we’re staying on same page
                window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
                setExpanded(false); // Close mobile menu
              }}
            >
              <img src={Logo} alt="Logo" className="logo" style={{ width: '55px', height: 'auto', marginRight: '10px' }} />
              <span id="bannerL">M</span>asenya Enterprise
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" onClick={() => setExpanded(!expanded)} />
            <Navbar.Collapse id="navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/" className="px-3" onClick={() => setExpanded(false)}>Home</Nav.Link>
                <Nav.Link as={Link} to="/about-us" className="px-3" onClick={() => setExpanded(false)}>About</Nav.Link>
                <Nav.Link as={Link} to="/services" className="px-3" onClick={() => setExpanded(false)}>Services</Nav.Link>
                <Nav.Link as={Link} to="/contact-us" className="px-3" onClick={() => setExpanded(false)}>Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div className="main-content">
          <Routes>
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/masenya-enterprises/" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <footer>
            {!isContactPage && (
              <div className="cta-box">
                <div className="cta-content">
                  <h2>Ready for a next project?</h2>
                  <p>Let's get started!</p>
                </div>
                <Link to="/contact-us" className="cta-btn">Contact us</Link>
              </div>
            )}

            <div className="footer-main">
              <div className="footer-container">
                <div className="footer-column">
                  <h4>Company</h4>
                  <ul>
                    <li><Link to="/about-us">About Us</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                  </ul>
                </div>
                <div className="footer-column">
                  <h4>Follow us</h4>
                  <div className="social-icons">
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-linkedin-in"></i>

                  </div>
                </div>
              </div>

              <div className="copyright">
                &copy; 2025 Masenya Enterprise. All rights reserved.
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

// Wrap it all inside Router at top-level
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

export default App;
