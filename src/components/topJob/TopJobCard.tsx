import React from "react";
import Image from "next/image";
import { JobData } from "@/utils/tobJobCard";

interface jobCardProps {
  data: JobData;
}
const TopJobCard: React.FC<jobCardProps> = ({ data }) => {
  const { image, title, position, region, text } = data;
  return (
    <div className="w-[380px] h-[250px] bg-white shadow-xl gap-4 flex flex-col justify-start items-start p-8 transition-transform duration-200 hover:scale-105 border rounded-lg">
      {" "}
      <Image src={image} alt={title} width={50} height={50} />
      <p>{region}</p>
      <p>{position}</p>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default TopJobCard;
