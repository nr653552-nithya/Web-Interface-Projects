import { useState } from "react";

import Project3 from "./Project3/App";
import Project4 from "./Project4/App";
import Project5 from "./Project5/App";
import Project6 from "./Project6/App";
import Project7 from "./Project7/App";
import Project8 from "./Project8/App";

import "./App.css";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openProject = (project) => {
    setSelectedProject(project);
  };

  const goHome = () => {
    setSelectedProject(null);
  };

  if (selectedProject === "Project 1") {
    return (
      <div className="output-page">
        <button className="back-button" onClick={goHome}>
          ← Back to Projects
        </button>

        <h1>Project 1</h1>

        <iframe
          src="/Project1/project1.html"
          title="Project 1"
          className="project-output"
        />
      </div>
    );
  }

  if (selectedProject === "Project 2") {
    return (
      <div className="output-page">
        <button className="back-button" onClick={goHome}>
          ← Back to Projects
        </button>

        <h1>Project 2</h1>

        <iframe
          src="/Project2/project2.html"
          title="Project 2"
          className="project-output"
        />
      </div>
    );
  }

  if (selectedProject === "Project 3") {
    return (
      <div className="output-page">
        <button className="back-button" onClick={goHome}>
          ← Back to Projects
        </button>
        <h1>Project 3</h1>
        <Project3 />
      </div>
    );
  }

  if (selectedProject === "Project 4") {
    return (
      <div className="output-page">
        <button className="back-button" onClick={goHome}>
          ← Back to Projects
        </button>
        <h1>Project 4</h1>
        <Project4 />
      </div>
    );
  }

  if (selectedProject === "Project 5") {
    return (
      <div className="output-page">
        <button className="back-button" onClick={goHome}>
          ← Back to Projects
        </button>
        <h1>Project 5</h1>
        <Project5 />
      </div>
    );
  }

  if (selectedProject === "Project 6") {
    return (
      <div className="output-page">
        <button className="back-button" onClick={goHome}>
          ← Back to Projects
        </button>
        <h1>Project 6</h1>
        <Project6 />
      </div>
    );
  }

  if (selectedProject === "Project 7") {
    return (
      <div className="output-page">
        <button className="back-button" onClick={goHome}>
          ← Back to Projects
        </button>
        <h1>Project 7</h1>
        <Project7 />
      </div>
    );
  }

  if (selectedProject === "Project 8") {
    return (
      <div className="output-page">
        <button className="back-button" onClick={goHome}>
          ← Back to Projects
        </button>
        <h1>Project 8</h1>
        <Project8 />
      </div>
    );
  }

  return (
    <div className="home-page">
      <h1>WEB INTERFACE PROJECTS</h1>
      <p>Select a project to view its output</p>

      <div className="project-grid">

        <button
          className="project-card"
          onClick={() => openProject("Project 1")}
        >
          <span>Project 1</span>
          <small>Counter App</small>
        </button>

        <button
          className="project-card"
          onClick={() => openProject("Project 2")}
        >
          <span>Project 2</span>
          <small>Web Project</small>
        </button>

        <button
          className="project-card"
          onClick={() => openProject("Project 3")}
        >
          <span>Project 3</span>
          <small>Student Portal</small>
        </button>

        <button
          className="project-card"
          onClick={() => openProject("Project 4")}
        >
          <span>Project 4</span>
          <small>My Hobbies</small>
        </button>

        <button
          className="project-card"
          onClick={() => openProject("Project 5")}
        >
          <span>Project 5</span>
          <small>Calculator</small>
        </button>

        <button
          className="project-card"
          onClick={() => openProject("Project 6")}
        >
          <span>Project 6</span>
          <small>Attendance</small>
        </button>

        <button
          className="project-card"
          onClick={() => openProject("Project 7")}
        >
          <span>Project 7</span>
          <small>Form Validation</small>
        </button>

        <button
          className="project-card"
          onClick={() => openProject("Project 8")}
        >
          <span>Project 8</span>
          <small>My Portfolio</small>
        </button>

      </div>
    </div>
  );
}

export default App;