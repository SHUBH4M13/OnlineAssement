import React from 'react'
import SubjectCards from './SubjectCards'
import { ComputerDesktopIcon } from '@heroicons/react/24/solid'
export default function MasterTechSub() {
    return (
        <div className=' bg-[#141414] '>

            <div className=' py-10 flex  justify-center items-center bg-[#141414]'>
                <div>
                    <h3 className='text-6xl md:text-5xl sm:text-4xl font-Helvetica font-medium text-white '>Master Key Technical Subjects</h3>
                    <p className='py-5 font-Helvetica font-medium text-white/50 text-center '>
                        Comprehensive practice material for core Computer Science subjects <br />
                        that are essential for interviews.
                    </p>
                </div>
            </div>

            <div className=' flex justify-center items-center gap-16'>
                <SubjectCards
                    icon = {ComputerDesktopIcon}
                    Subject="Operating Systems"
                    features={[
                        "Process Scheduling",
                        "Memory Management",
                        "Deadlocks",
                        "File System"
                    ]}
                />

                <SubjectCards
                
                    Subject="OOP"
                    features={[
                        "Encapsulation",
                        "",
                        "Deadlocks",
                        "File System"
                    ]}
                />


                <SubjectCards
                    Subject="Operating Systems"
                    features={[
                        "Process Scheduling",
                        "Memory Management",
                        "Deadlocks",
                        "File System"
                    ]}
                />

            </div>

            <div className=' py-16 flex justify-center items-center gap-16'>
                <SubjectCards
                    Subject="Operating Systems"
                    features={[
                        "Process Scheduling",
                        "Memory Management",
                        "Deadlocks",
                        "File System"
                    ]}
                />

                <SubjectCards
                    Subject="Operating Systems"
                    features={[
                        "Process Scheduling",
                        "Memory Management",
                        "Deadlocks",
                        "File System"
                    ]}
                />


                <SubjectCards
                    Subject="Operating Systems"
                    features={[
                        "Process Scheduling",
                        "Memory Management",
                        "Deadlocks",
                        "File System"
                    ]}
                />

            </div>

        </div>

    )
}
