import { useState } from "react";
import "./Attendance.css";

function Attendance() {
  const [students, setStudents] = useState([
    { id: 1, name: "Student 1", status: "Absent" },
    { id: 2, name: "Student 2", status: "Absent" },
    { id: 3, name: "Student 3", status: "Absent" },
    { id: 4, name: "Student 4", status: "Absent" },
    { id: 5, name: "Student 5", status: "Absent" },
    { id: 6, name: "Student 6", status: "Absent" },
    { id: 7, name: "Student 7", status: "Absent" },
    { id: 8, name: "Student 8", status: "Absent" },
    { id: 9, name: "Student 9", status: "Absent" },
    { id: 10, name: "Student 10", status: "Absent" },
    { id: 11, name: "Student 11", status: "Absent" },
    { id: 12, name: "Student 12", status: "Absent" },
    { id: 13, name: "Student 13", status: "Absent" },
    { id: 14, name: "Student 14", status: "Absent" },
    { id: 15, name: "Student 15", status: "Absent" },
    { id: 16, name: "Student 16", status: "Absent" },
    { id: 17, name: "Student 17", status: "Absent" },
    { id: 18, name: "Student 18", status: "Absent" },
    { id: 19, name: "Student 19", status: "Absent" },
    { id: 20, name: "Student 20", status: "Absent" }
  ]);

  const updateAttendance = (id, status) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? { ...student, status: status }
          : student
      )
    );
  };

  const presentCount = students.filter(
    (student) => student.status === "Present"
  ).length;

  const absentCount = students.filter(
    (student) => student.status === "Absent"
  ).length;

  return (
    <div className="attendance">
      <h1>Attendance Tracker</h1>

      <div className="count-box">
        <h3>Total Students: {students.length}</h3>
        <h3>Present: {presentCount}</h3>
        <h3>Absent: {absentCount}</h3>
      </div>

      <div className="student-list">
        {students.map((student) => (
          <div className="student-card" key={student.id}>
            
            <h3>{student.name}</h3>

            <p>
              Status:
              {student.status === "Present"
                ? " Present"
                : " Absent"}
            </p>

            <button
              className="present"
              onClick={() =>
                updateAttendance(student.id, "Present")
              }
            >
              Present
            </button>

            <button
              className="absent"
              onClick={() =>
                updateAttendance(student.id, "Absent")
              }
            >
              Absent
            </button>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Attendance;