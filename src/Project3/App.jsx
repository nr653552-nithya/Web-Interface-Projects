import "./App.css";

import Header from "./components/Header";
import StudentCard from "./components/StudentCard";
import SubjectList from "./components/SubjectList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />

      <main className="student-portal">
        <StudentCard />

        <SubjectList />

        <div className="portal-details">
          <p>
            <strong>Current Year:</strong> II Year
          </p>

          <p>
            <strong>Current Semester:</strong> IV Semester
          </p>

          <p>
            <strong>Total Subjects:</strong> 5
          </p>

          <p>
            <strong>Attendance Status:</strong>
            <span className="eligible"> 85%</span>
          </p>

          <p>
            <strong>Placement Status:</strong>
            <span className="eligible"> Eligible</span>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;