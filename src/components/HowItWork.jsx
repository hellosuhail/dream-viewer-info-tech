import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GiTwirlyFlower } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";


const texts = [
  { num: "5M", text: "Business Peoples" },
  { num: "30K+", text: "Project completed" },
  { num: "10K+", text: "Happy Customers" },
];

const scrolData = [
  {
    title: "Let us know your need",
    dis: "The bottom line is that we must shed the bad and replace with good beliefs",
    ulData:["E-commerce strategy","Business intelligence", "Custom design","Brand collateral",
        "Android", "Front-End development"],
        img:"/Images/scrollImg.png"
  },
   {
    title: "Meet the team",
    dis: "“Nothing changes until something moves” – this is the battle cry of author and journalist Robert Ringer.",
    ulData:["E-commerce strategy", "Business intelligence"],
        img:"/Images/scrollImg1.png"
  },
   {
    title: "Find Your Ideal Itinfinite",
    dis: "Get the oars in the water and start rowing. Execution is the single biggest factor in achievement.",
    ulData:["Digital PR", "Technical Operations","Accounting Outsourcing"],
        img:"/Images/scrollImg2.jpg"
  },
];

const HowItWork = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const baseX = 150;
  const baseY = 400;

  const offsetX = isHovered ? (mousePosition.x - baseX) / 10 : 0;
  const offsetY = isHovered ? (mousePosition.y - baseY) / 10 : 0;

  return (
    <div className="mt-40 px-22 py-12 w-full">
      <div className="flex ">
        <div className="w-1/2">
          <div className="flex gap-2 items-center text-2xl text-accent">
            <GiTwirlyFlower /> How It Works
          </div>
          <h1 className="text-6xl  font-bold ">
            Smart strategy & excellent performance
          </h1>
          <p className="px-12 py-12 text-gray-400">
            We all carry a lot of baggage, thanks to our upbringing. The
            majority of people carry with them, an entire series of
            self-limiting beliefs.
          </p>
          <motion.div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            animate={{ x: baseX + offsetX, y: baseY + offsetY }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="w-32 h-32 rounded-full cursor-pointer border hover:border-accent hover:text-accent border-gray-700 absolute pointer-events-auto z-50 flex items-center justify-center  shadow-lg"
            style={{ left: 150, top: 3700 }}
          >
            <data className="absolute border-1 border-gray-700 hover:border-accent left-1 top-1 w-full h-32 rounded-full"></data>
            <span className="text-lg font-semibold items-center flex  flex-col  ">
              Get Started
              <FaArrowDown />
            </span>
          </motion.div>
          <div className="mt-58"></div>
        </div>
        <div className="flex flex-col overflow-y-auto  overflow-x-hidden h-[70vh] justify-start">
          <p className="text-accent text-xl px-6">Step 1</p>
          {scrolData.map((data,index)=>(
          <div key={index} className="mt-12">
          <p className="text-6xl font-bold px-6"> {data.title} </p>
          <p className="text-lg px-6 py-6 text-gray-400">
            {data.dis}
          </p>
          {data.ulData.map((item , index)=>(
          <ul key={index} className="flex ml-18 w-80 gap-4  flex-wrap">
            <li className="flex gap-6 "><FaArrowRight/>{item}</li>
           
          </ul>))}
          <div className="w-full m-4 flex justify-center">
            <img src="/Images/scrollImg.png" alt="img" className="w-90" />
          </div></div>))}
        </div>
      </div>
      <div className="flex gap-6">
        {texts.map((text, index) => (
          <div key={index} className=" border-1 rounded-2xl border-gray-700">
            <div className=" border-1 relative top-4 left-2 rounded-2xl   border-gray-700 ">
              <div className="items-center p-6 pl-10 text-center justify-center text-2xl flex">
                <span className="text-5xl"> {text.num} </span>
                <span> {text.text} </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWork;
