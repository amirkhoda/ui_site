"use client";
import data from "@/utils/careersCard";
import React from "react";
import CareersCard from "./CareersCard";

function Careers() {
  return (
    <div className="flex flex-col justify-center items-center gap-8 mt-16">
      <div className="flex flex-col justify-center items-center">
        {" "}
        <p className="header-2 ">
          <span className="text-primary header-2 ">
            Countless Career Options
          </span>{" "}
          Are Waiting For You To Explore
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-8 mt-4">
        {data.map((item, index) => (
          <CareersCard key={index} data={item} />
        ))}
      </div>
      <button
        type="button"
        className="focus:outline-none text-white bg-primary hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-7 py-2.5 mb-2  "
      >
        View All Categories
      </button>
    </div>
  );
}

export default Careers;
