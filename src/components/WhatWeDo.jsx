import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { GiTwirlyFlower } from "react-icons/gi";
import { FaStar } from "react-icons/fa6";

const WhatWeDo = () => {
  const [percentage, setPercentage] = useState(0);
  const container = useRef(null);
  const ref = useRef(null);
  const isInView = useInView({ root: container });

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

  const midNav = [
    "IOS DEVELOPER",
    "Ui/Ux Design",
    "web Design",
    "Backend Development",
  ];
  return (
    <div className="overflow-hidden " ref={ref}>
      <div className=" md:px-34 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex text-accent items-center gap-2 md:text-2xl"
        >
          <GiTwirlyFlower /> <h1>What We Do</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-6xl mx-auto md:px-6 md:py-16 flex flex-col lg:flex-row items-start gap-8"
        >
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight lg:w-1/2">
            This is what we do
            <br className="hidden lg:block" /> and we do it perfectly.
          </h1>

          <p className="text-lg text-gray-600 lg:w-1/2 leading-relaxed">
     With expert precision and unwavering dedication, we deliver flawless results that set the standard for excellence.

          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="md:flex w-full py-10 "
        >{/* <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-8 mt-12 px-4"> */}
        <div className=" w-full md:flex md:h-screen">
         <div className="border border-gray-800 w-full md:w-1/4 p-4 md:p-6 h-auto md:h-[70vh] flex flex-col items-center text-center rounded-lg shadow-sm">
  <img
    src="/Images/Information-Security.svg"
    className="w-24 sm:w-32 md:w-40 mb-6"
    alt="information-img"
  />

  <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
    Web Development
  </h2>

  <ul className="space-y-3 text-sm sm:text-base md:text-lg">
    <li className="flex gap-3 items-center justify-center">
      <FaArrowRight /> Custom Design
    </li>
    <li className="flex gap-3 items-center justify-center">
      <FaArrowRight /> Front-End Development
    </li>
    <li className="flex gap-3 items-center justify-center">
      <FaArrowRight /> Custom Design
    </li>
  </ul>
</div>

     
  {/* Mobile Development Card */}
  <div className="border border-gray-800 w-full md:w-[45%] md:mt-12 lg:w-1/4 p-6 rounded-lg shadow-sm md:h-[70vh] flex flex-col items-center text-center">
    <img
      src="/Images/Data-Synchronization.svg"
      className="w-24 sm:w-32 md:w-36 mb-6"
      alt="mobile-img"
    />
    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">Mobile Development</h2>
    <ul className="space-y-3 text-sm sm:text-base md:text-lg">
      <li className="flex gap-3 items-center justify-center"><FaArrowRight /> iOS</li>
      <li className="flex gap-3 items-center justify-center"><FaArrowRight /> Android</li>
      <li className="flex gap-3 items-center justify-center"><FaArrowRight /> Hybrid Platform</li>
    </ul>
  </div>

  {/* Branding Services Card */}
  <div className="border border-gray-800 w-full md:w-[45%] lg:w-1/4 p-6 rounded-lg md:h-[70vh] shadow-sm flex flex-col items-center text-center">
    <img
      src="/Images/Mobile-Platforms.svg"
      className="w-24 sm:w-32 md:w-36 mb-6"
      alt="branding-img"
    />
    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">Branding Services</h2>
    <ul className="space-y-3 text-sm sm:text-base md:text-lg">
      <li className="flex gap-3 items-center justify-center"><FaArrowRight /> Logo Design</li>
      <li className="flex gap-3 items-center justify-center"><FaArrowRight /> UI/UX Design</li>
      <li className="flex gap-3 items-center justify-center"><FaArrowRight /> Visual Design</li>
    </ul>
  </div>

  {/* Digital Marketing Card */}
  <div className="border border-gray-800 md:mt-12 w-full md:w-[45%] lg:w-1/4 p-6 md:h-[70vh] rounded-lg shadow-sm flex flex-col items-center text-center">
    <img
      src="/Images/Process-Automation.svg"
      className="w-24 sm:w-32 md:w-36 mb-6"
      alt="digital-img"
    />
    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">Digital Marketing</h2>
    <ul className="space-y-3 text-sm sm:text-base md:text-lg">
      <li className="flex gap-3 items-center justify-center"><FaArrowRight /> Marketing Strategy</li>
      <li className="flex gap-3 items-center justify-center"><FaArrowRight /> Paid Media</li>
      <li className="flex gap-3 items-center justify-center"><FaArrowRight /> Influencer Marketing</li>
    </ul>
  </div></div>
{/* </div> */}

        </motion.div>
      </div>
      <div className="md:flex gap-6 py-20 px-34 bg-[#020307]">
        <img
          src="https://themes.potenzaglobalsolutions.com/html/it-infinite/images/about/about-04.jpg"
          className=""
          alt=""
        />
     <div className="w-full px-4 sm:px-6 md:px-12">
  <div className="text-accent flex text-xl md:text-2xl py-2 items-center gap-2">
    <GiTwirlyFlower /> About Us
  </div>

  <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold">
    Our Clients Deliver Marvelous Outcomes
  </h1>

  <p className="py-4 md:py-8 text-sm sm:text-base md:px-6">
    We collaborate closely with our clients to transform ideas into exceptional results. Their success is a reflection of our shared dedication and vision.
  </p>

  <p className="text-sm md:text-base md:px-6">
    Project success percentage rate
  </p>

  {/* Progress Bar and Percentage */}
  <div className="flex flex-col md:flex-row items-center py-4 gap-4">
    <motion.div
      initial={{ width: 0, y: 40 }}
      animate={{ width: 400, y: 0 }}
      transition={{ duration: 3 }}
      className="w-full md:w-[400px] h-2 bg-accent rounded"
    ></motion.div>
    <p className="text-3xl md:text-5xl font-semibold">{percentage}%</p>
  </div>

  {/* Rating Box */}
  <div className="w-full border border-gray-700 rounded py-4 px-6 mt-6 flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center">
    <p className="text-xl sm:text-2xl font-bold">5</p>
    <FaStar className="text-yellow-300 text-xl sm:text-2xl" />
    <p className="text-base sm:text-xl font-bold">
      Rated 4.80 out of 5 based on over
    </p>
    <span className="text-base sm:text-xl font-bold text-accent">
      1000+ reviews
    </span>
  </div>

  {/* Lists */}
  <div className="flex flex-col md:flex-row justify-between gap-6 mt-8 px-0 md:px-12">
    <ul className="space-y-2">
      <li className="flex items-center gap-2"><FaArrowRight /> Front End</li>
      <li className="flex items-center gap-2"><FaArrowRight /> React JS</li>
      <li className="flex items-center gap-2"><FaArrowRight /> Next JS</li>
    </ul>

    <ul className="space-y-2">
      <li className="flex items-center gap-2"><FaArrowRight /> Node JS</li>
      <li className="flex items-center gap-2"><FaArrowRight /> Express JS</li>
      <li className="flex items-center gap-2"><FaArrowRight /> MongoDB</li>
    </ul>

    <ul>
      <li className="flex items-center gap-2">
        <img
          src="https://themes.potenzaglobalsolutions.com/html/it-infinite/images/about/about-05.png"
          alt="about-img"
          className="w-28 sm:w-40 md:w-52"
        />
      </li>
    </ul>
  </div>
</div>
</div>
      <div className="border-1 border-gray-700">
        <div className="w-full relative overflow-x-auto border-1 border-gray-400 top-2"></div>
        <ul className="flex  ">
          {midNav.map((item, index) => (
            <motion.li
              key={index}
              animate={{ x: [200, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-gray-600 hover:text-white text-6xl w-1/4"
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WhatWeDo;
