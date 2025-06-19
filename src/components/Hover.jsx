import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa6";
import { useEffect, useState } from "react";

export default function HoverCircle() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [percentage, setPercentage] = useState(0);

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
    <div>
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{ x: baseX + offsetX, y: baseY + offsetY }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="w-32 h-32 rounded-full cursor-pointer border hover:border-accent hover:text-accent border-white absolute pointer-events-auto z-50 flex items-center justify-center  shadow-lg"
        style={{ left: 0, top: 0 }}
      >
        <data className="absolute border-1 border-white hover:border-accent left-1 top-1 w-full h-32 rounded-full"></data>
        <span className="text-lg font-semibold items-center flex  flex-col  ">
          Get A Quote
          <FaArrowDown />
        </span>
      </motion.div>
      <div className="relative md:left-90 overflow-hidden top-110 mleft-20 md:top-40">
        {/* Text Line */}
        <div className="flex items-center gap-4">
          <p className="md:text-6xl text-2xl font-semibold">{percentage}%</p>
          <div className="">
            {" "}
            <p className="text-xl block">Customer </p>
            <span> Satisfaction</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-60 h-1 bg-white relative overflow-hidden rounded">
          <span
            className={`absolute top-0 left-0 h-full bg-accent transition-all duration-[2000ms] ease-out`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
}
