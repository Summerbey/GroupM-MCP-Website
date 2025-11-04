import React from 'react';
import './Presentation.css';

const Presentation = () => {
  return (
    <div className="presentation-page">
      <div className="container">
        <div className="page-header">
          <h1>📊 Our MCP Presentation</h1>
          <p>Comprehensive overview of the Model Context Protocol</p>
        </div>

        <div className="card">
          <h2>Presentation Slides</h2>
          <p>
            Our presentation covers the Model Context Protocol in detail, including
            its architecture, real-world applications, and future implications.
          </p>
          
          <div className="presentation-topics">
            <div className="topic-card">
              <h3>1. Introduction to MCP</h3>
              <p>What is MCP and why was it created</p>
            </div>
            
            <div className="topic-card">
              <h3>2. How MCP Servers Work</h3>
              <p>Architecture and core components explained</p>
            </div>
            
            <div className="topic-card">
              <h3>3. Integration & Data Flow</h3>
              <p>How MCP connects AI models with external systems</p>
            </div>
            
            <div className="topic-card">
              <h3>4. Before & After MCP</h3>
              <p>Comparing fragmented vs unified approaches</p>
            </div>
            
            <div className="topic-card">
              <h3>5. Enterprise Use Cases</h3>
              <p>Real-world applications in business</p>
            </div>
            
            <div className="topic-card">
              <h3>6. Pros & Cons</h3>
              <p>Security, reliability, and future considerations</p>
            </div>
          </div>
        </div>

        <div className="card">
          <h2>Key Takeaways</h2>
          <ul>
            <li>MCP provides a universal standard for AI-tool integration</li>
            <li>Eliminates fragmentation across different AI platforms</li>
            <li>Enables real-time, bidirectional communication</li>
            <li>Used by companies like Ramp, Siit, Juicebox, and Aleph</li>
            <li>Open protocol with growing ecosystem support</li>
          </ul>
        </div>

        <div className="presentation-team">
          <h2>Presented by Group M</h2>
          <p>
            Bibika Ghimire, Mateusz Nowak, Muhammad Sohaib, Michael McCabe, Summer Rhoda
          </p>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
