import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Attendance from "./StudentComponents/Attendance";
import Feedback from "./StudentComponents/Feedback";
import Home from "./StudentComponents/Home";
import Profile from "./StudentComponents/Profile";
import StudentAppBar from "./StudentComponents/ResponsiveAppbar"; 
import FacultyAppBar from "./FacultyComponents/FacultyAppbar"; 
import Results from "./StudentComponents/Results";
import Internals from "./StudentComponents/Internals";
import Assignments from "./StudentComponents/Assignments";
import Handouts from "./StudentComponents/Handouts";
import Materials from "./StudentComponents/Materials";
import LoginPage from "./StudentComponents/LoginPage";
import Footer from "./StudentComponents/Footer";
import FacultyHome from "./FacultyComponents/FacultyHome";
import FacultyProfile from "./FacultyComponents/FacultyProfile"; 
import FacultyAttendance from "./FacultyComponents/FacultyAttendance"; 
import FacultyFeedback from "./FacultyComponents/FacultyFeedback"; 
import FacultyResults from "./FacultyComponents/FacultyResults"; 
import FacultyAssignments from "./FacultyComponents/FacultyAssignments"; 
import FacultyTimetable from "./FacultyComponents/FacultyTimetable";
import StudentTimetable from "./StudentComponents/Timetable";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(1); 

  const handleAuthToggle = () => {
    setIsAuthenticated((prevAuth) => !prevAuth);
  };

  const handleRoleChange = (role) => {
    setUserRole(role);
  };

  return (
    <BrowserRouter>
      
      {isAuthenticated && (userRole === 1 ? (
        <StudentAppBar handleLogout={handleAuthToggle} />
      ) : (
        <FacultyAppBar handleLogout={handleAuthToggle} />
      ))}

      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/loginpage" element={<LoginPage handleAuthToggle={handleAuthToggle} handleRoleChange={handleRoleChange} />} />
            
            {isAuthenticated ? (
              userRole === 1 ? (
                <>
                  <Route path="/home" element={<Home />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/results" element={<Results />} />
                  <Route path="/attendance" element={<Attendance />} />
                  <Route path="/feedback" element={<Feedback />} />
                  <Route path="/courses/handouts" element={<Handouts />} />
                  <Route path="/courses/assignments" element={<Assignments />} />
                  <Route path="/courses/materials" element={<Materials />} />
                  <Route path="/courses/internals" element={<Internals />} />
                  <Route path="/timetable" element={<StudentTimetable />} />

                </>
              ) : (
                <>
                  <Route path="/faculty/home" element={<FacultyHome />} />
                  <Route path="/faculty/profile" element={<FacultyProfile />} />
                  <Route path="/faculty/results" element={<FacultyResults />} />
                  <Route path="/faculty/attendance" element={<FacultyAttendance />} />
                  <Route path="/faculty/feedback" element={<FacultyFeedback />} />
                  <Route path="/faculty/courses/assignments" element={<FacultyAssignments />} />
                  <Route path="/faculty/timetable" element={<FacultyTimetable />} />
                </>
              )
            ) : (
              <Route path="*" element={<LoginPage handleAuthToggle={handleAuthToggle} handleRoleChange={handleRoleChange} />} />
            )}
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
