import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import TicketsPage from './TicketsPage';
import logo from './assets/logo.png';
import preview from './assets/preview.png';
import step1 from './assets/step1.png';
import step2 from './assets/step2.png';
import step3 from './assets/step3.png';
import hero from './assets/hero.png';
import 'bootstrap-icons/font/bootstrap-icons.css';

function HomePage() {
  return (
    <>
      <header className="header-strip">
        <div className="container d-flex justify-content-between align-items-center">
          {/* Left - Logo + Title */}
          <div className="d-flex align-items-center">
            <img src={logo} alt="Logo" className="logo" />
            <Link to="/" className="text-decoration-none">
              <h1 className="brand-title mb-0 text-dark">ResolveRight</h1>
            </Link>
          </div>

          {/* Right - Menu + Button */}
          <div className="d-flex align-items-center gap-4">
            <nav className="menu-box d-flex align-items-center">
              <Link to="/" className="menu-link">Home</Link>
              <Link to="/#about" className="menu-link">About</Link>
              <Link to="/#careers" className="menu-link">Careers</Link>
              <Link to="/#more" className="menu-link">More</Link>
              <Link to="/#contact" className="menu-link">Contact Us</Link>
            </nav>
            <Link to="/#login">
              <button className="login-btn">Login/Signup <i className="bi bi-box-arrow-in-right me-2"></i></button>
            </Link>
          </div>
        </div>
      </header>

      {/* Split Section */}
      <section className="split-section py-5">
        <div className="container">
          <div className="row">
            {/* Left Content */}
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <div className="content-block mt-5">
                <h1 className="left-split-heading mb-3">ResolveRight: Right Solutions, Right Now</h1>
                <p className="left-split-paragraph mb-4">
                  ResolveRight is an AI-powered support automation platform that transforms customer service operations through intelligent issue classification, precision routing, and resolution-first workflows.
                </p>
                <div className="d-flex justify-content-center gap-3 ps-5">
                  <button className="btn btn-primary">Get Started</button>
                  <Link to="/tickets" className="btn btn-outline-secondary">View Tickets</Link>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="col-md-6">
              <div className="image-container">
                <img src={preview} alt="Analytics" className="img-fluid rounded-3" />
                <p className="image-caption text-muted mt-2 text-center">
                  From request to resolution — lightning fast
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="how-it-works-section py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold mb-4 text-start" style={{ fontSize: "3rem", color: "#007BFF" }}>
            How ResolveRight Works
          </h2>

          <div className="row mb-5 gx-4">
            {[{ src: step1, title: "Step 1: Auto-Classification" },
              { src: step2, title: "Step 2: Precision Routing" },
              { src: step3, title: "Step 3: Fast Resolution" }].map((step, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="p-3 border rounded bg-white shadow-sm h-100 d-flex flex-column align-items-center text-center">
                  <img src={step.src} alt={step.title} className="img-fluid rounded mb-3" style={{ maxHeight: '220px', objectFit: 'cover' }} />
                  <p className="fw-semibold fs-5">{step.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="row align-items-center">
            <div className="col-md-8">
              <p className="mb-0 text-start">
                ResolveRight uses AI to analyze and auto-assign tickets from multiple channels. Watch the demo to see how easily your support workflow gets optimized.
              </p>
            </div>
            <div className="col-md-4 text-md-end mt-3 mt-md-0">
              <button className="btn btn-primary btn-lg">Watch Demo</button>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <header className="hero-section py-5">
        <div className="container text-center">
          <h1 className="display-4">Where precision meets customer care</h1>
          <p className="lead mt-3">
            Exclusively designed for support teams, our AI-powered system analyzes incoming requests across email, WhatsApp, and multiple channels, accurately categorizing issues, and routing them to optimally skilled agents in real-time.
          </p>
          <div className="mt-4">
            <img src={hero} alt="Hero" className="img-fluid rounded" />
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="stats-section py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Quantifying Operational Excellence</h2>
          <div className="row text-center">
            {[{
              icon: "bi-bar-chart-fill", color: "text-primary", stat: "99.1%", desc: "Classification Accuracy"
            }, {
              icon: "bi-stopwatch-fill", color: "text-success", stat: "800ms", desc: "Average Assignment Time"
            }, {
              icon: "bi-emoji-smile-fill", color: "text-warning", stat: "89%", desc: "Higher Satisfaction"
            }, {
              icon: "bi-graph-up-arrow", color: "text-danger", stat: "450K", desc: "Weekly Updates"
            }].map((item, index) => (
              <div className="col-md-3 mb-4" key={index}>
                <div className="p-4 border rounded bg-white shadow-sm h-100">
                  <i className={`bi ${item.icon} display-6 ${item.color} mb-2`}></i>
                  <h3>{item.stat}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-light py-5">
        <div className="container">
          <div className="row">
            {/* Company Info */}
            <div className="col-md-3 mb-4">
              <h5 className="mb-3">Quick Edit</h5>
              <h3 className="mb-4" style={{ color: "#4CAF50" }}>ResolveRight</h3>
              <ul className="list-unstyled">
                <li><Link to="/#story" className="text-light text-decoration-none">Our Story</Link></li>
                <li><Link to="/#customers" className="text-light text-decoration-none">Customers</Link></li>
                <li><Link to="/#careers" className="text-light text-decoration-none">Careers</Link></li>
              </ul>
            </div>

            {/* App Download */}
            <div className="col-md-3 mb-4">
              <h5 className="mb-3">Download Our App</h5>
              <div className="d-flex flex-column">
                <button className="btn btn-dark border mb-2"><i className="fab fa-apple me-2"></i>App Store</button>
                <button className="btn btn-dark border"><i className="fab fa-google-play me-2"></i>Google Play</button>
              </div>
            </div>

            {/* Get Started */}
            <div className="col-md-3 mb-4">
              <h5 className="mb-3">Get Started</h5>
              <ul className="list-unstyled">
                <li><Link to="/#contact" className="text-light text-decoration-none">Contact Us</Link></li>
                <li><Link to="/#trial" className="text-light text-decoration-none">Start a Free Trial</Link></li>
                <li><Link to="/#demo" className="text-light text-decoration-none">Watch Demo</Link></li>
                <li><Link to="/#faq" className="text-light text-decoration-none">FAQ</Link></li>
                <li><Link to="/#access" className="text-light text-decoration-none">Accessibility</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="col-md-3 mb-4">
              <h5 className="mb-3">Legal</h5>
              <ul className="list-unstyled">
                <li><Link to="/#terms" className="text-light text-decoration-none">Terms & Conditions</Link></li>
                <li><Link to="/#privacy" className="text-light text-decoration-none">Privacy Policy</Link></li>
                <li><Link to="/#shipping" className="text-light text-decoration-none">Shipping Policy</Link></li>
                <li><Link to="/#refund" className="text-light text-decoration-none">Refund Policy</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="row mt-4 border-top pt-4">
            <div className="col-md-6">
              <p className="text-muted mb-0">500 Terry Francine Street,<br />San Francisco, CA 94158</p>
            </div>
            <div className="col-md-6 text-end">
              <div className="d-flex justify-content-end gap-3">
                {["Home", "Product", "Solutions", "Pricing", "Resources"].map((item, idx) => (
                  <Link key={idx} to={`/#${item.toLowerCase()}`} className="text-light text-decoration-none">{item}</Link>
                ))}
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-12 text-center">
              <p className="text-muted small mb-0">© 2035 by Unite. Powered and secured by Vlzx</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tickets" element={<TicketsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
