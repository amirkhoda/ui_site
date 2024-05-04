"use client";

import { careerData } from "@/utils/careersCard";
import Image from "next/image";
import React from "react";

interface careerCardProps {
  data: careerData;
}
const CareersCard: React.FC<careerCardProps> = ({ data }) => {
  const { image, title, main } = data;
  return (
    <div className="w-[250px] h-[250px] bg-white shadow-xl gap-4 flex flex-col justify-start items-start p-8 transition-transform duration-200 hover:scale-105 border rounded-lg hover:bg-primary text-black hover:text-white">
      <Image src={image} alt={title} width={50} height={50} />
      <p className="title-4 ">{title}</p>
      <p className="subtitle-2 text-secondary ">{main}</p>
    </div>
  );
};

export default CareersCard;
