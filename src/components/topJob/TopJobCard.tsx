import React from "react";
import Image from "next/image";
import { JobData } from "@/utils/tobJobCard";

interface jobCardProps {
  data: JobData;
}
const TopJobCard: React.FC<jobCardProps> = ({ data }) => {
  const { image, title, position, region, text } = data;
  return (
    <div className="w-[380px] h-[250px] bg-white shadow-xl gap-4 flex flex-col justify-start items-start p-8 transition-transform duration-200 hover:scale-105 border rounded-lg hover:bg-primary text-black hover:text-white">
      <div className="flex justify-start items-start gap-5">
        <Image src={image} alt={title} width={50} height={50} />
        <div className="flex flex-col justify-start items-start">
          <p className="title-4">{title}</p>
          <p className="subtitle-2 text-secondary">{region}</p>
        </div>
      </div>
      <p className="subtitle-1">{position}</p>
      <p className="subtitle-2">{text}</p>
    </div>
  );
};

export default TopJobCard;
