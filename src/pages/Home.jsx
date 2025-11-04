import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <div className="container">
        <div className="page-header">
          <h1>What is the Model Context Protocol?</h1>
          <p>
            An open standard that defines how AI models connect with external systems
            through a unified, bidirectional communication protocol.
          </p>
        </div>

        <div className="card">
          <h2>🔌 Introduction to MCP</h2>
          <p>
            The <strong>Model Context Protocol (MCP)</strong> is an emerging open standard introduced by
            Anthropic that defines a unified, bidirectional communication and dynamic discovery protocol.
            It is designed to connect AI models with external systems through a universal protocol.
          </p>
          <p>
            MCP provides a consistent way for AI to access data, services, and tools securely and efficiently.
            It eliminates the need for custom integrations for each AI tool combination between AI models
            and external tools or resources, aiming to enhance interoperability and reduce fragmentation
            across diverse systems.
          </p>
        </div>

        <div className="card">
          <h2>📜 The History: Why MCP Was Needed</h2>
          <p>
            In recent years, the vision of autonomous AI agents capable of interacting with various tools
            and data sources has gained significant momentum. This progress accelerated in 2023 with the
            introduction of <strong>function calling by OpenAI</strong>, which allowed language models to
            invoke external APIs in a structured way.
          </p>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker">2023</div>
              <div className="timeline-content">
                <h4>Function Calling Revolution</h4>
                <p>
                  OpenAI introduces function calling, enabling LLMs to retrieve real-time data,
                  perform computations, and interact with external systems.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">2023-24</div>
              <div className="timeline-content">
                <h4>Ecosystem Fragmentation</h4>
                <p>
                  Multiple platforms emerge with their own plugin systems: ChatGPT plugins,
                  Coze, Yuanqi, LangChain, LlamaIndex - each requiring unique integrations.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">2024</div>
              <div className="timeline-content">
                <h4>MCP Introduction</h4>
                <p>
                  Anthropic introduces the Model Context Protocol to standardize AI-tool
                  integration across platforms and eliminate fragmentation.
                </p>
              </div>
            </div>
          </div>

          <div className="alert alert-warning">
            <strong>The Problem:</strong> Despite advancements, integrating tools remained fragmented.
            Each platform required custom integration, leading to duplicated effort and
            incompatibility across systems.
          </div>
        </div>

        <div className="card">
          <h2>🏗️ MCP Architecture</h2>
          <p>
            The Model Context Protocol follows a client-server architecture that enables
            seamless communication between AI applications and data sources.
          </p>

          <div className="architecture-section">
            <div className="arch-component">
              <h4>🖥️ MCP Host (AI Application)</h4>
              <p>
                The front-end AI agent or application (like Claude Desktop or IDEs) that
                the end-user interacts with. The host initiates connections to one or
                more MCP servers.
              </p>
            </div>

            <div className="arch-component">
              <h4>🔌 MCP Client</h4>
              <p>
                A connector component running within the host application that manages
                communication with a single MCP server. Each server connection has its
                own isolated client for security.
              </p>
            </div>

            <div className="arch-component">
              <h4>⚙️ MCP Server</h4>
              <p>
                A lightweight service that implements the MCP protocol and offers specific
                capabilities. Servers can expose databases, content repositories, SaaS
                APIs, or other data sources.
              </p>
            </div>

            <div className="arch-component">
              <h4>📡 Transport Layer</h4>
              <p>
                MCP supports multiple transport mechanisms: STDIO for local servers,
                HTTP/SSE for remote servers. All messages use JSON-RPC 2.0 format.
              </p>
            </div>
          </div>

          <div className="comparison-grid">
            <div className="comparison-card before">
              <h3>❌ Before MCP</h3>
              <ul>
                <li>Unique API for each service</li>
                <li>Custom integration code</li>
                <li>Limited interoperability</li>
                <li>Duplicated development effort</li>
              </ul>
            </div>
            <div className="comparison-card after">
              <h3>✅ After MCP</h3>
              <ul>
                <li>Unified API standard</li>
                <li>Reusable MCP servers</li>
                <li>Cross-platform compatibility</li>
                <li>Write once, use everywhere</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card">
          <h2>🎯 Key Features of MCP</h2>
          <div className="grid">
            <div className="feature-box">
              <h4>🔄 Bidirectional Communication</h4>
              <p>
                Two-way communication between AI models and external systems,
                enabling real-time data exchange and dynamic interactions.
              </p>
            </div>

            <div className="feature-box">
              <h4>🔍 Dynamic Discovery</h4>
              <p>
                AI agents can automatically discover available resources, tools,
                and capabilities exposed by MCP servers at runtime.
              </p>
            </div>

            <div className="feature-box">
              <h4>🔒 Secure by Design</h4>
              <p>
                Built-in security features with isolated client connections,
                controlled access, and structured authentication mechanisms.
              </p>
            </div>

            <div className="feature-box">
              <h4>🌐 Platform Agnostic</h4>
              <p>
                Works across different AI platforms, models, and programming
                languages through a universal JSON-RPC protocol.
              </p>
            </div>

            <div className="feature-box">
              <h4>📦 Modular Architecture</h4>
              <p>
                Compose complex systems by connecting multiple MCP servers,
                each providing specialized functionality.
              </p>
            </div>

            <div className="feature-box">
              <h4>⚡ Real-time Context</h4>
              <p>
                Provide AI models with up-to-date context from external systems,
                databases, and APIs without manual updates.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <h2>🌟 Real-World Applications</h2>
          
          <div className="use-case">
            <div className="use-case-icon">🎫</div>
            <div className="use-case-content">
              <h3>IT Support - Siit Platform</h3>
              <p>
                <strong>Siit</strong>, a modern ITSM platform, uses MCP to power IT AI agents.
                When employees report issues like "I can't find my laptop," the AI agent
                automatically accesses ticket systems, user data, and knowledge bases through
                MCP to provide instant support.
              </p>
            </div>
          </div>

          <div className="use-case">
            <div className="use-case-icon">💰</div>
            <div className="use-case-content">
              <h3>Finance - Ramp AI Agents</h3>
              <p>
                <strong>Ramp's</strong> AI agents analyze individual transactions on behalf
                of finance teams. Using MCP, they validate receipts, check policy compliance,
                verify amounts, and auto-approve transactions that meet all criteria.
              </p>
            </div>
          </div>

          <div className="use-case">
            <div className="use-case-icon">👥</div>
            <div className="use-case-content">
              <h3>Recruiting - Juicebox AI</h3>
              <p>
                <strong>Juicebox's</strong> AI recruiting agents search candidate profiles,
                match requirements, analyze feedback, and present qualified candidates through
                MCP integration with recruitment databases and ATS systems.
              </p>
            </div>
          </div>

          <div className="use-case">
            <div className="use-case-icon">📊</div>
            <div className="use-case-content">
              <h3>Accounting - Aleph AI</h3>
              <p>
                <strong>Aleph AI</strong> offers AI agents that perform actions on accounting
                data, such as categorizing transactions, generating roll-up mappings, and
                automating financial workflows through MCP.
              </p>
            </div>
          </div>
        </div>

        <div className="cta-box">
          <h2>Ready to Learn More?</h2>
          <p>
            Explore our comprehensive presentation and hands-on tutorial to master MCP
            and build your own AI-powered applications.
          </p>
          <div className="cta-buttons">
            <a href="/presentation" className="btn">View Presentation</a>
            <a href="/tutorial" className="btn btn-secondary">Start Tutorial</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
