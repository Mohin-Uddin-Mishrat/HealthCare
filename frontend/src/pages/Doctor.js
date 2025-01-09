import React, { useEffect, useState } from "react";
import { FaCross, FaStar } from "react-icons/fa";
import doctor from "../Assets/doctor-removebg-preview.png";
import { DocReview } from "../components/DocReview";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ReactStars from "react-stars"
import { addReview, setFilterReviews } from "../redux/doctorSlice";
export const Doctor = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const {user, isAuthenticated} = useSelector(state=> state.auth)
  const {filterReview, reviews} = useSelector(state=> state.doctor)
  const { id } = useParams();
  const [data, setdata] = useState([]);
  const [time, setTime] = useState([]);
  const [loading, setLoading] = useState(true);
  const [rating , setRating]= useState(0)
  const [review , setReviw]= useState([])
  const [comment , setComment]= useState('')
  const[dataFetch, setdataFetch] = useState(false)
  const dispatch = useDispatch()
  console.log(data)
  const handleReview = async()=>{
    if(!isAuthenticated) alert("Please Log in First")
    try{
      const payload = {
        rating:parseInt(rating),
        comment : comment,
        user :user?.username,
        doctor:parseInt(id)
      }
      const res = await axios.post("https://healthcare-tgu6.onrender.com/review/", payload);
      setComment('')
      setRating(0)
      setdataFetch(!dataFetch)
      alert('Review created successfully')
      }catch(error){
        console.log(error)
    }
  }
  const HandleAppointment = async () => {
    if(!isAuthenticated) alert("Please Log in First")
    try {
      const payload = {
        user:user?.username , 
        doctor: data.user, 
        symptom: document.querySelector("#symptom-input").value, 
        time: document.querySelector("#time-input").value, 
        appointmentTypes:"Online",
      };
      const res = await axios.post("https://healthcare-tgu6.onrender.com/appointment/", payload);
      setModalOpen(false)
      alert('Appointment taken successfully')
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const resDoctor = await axios.get(`https://healthcare-tgu6.onrender.com/user/doctor/${id}/`);
        const resTime = await axios.get(`https://healthcare-tgu6.onrender.com/user/availabletime/?doctor_id=${id}`);
        const resRev = await axios.get(`https://healthcare-tgu6.onrender.com/review/?doctor_id=${id}`);
        console.log(resRev.data)
        setReviw(resRev.data)
        setdata(resDoctor.data);
        setTime(resTime.data)
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    
    fetchdata();
    
  }, [dataFetch]);
  
  if (loading) return <div>loading...</div>
  return (
    <div className="mx-auto md:w-[70%] my-5 ">
      <div className="p-10 rounded-lg bg-slate-300">
        <div className="flex items-center  space-x-10">
          <img
            className="w-40 h-40 rounded-full bg-white"
            src={data.image}
          ></img>
          <div>
            <h1 className="font-semibold text-2xl md:text-4xl text-blue-400">
              {data?.user}
            </h1>
            <div className="flex flex-wrap">
              {data?.specialization?.map((d, key) => (
                <h1 className="mx-1 mb-1 text-[12px] bg-blue-400 text-white font-bold rounded-lg px-1 bg">
                  {d}
                </h1>
              ))}
            </div>
            <div className="flex flex-wrap">
              {data?.designation.map((d, key) => (
                <span className="mx-1 mb-1 text-[12px] bg-red-400 text-white font-bold rounded-lg px-1 bg">
                  {d}
                </span>
              ))}
            </div>
            <p className="md:w-[200px] text-[10px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
            <h1 className="font-semibold  text-blue-900">
              Fees {data.fee} BDT
            </h1>
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
            {
              review?.map(((review, key) =>(
                <DocReview key={key}  review={review}></DocReview>
              )))
            }
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center my-5">
        <p className="text-blue-400 text-4xl font-bold text-center my-5">
          GIVE REVIEW TO THIS DOCTOR
        </p>
        <div className="text-slate-400 text-4xl flex">
          <ReactStars
          count={5}
          value={rating}
          onChange={rating=> setRating(rating)}
          color2="#ffd700"
          size={50}
          />
        </div>
        <textarea
          value={comment}
          onChange={(e)=> setComment(e.target.value)}
          placeholder="WRITE YOUR FEED BACK HERE"
          className="outline-none border-2 my-5 border-slate-500 md:w-[50%] text-center rounded-lg h-32 p-2 w-2/3 bg-slate-300"
        ></textarea>
        <button onClick={handleReview} className="text-white font-bold bg-blue-300 rounded-lg py-1 px-3">
          Submit
        </button>
      </div>

      {isModalOpen && (
        <div className="inset-0  fixed  flex  justify-center items-center z-50">
          <div className="absolute opacity-75 inset-0 bg-slate-400"></div>
          <button
            onClick={() => setModalOpen(false)}
            className="fixed top-0 right-3 text-4xl text-white font-bold"
          >
            &times;
          </button>
          <div className=" max-w-md z-50 bg-white p-3 w-full shadow-lg  rounded-lg ">
            <h1 className="font-semibold text-blue-400">Symptomps</h1>
            <textarea
              id="symptom-input"
              className="w-full px-3 text-center py-1 outline-none bg-slate-200 rounded-sm mb-2"
              placeholder=""
            ></textarea>
            <h1 className="font-semibold text-blue-400">Time</h1>
            <select
              id="time-input"
              className="w-full px-3 py-1 outline-none bg-slate-200 rounded-sm mb-4"
            >
              <option value="">Select a time</option>
              {
                time?.map((t, key)=>  <option key={key} value={`${t.name}`}>{t.name}</option>
              )
              }              
            </select>
            <button
              onClick={HandleAppointment}
              className="bg-slate-400 w-full py-1 rounded-lg font-bold text-white "
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
