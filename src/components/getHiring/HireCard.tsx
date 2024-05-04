"use client";

import { DataItem } from "@/utils/hiredcard";
import Image from "next/image";
import React from "react";

interface HireCardProps {
  data: DataItem;
}

const HireCard: React.FC<HireCardProps> = ({ data }) => {
  return (
    <div>
      <Image src={data.image} alt={data.title} width={50} height={50} />
      <h2>{data.title}</h2>
      <p>{data.main}</p>
    </div>
  );
};

export default HireCard;
