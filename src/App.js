import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import TicketsPage from './TicketsPage';
import logo from './assets/logo.png';
import preview from './assets/preview.png';
import step1 from './assets/step1.png';
import step2 from './assets/step2.png';
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
      <h1 className="brand-title">ResolveRight</h1>
    </div>

    {/* Right - Menu + Button in a Row */}
    <div className="d-flex align-items-center gap-4">
      <nav className="menu-box d-flex align-items-center">
        <a href="#home" className="menu-link">Home</a>
        <a href="#about" className="menu-link">About</a>
        <a href="#contact" className="menu-link">Tickets</a>
        <a href="#contact" className="menu-link">More</a>
        <a href="#contact" className="menu-link">Contact Us</a>
      </nav>

      <a href="#login">
        <button className="login-btn">Login/Signup  <i className="bi bi-box-arrow-in-right me-2"></i></button>
      </a>
    </div>
  </div>
</header>


      {/* Split Section */}
      <section className="split-section py-5">
        <div className="container">
          <div className="row">
            
             {/* Left Content Column */}
<div className="col-md-6 d-flex flex-column justify-content-center">
  <div className="content-block mt-5">
    {/* Large Bold Heading */}
    <h1 className="left-split-heading mb-3">
      ResolveRight Right Solutions, Right Now
    </h1>

    {/* Small Paragraph */}
    <p className="left-split-paragraph mb-4">
      ResolveRight is an AI-powered support automation platform that transforms customer service operations through intelligent issue classification, precision routing, and resolution-first workflows.
    </p>

    {/* Buttons */}
    <div className="d-flex justify-content-centre gap-5 mt-6 ps-5 ">
      <button className="btn btn-primary">Get Started</button>
      <Link to="/tickets" className="btn btn-outline-secondary">View Tickets</Link>
    </div>
  </div>
</div>

            
       {/* Right Image Column */}
       <div className="col-md-6">
  <div className="image-container">
    <img 
      src={preview} 
      alt="Analytics visual" 
      className="img-fluid rounded-3"
    />
    <p className="image-caption text-muted mt-2 text-center">
      From request to resolution-lightning fast
    </p>
  </div>
</div>

          </div>
        </div>
      </section>

     {/* Section 2: How It Works */}
<section className="how-it-works-section py-5 bg-light">
  <div className="container">
    
    {/* Heading */}
    <h2 
      className="fw-bold mb-4 text-start" 
      style={{ fontSize: "3.0rem", color: "#007BFF" }}
    >
      How ResolveRight Works
    </h2>

    {/* Three Image Containers */}
    <div className="row mb-4">
      <div className="col-md-4 mb-3">
        <div className="p-2 border rounded bg-white shadow-sm h-100">
          <img 
            src={step1}
            alt="Step 1" 
            className="img-fluid rounded"
          />
          <p className="text-center mt-2 fw-semibold">Step 1: Auto-Classification</p>
        </div>
      </div>
      <div className="col-md-4 mb-3">
        <div className="p-2 border rounded bg-white shadow-sm h-100">
          <img 
            src={step2}
            alt="Step 2" 
            className="img-fluid rounded"
          />
          <p className="text-center mt-2 fw-semibold">Step 2: Precision Routing</p>
        </div>
      </div>
      <div className="col-md-4 mb-3">
        <div className="p-2 border rounded bg-white shadow-sm h-100">
          <img 
            src="https://via.placeholder.com/300x200" 
            alt="Step 3" 
            className="img-fluid rounded"
          />
          <p className="text-center mt-2 fw-semibold">Step 3: Fast Resolution</p>
        </div>
      </div>
    </div>

    {/* Paragraph + Button */}
    <div className="row align-items-center">
      <div className="col-md-8">
        <p className="mb-0 text-start">
          ResolveRight uses AI to analyze and auto-assign tickets from multiple channels. 
          Watch the demo to see how easily your support workflow gets optimized.
        </p>
      </div>
      <div className="col-md-4 text-md-end mt-3 mt-md-0">
        <button className="btn btn-primary btn-lg">Watch Demo</button>
      </div>
    </div>
    
  </div>
