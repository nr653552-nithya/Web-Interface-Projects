function AllTasks({ todos, toggleTask, deleteTask, clearAll }) {
  return (
    <div className="page">
      <h2>All Tasks</h2>

      {todos.length === 0 ? (
        <p className="empty-message">No tasks available.</p>
      ) : (
        <div className="task-list">
          {todos.map((todo) => (
            <div className="task-item" key={todo.id}>
              <span
                className={todo.completed ? "completed" : ""}
                onClick={() => toggleTask(todo.id)}
              >
                {todo.text}
              </span>

              <div className="task-actions">
                <button
                  className="done-btn"
                  onClick={() => toggleTask(todo.id)}
                >
                  {todo.completed ? "Undo" : "Done"}
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteTask(todo.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {todos.length > 0 && (
        <button className="clear-btn" onClick={clearAll}>
          Clear All
        </button>
      )}
    </div>
  );
}

export default AllTasks;