import React, { useEffect, useState } from "react";
import { DoctorCard } from "./DoctorCard";
import { Dropdown } from "./Dropdown";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDesignation,
  fetchDoctor,
  fetchSpecialization,
  fetchUrl,
  FilterDoctor,
} from "../redux/doctorSlice";
import { FaSearch } from "react-icons/fa";

export const DoctorFilter = () => {
  const [docName, setdocName] = useState()
  const { loading, doctors, sepcialization, designation, filterDoctor } =
    useSelector((state) => state.doctor);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDoctor());
    dispatch(fetchDesignation());
    dispatch(fetchSpecialization());
  }, [dispatch]);
  return (
    <div className="flex flex-col md:flex-row justify-between text-center  my-5 md:space-x-4">
      <div className="md:w-1/3 space-y-3 md:mx-0 mx-2">
        <Dropdown category={designation} name={"Designation"}></Dropdown>
        <Dropdown category={sepcialization} name={"Specialization"}></Dropdown>
      </div>
      <div className="md:w-2/3 md:mx-0 mx-2 ">
        <div className="flex items-center mb-4 rounded-sm border border-gray-400 w-full ">
          <input
            placeholder="Search Doctor....."
            className="outline-none w-full p-1 "
            onChange={(e)=> setdocName(e.target.value)}
          ></input>
          <span className="inset-y-0 right-0 p-1">
            <button onClick={()=> dispatch(FilterDoctor({category : 'name' , name:docName}))} className="text-gray-400">
              <FaSearch />
            </button>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {loading ? (
            <div>loading</div>
          ) : (
            (filterDoctor?.length > 0 ? filterDoctor : doctors)?.map(
              (doctor, key) => (
                <DoctorCard key={key} doctor={doctor}></DoctorCard>
              )
            )
          )}
        </div>
      </div>
    </div>
  );
};
