import React from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
export default function CheckCircleText(props) {
    return (
        <>
            <div className=' py-3 flex items-center '>
                <CheckCircleIcon className=' size-7 text-[#6366f1]' />
                <p className=' px-2 text-white/40 font-Helvetica text-md '>{props.statement} </p>
            </div>
        </>
    )
}
