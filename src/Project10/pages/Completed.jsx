function Completed({ todos, toggleTask, deleteTask }) {
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div className="page">
      <h2>Completed Tasks</h2>

      {completedTodos.length === 0 ? (
        <p className="empty-message">
          No completed tasks.
        </p>
      ) : (
        <div className="task-list">
          {completedTodos.map((todo) => (
            <div className="task-item" key={todo.id}>
              <span
                className="completed"
                onClick={() => toggleTask(todo.id)}
              >
                {todo.text}
              </span>

              <div className="task-actions">
                <button
                  className="done-btn"
                  onClick={() => toggleTask(todo.id)}
                >
                  Undo
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
    </div>
  );
}

export default Completed;