</section>

      {/* Hero Section */}
      <header className="hero-section py-5 ">
        <div className="container text-center">
          <h1 className="display-4">Where precision meets customer care</h1>
          <p className="lead mt-3">
            "Exclusively designed for support teams, our AI-powered system analyzes incoming requests across email,
            WhatsApp, and multiple channels, accurately categorizing issues, and routing them to optimally skilled agents in real-time."
          </p>
          <div className="mt-4">
            <img 
              src={hero}
              alt="Hero Illustration" 
              className="img-fluid rounded"
            />
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="stats-section py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Quantifying Operational Excellence</h2>
          <div className="row text-center">
            <div className="col-md-3 mb-4">
              <div className="p-4 border rounded bg-white shadow-sm h-100">
                <i className="bi bi-bar-chart-fill display-6 text-primary mb-2"></i>
                <h3>99.1%</h3>
                <p>Classification Accuracy</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="p-4 border rounded bg-white shadow-sm h-100">
                <i className="bi bi-stopwatch-fill display-6 text-success mb-2"></i>
                <h3>800ms</h3>
                <p>Average Assignment Time</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="p-4 border rounded bg-white shadow-sm h-100">
                <i className="bi bi-emoji-smile-fill display-6 text-warning mb-2"></i>
                <h3>89%</h3>
                <p>Higher Satisfaction</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="p-4 border rounded bg-white shadow-sm h-100">
                <i className="bi bi-graph-up-arrow display-6 text-danger mb-2"></i>
                <h3>450K</h3>
                <p>Weekly Updates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3 mb-4">
              <h5 className="mb-3">Quick Edit</h5>
              <h3 className="mb-4" style={{color: "#4CAF50"}}>ResourceRight</h3>
              <ul className="list-unstyled">
                <li className="mb-2">Company</li>
                <li><a href="#story" className="text-light text-decoration-none">Our Story</a></li>
                <li><a href="#customers" className="text-light text-decoration-none">Customers</a></li>
                <li><a href="#careers" className="text-light text-decoration-none">Careers</a></li>
              </ul>
            </div>

            <div className="col-md-3 mb-4">
              <h5 className="mb-3">Download Our App</h5>
              <div className="d-flex flex-column">
                <button className="btn btn-dark border mb-2">
                  <i className="fab fa-apple me-2"></i>App Store
                </button>
                <button className="btn btn-dark border">
                  <i className="fab fa-google-play me-2"></i>Google Play
                </button>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <h5 className="mb-3">Get Started</h5>
              <ul className="list-unstyled">
                <li><a href="#contact" className="text-light text-decoration-none">Contact Us</a></li>
                <li><a href="#trial" className="text-light text-decoration-none">Start a Free Trial</a></li>
                <li><a href="#demo" className="text-light text-decoration-none">Watch Demo</a></li>
                <li><a href="#faq" className="text-light text-decoration-none">FAQ</a></li>
                <li><a href="#access" className="text-light text-decoration-none">Accessibility</a></li>
              </ul>
            </div>

            <div className="col-md-3 mb-4">
              <h5 className="mb-3">Legal</h5>
              <ul className="list-unstyled">
                <li><a href="#terms" className="text-light text-decoration-none">Terms & Conditions</a></li>
                <li><a href="#privacy" className="text-light text-decoration-none">Privacy Policy</a></li>
                <li><a href="#shipping" className="text-light text-decoration-none">Shipping Policy</a></li>
                <li><a href="#refund" className="text-light text-decoration-none">Refund Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="row mt-4 border-top pt-4">
            <div className="col-md-6">
              <p className="text-muted mb-0">
                500 Terry Francine Street,<br />
                San Francisco, CA 94158
              </p>
            </div>
            <div className="col-md-6 text-end">
              <div className="d-flex justify-content-end gap-3">
                <a href="#home" className="text-light text-decoration-none">Home</a>
                <a href="#product" className="text-light text-decoration-none">Product</a>
                <a href="#solutions" className="text-light text-decoration-none">Solutions</a>
                <a href="#pricing" className="text-light text-decoration-none">Pricing</a>
                <a href="#resources" className="text-light text-decoration-none">Resources</a>
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-12 text-center">
              <p className="text-muted small mb-0">
                © 2035 by Unite. Powered and secured by Vlzx
              </p>
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
