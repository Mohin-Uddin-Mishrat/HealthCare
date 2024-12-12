import React from "react";
import doctor from "../Assets/doctor-removebg-preview.png";
import { FaStar } from "react-icons/fa";
export const Reviews = () => {
  return (
    <div className="p-3 rounded-lg bg-slate-300">
      <div className="flex items-center  space-x-4">
        <img className="w-16 h-16 rounded-full bg-white" src={doctor}></img>
        <div>
          <h1 className="font-semibold text-blue-400">Jim curter</h1>
          <div className="text-yellow-300 flex">
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar className="text-black"></FaStar>
          </div>
        </div>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
    </div>
  );
};
