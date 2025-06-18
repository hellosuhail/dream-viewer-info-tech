import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { GiTwirlyFlower } from "react-icons/gi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";


const cardClients=[
    {dis:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, ex repudiandae at voluptatem aut quia, repellendus distinctio ducimus  repellendus distinctio ducimus ",
        name:"John Doe",
        work:"Director",
         mar :18
    },
       {dis:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, ex repudiandae at voluptatem aut quia, repellendus distinctio ducimus  repellendus distinctio ducimus ",
        name:"John Doe",
        work:"Director",
         mar : 28
    },
       {dis:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, ex repudiandae at voluptatem aut quia, repellendus distinctio ducimus  repellendus distinctio ducimus ",
        name:"John Doe",
        work:"Director",
         mar : 18
    },
       {dis:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, ex repudiandae at voluptatem aut quia, repellendus distinctio ducimus  repellendus distinctio ducimus ",
        name:"John Doe",
        work:"Director",
         mar : 28
    },
]
const OurTest = () => {
    
  return (
    <div  className="bg-[bg-[#010205]]">
      <div className="flex flex-col  justify-center items-center">
        <div className="flex text-2xl text-accent gap-2 justify-center items-center">
          <GiTwirlyFlower />
          Our Testimonial
        </div>
        <h1 className="text-6xl px-68 text-center font-bold">
          Over 500 clients and 5,000 projects across the globe.
        </h1>

   
      </div>
        <Swiper
  modules={[Navigation, Autoplay]}
  spaceBetween={20}
  navigation
  loop
  autoplay={{
    delay: 5000,
    disableOnInteraction: false,
  }}
  breakpoints={{
    0: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
  }}
  className="mySwiper"
>
  {cardClients.map((data, index) => (
    <SwiperSlide key={index}>
      <div className={`w-full flex gap-10 mt-${data.mar}`}>
        <div className="border-1 w-full cursor-grab px-8 py-6 rounded-lg border-gray-700 text-2xl">
          <div className="flex w-full gap-12 justify-between text-accent">
            <div className="flex gap-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </div>
            <img src="/Images/quote.png" alt="" className="w-20" />
          </div>
          <p className="text-sm">{data.dis}</p>
          <h1 className="font-bold py-2 text-2xl bg-gradient-to-r from-accent via-purple-500 to-pink-500 text-transparent bg-clip-text">
            {data.name}
          </h1>
          <p className="text-lg text-pink-800">{data.work}</p>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

    </div>
  );
};

export default OurTest;
