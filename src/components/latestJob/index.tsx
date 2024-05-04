"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import Person from "../../../public/image/person.webp";

const LatestJob = () => {
  const router = useRouter();
  return (
    <section className="relative mx-auto flex w-[70%] max-w-[1300px] flex-col rounded-2xl bg-[#333333] p-3 md:w-[80%] md:p-8 lg:flex-row lg:items-center lg:gap-5 xl:w-[70%] mt-16 ">
      <Image
        className="absolute -bottom-0 -left-5 w-[130px] md:w-[250px] lg:w-[340px]"
        src={Person}
        alt="A smiling person"
      />
      <div className="flex flex-col text-[#111]">
        <p className="header-4 whitespace-nowrap">عضو خانواده ما شو!</p>
        <p className="title-4 hidden md:block">اینجا برای همه جا هست!</p>
      </div>
      <div className="ml-[200px] w-[80%] flex-col text-[#111] lg:max-w-[62%]">
        <p className="max-w-[90%] text-white text-[.44rem] md:max-w-[80%] md:text-[.70rem] lg:text-[1rem] ">
          Get Latest Job <br className="hidden lg:block" />
          <p className="text-white">Update</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing officia magni
            delectus voluptate
          </p>
        </p>

        <form className="max-w-md mx-auto">
          <label className="mb-2 text-sm font-medium  sr-only dark:text-white">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full mt-4 p-4 ps-10 text-sm  border border-gray-300 rounded-lg bg-transparent dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
              placeholder="Search Mockups, Logos..."
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-primary  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LatestJob;
