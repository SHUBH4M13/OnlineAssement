import React from 'react'
import { TicketIcon } from '@heroicons/react/24/outline'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

export default function FeatureCard(props) {
    return (
        <div className=' bg-[#1e1e1e] flex flex-col py-3 px-10 rounded-2xl '>
            <div className=' py-5'>
                <TicketIcon className=' size-14 text-[#6366f1]'/>
            </div>
            <div className=' py-5 '>
                <h3 className = "text-white font-Helvetica text-lg " >{props.heading}</h3>
            </div>
            <div className=' py-5 '>
                <p className = "text-white/40 font-Helvetica text-lg " >{props.desc}</p>
            </div>
            <div className=' py-4 flex items-center '>
            <CheckCircleIcon className=' size-7 text-[#6366f1]'/>
            <p className=' px-2 text-white/40 font-Helvetica text-md '>{props.tick1}</p>
            </div>
            <div className=' py-4 flex items-center '>
            <CheckCircleIcon className=' size-7 text-[#6366f1]'/>
            <p  className=' px-2 text-white/40 font-Helvetica text-md ' >{props.tick2}</p>
            </div>

        </div>
    )
}