import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css';

const Welcome = () => {
  return (
    <div className="welcome-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Model Context Protocol
          </h1>
          <p className="hero-subtitle">
            A Universal Standard for AI Integration
          </p>
          <p className="hero-description">
            Learn how MCP revolutionizes the way AI models connect with external systems,
            eliminating fragmentation and enabling seamless interoperability.
          </p>
          <div className="hero-buttons">
            <Link to="/home" className="btn btn-primary">
              Get Started →
            </Link>
            <Link to="/tutorial" className="btn btn-secondary">
              View Tutorial
            </Link>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="floating-card">
            <div className="card-content">
              <span className="card-icon">🔌</span>
              <h3>Universal Protocol</h3>
              <p>One standard for all AI integrations</p>
            </div>
          </div>
          <div className="floating-card delay-1">
            <div className="card-content">
              <span className="card-icon">🚀</span>
              <h3>Simplified Integration</h3>
              <p>Connect AI to any data source</p>
            </div>
          </div>
          <div className="floating-card delay-2">
            <div className="card-content">
              <span className="card-icon">⚡</span>
              <h3>Real-time Context</h3>
              <p>Dynamic, bidirectional communication</p>
            </div>
          </div>
        </div>
      </div>

      <div className="features-section container">
        <h2>What You'll Learn</h2>
        <div className="grid">
          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>MCP Overview</h3>
            <p>
              Understand the architecture, components, and how MCP works to connect
              AI models with external systems.
            </p>
            <Link to="/home" className="feature-link">
              Learn More →
            </Link>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎤</div>
            <h3>Our Presentation</h3>
            <p>
              Explore our comprehensive presentation covering MCP's introduction,
              architecture, use cases, and pros & cons.
            </p>
            <Link to="/presentation" className="feature-link">
              View Slides →
            </Link>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💻</div>
            <h3>Hands-On Tutorial</h3>
            <p>
              Build a real MCP-enabled application from scratch with step-by-step
              instructions and working code.
            </p>
            <Link to="/tutorial" className="feature-link">
              Start Building →
            </Link>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>Code Deep Dive</h3>
            <p>
              Detailed explanation of how MCP servers work, API patterns, and
              integration strategies.
            </p>
            <Link to="/code-explanation" className="feature-link">
              Explore Code →
            </Link>
          </div>
        </div>
      </div>

      <div className="team-section container">
        <h2>Group M - Presenters</h2>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-avatar">BG</div>
            <h4>Bibika Ghimire</h4>
            <p>Research & Analysis</p>
          </div>
          <div className="team-member">
            <div className="member-avatar">MN</div>
            <h4>Mateusz Nowak</h4>
            <p>Use Cases & Enterprise</p>
          </div>
          <div className="team-member">
            <div className="member-avatar">MS</div>
            <h4>Muhammad Sohaib</h4>
            <p>Architecture & Server</p>
          </div>
          <div className="team-member">
            <div className="member-avatar">MM</div>
            <h4>Michael McCabe</h4>
            <p>Documentation</p>
          </div>
          <div className="team-member">
            <div className="member-avatar">SR</div>
            <h4>Summer Rhoda</h4>
            <p>Introduction & Overview</p>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <div className="cta-content">
          <h2>Ready to Master MCP?</h2>
          <p>
            Start your journey into the Model Context Protocol and learn how to
            build AI-powered applications with seamless integrations.
          </p>
          <Link to="/home" className="btn btn-large">
            Begin Learning →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
