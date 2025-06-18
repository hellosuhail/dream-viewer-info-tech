import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { GiTwirlyFlower } from "react-icons/gi";
import { FaStar } from "react-icons/fa6";

const WhatWeDo = () => {
  const [percentage, setPercentage] = useState(0);
   const container = useRef(null)
  const ref = useRef(null)
  const isInView = useInView({ root: container })

  useEffect(() => {
    let start = 0;
    const end = 100;
    const duration = 3000; // 3 seconds
    const stepTime = Math.floor(duration / end); // 30ms per step

    const counter = setInterval(() => {
      start += 1;
      setPercentage(start);
      if (start >= end) clearInterval(counter);
    }, stepTime);

    return () => clearInterval(counter);
  }, []);

  const midNav= [
    "IOS DEVELOPER","Ui/Ux Design","web Design","Backend Development"

  ]
  return (
    <div className="overflow-hidden " ref={ref}>
      <div className=" px-34 py-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex text-accent items-center gap-2 text-2xl"
        >
          <GiTwirlyFlower /> <h1>What Wee Do</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-6xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-start gap-8"
        >
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight lg:w-1/2">
            This is what we do
            <br className="hidden lg:block" /> and we do it perfectly.
          </h1>

          <p className="text-lg text-gray-600 lg:w-1/2 leading-relaxed">
            This is what we do, executed with perfection. Our dedication and
            expertise ensure every detail is flawless, setting the standard in
            our pursuit of excellence.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex w-full "
        >
          <div className="border-1 w-1/4 p-6 h-[70vh] border-gray-800">
            <img
              src="/Images/Information-Security.svg"
              className="ml-40 m-10"
              alt="information-img"
            />

            <h2 className="text-3xl">Web Development</h2>
            <ul>
              <li className="flex mt-4 gap-4 items-center">
                <FaArrowRight /> Custom Design
              </li>
              <li className="flex mt-4 gap-4 items-center">
                <FaArrowRight /> Front-End development
              </li>
              <li className="flex mt-4 gap-4 items-center">
                <FaArrowRight /> Custom Design
              </li>
            </ul>
          </div>
          <div className="border-1 h-[70vh] mt-20 w-1/4 p-6 border-gray-800">
            <img
              src="/Images/Data-Synchronization.svg"
              className="ml-40 m-10"
              alt="information-img"
            />

            <h2 className="text-3xl">Web Development</h2>
            <ul>
              <li className="flex mt-4 gap-4 items-center">
                <FaArrowRight /> Custom Design
              </li>
              <li className="flex mt-4 gap-4 items-center">
                <FaArrowRight /> Front-End development
              </li>
              <li className="flex mt-4 gap-4 items-center">
                <FaArrowRight /> Custom Design
              </li>
            </ul>
          </div>
          <div className="border-1 h-[70vh] w-1/4 p-6 border-gray-800">
            <img
              src="/Images/Mobile-Platforms.svg"
              className="ml-40 m-10"
              alt="information-img"
            />

            <h2 className="text-3xl">Web Development</h2>
            <ul>
              <li className="flex mt-4 gap-4 items-center">
                <FaArrowRight /> Custom Design
              </li>
              <li className="flex mt-4 gap-4 items-center">
                <FaArrowRight /> Front-End development
              </li>
              <li className="flex mt-4 gap-4 items-center">
                <FaArrowRight /> Custom Design
              </li>
            </ul>
          </div>
          <div className="border-1 w-1/4  h-[70vh] mt-20 p-6 border-gray-800">
            <img
              src="/Images/Process-Automation.svg"
              className="ml-40 m-10"
              alt="information-img"
            />

            <h2 className="text-3xl">Web Development</h2>
            <ul>
              <li className="flex mt-4 gap-4 items-center">
                <FaArrowRight /> Custom Design
              </li>
              <li className="flex mt-4 gap-4 items-center">
                <FaArrowRight /> Front-End development
              </li>
              <li className="flex mt-4 gap-4 items-center">
                <FaArrowRight /> Custom Design
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
      <div className="flex gap-6 py-20 px-34 bg-[#020307]">
        <img
          src="https://themes.potenzaglobalsolutions.com/html/it-infinite/images/about/about-04.jpg"
          className=""
          alt=""
        />
        <div className="">
          <div className=" flex text-2xl items-center gap-4 text-accent">
            <GiTwirlyFlower /> About Us
          </div>
          <h1 className="text-6xl font-bold">our clients deliver marvelous</h1>
          <p className="px-6 py-12">
            Our clients deliver marvelous outcomes. Together, we achieve
            excellence through collaboration and dedication to their vision and
            success.
          </p>
          <p className="text-md px-6">Project success percentage rate</p>
          <div className="flex items-center gap-4">
            <motion.div
           
              initial={{ width: 0, y: 40 }}
              animate={{ width: 400, y: 0 }}
              transition={{ duration: 3 }}
              className="m-6 mt-2 rounded w-full bg-accent h-2"
            ></motion.div>

            <p className="text-5xl font-semibold">{percentage}%</p>
          </div>{" "}
          <div className="rounded w-full m-8 h-18 flex gap-2 items-center justify-start p-4 border-1 border-gray-700">
            <p className="text-2xl font-bold">5</p>
            <FaStar className="text-yellow-300 text-2xl" />
            <p className="text-xl font-bold">
              {" "}
              Rated 4.80 out of 5 based on over
            </p>
            <span className="text-xl font-bold text-accent">1000+ reviews</span>
          </div>
          <div className="flex justify-between px-12">
            <ul>
              <li className="flex items-center gap-2"> <FaArrowRight />front end</li>
              <li className="flex items-center gap-2"> <FaArrowRight />front end</li>
              <li className="flex items-center gap-2"> <FaArrowRight />front end</li>
            </ul>
            <ul>
              <li className="flex items-center gap-2"> <FaArrowRight />front end</li>
              <li className="flex items-center gap-2"> <FaArrowRight />front end</li>
              <li className="flex items-center gap-2"> <FaArrowRight />front end</li>
            </ul>
            <ul>
              <li className="flex items-center gap-2"> <img src="https://themes.potenzaglobalsolutions.com/html/it-infinite/images/about/about-05.png" alt="img" /></li>
           
            </ul>
          </div>
        </div>
      </div>
        <div className="border-1 border-gray-700">
<div className="w-full relative overflow-x-auto border-1 border-gray-400 top-2"></div>
<ul className="flex  ">
    {midNav.map((item, index)=>(
    <motion.li key={index}
   animate={{ x: [200, 0] }} 
  transition={{
    duration: 2,
    repeat: Infinity,      
    ease: "easeInOut"
  }}
    className="text-gray-600 hover:text-white text-6xl w-1/4">
      {item}
    </motion.li>))}
</ul>
        </div>
    </div>
  );
};

export default WhatWeDo;
