import React from "react";
import TaskList from "../components/TaskList";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 text-white py-4 px-8 text-lg font-bold">
        TaskSync Dashboard
      </header>
      <div className="p-8">
        <TaskList />
      </div>
    </div>
  );
}
