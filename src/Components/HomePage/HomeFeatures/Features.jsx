import React from 'react'
import FeatureCard from '../../Cards/FeatureCard'
import DetailExplainBox from './DetailExplain/DetailExplainBox'
export default function Features() {
    return (
        <div className='bg-[#141414] '>

            <div className=' py-10 flex  justify-center items-center '>
                <div>
                    <h3 className='text-6xl md:text-5xl sm:text-4xl font-Helvetica font-medium text-white '>Powerful Features For OA Success</h3>
                    <p className='py-5 font-Helvetica font-medium text-white/50 text-center '>
                    Our platform is designed with advanced features to help you prepare <br />
                    effectively and boost your performance in technical assessments.
                    </p>
                </div>
            </div>


            <div className=' flex gap-4 '>
                <div className=' py-8 px-12 '>
                    <FeatureCard
                        heading="Company-Specfic Test"
                        desc="Practice with tests tailored to match the exact format and difficulty level of top tech companies like Google, Amazon, and Microsoft."
                        tick1 = "25+ companies covered"
                        tick2 = "Regularly updated questions"
                    />

                </div>

                <div className=' flex py-8 px-12 '>
                    <FeatureCard
                        heading="Company-Specfic Test"
                        desc="Practice with tests tailored to match the exact format and difficulty level of top tech companies like Google, Amazon, and Microsoft."
                    />
                </div>


                <div className=' flex py-8 px-12 '>
                    <FeatureCard
                        heading="Company-Specfic Test"
                        desc="Practice with tests tailored to match the exact format and difficulty level of top tech companies like Google, Amazon, and Microsoft."
                    />
                </div>
            </div>
            
            <div className=' py-8 px-12 flex justify-center items-center '>
                <DetailExplainBox/>
            </div>

        </div>
    )
}
