import React from "react";
import doctor from "../Assets/doctor-removebg-preview.png";
export const SerciveCard = () => {
  return (
    <div className="w-full md:w-[33%]  bg-slate-300 flex-shrink-0 rounded-lg p-4">
      <img className="object-contain w-full " src={doctor}></img>
      <h1 className="font-semibold text-blue-400">Surgery</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna 
      </p>
    </div>
  );
};
