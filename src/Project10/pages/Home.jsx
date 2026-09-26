function Home({ todos }) {
  const completed = todos.filter((todo) => todo.completed).length;
  const pending = todos.length - completed;

  return (
    <div className="page">
      <h2>Welcome to Todo App</h2>

      <p>Manage your daily tasks easily.</p>

      <div className="stats">
        <div className="stat-card">
          <h3>Total Tasks</h3>
          <p>{todos.length}</p>
        </div>

        <div className="stat-card">
          <h3>Completed</h3>
          <p>{completed}</p>
        </div>

        <div className="stat-card">
          <h3>Pending</h3>
          <p>{pending}</p>
        </div>
      </div>
    </div>
  );
}

export default Home;