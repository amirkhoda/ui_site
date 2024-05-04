"use client";

import React from "react";
import HireCard from "./HireCard";
import data from "../../utils/hiredcard";

const Hiring = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 mt-16">
      <p className="header-2">
        Get Hired in{" "}
        <span className="text-primary header-2">4 Quick Easy Step</span>
      </p>
      <p className="subtitle-1 text-secondary">
        The Quickest and most Effectives way to get hired by the top form
        working in your{" "}
      </p>
      <p className="subtitle-1 text-secondary">careers intersect areas</p>
      <div className="flex flex-wrap  justify-center items-center mt-8 gap-4">
        {data.map((item, index) => (
          <div
            key={index}
            className={`${index === 1 || index === 3 ? "mt-12" : ""}`}
          >
            <HireCard data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hiring;
