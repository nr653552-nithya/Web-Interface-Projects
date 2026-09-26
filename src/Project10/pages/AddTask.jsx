import { useState } from "react";

function AddTask({ addTask }) {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    if (task.trim() === "") {
      return;
    }

    addTask(task);
    setTask("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div className="page">
      <h2>Add Task</h2>

      <div className="add-box">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter your task"
        />

        <button onClick={handleAdd}>Add Task</button>
      </div>
    </div>
  );
}

export default AddTask;