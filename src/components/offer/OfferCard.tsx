import { OfferData } from "@/utils/offerCard";
import React from "react";
import Image from "next/image";
interface OfferCardProps {
  data: OfferData;
}
const OfferCard: React.FC<OfferCardProps> = ({ data }) => {
  const { image, title, main, number } = data;
  return (
    <div>
      <Image src={image} alt={title} width={320} height={320} />
      <h2>{title}</h2>
      <p>{main}</p>
      <p>{number}</p>
    </div>
  );
};

export default OfferCard;
