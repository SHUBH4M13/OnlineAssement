import React from 'react';

export default function SignLoginBgCard( { children }) {
    return (
        <div className="sm:w- md:w-screen lg:w-full max-w-[448px] min-h-[612px] bg-[#262626] rounded-3xl relative overflow-hidden flex justify-center items-center p-6">
            
            <div className="absolute top-[-40px] right-[-40px] w-[130px] h-[130px] bg-[#4e46e55f] rounded-full rotate-45 
                sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] lg:w-[140px] lg:h-[140px]">
            </div>
            <div className="absolute bottom-[-45px] left-[-30px] w-[150px] h-[130px] bg-[#4e46e55f] rounded-full rotate-45 
                sm:w-[110px] sm:h-[100px] md:w-[130px] md:h-[110px] lg:w-[150px] lg:h-[130px]">
            </div>

            <div className=' z-10'>
            {children}
            </div>

        </div>
    );
}
