import React from 'react'
import { Check } from 'lucide-react'
const PreparationTask = ({task}) => {
  return (
     <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <Check className="text-green-600 text-sm" />
              <span className="text-sm text-gray-600">
                {task}
              </span>
            </div>
          </div>
  )
}
export default PreparationTask