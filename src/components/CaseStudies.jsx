import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { GiTwirlyFlower } from "react-icons/gi";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";
const CaseStudies = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
      const handleMouseMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);
  
    
    const baseX = 10;
    const baseY = 10;
  
    
    const offsetX = isHovered ? (mousePosition.x - baseX) / 10 : 0;
    const offsetY = isHovered ? (mousePosition.y - baseY) / 10 : 0;
  const cardData =[
    {
      title:"titleOne",
      dis:"Some people will tell you there are four while others may tell you there are eight."
    },
      {
      title:"titleOne",
      dis:"Some people will tell you there are four while others may tell you there are eight."
    },
      {
      title:"titleOne",
      dis:"Some people will tell you there are four while others may tell you there are eight."
    },
  ]
  return (
    <div>
     <div className="flex flex-col justify-center items-center py-28">
        <div className="flex items-center gap-2 text-2xl text-accent"><GiTwirlyFlower/> Case Studies</div>
        <h1 className="text-7xl w-[60%] text-center">What's next? our latest client stories</h1>
        <div className="flex gap-10 mt-6">
          {cardData.map((data, index)=>(
            <div key={index} className="w-64 h-[70vh] relative group cursor-pointer overflow-hidden rounded-xl shadow-2xl transform transition-transform duration-300 hover:scale-105">
  <img
    src="/Images/card1.png"
    alt="Card Image"
    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
  />

  <div className="absolute top-0 left-4 w-full p-4">
    <h3 className="text-white text-xl font-bold drop-shadow-md">{data.title}</h3>
    <div className="w-16 h-16 rounded-full border-1 relative top-2 left-4 ">
      <div className='w-16 h-16 rounded-full border-1 flex justify-center items-center '>
    <FaArrowRight/></div>
    </div>
  </div>


  <div className="absolute inset-0 bg-gradient-to-t from-accent via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
    <p className="text-white text-lg font-semibold drop-shadow-md">
{data.dis}
</p>
  </div>
</div>
    ))}
        </div>
     </div>
     <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{ x: baseX + offsetX, y: baseY + offsetY }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="w-32 h-32 rounded-full cursor-pointer border hover:border-accent hover:text-accent border-white absolute pointer-events-auto z-50 flex items-center justify-center  shadow-lg"
      style={{ left: 550, top: 3450 }}
    >
        <data className="absolute border-1 border-white hover:border-accent left-1 top-1 w-full h-32 rounded-full"></data>
      <span className="text-lg font-semibold items-center flex  flex-col  ">All Case Study
        <FaArrowDown/>
      </span>
    </motion.div>
    </div>
  )
}

export default CaseStudies