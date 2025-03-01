import React from 'react'

export default function ExplanationWrapper() {
    return (
        <div className=' flex'>

            <div className=' px-8 py-8 w-100 h-100 bg-[#1e1e1e] flex rounded-2xl'>

                <div className=' w-full flex justify-between'>

                    <div className='flex '>
                        <div className=' w-14 h-14 bg-[#6366f1] rounded-full flex justify-center items-center'>
                            <p className='font-Helvetica text-white font-medium'>OS</p>

                        </div>
                        <div className=' px-3 py-2 '>
                            <p className='font-Helvetica text-white/50'>Operating System</p>
                            <p className='font-Helvetica text-white'>Process Management</p>
                        </div>
                    </div>




                    <div className=' py-4'>
                        <div className=' w-16 h-7 bg-[#6365f132] p-3 flex justify-center items-center rounded-xl'>
                            <p className='font-Helvetica text-[#6366f1] text-sm '>Medium</p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

//6366f1
//252525
//1e1e1e