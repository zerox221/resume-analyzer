import React, { useContext } from 'react'
import { CircularProgressbar,buildStyles } from "react-circular-progressbar";
import {ChevronRight} from 'lucide-react'
import { userContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

const HistoryCard = ({data}) => {
  const date = data?.createdAt.split('T')[0];
  const navigate = useNavigate();

  const {report,setReport} = useContext(userContext);

  async function ShowInfohandler() {
      setReport(data);
      navigate(`/report/${data?._id}/overview`)
      
  }

  return (
    <div className="flex min-h-20 items-center relative gap-4 p-2 px-4 md:px-5 w-full rounded-md  border border-[#f2f3ff]  shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div>
          <CircularProgressbar
            value={data?.matchScore}
            text={`${data?.matchScore}%`}
            className="md:h-25 md:w-25 h-15 w-15 font-bold  "
            styles={buildStyles({
              pathTransitionDuration: 1,
              pathColor: `#4f46e5`,
              textColor: "black",
            })}
          />
        </div>
        <div className="flex flex-col leading-tight">
            <h2 className="font-semibold text-sm md:text-xl">{data?.jobProfile}</h2>
            <span className="text-xs md:text-sm">{date}</span>
        </div>
      <div className="absolute right-0">
        <ChevronRight size={30} onClick={ShowInfohandler} />
      </div>
      </div>
  )
}

export default HistoryCard