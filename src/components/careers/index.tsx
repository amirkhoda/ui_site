"use client";
import data from "@/utils/careersCard";
import React from "react";
import CareersCard from "./CareersCard";

function Careers() {
  return (
    <div className="flex flex-col justify-center items-center gap-2 mt-8">
      <p>
        <span className="text-primary">Countless Career Options</span> Are
        Waiting
      </p>
      <p>For You To Explore</p>
      <div className="flex flex-wrap justify-center items-center">
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
