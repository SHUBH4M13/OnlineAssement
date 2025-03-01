import React from 'react'

export default function ExplanationWrapper() {
    return (
        <div className=' flex'>

            <div className=' px-8 py-8 w-100 h-100 bg-[#1e1e1e] flex flex-col rounded-2xl'>

                <div className=' w-full flex justify-between'>

                    <div className='flex '>
                        <div className=' w-14 h-14 bg-[#6366f1] rounded-full flex justify-center items-center'>
                            <p className='font-Helvetica text-white font-medium'>CN</p>

                        </div>
                        <div className=' px-3 py-2 '>
                            <p className='font-Helvetica text-white/50'>Computer Networks</p>
                            <p className='font-Helvetica text-white'>Network Protocol</p>
                        </div>
                    </div>

                    <div className=' py-4'>
                        <div className=' w-16 h-7 bg-[#6365f132] p-3 flex justify-center items-center rounded-xl'>
                            <p className='font-Helvetica text-[#6366f1] text-sm '>Easy</p>
                        </div>
                    </div>

                </div>

                <div className='py-6'>
                    <p className=' text-white font-Helvetica font-medium ' >Which protocol is primarily responsible for providing reliable, error-checked delivery of data over an IP network?</p>
                </div>

                <div className='py-1 flex justify-center items-center'>
                    <div className=' w-full bg-white/50 h-[1px]' >
                        <p className=' py-3  text-[#6366f1] font-Helvetica font-medium '>Explantion: </p>
                        <div>
                            <p className=' text-white font-Helvetica font-medium '  >TCP ensures error-free, reliable delivery by retransmitting lost packets and using acknowledgments, unlike UDP, which is faster but does not guarantee reliability.</p>
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
