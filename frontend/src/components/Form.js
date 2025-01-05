import React, { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from 'jwt-decode'
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
export const Form = ({ method }) => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    password1: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (method === "register") {
        if (data.password !== data.password1) {
          setError("Passwords do not match");
          return;
        }
        await api.post("/register/", data);
        navigate("/login");
      } else {
        const res = await api.post("/login/", {
          username: data.username,
          password: data.password,
        });
        const decode = jwtDecode(res.data.access)
        localStorage.setItem('access', res.data.access)
        localStorage.setItem('refresh', res.data.refresh)
        dispatch(login({isAuthenticated :true, access : res.data.access , refresh:res.data.refresh ,user : decode }))
        navigate("/");
      }
    } catch (error) {
      setError(error.response?.data?.detail || "An error occurred");
    }
  };

  return (
    <div className="flex justify-center items-center my-5">
      <div className="bg-slate-300 rounded-sm p-5 md:w-[400px] w-full mx-2">
        <h1 className="text-2xl font-bold text-blue-400">
          {method === "login" ? "Login Now" : "Register Now"}
        </h1>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit}>
          <h1 className="font-semibold text-blue-400">Username</h1>
          <input
            name="username"
            type="text"
            value={data.username}
            onChange={handleChange}
            className="w-full py-1 px-3 outline-none rounded-sm mb-3"
            placeholder="Enter Your Username"
          />
          {method === "register" && (
            <div className="w-full">
              <h1 className="font-semibold text-blue-400">Email</h1>
              <input
                name="email"
                type="email"
                value={data.email}
                onChange={handleChange}
                className="w-full py-1 px-3 outline-none rounded-sm mb-3"
                placeholder="Enter Your Email"
              />
            </div>
          )}
          <h1 className="font-semibold text-blue-400">Password</h1>
          <input
            name="password"
            type="password"
            value={data.password}
            onChange={handleChange}
            className="w-full py-1 px-3 outline-none rounded-sm mb-3"
            placeholder="Enter Your Password"
          />
          {method === "register" && (
            <>
              <h1 className="font-semibold text-blue-400">Confirm Password</h1>
              <input
                name="password1"
                type="password"
                value={data.password1}
                onChange={handleChange}
                className="w-full py-1 px-3 outline-none rounded-sm mb-3"
                placeholder="Confirm Your Password"
              />
            </>
          )}

          <button className="w-full bg-blue-300 py-1 text-white font-bold">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
