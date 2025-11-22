→ README.md
→ Project Overview

The Task Manager API is a simple Node.js and Express-based REST API that allows users to manage tasks.
It demonstrates clean backend architecture using:

Routes

Controllers

Services

Validation

Error Handling

Modern ES Modules (import / export)

Each task has:

{
"id": 1,
"title": "Task title",
"description": "Task description",
"completed": false
}

This project includes full CRUD operations with proper HTTP status codes and validation rules.

→ Setup Instructions

1. Clone the repository
   git clone <your-repo-url>
   cd task-manager-api

2. Install dependencies
   npm install

3. Enable ES Modules

Ensure "type": "module" is present in package.json:

{
"type": "module"
}

4. Start the server

Development:

npm run dev

Production:

npm start

Server will run on:

http://localhost:3000

→ API Endpoints & Testing Guide

Base URL:

/tasks

Use tools like Postman, Thunder Client, or curl for testing.

→ 1. Get All Tasks

GET /tasks

Test:
curl http://localhost:3000/tasks

Response:
{
"success": true,
"tasks": [...]
}

→ 2. Get Task by ID

GET /tasks/:id

Test:
curl http://localhost:3000/tasks/1

Responses:

200 OK – Task found

400 Bad Request – Invalid ID

404 Not Found – Task does not exist

→ 3. Create a Task

POST /tasks

Body (JSON):
{
"title": "Learn Node.js",
"description": "Practice building APIs",
"completed": false
}

Test:
curl -X POST http://localhost:3000/tasks \
 -H "Content-Type: application/json" \
 -d '{"title":"Learn Node.js","description":"APIs","completed":false}'

Responses:

201 Created

400 Bad Request (invalid or missing fields)

→ 4. Update a Task

PUT /tasks/:id

You may update any field.

Test:
curl -X PUT http://localhost:3000/tasks/1 \
 -H "Content-Type: application/json" \
 -d '{"title":"Updated","completed":true}'

Responses:

200 OK

400 Bad Request (invalid fields or types)

404 Not Found

→ 5. Delete a Task

DELETE /tasks/:id

Test:
curl -X DELETE http://localhost:3000/tasks/1

Responses:

200 OK

404 Not Found

→ Error Handling

Errors return a consistent JSON structure:

{
"success": false,
"message": "Error details here"
}

Handled by:

Custom ApiError class

Global error middleware

Common errors include:

Invalid IDs

Missing fields

completed not being a boolean

Task not found

→ Testing Tips

Always send:

Content-Type: application/json

Use curl, Postman, Thunder Client, or VS Code REST Client.

Double-check JSON formatting (double quotes required).
