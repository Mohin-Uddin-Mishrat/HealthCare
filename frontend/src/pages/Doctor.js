import React, { useState } from "react";
import { FaCross, FaStar } from "react-icons/fa";
import doctor from "../Assets/doctor-removebg-preview.png";
import { DocReview } from "../components/DocReview";
export const Doctor = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <div className="mx-auto md:w-[70%] my-5 ">
      <div className="p-10 rounded-lg bg-slate-300">
        <div className="flex items-center  space-x-10">
          <img className="w-40 h-40 rounded-full bg-white" src={doctor}></img>
          <div>
            <h1 className="font-semibold text-2xl md:text-4xl text-blue-400">
              Jim curter
            </h1>
            <h1 className="font-semibold  text-blue-900">ORTHOPEDIC</h1>
            <p className="md:w-[200px] text-[10px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
            <h1 className="font-semibold  text-blue-900">Fees 2000 BDT</h1>
            <button
              onClick={() => setModalOpen(true)}
              className="px-3 py-1 text-[10px] md:text-xl rounded-full bg-blue-300 text-white font-bold"
            >
              Take Appointment
            </button>
          </div>
        </div>
        <div>
          <p className="text-slate-800 font-bold text-center my-5">
            RATINGS FROM PATIENT
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <DocReview></DocReview>
            <DocReview></DocReview>
            <DocReview></DocReview>
            <DocReview></DocReview>
            <DocReview></DocReview>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center my-5">
        <p className="text-blue-400 text-4xl font-bold text-center my-5">
          GIVE REVIEW TO THIS DOCTOR
        </p>
        <div className="text-slate-400 text-4xl flex">
          <FaStar></FaStar>
          <FaStar></FaStar>
          <FaStar></FaStar>
          <FaStar></FaStar>
          <FaStar></FaStar>
        </div>
        <textarea
          placeholder="WRITE YOUR FEED BACK HERE"
          className="outline-none border-2 my-5 border-slate-500 md:w-[50%] text-center rounded-lg h-32 p-2 w-2/3 bg-slate-300"
        ></textarea>
        <button className="text-white font-bold bg-blue-300 rounded-lg py-1 px-3">
          Submit
        </button>
      </div>

      {isModalOpen && (
        <div className="inset-0  fixed  flex  justify-center items-center z-50">
          <div  className="absolute opacity-75 inset-0 bg-slate-400"></div>
          <button
            onClick={() => setModalOpen(false)}
            className="fixed top-0 right-3 text-4xl text-white font-bold"
          >
            &times;
          </button>
          <div className=" max-w-md z-50 bg-white p-3 w-full shadow-lg rounded-lg ">
            <h2>hello world</h2>
          </div>
        </div>
      )}
    </div>
  );
};
