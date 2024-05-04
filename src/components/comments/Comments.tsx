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
    <div className="relative mb-[2.51rem] flex h-[550px] items-start justify-center bg-main-image ">
      <div className="z-10 flex w-full flex-col items-center justify-start gap-2 py-16 md:py-2">
        <h3 className="header-3 text-white">صحبت مدیران</h3>{" "}
        <div className="flex h-full w-[90%] flex-col"></div>
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
