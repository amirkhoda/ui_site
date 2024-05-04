import Image from "next/image";
import React from "react";
import playIcon from "../../../public/image/icons8-play-100.png";

function SearchApply() {
  return (
    <div className="flex flex-col justify-center items-center mt-16 gap-8">
      <button className="bg-[#f5eadf] text-[#eb7f13] py-2 px-3 rounded-xl title-5">
        No.1 Job Hunt Website
      </button>
      <p className="header-2">
        Search,Apply & <br /> Get Your{" "}
        <span className="text-primary header-2">Dream Job</span>
      </p>
      <p className="text-center	subtitle-1 text-secondary">
        Start your hunt for the best, life changing careers opportunities from
        here in your <br /> selecter areas conveniently and get hired quickly.
      </p>
      <div className="flex justify-center items-end gap-12">
        <button
          type="button"
          className="focus:outline-none text-white bg-primary hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-7 py-2.5 mb-2 btn  "
        >
          Browse Job
        </button>
        <div className="flex justify-center items-center gap-2">
          <Image width={50} height={50} src={playIcon} alt="playIcon" />
          <p className="subtitle-1">How it work?</p>
        </div>
      </div>
    </div>
  );
}

export default SearchApply;
