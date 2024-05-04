"use client";

import React, { useState } from "react";
import Image from "next/image";
import heroImage from "@/assets/images/hero-image.webp";
import Carousel from "./Carousel";
import { CommentsCard } from "./CommentsCard";
import { text } from "stream/consumers";

interface Props {}

const Comments: React.FC<Props> = ({}) => {
  const [active, setActive] = useState<number>(1);

  const cardsData = [
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores magnam odio, alias numquam iste omnis adipisci atque blanditiis aliquid repellendus quidem veniam mollitia inventore sint minus delectus nulla. Quo, provident.",
      name: "amirhossein",
      job: "Front-End",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores magnam odio, alias numquam iste omnis adipisci atque blanditiis aliquid repellendus quidem veniam mollitia inventore sint minus delectus nulla. Quo, provident.",
      name: "amirhossein",
      job: "Front-End",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores magnam odio, alias numquam iste omnis adipisci atque blanditiis aliquid repellendus quidem veniam mollitia inventore sint minus delectus nulla. Quo, provident.",
      name: "amirhossein",
      job: "Front-End",
    },
  ];

  return (
    <div className="relative mb-[2.51rem] flex h-[550px] items-start justify-center bg-main-image mt-16 ">
      <div className="z-10 flex w-full flex-col items-center justify-start gap-2 py-16 md:py-2">
        <p className="header-2">Testimonials</p>
        <p className="subtitle-1 text-secondary md:pl-0 pl-12">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime quam
          sit accusamus, magnam ipsam?
          <br /> Voluptatum nisi voluptas provident perspiciatis numquam.
        </p>
        <Carousel active={active} setActive={setActive}>
          {cardsData.map((card, i) => (
            <CommentsCard
              key={i}
              text={card.text}
              name={card.name}
              job={card.job}
              isActive={i === active ? true : false} // Pass the isActive prop
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Comments;
