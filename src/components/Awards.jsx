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
    <div className="px-28 py-12">
      <div className="">
        <div className="flex gap-2 text-2xl text-accent items-center">
          {" "}
          <GiTwirlyFlower /> Awards
        </div>{" "}
        <div className="flex justify-between ">
          <h1 className="text-6xl font-bold ">
            {" "}
            This award reflects the hard work.
          </h1>
          <p className=" text-lg w-1/2 text-gray-400">
            So, make the decision to move forward. Commit your decision to
            paper, just to bring it into focus. Then, go for it!
          </p>
        </div>

      </div>
      <div className="overflow-x-auto rounded-box border border-base-content/5  ">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {tableData.map((data,index)=>(
      <tr key={index} className="border-b-1 border-gray-700">
        <th className=" taxt-2xl">{data.date}</th>
        <td>{data.city}</td>
        <td>{data.award}</td>
        <td>
            <div className=" border-gray-700 hover:border-accent cursor-pointer rounded-full w-16 h-16 border-1 ">
            <div className="border-1 relative hover:border-accent top-1 hover:text-accent right-1 text-lg border-gray-700 rounded-full w-16 h-16">
                <div className="flex items-center justify-center p-4 ">
                <FaArrowRight/></div>
            </div></div>
        </td>
      </tr>))}
     
    </tbody>
  </table>
</div>
<div className="bg-img bg-[url(/Logo/Logo.png)] bg-no-repeat bg-cover mt-12 bg-fixed left-0 top-0  h-screen w-full"> 

</div>
<div className="">
   <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{ x: baseX + offsetX, y: baseY + offsetY }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="w-62 h-62 rounded-full cursor-pointer border hover:border-accent hover:text-accent border-white absolute pointer-events-auto z-50 flex items-center justify-center  shadow-lg"
        style={{ left: 450, top: 5000 }}
      >
        <data className="absolute border-1 border-white hover:border-accent bg-white/40  left-1 top-1 w-full h-62 rounded-full"></data>
        <span className="text-lg font-semibold items-center flex text-black flex-col  ">
         Play
        </span>
      </motion.div>
</div>
    </div>
  );
};

export default Awards;
