import offer from "@/utils/offerCard";
import React from "react";
import OfferCard from "./OfferCard";

const Offer = () => {
  return (
    <div className="flex flex-col justify-start items-start gap-2 mt-16">
      <p>What We Offer</p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime quam
        sit accusamus, magnam ipsam?
        <br /> Voluptatum nisi voluptas provident perspiciatis numquam.
      </p>
      <div className="flex flex-wrap justify-center items-center">
        {offer.map((item, index) => (
          <OfferCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Offer;
