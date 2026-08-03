import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { userContext } from "../../context/UserContext";
import axios from "axios";
import PulsatingDots from "../../utils/Reportloading";
import Loader from "../../utils/Loader";
import { CircularProgressbar,buildStyles } from "react-circular-progressbar";
import {ChevronRight} from 'lucide-react'
import HistoryCard from "./HistoryCard";
const BASE_URL = import.meta.env.VITE_BASE_URL;

const History = () => {
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function fetchhistory() {
      setLoading(true);
      try {
        const response = await axios.get(
          `${BASE_URL}/api/v1/user/get/history`,
          {
            withCredentials: true,
          },
        );
        console.log(response.data);
        setHistory(response.data.response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchhistory();
  }, []);

  const filters = ["Newest", "Older"];
  return loading ? (
    <Loader />
  ) : (
    <div className="min-h-screen p-4 w-full flex bg-[#faf8ff] flex-col gap-5">
     <div>
      <h2 className="font-medium text-xl text-gray-600">History of Your reports</h2>
     </div>
     {
      history?.map((data )=>{
        return <HistoryCard key={data._id} data = {data}/>
      })
     }
    </div>
  );
};

export default History;
