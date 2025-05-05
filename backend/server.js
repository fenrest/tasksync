const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Mock database
const tasks = [];

// API Routes
// POST /api/tasks - Create a task
app.post("/api/tasks", (req, res) => {
  const { title, description, priority } = req.body;
  const newTask = {
    id: tasks.length + 1,
    title,
    description,
    priority: priority || "low",
    completed: false,
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// GET /api/tasks?priority=high - Filter tasks by priority
app.get("/api/tasks", (req, res) => {
  const { priority } = req.query;
  if (priority) {
    const filteredTasks = tasks.filter((task) => task.priority === priority);
    return res.json(filteredTasks);
  }
  res.json(tasks);
});

// PUT /api/tasks/:id/complete - Mark task as done
app.put("/api/tasks/:id/complete", (req, res) => {
  const { id } = req.params;
  const task = tasks.find((task) => task.id === parseInt(id, 10));
  if (task) {
    task.completed = true;
    return res.json(task);
  }
  res.status(404).json({ message: "Task not found" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
