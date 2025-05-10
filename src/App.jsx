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


import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

// This is the layout that uses useLocation
function MainLayout() {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact-us';

  return (
    <>
      <ScrollToTop />
      <div className="app-container">
        <Navbar bg="black" variant="dark" expand="lg" className="sticky-navbar">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <span id="bannerL">M</span>asenya Enterprise
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/" className="px-3">Home</Nav.Link>
                <Nav.Link as={Link} to="/about-us" className="px-3">About</Nav.Link>
                <Nav.Link as={Link} to="/services" className="px-3">Services</Nav.Link>
                <Nav.Link as={Link} to="/contact-us" className="px-3">Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div className="main-content">
          <Routes>
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/home" element={<Home />} />
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
                  <h4>MASENYA ENTERPRISE</h4>
                  <p>&copy; 2025</p>
                </div>
                <div className="footer-column">
                  <h4>Projects</h4>
                  <ul>
                    <li>Current</li>
                    <li>Completed</li>
                  </ul>
                </div>
                <div className="footer-column">
                  <h4>Company</h4>
                  <ul>
                    <li>About us</li>
                    <li>Services</li>
                    <li>Contact us</li>
                  </ul>
                </div>
                <div className="footer-column">
                  <h4>Further Information</h4>
                  <ul>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                  </ul>
                </div>
                <div className="footer-column">
                  <h4>Follow us</h4>
                  <div className="social-icons">
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-linkedin-in"></i>
                    <i className="fas fa-paper-plane"></i>
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
