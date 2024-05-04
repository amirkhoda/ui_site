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
    <div>
      <Image src={image} alt={title} width={50} height={50} />
      <h2>{title}</h2>
      <p>{main}</p>
    </div>
  );
};

export default HireCard;
