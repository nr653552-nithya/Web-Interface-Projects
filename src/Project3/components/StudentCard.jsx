function StudentCard() {
  return (
    <div className="student-card">

      <img
        src="https://via.placeholder.com/120"
        alt="Student"
      />

      <h2 style={{ color: "blue" }}>Nithya R</h2>

      <p>Register No: 2024CSE001</p>
      <p>Department: CSE</p>
      <p>Year & Semester: II Year - IV Semester</p>

      <p style={{ fontWeight: "bold" }}>CGPA: 8.5</p>

      <p style={{ color: "green" }}>
        Attendance: 85%
      </p>

    </div>
  );
}

export default StudentCard;