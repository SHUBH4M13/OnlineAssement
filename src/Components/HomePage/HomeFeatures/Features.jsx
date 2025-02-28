import React from 'react'
import FeatureCard from './FeatureCard'
import DetailExplainBox from './DetailExplainBox'
export default function Features() {
    return (
        <div className='bg-[#141414] '>
            <div>
                <h1 className=' font-Helvetica font-medium text-[42px] text-center text-white'>Powerful Features For OA Success</h1>
                <div className=' py-5 '>
                    <p className=' text-center text-white/50 '>Our platform is designed with advanced features to help you prepare </p>
                    <p className=' text-center text-white/50 '>effectively and boost your performance in technical assessments.</p>
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
            
            <div className=' py-8 px-12 '>
                <DetailExplainBox/>
            </div>

        </div>
    )
}
