"use client";

import React from "react";
import HireCard from "./HireCard";
import data from "../../utils/hiredcard"; // Adjust the path as necessary

const Hiring = () => {
  return (
    <div>
      {data.map((item, index) => (
        <HireCard key={index} data={item} />
      ))}
    </div>
  );
};

export default Hiring;
