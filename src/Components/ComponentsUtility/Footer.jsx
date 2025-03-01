import React from 'react'

export default function Footer() {
  return (
    <div className=' flex justify-between px-10 py-10 bg-[#171717] border-[#1e1e1e] border-2 border-t-0'>
        <div className=' flex flex-col '>
            <p className=' font-Helvetica font-bold text-[24px] text-[#6366f1] '>PrepX</p>
            <p className=' text-white/50 font-Helvetica py-10 '>
            Helping students excel in technical interviews <br /> and assessments with comprehensive practice <br /> tests and  personalized analytics
            </p>
        </div>

        <div className=' flex flex-col'>
            <p className='font-Helvetica text-[#6366f1] text-lg text-right  font-medium'>Quicklinks</p>

            <div className=' py-2 '>
            <p className='text-white/50 text-right font-Helvetica'>Home</p>
            <p className='text-white/50 text-right  font-Helvetica'>Subjects</p>
            <p className='text-white/50 text-right  font-Helvetica'>Companeies</p>
            </div>
            

        </div>

    </div>
  )
}
