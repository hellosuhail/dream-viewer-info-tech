import React from "react";
import { motion } from "framer-motion";
import { GiTwirlyFlower } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa6";

const listData = [
  { title: "Client", dis: "Developer" },
  { title: "Categories", dis: "It agency" },
  { title: "Budgets", dis: "$156.110" },
  { title: "Location", dis: "New jersey, USA" },
  { title: "Project Url", dis: "http://www.example.com" },
];

const CaseStudiesSingle = () => {
  return (
    <motion.div
      className="py-12 sm:py-20"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="relative">
        <div className="bg-[url(/Images/aboutbgImg.jpg)] w-full h-[40vh] sm:h-[70vh] bg-cover bg-no-repeat opacity-20" />
        <div className="absolute md:top-40 top-30 left-4 md:left-110">
          <h1 className="text-3xl sm:text-5xl mb-2 sm:mb-4">Case Study Single</h1>
          <p className="text-base sm:text-lg">Trying to go through life</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row">
        <div className="px-4 sm:px-28 py-8 sm:py-18">
          <div className="flex gap-2 items-center text-xl sm:text-2xl text-accent mb-4">
            <GiTwirlyFlower />
            Our Direction
          </div>
          <h1 className="text-4xl sm:text-6xl py-2 sm:py-4 font-extrabold">Overview</h1>
          <img src="/Images/caseStudy.png" alt="" className="px-0 sm:px-12 py-4 sm:py-10 max-w-full" />
        </div>

        <div className="px-4 sm:px-18 py-8 sm:py-0">
          <p className="text-base sm:text-lg pt-4 sm:pt-28">
          At Dreamviewer Infotech, we specialize in delivering tailored digital solutions that solve real business challenges. Our work is driven by innovation, guided by strategy, and backed by a deep understanding of technology and user needs. From concept to execution, we focus on creating impactful experiences that help our clients grow, adapt, and lead in their industries.

          </p>
        
        </div>
      </div>

      <div className="w-full">
        <img src="/Images/07.jpg" alt="" className="w-full object-cover" />
      </div>

      <div className="flex flex-wrap sm:flex-nowrap justify-between px-4 sm:px-28 py-8 sm:py-10 border-t border-b border-gray-700">
        {listData.map((data, index) => (
          <ul key={index} className="flex flex-col sm:flex-wrap items-start mb-4 sm:mb-0">
            <li>
              <p className="text-xl sm:text-2xl font-bold">{data.title}</p>
              <p className="text-base sm:text-lg">{data.dis}</p>
            </li>
          </ul>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row px-4 sm:px-18 py-8 sm:py-12 gap-8">
        <div className="w-full sm:w-1/2 py-8 sm:py-28">
          <div className="flex gap-2 items-center text-xl sm:text-2xl text-accent mb-4">
            <GiTwirlyFlower />
            Case Study
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold">Challenge</h1>
          <p className="text-base sm:text-lg  pt-2">Every business faces obstacles on the path to growth. Whether it's outdated systems, scattered data, or a lack of digital direction, these challenges can slow progress and reduce efficiency.
</p>
 <p className="text-base sm:text-lg  pt-4">At Dreamviewer Infotech, we turn challenges into opportunities. Our expert team analyzes your pain points, understands your goals, and delivers tailored solutions that help you move forward with confidence.

</p>
<p className="text-base sm:text-lg px-4 pt-4">We don't avoid challenges — we solve them.

        
</p>
        </div>

        <div className="w-full sm:w-1/2 flex flex-col gap-4 overflow-y-auto max-h-[70vh] p-4 pt-0 sm:p-6">
          {/** Wrap all paragraphs into array, simplified */}
          {[/* array of p contents */].map((text, idx) => (
            <p key={idx} className="text-base sm:text-lg">
              {text}
            </p>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row px-4  py-0  gap-8">
        <img src="/Images/01.jpg" alt="img" className="w-full sm:w-1/2 rounded-lg" />
        <img src="/Images/02.jpg" alt="img" className="w-full sm:w-1/2 rounded-lg" />
      </div>

      <div className="px-4 sm:px-28 py-8 ">
        <p className="text-4xl sm:text-6xl font-extrabold">Solution</p>
        <p className="py-2 sm:py-6 text-base sm:text-lg">We don’t just deliver services — we build smart, scalable solutions designed around your goals.
</p>
     <p className="  text-base sm:text-lg">At Dreamviewer Infotech, our approach begins with understanding your challenges and ends with custom-built systems that work for you. Whether it's web development, mobile apps, data analytics, or automation, our solutions are crafted to improve performance, reduce complexity, and help your business grow.

</p>
<p className="  text-base sm:text-lg pl-6 pt-6 font-bold">Your problem. Our solution. </p>
      </div>

      <div className="px-4 sm:px-28 py-8 ">
        <p className="text-4xl sm:text-6xl font-extrabold">Results</p>
        <p className="py-4 sm:py-12 text-base sm:text-lg">The outcome was a measurable improvement in performance, user satisfaction, and business growth. The user experience was enhanced through responsive, modern design, leading to better engagement and satisfaction. Client platforms saw increased customer interaction, stronger retention, and measurable growth. Revenue performance improved through smarter, faster decision-making, and the systems we built supported increased scalability to prepare businesses for the future.
</p>
      </div>

      <div className="flex flex-col sm:flex-row px-4 sm:px-28 py-8 sm:py-12 gap-8 justify-between">
        <div className="text-center sm:text-left">
          <p className="text-2xl sm:text-5xl font-bold text-accent">81%</p>
          <p className="py-2 text-base sm:text-lg">A totally new way to grow your business</p>
        </div>
        <div className="text-center sm:text-left">
          <p className="text-2xl sm:text-5xl font-bold text-accent">Improved</p>
          <p className="py-2 w-90  text-sm">We improved system performance by optimizing backend operations and enhancing frontend responsiveness. Internal workflows became more efficient, reducing manual effort and increasing team productivity. User experience was also improved through cleaner design and faster navigation.
</p>
        </div>
        <div className="text-center sm:text-left">
          <p className="text-2xl sm:text-5xl font-bold text-accent">Increased</p>
          <p className="py-2 w-90  text-sm">We increased platform stability, allowing it to handle higher user volumes with ease. Engagement levels increased due to better content flow and interaction design. Business opportunities increased as the solution became scalable and adaptable to future needs.
</p>
        </div>
      </div>
    </motion.div>
  );
};

export default CaseStudiesSingle;
