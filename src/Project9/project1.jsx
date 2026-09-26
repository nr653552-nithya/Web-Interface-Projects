import { useState } from "react";
import "./style.css";

function Project1() {
  const [semester, setSemester] = useState("1");

  const cgpaData = {
    1: "9.12",
    2: "8.86",
    3: "8.74",
    4: "8.91",
    5: "9.05",
    6: "8.82",
    7: "9.18",
    8: "9.25",
  };

  const overallCGPA = "8.99";

  const semesterData = {
    1: {
      exam: "NOVEMBER/DECEMBER 2025",
      courses: [
        ["24TA101", "Heritage of Tamils", 1, "S", "P"],
        ["24BS151", "Physics and Chemistry Laboratory", 2, "A+", "P"],
        ["24CH101", "Engineering Chemistry", 3, "A+", "P"],
        ["24PH101", "Engineering Physics", 3, "A+", "P"],
        ["24AC101", "Indian Constitution and Freedom Movement", 0, "S", "P"],
        ["24EN101", "Technical English - I", 3, "A+", "P"],
        ["24MA102", "Matrices and Differential Equations", 4, "A+", "P"],
        ["24CS192", "Design for Developers", 4, "A+", "P"],
        ["24CS193", "Logic Building using Java", 4, "S", "P"],
      ],
    },

    2: {
      exam: "APRIL/MAY 2026",
      courses: [
        ["24EN291", "Technical English - II", 3, "A+", "P"],
        ["24TA201", "Tamils and Technology", 1, "S", "P"],
        ["24MA292", "Probability Distributions and Statistics", 4, "A+", "P"],
        ["24EE293", "Basics of Electrical and Electronics for Computer Engineers", 3, "A+", "P"],
        ["24CS292", "Web Technology", 4, "A+", "P"],
        ["24CS293", "Problem Solving using Python for Computer Engineers", 4, "P", "P"],
        ["24CS294", "Object Oriented Programming using Java", 4, "A", "P"],
      ],
    },

    3: {
      exam: "NOVEMBER/DECEMBER 2026",
      courses: [
        ["24CS301", "Data Structures", 4, "A+", "P"],
        ["24CS302", "Database Management Systems", 4, "A+", "P"],
        ["24CS303", "Computer Organization", 3, "A", "P"],
        ["24CS304", "Operating Systems", 4, "A+", "P"],
        ["24CS305", "Discrete Mathematics", 4, "A", "P"],
        ["24CS306", "Software Engineering", 3, "A+", "P"],
        ["24CS307", "Data Structures Laboratory", 2, "S", "P"],
        ["24CS308", "DBMS Laboratory", 2, "S", "P"],
      ],
    },

    4: {
      exam: "APRIL/MAY 2027",
      courses: [
        ["24CS401", "Design and Analysis of Algorithms", 4, "A+", "P"],
        ["24CS402", "Computer Networks", 4, "A", "P"],
        ["24CS403", "Theory of Computation", 3, "A+", "P"],
        ["24CS404", "Microprocessors and Microcontrollers", 3, "A", "P"],
        ["24CS405", "Software Engineering and Design", 4, "A+", "P"],
        ["24CS406", "Web Application Development", 3, "A+", "P"],
        ["24CS407", "Algorithms Laboratory", 2, "S", "P"],
        ["24CS408", "Web Technology Laboratory", 2, "S", "P"],
      ],
    },

    5: {
      exam: "NOVEMBER/DECEMBER 2027",
      courses: [
        ["24CS501", "Artificial Intelligence", 4, "A+", "P"],
        ["24CS502", "Machine Learning", 4, "A", "P"],
        ["24CS503", "Cloud Computing", 3, "A+", "P"],
        ["24CS504", "Cyber Security", 3, "A", "P"],
        ["24CS505", "Mobile Application Development", 3, "A+", "P"],
        ["24CS506", "Professional Elective - I", 3, "A+", "P"],
        ["24CS507", "AI and ML Laboratory", 2, "S", "P"],
        ["24CS508", "Mobile Application Laboratory", 2, "S", "P"],
      ],
    },

    6: {
      exam: "APRIL/MAY 2028",
      courses: [
        ["24CS601", "Data Science", 4, "A+", "P"],
        ["24CS602", "Big Data Analytics", 4, "A", "P"],
        ["24CS603", "Internet of Things", 3, "A+", "P"],
        ["24CS604", "DevOps", 3, "A+", "P"],
        ["24CS605", "Blockchain Technology", 3, "A", "P"],
        ["24CS606", "Professional Elective - II", 3, "A+", "P"],
        ["24CS607", "Data Science Laboratory", 2, "S", "P"],
        ["24CS608", "IoT Laboratory", 2, "S", "P"],
      ],
    },

    7: {
      exam: "NOVEMBER/DECEMBER 2028",
      courses: [
        ["24CS701", "Deep Learning", 4, "A+", "P"],
        ["24CS702", "Natural Language Processing", 3, "A", "P"],
        ["24CS703", "Distributed Computing", 3, "A+", "P"],
        ["24CS704", "Professional Elective - III", 3, "A+", "P"],
        ["24CS705", "Professional Elective - IV", 3, "A", "P"],
        ["24CS706", "Project Work - Phase I", 4, "S", "P"],
        ["24CS707", "Deep Learning Laboratory", 2, "S", "P"],
      ],
    },

    8: {
      exam: "APRIL/MAY 2029",
      courses: [
        ["24CS801", "Professional Elective - V", 3, "A+", "P"],
        ["24CS802", "Professional Elective - VI", 3, "A", "P"],
        ["24CS803", "Project Work - Phase II", 8, "S", "P"],
        ["24CS804", "Internship", 2, "S", "P"],
        ["24CS805", "Seminar", 2, "A+", "P"],
      ],
    },
  };

  const current = semesterData[semester];

  const totalCredits = current.courses.reduce(
    (total, course) => total + course[2],
    0
  );

  return (
    <div className="app">

      {/* TOP BAR */}

      <header className="topbar">

        <div className="brand">

          <div className="brand-icon">
            🎓
          </div>

          <div>
            <h2>EduTrack</h2>
            <span>Student Academic Portal</span>
          </div>

        </div>

        <div className="student-mini">

          <div className="mini-avatar">
            NR
          </div>

          <div>
            <b>Nithya R</b>
            <small>24CS123</small>
          </div>

        </div>

      </header>

      <main className="main">

        {/* WELCOME */}

        <section className="welcome">

          <div>

            <p className="small-title">
              ACADEMIC DASHBOARD
            </p>

            <h1>
              Welcome back, Nithya 👋
            </h1>

            <p>
              View your semester-wise academic performance and results.
            </p>

          </div>

          <div className="academic-badge">

            <span>
              Academic Year
            </span>

            <strong>
              2025 - 2029
            </strong>

          </div>

        </section>

        {/* PROFILE */}

        <section className="profile-card">

          <div className="large-avatar">
            NR
          </div>

          <div className="profile-main">

            <h2>
              Nithya R
            </h2>

            <p>
              Computer Science and Engineering
            </p>

            <div className="profile-info">

              <div>
                <span>Register Number</span>
                <b>24CS123</b>
              </div>

              <div>
                <span>Current Year</span>
                <b>2nd Year</b>
              </div>

              <div>
                <span>Batch</span>
                <b>2025 - 2029</b>
              </div>

              <div>
                <span>College</span>
                <b>Prince Dr. K. Vasudevan College</b>
              </div>

            </div>

          </div>

          <div className="status-badge">
            <span>●</span> Active Student
          </div>

        </section>

        {/* STATS */}

        <section className="stats">

          <div className="stat-card">

            <div className="stat-icon blue">
              📚
            </div>

            <div>
              <span>Semesters</span>
              <h2>8</h2>
            </div>

          </div>

          <div className="stat-card">

            <div className="stat-icon green">
              ✓
            </div>

            <div>
              <span>Completed</span>
              <h2>8 / 8</h2>
            </div>

          </div>

          <div className="stat-card">

            <div className="stat-icon purple">
              ⭐
            </div>

            <div>
              <span>Overall CGPA</span>
              <h2>{overallCGPA}</h2>
            </div>

          </div>

          <div className="stat-card">

            <div className="stat-icon orange">
              🏆
            </div>

            <div>
              <span>Total Credits</span>
              <h2>{totalCredits}</h2>
            </div>

          </div>

        </section>

        {/* RESULT */}

        <section className="result-section">

          <div className="result-heading">

            <div>

              <p className="small-title">
                ACADEMIC RESULTS
              </p>

              <h2>
                Semester Performance
              </h2>

            </div>

            <select
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
            >

              <option value="1">
                Semester 1 · Nov/Dec 2025
              </option>

              <option value="2">
                Semester 2 · Apr/May 2026
              </option>

              <option value="3">
                Semester 3 · Nov/Dec 2026
              </option>

              <option value="4">
                Semester 4 · Apr/May 2027
              </option>

              <option value="5">
                Semester 5 · Nov/Dec 2027
              </option>

              <option value="6">
                Semester 6 · Apr/May 2028
              </option>

              <option value="7">
                Semester 7 · Nov/Dec 2028
              </option>

              <option value="8">
                Semester 8 · Apr/May 2029
              </option>

            </select>

          </div>

          {/* SEMESTER BUTTONS */}

          <div className="semester-pills">

            {[1, 2, 3, 4, 5, 6, 7, 8].map(
              (sem) => (

                <button
                  key={sem}
                  className={
                    semester === String(sem)
                      ? "selected"
                      : ""
                  }
                  onClick={() =>
                    setSemester(String(sem))
                  }
                >

                  <span>
                    SEM
                  </span>

                  {sem}

                </button>

              )
            )}

          </div>

          {/* CURRENT SEMESTER */}

          <div className="current-sem">

            <div>

              <h3>
                Semester {semester}
              </h3>

              <p>
                {current.exam}
              </p>

            </div>

            <div className="cgpa-box">

              <span>
                SEM CGPA
              </span>

              <strong>
                {cgpaData[semester]}
              </strong>

            </div>

            <div className="pass-badge">
              ✓ PASS
            </div>

          </div>

          {/* TABLE */}

          <div className="table-wrapper">

            <table>

              <thead>

                <tr>
                  <th>SEM</th>
                  <th>COURSE CODE</th>
                  <th>COURSE NAME</th>
                  <th>CREDITS</th>
                  <th>GRADE</th>
                  <th>RESULT</th>
                </tr>

              </thead>

              <tbody>

                {current.courses.map(
                  (course, index) => (

                    <tr key={index}>

                      <td>
                        <span className="sem-label">
                          {semester}SEM
                        </span>
                      </td>

                      <td className="course-code">
                        {course[0]}
                      </td>

                      <td className="course-name">
                        {course[1]}
                      </td>

                      <td>
                        {course[2]}
                      </td>

                      <td>

                        <span className="grade">
                          {course[3]}
                        </span>

                      </td>

                      <td>

                        <span className="result-pass">
                          ✓ {course[4]}
                        </span>

                      </td>

                    </tr>

                  )
                )}

              </tbody>

            </table>

          </div>

          {/* RESULT SUMMARY */}

          <div className="result-footer">

            <div>
              <span>Subjects</span>
              <b>{current.courses.length}</b>
            </div>

            <div>
              <span>Credits</span>
              <b>{totalCredits}</b>
            </div>

            <div>
              <span>Semester CGPA</span>
              <b className="cgpa-text">
                {cgpaData[semester]}
              </b>
            </div>

            <div>
              <span>Overall CGPA</span>
              <b className="cgpa-text">
                {overallCGPA}
              </b>
            </div>

            <div>
              <span>Result</span>
              <b className="green-text">
                PASS
              </b>
            </div>

            <div>
              <span>Examination</span>
              <b>{current.exam}</b>
            </div>

          </div>

        </section>

        {/* DEMO NOTE */}

        <div className="demo-note">

          <span>ℹ</span>

          <div>

            <b>
              Demo Academic Portal
            </b>

            <p>
              This website uses dummy student and academic
              data for demonstration purposes.
            </p>

          </div>

        </div>

      </main>

      <footer className="footer">
        © 2026 EduTrack · Student Academic Portal
      </footer>

    </div>
  );
}

export default Project1;