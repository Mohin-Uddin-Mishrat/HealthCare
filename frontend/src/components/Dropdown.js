import React, { useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { FilterDoctor } from "../redux/doctorSlice";

export const Dropdown = ({name , category}) => {
  const dispatch = useDispatch()
  const [isToggle, setIsToggle] = useState(false);

  return (
    <div className={`w-full relative ${name === 'Designation' ? 'z-50' : 'z-20'} `}>
      <button onClick={() => setIsToggle(!isToggle)} className="  w-full rounded-sm  flex justify-between text-white font-semibold items-center py-2 px-4 bg-slate-500">
        <span>{name} </span>
        {isToggle ? <FaAngleUp></FaAngleUp> :        <FaAngleDown></FaAngleDown> }
      </button>
      {isToggle && (
        <div className="w-full absolute z-50 bg-slate-300 rounded-lg py-2 my-2 ">
          {category.map((cat ,key)=>(
            <button key={key} onClick={()=> dispatch(FilterDoctor({name : cat.name , category : name}))} className="py-2 hover:bg-slate-500 hover:text-white font-semibold   w-full border-b border-white">
            {cat?.name} 
          </button>
          ))}
          

        </div>
      )}
    </div>
  );
};
