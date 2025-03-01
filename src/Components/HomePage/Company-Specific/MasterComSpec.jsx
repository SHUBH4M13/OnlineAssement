import React from 'react'
import CompanyCard from '../../Cards/CompanyCard'

export default function MasterComSpec() {
    return (
        <div className=' bg-[#141414]'>
            <div className=' py-10 flex justify-center items-center bg-[#141414]'>
                <div>
                    <h3 className='text-6xl md:text-5xl sm:text-4xl font-Helvetica font-medium text-white text-center '>Company-Specific Mock Tests</h3>
                    <p className='py-5 font-Helvetica font-medium text-white/50 text-center '>
                        Practice with assessment tests tailored to match the exact format and requirements of <br /> top tech companies to boost your chances of clearing the initial screening.
                    </p>
                </div>
            </div>

            <div className=' flex gap-10 justify-center items-center'>
                <CompanyCard
                    CompanyName="Google"
                    CompanyLogo="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                    statement1 = "Data Structure & Algorithm"
                    statement2 = "Memeory Management"
                    statement3 = "DeadLocks"
                />

                <CompanyCard
                    CompanyName="Microsoft"
                    CompanyLogo="https://pngimg.com/d/microsoft_PNG5.png"
                />


                <CompanyCard
                    CompanyName="MasterCard"
                    CompanyLogo="https://i.pinimg.com/736x/56/fd/48/56fd486a48ff235156b8773c238f8da9.jpg"
                />
            </div>

        </div>
    )
}
