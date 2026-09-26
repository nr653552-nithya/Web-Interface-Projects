function Pending({ todos, toggleTask, deleteTask }) {
  const pendingTodos = todos.filter((todo) => !todo.completed);

  return (
    <div className="page">
      <h2>Pending Tasks</h2>

      {pendingTodos.length === 0 ? (
        <p className="empty-message">
          No pending tasks.
        </p>
      ) : (
        <div className="task-list">
          {pendingTodos.map((todo) => (
            <div className="task-item" key={todo.id}>
              <span onClick={() => toggleTask(todo.id)}>
                {todo.text}
              </span>

              <div className="task-actions">
                <button
                  className="done-btn"
                  onClick={() => toggleTask(todo.id)}
                >
                  Done
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

export default Pending;