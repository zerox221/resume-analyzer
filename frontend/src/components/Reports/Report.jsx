import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../context/UserContext";
import { Routes, useParams , Route , Outlet} from "react-router-dom";
import axios from "axios";
import ReportOverview from "./Overview/ReportOverview";
import ReportQuestions from "./Questions/ReportQuestions";
import ReportSkillgap from "./skill gaps/ReportSkillgap";
import Navbar from "../Dashboard/Navbar";
import ReportNavbar from "./ReportNavbar";
const BASE_URL = import.meta.env.VITE_BASE_URL;

const Report = () => {
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(false);
  const { report, setReport } = useContext(userContext);
  const { id } = useParams();

  let data;

  useEffect(() => {
    async function fetchReport() {
      setLoading(true);
      try {
        const response = await axios.get(
          `${BASE_URL}/api/v1/user/get/resume/report/${id}`,
        );
        console.log(response.data);
        setReport(response.data.report);
      } catch (error) {
        console.log(error.response.data.message);

        setError(error.response.data.message);
      } finally{
        setLoading(false);
      }
    }
    fetchReport();
  }, [id]);

  if (!report) {
  return (
    <div className="min-h-screen flex items-center justify-center">
     {error || " Loading..."}
    </div>
  );
}
  return (
    <div className="min-h-screen w-full ">
      <ReportNavbar/>
      <Outlet/>
    </div>
  );
};

export default Report;
