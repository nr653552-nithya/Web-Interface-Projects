function SubjectList() {

  const subjects = [
    "Data Structures",
    "DBMS",
    "Java Programming",
    "Web Technology",
    "Computer Networks"
  ];

  return (
    <div className="subject-list">
      <h2>Subjects</h2>

      <ul>
        {subjects.map((subject, index) => (
          <li key={index}>{subject}</li>
        ))}
      </ul>
    </div>
  );
}

export default SubjectList;