import React, { useEffect, useState } from "react";
import { GiTwirlyFlower } from "react-icons/gi";
import {motion} from "framer-motion"
import { FaArrowDown, FaArrowRight } from "react-icons/fa";

const tableData =[
    {
        date:"[2020]",city:"Ghazibad",award:"Good Design Award" 
    },
        {
        date:"[2023]",city:"Noida",award:"Good Design Award" 
    },
        {
        date:"[2022]",city:"Gurgaon",award:"Good Design Award" 
    },
        {
        date:"[2024]",city:"Delhi",award:"Good Design Award" 
    },
        {
        date:"[2025]",city:"Ghazibad",award:"Good Design Award" 
    },
]

const Awards = () => {
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
   <div className="px-4 md:px-28 py-12 w-full">
  {/* Header */}
  <div className="space-y-6">
    <div className="flex gap-2 text-xl md:text-2xl text-accent items-center">
      <GiTwirlyFlower /> Awards
    </div>

    {/* Title and Paragraph */}
    <div className="flex flex-col md:flex-row md:justify-between gap-6">
      <h1 className="text-3xl md:text-6xl font-bold md:w-1/2">
        This award reflects the hard work.
      </h1>
      <p className="text-base md:text-lg text-gray-400 md:w-1/2">
        So, make the decision to move forward. Commit your decision to
        paper, just to bring it into focus. Then, go for it!
      </p>
    </div>
  </div>

  {/* Table */}
  <div className="overflow-x-auto rounded-box border border-base-content/5 mt-10">
    <table className="table w-full min-w-[600px]">
      <thead>
        <tr>
          <th>Date</th>
          <th>City</th>
          <th>Award</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((data, index) => (
          <tr key={index} className="border-b border-gray-700">
            <th className="text-base md:text-xl">{data.date}</th>
            <td className="text-sm md:text-base">{data.city}</td>
            <td className="text-sm md:text-base">{data.award}</td>
            <td>
              <div className="border-gray-700 hover:border-accent cursor-pointer rounded-full w-12 h-12 md:w-16 md:h-16 border">
                <div className="border relative hover:border-accent hover:text-accent border-gray-700 rounded-full w-full h-full flex items-center justify-center">
                  <FaArrowRight />
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* Background Image */}
  <div className="bg-img bg-[url(/Logo/Logo.png)] bg-no-repeat bg-cover mt-12 bg-fixed w-full h-[50vh] md:h-screen"></div>

  {/* Motion Button */}
  <div className="relative mt-12">
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{ x: baseX + offsetX, y: baseY + offsetY }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="w-24 md:w-62 h-24 md:h-62 rounded-full cursor-pointer border hover:border-accent hover:text-accent border-white absolute pointer-events-auto z-50 flex items-center justify-center shadow-lg"
      style={{
        left: window.innerWidth < 768 ? 100 : 450,
        top: window.innerWidth < 768 ? 1800 : 5000,
      }}
    >
      <data className="absolute border border-white hover:border-accent bg-white/40 left-1 top-1 w-full h-full rounded-full"></data>
      <span className="text-base md:text-lg font-semibold text-black flex flex-col">
        Play
      </span>
    </motion.div>
  </div>
</div>

  );
};

export default Awards;
