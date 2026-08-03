import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/authentication/login/Login";
import Signup from "./components/authentication/signup/Signup";
import Dashboard from "./components/Dashboard/dash";

import Loader from "./utils/Loader";
import ProtectedRoute from "./components/Dashboard/Protected";
import { userContext } from "./context/UserContext";
import Navbar from "./components/Dashboard/Navbar";
import Report from "./components/Reports/Report";
import ReportOverview from "./components/Reports/Overview/ReportOverview";
import ReportQuestions from "./components/Reports/Questions/ReportQuestions";
import ReportSkillgap from "./components/Reports/skill gaps/ReportSkillgap";
import History from "./components/Dashboard/History";
import Home from "./components/Dashboard/Home";
import Setting from "./components/Dashboard/setting/Setting";
const App = () => {
  const { loading, setLoading, user } = useContext(userContext);
  console.log(loading);
  return loading ? (
    <Loader />
  ) : (
    <div className="bg-[#f8f9ff ]">
      {
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute user={user}>
                <Home />
              </ProtectedRoute>
            }
          >
            <Route  index element={<Dashboard/>}></Route>
            <Route path="history" element={<History/>}> </Route>
            <Route path="/setting" element={<Setting/>}></Route>
          </Route>
          <Route
            path="/history"
            element={
              <ProtectedRoute user={user}>
                <History />
              </ProtectedRoute>
            }
          />
          <Route
            path="/report/:id/*"
            element={
              <ProtectedRoute user={user}>
                <Report />
              </ProtectedRoute>
            }
          >
            <Route path="overview" element={<ReportOverview />} />
            <Route path="questions" element={<ReportQuestions />} />
            <Route path="skillgap" element={<ReportSkillgap />} />
            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      }
    </div>
  );
};

export default App;
