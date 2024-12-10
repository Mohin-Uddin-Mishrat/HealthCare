import React from "react";
import doctor from "../Assets/doctor-removebg-preview.png";
export const Banner = () => {
  return (
    <div className="md:w-[90%]   mx-auto w-full bg-slate-300 px-4 my-5    rounded-lg md:p-6">
      <div className="flex flex-col md:flex-row md:justify-between justify-center items-center">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-semibold text-blue-400">Providing Quality Healthcare</h1>
          <p className="my-4 md:my-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            
          </p>
        </div>
        <div className="md:w-1/2">
            <img className="" src={doctor}></img>
        </div>
      </div>
    </div>
  );
};
