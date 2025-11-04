import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  ListResourcesRequestSchema,
  ReadResourceRequestSchema,
  ListToolsRequestSchema,
  CallToolRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

// In-memory task storage
const tasks = [
  { id: 1, title: "Learn MCP", completed: false, priority: "high" },
  { id: 2, title: "Build demo app", completed: false, priority: "medium" },
  { id: 3, title: "Deploy to production", completed: false, priority: "low" },
];

let nextId = 4;

// Create MCP server instance
const server = new Server(
  {
    name: "task-manager-server",
    version: "1.0.0",
  },
  {
    capabilities: {
      resources: {},
      tools: {},
    },
  }
);

// Handle list resources request
server.setRequestHandler(ListResourcesRequestSchema, async () => {
  return {
    resources: [
      {
        uri: "tasks://all",
        mimeType: "application/json",
        name: "All Tasks",
        description: "List of all tasks in the system",
      },
      {
        uri: "tasks://active",
        mimeType: "application/json",
        name: "Active Tasks",
        description: "List of incomplete tasks",
      },
      {
        uri: "tasks://completed",
        mimeType: "application/json",
        name: "Completed Tasks",
        description: "List of completed tasks",
      },
    ],
  };
});

// Handle read resource request
server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
  const uri = request.params.uri;
  
  let filteredTasks;
  if (uri === "tasks://all") {
    filteredTasks = tasks;
  } else if (uri === "tasks://active") {
    filteredTasks = tasks.filter(t => !t.completed);
  } else if (uri === "tasks://completed") {
    filteredTasks = tasks.filter(t => t.completed);
  } else {
    throw new Error(`Unknown resource: ${uri}`);
  }

  return {
    contents: [
      {
        uri: uri,
        mimeType: "application/json",
        text: JSON.stringify(filteredTasks, null, 2),
      },
    ],
  };
});

// Handle list tools request
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "create_task",
        description: "Create a new task",
        inputSchema: {
          type: "object",
          properties: {
            title: { type: "string", description: "Task title" },
            priority: { 
              type: "string", 
              enum: ["low", "medium", "high"],
              description: "Task priority level"
            },
          },
          required: ["title"],
        },
      },
      {
        name: "complete_task",
        description: "Mark a task as completed",
        inputSchema: {
          type: "object",
          properties: {
            id: { type: "number", description: "Task ID" },
          },
          required: ["id"],
        },
      },
      {
        name: "delete_task",
        description: "Delete a task",
        inputSchema: {
          type: "object",
          properties: {
            id: { type: "number", description: "Task ID" },
          },
          required: ["id"],
        },
      },
      {
        name: "update_task",
        description: "Update task details",
        inputSchema: {
          type: "object",
          properties: {
            id: { type: "number", description: "Task ID" },
            title: { type: "string", description: "New task title" },
            priority: { 
              type: "string", 
              enum: ["low", "medium", "high"],
              description: "New priority level"
            },
          },
          required: ["id"],
        },
      },
    ],
  };
});

// Handle tool execution
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  switch (name) {
    case "create_task": {
      const newTask = {
        id: nextId++,
        title: args.title,
        completed: false,
        priority: args.priority || "medium",
        createdAt: new Date().toISOString(),
      };
      tasks.push(newTask);
      
      return {
        content: [
          {
            type: "text",
            text: `Task created successfully: ${JSON.stringify(newTask, null, 2)}`,
          },
        ],
      };
    }

    case "complete_task": {
      const task = tasks.find(t => t.id === args.id);
      if (!task) {
        throw new Error(`Task ${args.id} not found`);
      }
      task.completed = true;
      task.completedAt = new Date().toISOString();
      
      return {
        content: [
          {
            type: "text",
            text: `Task ${args.id} marked as completed: ${task.title}`,
          },
        ],
      };
    }

    case "delete_task": {
      const index = tasks.findIndex(t => t.id === args.id);
      if (index === -1) {
        throw new Error(`Task ${args.id} not found`);
      }
      const deletedTask = tasks.splice(index, 1)[0];
      
      return {
        content: [
          {
            type: "text",
            text: `Task ${args.id} deleted successfully: ${deletedTask.title}`,
          },
        ],
      };
    }

    case "update_task": {
      const task = tasks.find(t => t.id === args.id);
      if (!task) {
        throw new Error(`Task ${args.id} not found`);
      }
      
      if (args.title) task.title = args.title;
      if (args.priority) task.priority = args.priority;
      task.updatedAt = new Date().toISOString();
      
      return {
        content: [
          {
            type: "text",
            text: `Task ${args.id} updated successfully: ${JSON.stringify(task, null, 2)}`,
          },
        ],
      };
    }

    default:
      throw new Error(`Unknown tool: ${name}`);
  }
});

// Error handling
server.onerror = (error) => {
  console.error("[MCP Error]", error);
};

process.on('SIGINT', async () => {
  console.error('Shutting down MCP server...');
  await server.close();
  process.exit(0);
});

// Start the server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Task Manager MCP Server running on stdio");
  console.error("Available resources: tasks://all, tasks://active, tasks://completed");
  console.error("Available tools: create_task, complete_task, delete_task, update_task");
}

main().catch((error) => {
  console.error("Server error:", error);
  process.exit(1);
});
