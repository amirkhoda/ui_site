import job from "@/utils/tobJobCard";
import React from "react";
import TopJobCard from "./TopJobCard";

const TopJob = () => {
  return (
    <div className="flex flex-col justify-start items-start gap-2 mt-16">
      <p>
        <span className="text-primary">Latest and Top</span>
        Jobs Openings
      </p>
      <div className="flex justify-between items-center w-full">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime quam
          sit accusamus, magnam ipsam?
          <br /> Voluptatum nisi voluptas provident perspiciatis numquam.
        </p>
        <button
          type="button"
          className="text-primary bg-white border border-primary focus:outline-none hover:bg-primary hover:text-white focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-7 py-2.5 me-2 mb-2"
        >
          View All Jobs
        </button>
      </div>
      <div className="flex flex-wrap justify-center items-center">
        {job.map((item, index) => (
          <TopJobCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default TopJob;
