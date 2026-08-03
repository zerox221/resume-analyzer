import { React, useContext, useRef, useState } from "react";
import { CloudUpload } from "lucide-react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { userContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import PulsatingDots from "../../utils/Reportloading";
const BASE_URL = import.meta.env.VITE_BASE_URL;

const DashboardForm = () => {
  const [reportLoading, setReportLoading] = useState(false);
  const [reportError, setError] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const fileRef = useRef(null);

  const { report, setReport } = useContext(userContext);

  async function submitHandler(data) {
    if (reportLoading) return;
    const formData = new FormData();
    formData.append("file", data.file[0]);
    formData.append("jobDescription", data.jobDescription);
    formData.append("selfDescription", data.selfDescription);
    formData.append("jobProfile",data.jobProfile);
    console.log(formData);

    try {
      setReportLoading(true);
      console.log(BASE_URL)
      const response = await axios.post(
        `${BASE_URL}/api/v1/user/resume/report`,
        formData,
        {
          withCredentials: true,
        },
      );
      console.log(response.data);
      setReport(response.data);
      setReportLoading(false);
      navigate(`/report/${response.data.id}/overview`);
    } catch (error) {
      console.log(error.response.statusText);
      setError(error.response.data.message);
      console.log(error);
    } finally {
      setReportLoading(false);
    }
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="w-full bg-[#ffffff] flex flex-col gap-10 md:gap-4  border border-[#e2e8f0] rounded-md p-5"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="resume" className="text-sm font-semibold">
            Upload Resume
          </label>
          <div className="h-auto p-3 flex justify-center items-center w-full border-2 border-dashed border-[#c4b5fd] hover:border-[#7c3aed] hover:bg-[#f5f3ff] rounded-xl">
            <div className="flex flex-col gap-1 items-center">
              <span>
                <CloudUpload className="text-[#7c3aed] " />
              </span>
              <span className="text-sm font-semibold text-center">
                Drag & Drop your resume here
              </span>
              <span className="text-sm ">or</span>
              <input
                {...register("file", {
                  required: "*required",
                })}
                name="file"
                type="file"
                accept=".pdf"
                className="w-full text-sm text-gray-600
             file:mr-4
             file:py-2
             file:px-4
             file:rounded-lg
             file:border-0
             file:text-sm
             file:font-semibold
             file:bg-violet-100
             file:text-violet-700
             file:cursor-pointer
             hover:file:bg-violet-200"
              />
              {errors.file && (
                <span className="text-red-600 text-xs">
                  {errors.file.message}
                </span>
              )}
              <span className="text-sm text-neutral-400">supports PDF</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="jobprofile" className="text-xs font-semibold">
            JOB PROFILE
          </label>
          <input
            {...register("jobProfile", {
              required: "*requred",
            })}
            type="text"
            placeholder="eg Full stack engineer"
            className="border border-[#cbd5e1] text-sm text-[#0f172a] placeholder-[#94a3b8] outline-none hover:border-[#7c3aed]  rounded-xl p-3"
          />
          {errors.jobProfile && (
            <span className="text-red-600 text-xs">
              {errors.jobProfile.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex flex-col leading-tight">
            <label htmlFor="jobDescription" className="text-sm font-semibold">
              Job Description / Target Role
            </label>
            <span className="text-xs md:text-sm text-[#94a3b8]">
              paste the job descripiton or role you want to target
            </span>
          </div>
          <textarea
            {...register("jobDescription", {
              required: "*required",
            })}
            className="border border-[#cbd5e1] text-[#0f172a] placeholder-[#94a3b8] outline-none hover:border-[#7c3aed]  rounded-xl p-2"
            name="jobDescription"
            id="jobDescription"
            rows={5}
            placeholder="Enter job description , responsibilties , required skills..."
          ></textarea>
          {errors.jobDescription && (
            <span className="text-red-600 text-xs">
              {errors.jobDescription.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex flex-col leading-tight">
            <label htmlFor="selfDescription" className="text-sm font-semibold">
              self Description
            </label>
            <span className="text-xs md:text-sm  text-[#94a3b8]">
              Tell us about yourself, your experience , skill and carrer goals
            </span>
          </div>
          <textarea
            {...register("selfDescription", {
              required: "*required",
            })}
            className="border border-[#cbd5e1] text-[#0f172a] placeholder-[#94a3b8] outline-none hover:border-[#7c3aed]  rounded-xl p-2"
            name="selfDescription"
            id="selfDescription"
            rows={5}
            placeholder="Write about your experience,skills,achievement,career goals..."
          ></textarea>
          {errors.selfDescription && (
            <span className="text-red-600 text-xs">
              {errors.selfDescription.message}
            </span>
          )}
        </div>
        <div className="flex w-full flex-col items-center gap-4 justify-center">
          <h1 className={`${reportLoading ? "flex text-lg" : "hidden"}`}>
            <PulsatingDots />
          </h1>
          <h1
            className={`${reportError ? "flex text-lg text-red-600" : "hidden"}`}
          >
            {reportError}
          </h1>

          <button
            className={`${reportLoading ? "bg-violet-400 cursor-not-allowed" : "hover:bg-violet-700"}  p-2 active:scale-103 rounded-md bg-[#7c3aed] w-[80%] md:w-[30%] text-white to-[#ec4899]`}
          >
            {reportLoading
              ? " 🤖 Generating your report..."
              : "Generate Report"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default DashboardForm;
