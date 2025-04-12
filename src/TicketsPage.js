import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import axios from 'axios';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import logo from './assets/logo.png';
import { Link } from 'react-router-dom';

function TicketsPage() {
  const [tickets, setTickets] = useState([]);

  const categoryData = [
    { name: 'Technology', value: 40 },
    { name: 'Accounts', value: 25 },
    { name: 'Delivery', value: 15 },
    { name: 'Finance', value: 12 },
    { name: 'Returns', value: 8 }
  ];

  const COLORS = ['#2A5C8C', '#4CAF50', '#FF6B6B', '#e28743', '#9932CC'];

  const stats = {
    total: 243,
    resolved: 195,
    pending: 48,
    avgTime: '2.4h'
  };

  useEffect(() => {
    axios.get('http://localhost:8080/api/tickets')
      .then(response => {
        setTickets(response.data);
      })
      .catch(error => {
        console.error('Error fetching tickets:', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="header-strip sticky-top bg-white">
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
              <a href="#about" className="menu-link">About</a>
              <a href="#careers" className="menu-link">Careers</a>
              <a href="#contact" className="menu-link">Contact Us</a>
            </nav>

            <a href="#login">
              <button className="login-btn">
                Login/Signup <i className="bi bi-box-arrow-in-right me-2"></i>
              </button>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container py-5">
        <h2 className="mb-4 text-center ticket-heading">Tickets Dashboard</h2>

        {/* Filters */}
        <div className="row mb-4">
          <div className="col-md-6 mb-3">
            <label className="form-label fw-bold">Filter by Category</label>
            <select className="form-select">
              <option> All</option>
              <option>Technology</option>
              <option>Accounts</option>
              <option>Delivery</option>
              <option>Finance</option>
              <option>Returns</option>
            </select>
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label fw-bold">Filter by Status</label>
            <select className="form-select">
              <option>All</option>
              <option>Open</option>
              <option>In Progress</option>
              <option>Resolved</option>
            </select>
          </div>
        </div>

        {/* Ticket List */}
        <div className="ticket-scroll-area border rounded p-3 mb-5" style={{ maxHeight: '500px', overflowY: 'auto' }}>
          <div className="row">
            {tickets.length > 0 ? (
              tickets.map(ticket => (
                <div key={ticket.id} className="col-md-6 mb-4">
                  <div className="card shadow-sm h-100">
                    <div className="card-body">
                      <div className="d-flex justify-content-between mb-3">
                        <h5 className="card-title mb-0">Ticket #{ticket.id}</h5>
                        <span className="badge bg-primary">{ticket.status}</span>
                      </div>
                      <p className="card-text">{ticket.description}</p>
                      <div className="mt-2">
                        <small className="text-muted">Category: </small>
                        <span className="badge bg-secondary">{ticket.category}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12 text-center py-5">
                <p className="text-muted">No tickets found.</p>
              </div>
            )}
          </div>
        </div>

        {/* Statistics Section */}
        <div className="row mb-5">
          {/* Pie Chart */}
          <div className="col-md-6 mb-4">
            <div className="card shadow-sm h-100 bg-white">
              <div className="card-body">
                <h5 className="card-title text-center mb-4">Ticket Distribution by Category</h5>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={categoryData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      label
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend layout="vertical" align="right" verticalAlign="middle" />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="col-md-6">
            <div className="row h-100">
              <div className="col-6 mb-4">
                <div className="card stat-card h-100 text-center p-3">
                  <i className="bi bi-ticket-perforated fs-2 mb-2 text-primary"></i>
                  <h1 className="display-5">{stats.total}</h1>
                  <p className="text-muted mb-0">Total Tickets</p>
                </div>
              </div>
              <div className="col-6 mb-4">
                <div className="card stat-card h-100 text-center p-3">
                  <i className="bi bi-check-circle fs-2 mb-2 text-success"></i>
                  <h1 className="display-5">{stats.resolved}</h1>
                  <p className="text-muted mb-0">Resolved Tickets</p>
                </div>
              </div>
              <div className="col-6 mb-4">
                <div className="card stat-card h-100 text-center p-3">
                  <i className="bi bi-clock-history fs-2 mb-2 text-warning"></i>
                  <h1 className="display-5">{stats.pending}</h1>
                  <p className="text-muted mb-0">Pending Tickets</p>
                </div>
              </div>
              <div className="col-6 mb-4">
                <div className="card stat-card h-100 text-center p-3">
                  <i className="bi bi-speedometer2 fs-2 mb-2 text-info"></i>
                  <h1 className="display-5">{stats.avgTime}</h1>
                  <p className="text-muted mb-0">Avg. Resolution Time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-light py-5 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4" id="about">
              <h5>Company</h5>
              <ul className="list-unstyled">
                <li><a href="#about" className="text-light text-decoration-none">Our Story</a></li>
                <li><a href="#careers" className="text-light text-decoration-none">Careers</a></li>
                <li><a href="#contact" className="text-light text-decoration-none">Contact</a></li>
              </ul>
            </div>
            <div className="col-md-4 mb-4" id="careers">
              <h5>Resources</h5>
              <ul className="list-unstyled">
                <li><a href="#docs" className="text-light text-decoration-none">Documentation</a></li>
                <li><a href="#faq" className="text-light text-decoration-none">FAQ</a></li>
                <li><a href="#privacy" className="text-light text-decoration-none">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="col-md-4 mb-4" id="contact">
              <h5>Get Started</h5>
              <button className="btn btn-outline-light">Free Trial</button>
              <p className="mt-3"> New Horizon College<br />Bangalore, India</p>
            </div>
          </div>
          <div className="row mt-4 pt-3 border-top">
            <div className="col-12 text-center">
              <p className="mb-0 text-muted">
                © 2035 ResolveRight. Powered by Us
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default TicketsPage;
