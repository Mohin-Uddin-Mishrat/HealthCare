import React from "react";

export const Form = ({ method }) => {
  return (
    <div className="flex justify-center items-center my-5 ">
      <div className="bg-slate-300 rounded-sm p-5 md:w-[400px] w-full mx-2">
        <h1 className="text-2xl font-bold text-blue-400">{method === "login" ? "Login Now" : "Register Now"}</h1>
        <form>
          {method === "register" && (
            <div className="w-full">
              <h1 className="font-semibold text-blue-400">First Name</h1>
              <input
                className="w-full py-1 px-3 outline-none rounded-sm mb-3"
                placeholder="Enter Your FirstName "
              ></input>
              <h1 className="font-semibold text-blue-400">Last Name</h1>
              <input
                className="w-full py-1 px-3 outline-none rounded-sm mb-3"
                placeholder="Enter Your Last Name "
              ></input>
            </div>
          )}
          <h1 className="font-semibold text-blue-400">Email</h1>
          <input
            className="w-full py-1 px-3 outline-none rounded-sm mb-3"
            placeholder="Enter Your Email "
          ></input>
          <h1 className="font-semibold text-blue-400">Password</h1>
          <input
            className="w-full py-1 px-3 outline-none rounded-sm mb-3"
            placeholder="Enter Your password "
          ></input>
          {method === "register" && (
            <>
              <h1 className="font-semibold  text-blue-400">Confirm Password</h1>
              <input
                className="w-full py-1 px-3 outline-none rounded-sm mb-3"
                placeholder="Enter Your confirm password "
                type="password"
              ></input>
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
