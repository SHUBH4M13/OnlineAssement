import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

export default function SubjectCards({ Subject, features, icon: Icon }) {
    return (
        <div className="h-[21rem] w-[23rem] flex flex-col justify-evenly px-4 py-6 bg-[#1e1e1e] hover:bg-[#4040405e] rounded-xl transition duration-300 hover:shadow-[#6365f1] hover:shadow-sm">

            <div className="flex items-center gap-3">
                <div className="h-12 w-12 bg-[#6365f171] rounded-lg flex justify-center items-center">
                </div>
                <p className="text-white font-Helvetica text-xl">{Subject}</p>
            </div>

            <div className="flex flex-col gap-4 mt-4">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 px-3">
                        <CheckCircleIcon className="size-6 text-[#6365f1]" />
                        <p className="text-white font-Helvetica text-md">{feature}</p>
                    </div>
                ))}
            </div>

            <div className=' flex justify-end py-7'>
                <button className=' w-[120px] h-[44px] bg-[#6365f1] text-white font-Helvetica rounded-lg hover:bg-[#4a4df4] duration-300 '>Practice Now</button>
            </div>

        </div>
    );
}

//4a4df4
//6365f1