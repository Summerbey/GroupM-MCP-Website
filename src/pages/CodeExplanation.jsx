import React from 'react';
import CodeBlock from '../components/CodeBlock';
import './CodeExplanation.css';

const CodeExplanation = () => {
  return (
    <div className="code-explanation-page">
      <div className="container">
        <div className="page-header">
          <h1>🔍 Code Deep Dive</h1>
          <p>Detailed explanation of MCP server implementation</p>
        </div>

        <div className="card">
          <h2>MCP Server Architecture</h2>
          <p>
            Our MCP server follows a modular architecture with three main components:
          </p>
          
          <div className="architecture-grid">
            <div className="arch-card">
              <h3>1. Server Instance</h3>
              <p>
                The core Server class from the MCP SDK handles connection management,
                request routing, and capability negotiation with clients.
              </p>
            </div>
            
            <div className="arch-card">
              <h3>2. Request Handlers</h3>
              <p>
                Request handlers process specific JSON-RPC 2.0 requests for resources,
                tools, prompts, and other MCP primitives.
              </p>
            </div>
            
            <div className="arch-card">
              <h3>3. Transport Layer</h3>
              <p>
                StdioServerTransport enables communication via standard input/output,
                perfect for local development and AI client integration.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <h2>Key Code Patterns</h2>
          
          <h3>1. Server Initialization</h3>
          <CodeBlock
            language="javascript"
            title="Creating the MCP Server"
            code={`const server = new Server(
  {
    name: "task-manager-server",
    version: "1.0.0",
  },
  {
    capabilities: {
      resources: {},  // Expose data/files
      tools: {},      // Expose actions
    },
  }
);`}
          />
          <p>
            The server instance declares its capabilities upfront, allowing clients to
            discover what the server can do.
          </p>

          <h3>2. Exposing Resources</h3>
          <CodeBlock
            language="javascript"
            title="Resource Pattern"
            code={`server.setRequestHandler(ListResourcesRequestSchema, async () => {
  return {
    resources: [
      {
        uri: "tasks://all",
        mimeType: "application/json",
        name: "All Tasks",
        description: "List of all tasks",
      },
    ],
  };
});`}
          />
          <p>
            Resources use URI schemes to identify different data sources. Clients can
            list and read these resources dynamically.
          </p>

          <h3>3. Tool Execution</h3>
          <CodeBlock
            language="javascript"
            title="Tool Pattern"
            code={`server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;
  
  switch (name) {
    case "create_task":
      // Execute tool logic
      return { content: [{ type: "text", text: "Success!" }] };
  }
});`}
          />
          <p>
            Tools provide callable functions with JSON Schema validation. The server
            executes the requested action and returns structured results.
          </p>
        </div>

        <div className="card">
          <h2>Data Flow Diagram</h2>
          
          <div className="flow-diagram">
            <div className="flow-step">
              <div className="flow-number">1</div>
              <h4>Client Request</h4>
              <p>AI client sends JSON-RPC request</p>
            </div>
            
            <div className="flow-arrow">↓</div>
            
            <div className="flow-step">
              <div className="flow-number">2</div>
              <h4>Transport Layer</h4>
              <p>STDIO/HTTP receives and parses</p>
            </div>
            
            <div className="flow-arrow">↓</div>
            
            <div className="flow-step">
              <div className="flow-number">3</div>
              <h4>Request Handler</h4>
              <p>Server routes to appropriate handler</p>
            </div>
            
            <div className="flow-arrow">↓</div>
            
            <div className="flow-step">
              <div className="flow-number">4</div>
              <h4>Business Logic</h4>
              <p>Execute tool or fetch resource</p>
            </div>
            
            <div className="flow-arrow">↓</div>
            
            <div className="flow-step">
              <div className="flow-number">5</div>
              <h4>Response</h4>
              <p>Return structured JSON-RPC response</p>
            </div>
          </div>
        </div>

        <div className="card">
          <h2>Best Practices</h2>
          
          <div className="best-practice">
            <h4>✅ Use Descriptive URIs</h4>
            <p>
              Resource URIs should be self-explanatory: <code>tasks://active</code>
              is better than <code>tasks://1</code>
            </p>
          </div>
          
          <div className="best-practice">
            <h4>✅ Validate Tool Arguments</h4>
            <p>
              Always define JSON Schema for tool inputs to ensure type safety and
              provide clear documentation.
            </p>
          </div>
          
          <div className="best-practice">
            <h4>✅ Handle Errors Gracefully</h4>
            <p>
              Return meaningful error messages that help clients understand what went
              wrong and how to fix it.
            </p>
          </div>
          
          <div className="best-practice">
            <h4>✅ Keep State Manageable</h4>
            <p>
              For production servers, use persistent storage (databases) instead of
              in-memory state.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeExplanation;
