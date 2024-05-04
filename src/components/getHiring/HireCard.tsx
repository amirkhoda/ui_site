"use client";

import { DataItem } from "@/utils/hiredcard";
import Image from "next/image";
import React from "react";

interface HireCardProps {
  data: DataItem;
}

const HireCard: React.FC<HireCardProps> = ({ data }) => {
  const { image, title, main } = data;
  return (
    <div className="w-[250px] h-[250px] bg-white shadow-xl gap-4 flex flex-col justify-start items-start p-8 transition-transform duration-200 hover:scale-105">
      <Image src={image} alt={title} width={50} height={50} />
      <p className="title-4">{title}</p>
      <p className="subtile-1 text-secondary">{main}</p>
    </div>
  );
};

export default HireCard;
