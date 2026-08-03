import React, { useContext } from 'react'
import { Laptop , MessageSquareShare} from 'lucide-react'
import { userContext } from '../../../context/UserContext';

const Questions = ({questionType}) => {
    const {report} = useContext(userContext);
  
    let style;
    if (questionType==="technicalQuestion") {
        style = {
            iconStyle : 'bg-blue-100 text-blue-500 p-1 rounded-md',
            text : 'Technical',
            noOfQuestions : report?.technicalQuestion?.length, 
        }
    }else{
        style = {
            iconStyle : 'bg-purple-100 text-purple-600 p-1 rounded-md',
            text : 'Behavioral',
            noOfQuestions : report?.behavioralQuestion?.length, 
        }
    }
  return (
    <div className='w-full bg-[#ffffff] flex flex-col gap-1 border border-[#f2f3ff] rounded-xl p-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
        <div className='flex gap-1 items-center'>
            <span className={`${style.iconStyle}`}>{questionType==="technicalQuestion"?<Laptop size={20} />:<MessageSquareShare size={20}/>}</span>
            <span className='text-sm text-gray-400'>{style.text}</span>
        </div>
        <div>
            <h1 className='text-xl font-bold'>{style.noOfQuestions}</h1>
        </div>
    </div>
  )
}

export default Questions