import React, { useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";

export const Dropdown = ({name}) => {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <div className="w-full relative ">
      <button onClick={() => setIsToggle(!isToggle)} className="  w-full rounded-sm  flex justify-between text-white font-semibold items-center py-2 px-4 bg-slate-500">
        <span>{name} </span>
        {isToggle ? <FaAngleUp></FaAngleUp> :        <FaAngleDown></FaAngleDown> }
      </button>
      {isToggle && (
        <div className="w-full bg-slate-300 rounded-lg py-2 my-2 ">
          <button className="py-2 hover:bg-slate-500 hover:text-white font-semibold   w-full border-b border-white">
            Dr Abu Saleh 
          </button>
          <button className="py-2 hover:bg-slate-500 hover:text-white font-semibold  w-full border-b border-white">
            Dr Akm Majnu 
          </button>
          <button className="py-2 hover:bg-slate-500 hover:text-white font-semibold  w-full border-b border-white">
            Dr Md Mishrat 
          </button>
          <button className="py-2 hover:bg-slate-500 hover:text-white font-semibold  w-full ">
            Dr Koshai Bro 
          </button>
        </div>
      )}
    </div>
  );
};
