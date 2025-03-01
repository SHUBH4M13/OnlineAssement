import React from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import CheckCircleText from '../ComponentsUtility/CheckCircleText'

export default function CompanyCard(props) {
  return (
    <div className=' px-5 h-120 w-100 flex flex-col bg-[#1e1e1e] rounded-xl border-solid border-8  border-[#6366f1] border-b-0 border-l-0 border-r-0 '>
      <div className=' flex justify-between items-center py-4 mt-3 '>
        <h5 className=' font-Helvetica text-white text-3xl'>{props.CompanyName}</h5>
        <img className="h-14 w-14 rounded-full" src={props.CompanyLogo} alt="Logo" />
      </div>

      <div className=' py-2'>
        <p className= "py-2 text-white/50 font-Helvetica">Assessment Format</p>
        <div className=' py-2 w-14 h-9 bg-[#1414147c] flex justify-center items-center rounded-xl'>
          <p className='text-white/50 font-Helvetica text-sm '>MCQs</p>
        </div>
      </div>

      <div className='py-1'>
        <div>
          <p className=' text-white/50 font-Helvetica'>Key Topics</p>
        </div>
        <div>
          <CheckCircleText statement={props.statement1} />
        </div>
        <div>
          <CheckCircleText statement={props.statement2} />
        </div>
        <div>
          <CheckCircleText statement={props.statement3} />
        </div>
      </div>

      <div className='bg-white/50 w-full h-[1px] flex justify-end'>
        <div className=' py-5 '>
          <button className=' w-[120px] h-[44px] bg-[#6365f1] text-white font-Helvetica rounded-lg hover:bg-[#4a4df4] duration-300  '>Start Practice</button>
        </div>
      </div>

    </div>
  )
}

//6366f1
//1e1e1e