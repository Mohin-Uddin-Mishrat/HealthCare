import React, { useEffect, useState } from "react";
import { Banner } from "../components/Banner";
import { SerciveCard } from "../components/SerciveCard";
import { FaAngleLeft, FaAngleRight, FaArrowLeft } from "react-icons/fa";

export const Home = () => {
  const [currIndex, setCurrIndex] = useState(0);
  const [translatePercent, setTranslatePercent] = useState(33);

  const updateTranslatePercent = () => {
    if (window.innerWidth < 768) {
      setTranslatePercent(100); 
    } else {
      setTranslatePercent(33.5); 
    }
  };

  useEffect(() => {
    updateTranslatePercent();
    window.addEventListener("resize", updateTranslatePercent); 

    return () => {
      window.removeEventListener("resize", updateTranslatePercent);
    };
  }, []);
  const handleCaruselLeft = (e) => {
    e.preventDefault();
    if (currIndex === 6 - 3) {
    } else {
      setCurrIndex(currIndex + 1);
    }
  };
  const handleCaruselright = (e) => {
    e.preventDefault();
    if (currIndex === 0) {
    } else {
      setCurrIndex(currIndex - 1);
    }
  };
  return (
    <div>
      <Banner></Banner>
      <div className="relative my-5 w-full md:w-[70%] mx-auto  rounded-lg overflow-hidden ">
        <div
          className="flex space-x-[.5%] transition-transform duration-300 ease-in-out "
          style={{
            transform: `translateX(-${currIndex * translatePercent}%)`,
          }}
        >
          <SerciveCard></SerciveCard>
          <SerciveCard></SerciveCard>
          <SerciveCard></SerciveCard>
          <SerciveCard></SerciveCard>
          <SerciveCard></SerciveCard>
          <SerciveCard></SerciveCard>
        </div>
        <button
          onClick={handleCaruselright}
          className="bg-blue-300 px-3 py-2 rounded-lg absolute top-[48%] "
        >
          <FaAngleLeft></FaAngleLeft>
        </button>
        <button
          onClick={handleCaruselLeft}
          className="bg-blue-300 px-3 py-2 rounded-lg absolute top-[48%] right-0 "
        >
          <FaAngleRight></FaAngleRight>
        </button>
      </div>
    </div>
  );
};
