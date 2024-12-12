import React from "react";
import { DoctorCard } from "./DoctorCard";
import { Dropdown } from "./Dropdown";

export const DoctorFilter = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between text-center  my-5 md:space-x-4">
      <div className="md:w-1/3 space-y-3 md:mx-0 mx-2">
        <Dropdown name={"Name"}></Dropdown>
        <Dropdown name={"Designation"}></Dropdown>
        <Dropdown name={"Specialization"}></Dropdown>
      </div>
      <div className="md:w-2/3 md:mx-0 mx-2 ">
        <input
          placeholder="Doctor Search"
          className="mb-4 w-full outline-none bg-slate-300 px-4 py-1 mt-2 md:mt-0 rounded-full"
        ></input>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <DoctorCard></DoctorCard>
          <DoctorCard></DoctorCard>
          <DoctorCard></DoctorCard>
          <DoctorCard></DoctorCard>
          <DoctorCard></DoctorCard>
          <DoctorCard></DoctorCard>
        </div>
      </div>
    </div>
  );
};
