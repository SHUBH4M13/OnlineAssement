import React from "react";

const Navbar = () => {
  return (
    <div className="h-[74px] w-full bg-[#171717] flex items-center px-6 md:px-12">
      <div>
        <p className="font-Helvetica font-bold text-[24px] text-[#6366f1]">PrepX</p>
      </div>

      <div className="flex items-center ml-auto gap-6">
        <div className="hidden md:flex items-center gap-6">
          <p className="font-Helvetica text-[16px] text-white cursor-pointer hover:text-[#6366f1] duration-300">
            Home
          </p>
          <p className="font-Helvetica text-[16px] text-white cursor-pointer hover:text-[#6366f1] duration-300">
            Subjects
          </p>
          <p className="font-Helvetica text-[16px] text-white cursor-pointer hover:text-[#6366f1] duration-300">
            Companies
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button className="w-[78px] font-Helvetica h-[42px] border-[#6366f1] border-2 text-[#6366f1] rounded-lg hover:bg-[#6366f1] hover:text-white duration-300">
            Log In
          </button>
          <button className="w-[78px] font-Helvetica h-[42px] bg-[#6366f1] text-white rounded-lg hover:bg-[#4f46e5] duration-300">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
