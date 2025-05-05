import React, { useState } from "react";

export default function TaskEditor() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("low");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit task to backend
    console.log({ title, description, priority });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Create a Task</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Description"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <select
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="low">Low Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="high">High Priority</option>
          </select>
          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded">
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
}
