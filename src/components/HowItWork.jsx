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
    dis: "The first step to progress is letting go of what holds you back. Share your vision with us—we’ll help you replace limitations with solutions that drive success.",
    ulData:["E-commerce strategy","Business intelligence", "Custom design","Brand collateral",
        "Android", "Front-End development"],
        img:"/Images/scrollImg.png"
  },
   {
    title: "Meet the team",
    dis: "““Nothing changes until something moves.” – Robert RingerOur team is the movement behind every innovation. Passionate, skilled, and driven—we’re the force that turns ideas into impact.",
    ulData:["E-commerce strategy", "Business intelligence"],
        img:"/Images/scrollImg1.png"
  },
   {
    title: "Find Your Ideal Itinfinite",
    dis: "Success begins with action. Get the oars in the water and start rowing—because execution is the key to turning vision into reality",
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
  <div className="mt-20 md:mt-40 px-4 md:px-22 py-12 w-full">
  <div className="flex flex-col md:flex-row">
    
    {/* LEFT SECTION */}
    <div className="w-full md:w-1/2">
      <div className="flex gap-2 items-center text-xl md:text-2xl text-accent">
        <GiTwirlyFlower /> How It Works
      </div>

      <h1 className="text-3xl md:text-6xl font-bold mt-4">
        Smart strategy & excellent performance
      </h1>

      <p className="py-6 md:px-12 md:py-12 text-gray-400 text-sm md:text-base">
        Many carry self-limiting beliefs shaped by their past. At Dreamviewer Infotech,
        we believe in breaking those boundaries—with Smart Strategy and high-performance
        solutions that empower growth and transformation.
      </p>

      {/* Hidden on small screens */}
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{ x: baseX + offsetX, y: baseY + offsetY }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="w-24 md:w-32 h-24 md:h-32 hidden md:flex rounded-full cursor-pointer border hover:border-accent hover:text-accent border-gray-700 absolute pointer-events-auto z-50 items-center justify-center shadow-lg"
        style={{ left: 250, top: 3800 }}
      >
        <data className="absolute border-1 border-gray-700 hover:border-accent left-1 top-1 w-full h-full rounded-full"></data>
        <span className="text-base md:text-lg font-semibold items-center flex flex-col">
          Get Started
          <FaArrowDown />
        </span>
      </motion.div>
    </div>

    {/* RIGHT SECTION */}
    <div className="w-full md:w-1/2 flex flex-col overflow-y-auto overflow-x-hidden max-h-[70vh] mt-8 md:mt-0">
      <p className="text-accent text-lg md:text-xl px-2 md:px-6">Step 1</p>

      {scrolData.map((data, index) => (
        <div key={index} className="mt-8 md:mt-12">
          <p className="text-2xl md:text-6xl font-bold px-2 md:px-6">{data.title}</p>

          <p className="text-sm md:text-lg px-2 md:px-6 py-4 md:py-6 text-gray-400">
            {data.dis}
          </p>

          {data.ulData.map((item, i) => (
            <ul key={i} className="flex flex-wrap gap-4 px-2 md:ml-16 w-full">
              <li className="flex gap-3 items-start text-sm md:text-base">
                <FaArrowRight /> {item}
              </li>
            </ul>
          ))}

          <div className="w-full mt-4 flex justify-center">
            <img src="/Images/scrollImg.png" alt="img" className="w-64 md:w-80" />
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* TEXT BLOCKS BELOW */}
  <div className="flex flex-col md:flex-row gap-6 mt-12">
    {texts.map((text, index) => (
      <div key={index} className="border-1 rounded-2xl border-gray-700 flex-1">
        <div className="border-1 relative top-2 left-2 md:top-4 md:left-2 rounded-2xl border-gray-700">
          <div className="items-center p-4 md:p-6 text-center justify-center text-xl md:text-2xl flex flex-col">
            <span className="text-3xl md:text-5xl"> {text.num} </span>
            <span className="text-base md:text-xl">{text.text}</span>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default HowItWork;
