import offer from "@/utils/offerCard";
import React from "react";
import OfferCard from "./OfferCard";

const Offer = () => {
  return (
    <div className="flex flex-col justify-start items-start gap-2 mt-16">
      <p className="header-2 md:pl-0 pl-12">What We Offer</p>
      <p className="subtitle-1 text-secondary md:pl-0 pl-12">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime quam
        sit accusamus, magnam ipsam?
        <br /> Voluptatum nisi voluptas provident perspiciatis numquam.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-12 mt-8">
        {offer.map((item, index) => (
          <OfferCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Offer;
