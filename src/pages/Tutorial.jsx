import React from 'react';
import CodeBlock from '../components/CodeBlock';
import './Tutorial.css';

const Tutorial = () => {
  return (
    <div className="tutorial-page">
      <div className="container">
        <div className="page-header">
          <h1>🎓 Build a Task Manager with MCP</h1>
          <p>
            Learn how to create a complete MCP-enabled application from scratch.
            This tutorial will take approximately 60 minutes to complete.
          </p>
        </div>

        <div className="tutorial-nav card">
          <h3>📋 Tutorial Contents</h3>
          <ul className="tutorial-toc">
            <li><a href="#prerequisites">1. Prerequisites & Setup</a></li>
            <li><a href="#mcp-server">2. Create MCP Server</a></li>
            <li><a href="#test-server">3. Test with Claude Desktop</a></li>
            <li><a href="#react-frontend">4. Build React Frontend</a></li>
            <li><a href="#integration">5. Connect Frontend to MCP</a></li>
            <li><a href="#deployment">6. Testing & Deployment</a></li>
          </ul>
        </div>

        {/* Prerequisites Section */}
        <div id="prerequisites" className="card tutorial-section">
          <h2><span className="step-number">1</span>Prerequisites & Setup</h2>
          
          <div className="alert alert-info">
            <strong>⏱️ Time Required:</strong> 10 minutes<br/>
            <strong>💡 What You'll Learn:</strong> Environment setup and dependencies
          </div>

          <h3>What You'll Need</h3>
          <ul>
            <li>Node.js (v18 or higher) installed</li>
            <li>Basic knowledge of JavaScript/React</li>
            <li>A code editor (VS Code recommended)</li>
            <li>Claude Desktop app (optional, for testing)</li>
          </ul>

          <h3>Create Project Structure</h3>
          <p>First, let's create our project folders:</p>

          <CodeBlock
            language="bash"
            title="Terminal"
            code={`# Create main project directory
mkdir mcp-task-manager
cd mcp-task-manager

# Create server and client directories
mkdir mcp-server
mkdir react-client

# Navigate to server directory
cd mcp-server`}
          />

          <h3>Initialize MCP Server</h3>
          <CodeBlock
            language="bash"
            title="Terminal (in mcp-server directory)"
            code={`# Initialize Node.js project
npm init -y

# Install MCP SDK and dependencies
npm install @modelcontextprotocol/sdk`}
          />

          <div className="alert alert-success">
            <strong>✅ Checkpoint:</strong> You should now have both directories created with
            the MCP SDK installed in the server folder.
          </div>
        </div>

        {/* Video Tutorial 1: Getting Started */}
        <div className="card tutorial-section">
          <h2>🎥 Video Tutorial 1: Getting Started with MCP</h2>
          <p>Watch this introductory video to understand the basics of MCP and see the setup process in action.</p>
          <div className="video-wrapper">
            <video controls className="tutorial-video">
              <source src="/videos/tutorial-1.mp4" type="video/mp4" />
              <source src="/videos/tutorial-1.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* MCP Server Section */}
        <div id="mcp-server" className="card tutorial-section">
          <h2><span className="step-number">2</span>Create MCP Server</h2>
          
          <div className="alert alert-info">
            <strong>⏱️ Time Required:</strong> 15 minutes<br/>
            <strong>💡 What You'll Learn:</strong> Building a basic MCP server
          </div>

          <h3>Create Server File</h3>
          <p>Create an <code>index.js</code> file in your mcp-server directory with the following structure:</p>

          <CodeBlock
            language="javascript"
            title="mcp-server/index.js"
            code={`import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';

// Initialize the MCP server
const server = new Server(
  {
    name: 'task-manager-server',
    version: '1.0.0',
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// Start the server
const transport = new StdioServerTransport();
await server.connect(transport);

console.log('Task Manager MCP Server running');`}
          />
        </div>

        {/* Video Tutorial 2: Building the Server */}
        <div className="card tutorial-section">
          <h2>🎥 Video Tutorial 2: Building Your MCP Server</h2>
          <p>This video demonstrates how to implement the core functionality of your MCP server step by step.</p>
          <div className="video-wrapper">
            <video controls className="tutorial-video">
              <source src="/videos/tutorial-2.mp4" type="video/mp4" />
              <source src="/videos/tutorial-2.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Testing Section */}
        <div id="test-server" className="card tutorial-section">
          <h2><span className="step-number">3</span>Test with Claude Desktop</h2>
          
          <div className="alert alert-info">
            <strong>⏱️ Time Required:</strong> 10 minutes<br/>
            <strong>💡 What You'll Learn:</strong> Testing your server with Claude Desktop
          </div>

          <h3>Configure Claude Desktop</h3>
          <p>Add your server to Claude Desktop's configuration file:</p>

          <CodeBlock
            language="json"
            title="claude_desktop_config.json"
            code={`{
  "mcpServers": {
    "task-manager": {
      "command": "node",
      "args": ["/path/to/your/mcp-server/index.js"]
    }
  }
}`}
          />
        </div>

        {/* Rest of tutorial continues... */}
        <div id="react-frontend" className="card tutorial-section">
          <h2><span className="step-number">4</span>Build React Frontend</h2>
          
          <div className="alert alert-info">
            <strong>⏱️ Time Required:</strong> 15 minutes<br/>
            <strong>💡 What You'll Learn:</strong> Creating a user interface for your MCP server
          </div>

          <h3>Initialize React Project</h3>
          <CodeBlock
            language="bash"
            title="Terminal (in react-client directory)"
            code={`# Navigate to client directory
cd ../react-client

# Create React app with Vite
npm create vite@latest . -- --template react

# Install dependencies
npm install`}
          />
        </div>

        <div className="tutorial-footer card">
          <h3>📚 Additional Resources</h3>
          <ul>
            <li>
              <a href="https://modelcontextprotocol.io" target="_blank" rel="noopener noreferrer">
                Official MCP Documentation
              </a>
            </li>
            <li>
              <a href="https://github.com/modelcontextprotocol" target="_blank" rel="noopener noreferrer">
                MCP GitHub Repository
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
