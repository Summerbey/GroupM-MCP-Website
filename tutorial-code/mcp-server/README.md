# MCP Task Manager Server

A Model Context Protocol server that provides task management capabilities.

## Installation

```bash
npm install
```

## Running the Server

```bash
npm start
```

## Available Resources

- `tasks://all` - All tasks
- `tasks://active` - Incomplete tasks
- `tasks://completed` - Completed tasks

## Available Tools

- `create_task` - Create a new task
- `complete_task` - Mark a task as completed
- `delete_task` - Delete a task
- `update_task` - Update task details

## Testing with Claude Desktop

Add this configuration to your Claude Desktop config file:

```json
{
  "mcpServers": {
    "task-manager": {
      "command": "node",
      "args": ["/absolute/path/to/mcp-server/index.js"]
    }
  }
}
```

## Example Usage

Try these prompts in Claude Desktop:

- "Show me all my tasks"
- "Create a new task called 'Review code'"
- "Mark task 1 as completed"
- "Delete task 2"
