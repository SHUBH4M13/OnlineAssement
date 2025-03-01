import React from 'react'
import NumbersHome from './NumbersHome'
import MacbookProcess from './MacbookProcess'

export default function HeroHomeText() {
    return (

        <div className=' bg-[#141414] py-24 px-8 flex justify-evenly gap-10'>

            <div>
                <div>
                    <h1 className=' text-4xl lg:text-6xl md:text-5xl text-white font-bold font-Helvetica '>Master Your Online </h1>
                    <h1 className=' text-4xl lg:text-6xl md:text-5xl text-white font-bold font-Helvetica '>Assement Rounds</h1>
                </div>
                <div className='py-5 text-white font-Helvetica text-lg md:text-xl'>
                    <p>Prepare confidently for technical interviews with our realistic</p>
                    <p>mock tests in Operating Systems, OOP, Computer Networks, </p>
                    <p> DBMS, and Aptitude.</p>
                </div>
                <div className=' flex gap-6 '>
                    <button className=' w-[177px] h-[50px]  bg-[#4a4df4] text-white rounded-lg hover:bg-[#6366f1] duration-300'>Get Started</button>
                    <button className=' w-[177px] h-[50px]  border-[#6366f1] border-2 text-white rounded-lg hover:bg-[#4a4df4] duration-300'> Explore Features</button>
                </div>

                <div className='py-18'>
                    <NumbersHome />
                </div>

            </div>

            <div>
                <MacbookProcess />
            </div>

        </div>
    )
}
