import axios from "axios";
import React, { useEffect, useState } from "react";

export const Profile = () => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      date: "2025-01-05",
      type: "Dental Checkup",
      doctor: "Dr. Smith",
    },
    {
      id: 2,
      date: "2025-01-12",
      type: "Eye Checkup",
      doctor: "Dr. Jones",
    },
  ]);
  useEffect(()=>{
    const fetchAppointment = async()=>{
      try{
        const res = await axios.get("http://127.0.0.1:8000/appointment/")
        console.log(res.data)
      }catch(error){
        console.log(error)
      }
    }
    fetchAppointment()
  },[])
  const handleDelete = (id) => {
    setAppointments(appointments.filter((appointment) => appointment.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h1 className="text-2xl font-bold mb-2">User Profile</h1>
        <p className="text-gray-700">Username: JohnDoe</p>
        <p className="text-gray-700">Email: johndoe@example.com</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Appointments</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Date</th>
                <th className="border border-gray-300 px-4 py-2">Appointment Type</th>
                <th className="border border-gray-300 px-4 py-2">Doctor</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment.id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">{appointment.date}</td>
                  <td className="border border-gray-300 px-4 py-2">{appointment.type}</td>
                  <td className="border border-gray-300 px-4 py-2">{appointment.doctor}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      onClick={() => handleDelete(appointment.id)}
                      className="text-red-600 hover:text-red-800 font-semibold"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {appointments.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center text-gray-500 py-4">
                    No appointments available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

