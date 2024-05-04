import { OfferData } from "@/utils/offerCard";
import React from "react";
import Image from "next/image";
interface OfferCardProps {
  data: OfferData;
}
const OfferCard: React.FC<OfferCardProps> = ({ data }) => {
  const { image, title, main, number } = data;
  return (
    <div className="flex flex-col justify-start items-start gap-4">
      <Image
        src={image}
        alt={title}
        layout="fixed"
        width={360}
        height={360}
        objectFit="cover"
        className="border rounded-lg"
      />
      <div className="flex justify-start items-start gap-2">
        <p className="title-4">{number}</p>
        <div className="w-px bg-black self-stretch mx-2"></div>

        <div>
          <h2 className="subtitle-1">{title}</h2>
          <p className="subtitle-2 text-secondary">{main}</p>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
