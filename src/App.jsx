import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PulseWaveBackground from './PulseWaveBackground.jsx'
import Assessment from './Assessment.jsx'
import './App.css'

function HomePage() {
  return (
    <>
      <PulseWaveBackground />
      <main className="main-content">
        <header className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              Simply <span className="gradient-text">AI</span> Solutions
            </h1>
            <p className="hero-subtitle">
              Transform your business with cutting-edge artificial intelligence
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Get Started</button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>
        </header>

        <section className="services-section">
          <div className="container">
            <h2 className="section-title">Our Services</h2>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">📋</div>
                <h3>AI Integration Assessment</h3>
                <p>Comprehensive evaluation to determine the best AI solutions for your business needs and security requirements</p>
                <button className="service-btn" onClick={() => window.location.href = '/assessment'}>
                  Take Assessment
                </button>
              </div>
              <div className="service-card">
                <div className="service-icon">🤖</div>
                <h3>AI Automation</h3>
                <p>Streamline your workflows with intelligent automation solutions</p>
              </div>
              <div className="service-card">
                <div className="service-icon">📊</div>
                <h3>Data Analytics</h3>
                <p>Turn your data into actionable insights with advanced analytics</p>
              </div>
              <div className="service-card">
                <div className="service-icon">🔮</div>
                <h3>Predictive AI</h3>
                <p>Forecast trends and make informed decisions with predictive models</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/assessment" element={<Assessment />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
