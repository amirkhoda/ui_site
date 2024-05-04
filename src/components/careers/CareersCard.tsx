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
    <div>
      <Image src={image} alt={title} width={50} height={50} />
      <h2>{title}</h2>
      <p>{main}</p>
    </div>
  );
};

export default CareersCard;
