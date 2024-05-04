import React from "react";
import Image from "next/image";
import { JobData } from "@/utils/tobJobCard";

interface jobCardProps {
  data: JobData;
}
const TopJobCard: React.FC<jobCardProps> = ({ data }) => {
  const { image, title, position, region, text } = data;
  return (
    <div>
      <Image src={image} alt={title} width={50} height={50} />
      <p>{region}</p>
      <p>{position}</p>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default TopJobCard;
