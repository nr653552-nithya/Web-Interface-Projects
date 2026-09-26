import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink
} from "react-router-dom";

import "./project2.css";

import Home from "./pages/Home";
import AddTask from "./pages/AddTask";
import AllTasks from "./pages/AllTasks";
import Completed from "./pages/Completed";
import Pending from "./pages/Pending";

function Project2() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todoList");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todos));
  }, [todos]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text: text,
      completed: false
    };

    setTodos((oldTodos) => [...oldTodos, newTask]);
  };

  const toggleTask = (id) => {
    setTodos((oldTodos) =>
      oldTodos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const deleteTask = (id) => {
    setTodos((oldTodos) =>
      oldTodos.filter((todo) => todo.id !== id)
    );
  };

  const clearAll = () => {
    setTodos([]);
  };

  return (
    <BrowserRouter>
      <div className="todo-app">

        <h1>Todo App</h1>

        <nav className="todo-nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/add-task">Add Task</NavLink>
          <NavLink to="/all-tasks">All Tasks</NavLink>
          <NavLink to="/completed">Completed</NavLink>
          <NavLink to="/pending">Pending</NavLink>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <Home todos={todos} />
            }
          />

          <Route
            path="/add-task"
            element={
              <AddTask addTask={addTask} />
            }
          />

          <Route
            path="/all-tasks"
            element={
              <AllTasks
                todos={todos}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
                clearAll={clearAll}
              />
            }
          />

          <Route
            path="/completed"
            element={
              <Completed
                todos={todos}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
              />
            }
          />

          <Route
            path="/pending"
            element={
              <Pending
                todos={todos}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
              />
            }
          />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default Project2;