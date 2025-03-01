import React from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import ExplanationWrapper from './ExplanationWrapper'

export default function DetailExplainBox() {
    return (
        <div className=' px-10  w-8/10 flex'>

            <div className=' w-5/10 bg-[#1e1e1e] rounded-tl-xl rounded-bl-xl px-10'>
                <div className=' px-6 py-7'>
                    <h3 className=' font-Helvetica font-medium text-[#6366f1] '>Featured Highlight</h3>
                </div>
                <div className='px-6 py-4'>
                    <h3 className='font-Helvetica font-medium text-white text-3xl'>Detailed Explanations For  </h3>
                    <h3 className='font-Helvetica font-medium text-white text-3xl'>Every Question</h3>
                </div>

                <div className='px-6 py-4'>
                    <span className='font-Helvetica text-white/50 '>We don't just provide answers - we help you <br />
                        understand the   concepts. Each question comes <br />
                        with comprehensive explanations, related theory,  <br />
                        and alternative approaches.</span>
                </div>

                <div className=' flex flex-col px-6 py-4 gap-10'>

                    <div>
                        <div className=' flex items-center'>
                            <CheckCircleIcon className=' size-8 text-[#6366f1]' />
                            <p className=' px-4 text-white text-lg'>Step-by-step solutions</p>
                        </div>
                        <p className=' px-12 text-white/50 text-md' >Complex problems broken  down into <br /> manageable steps</p>
                    </div>

                    <div>
                        <div className=' flex items-center'>
                            <CheckCircleIcon className=' size-8 text-[#6366f1]' />
                            <p className=' px-4 text-white text-lg'>Step-by-step solutions</p>
                        </div>
                        <p className=' px-12 text-white/50 text-md' >Complex problems broken  down into <br /> manageable steps</p>
                    </div>

                    <div>
                        <div className=' flex items-center'>
                            <CheckCircleIcon className=' size-8 text-[#6366f1]' />
                            <p className=' px-4 text-white text-lg'>Step-by-step solutions</p>
                        </div>
                        <p className=' px-12 text-white/50 text-md' >Complex problems broken  down into <br /> manageable steps</p>
                    </div>


                </div>

            </div>

            <div className='bg-[#252525]  w-5/10 rounded-tr-xl rounded-br-xl flex justify-center items-center '>
                <ExplanationWrapper/>
            </div>

        </div>
    )
}

//6366f1.
//252525
//1e1e1e