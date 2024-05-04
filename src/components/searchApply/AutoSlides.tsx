// components/NewsTicker.js
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, FreeMode } from "swiper/modules";

const jobs = [
  { id: 1, title: "UI/UX Designer" },
  { id: 2, title: "Senior Front-End Developer" },
  { id: 3, title: "Senior Back-End Developer" },
  { id: 4, title: "Senior Back-End Developer" },
  { id: 5, title: "Senior Back-End Developer" },
  { id: 6, title: "Senior Back-End Developer" },
  { id: 7, title: "Senior Back-End Developer" },
  { id: 8, title: "Senior Back-End Developer" },
  { id: 9, title: "Senior Back-End Developer" },
];
export default function NewsTicker() {
  return (
    <div className="flex flex-col justify-center items-center gap-3 mt-8">
      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={0}
        slidesPerView={"auto"}
        loop={true}
        freeMode={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: false,
          speed: 7000,
        }}
        speed={5000}
        onSlideChange={() => console.log("slide change")}
      >
        {jobs.map((job) => (
          <SwiperSlide
            key={job.id}
            className="whitespace-nowrap border-solid border-2 border-gray rounded-[4rem] flex justify-center items-center cursor-pointer	hover:border-primary"
          >
            {job.title}
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={0}
        slidesPerView={"auto"}
        loop={true}
        freeMode={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true,
          speed: 7000,
        }}
        speed={5000}
        onSlideChange={() => console.log("slide change")}
      >
        {jobs.map((job) => (
          <SwiperSlide
            key={job.id}
            className="whitespace-nowrap border-solid border-2 border-gray rounded-[4rem] flex justify-center items-center cursor-pointer	hover:border-primary"
          >
            {job.title}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
