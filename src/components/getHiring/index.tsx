"use client";

import React from "react";
import HireCard from "./HireCard";
import data from "../../utils/hiredcard";

const Hiring = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 mt-16">
      <p className="">
        Get Hired in <span className="text-primary">Quick Easy Step</span>
      </p>
      <p>
        The Quickest and most Effectives way to get hired by the top form
        working in your{" "}
      </p>
      <p>careers intersect areas</p>
      <div className="flex flex-wrap justify-center items-center">
        {data.map((item, index) => (
          <HireCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Hiring;
