import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowDown, FaArrowRight } from "react-icons/fa6";
import { GiTwirlyFlower } from "react-icons/gi";
import OurTest from "../OurTest";

const midNav = [
  "IOS DEVELOPER",
  "Ui/Ux Design",
  "web Design",
  "Backend Development",
];

const cardData = [
  {
    year: "2012",
    textOne:
      " It began with a spark—a vision to create something meaningful through technology. We didn’t have all the answers, but we had purpose. Taking the first step meant stepping into the unknown with determination and faith.",
    texttwo:
      "The first leap was never easy, but it was necessary.",
    textthree:
      "The best way is to develop and follow a plan. Start with your goals in mind and then work backwards to develop the plan. What steps are required to get you to the goals? Make the plan as detailed as possible. Try to visualize and then plan for, every possible setback.",
  },

  {
    year: "2018",
    textOne:
      "We expanded our team and our vision. Clients became partners. Projects became milestones. The foundation we built was no longer a startup story—it was a movement powered by collaboration and trust.",
    texttwo:
      "  What we created started to shape the way others create.",
    textthree:
      "The best way is to develop and follow a plan. Start with your goals in mind and then work backwards to develop the plan. What steps are required to get you to the goals? Make the plan as detailed as possible. Try to visualize and then plan for, every possible setback.",
  },
  {
    year: "2022",
    textOne:
      "They often mean leaving the perception of security in order to discover your personal freedom. These are the changes that will bring happiness and satisfaction into your life. Just go there now.",
    texttwo:
      "10 years ahead, shaped by a decade of change and growth. Imagine living the life you want to live.",
    textthree:
      "TThe best approach is to create a clear plan. Begin with your goal and build the steps backward to reach it. What steps are required to get you to the goals? Make the plan as detailed as possible. Imagine each challenge in advance, then prepare a plan to handle it.",
  },
];

const staffData = [
  {
    img: "/Images/AvinashSir.png",
    name: " Avinash ",
    position: "CEO & Founder",
    profile: ["NO", "VAR", "EA", "CH"],
  },
  {
    img: "/Images/BadalBhati.jpeg",
    name: "Badal Bhati",
    position: "Co-Founder",
    profile: ["ED", "U", "HI", "VE"],
  },
  {
    img: "/Images/Jishan1.png",
    name: "Jishan ",
    position: " Senior Developer",
    profile: ["ME", "DC", "OR", "E"],
  },
  {
    img: "/Images/Mam.png",
    name: "Sanya Sharma  ",
    position: "Business Development Manager",
    profile: ["GR", "EEN", "NE", "ST"],
  },
];
const AboutUs = () => {
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


  const goToAbout=()=>{
    window.scrollTo({top:430, behavior:"smooth"})
  }

  const baseX = 150;
  const baseY = 400;

  const offsetX = isHovered ? (mousePosition.x - baseX) / 10 : 0;
  const offsetY = isHovered ? (mousePosition.y - baseY) / 10 : 0;

  return (
    <motion.div
              initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
      <div className="bg-[url(/Images/aboutbgImg.jpg)] w-full h-[70vh] bg-cover bg-no-repeat opacity-20 ">
        {" "}
      </div>
      <div className=" absolute md:top-60 top-30 right-20 md:left-120">
        <h1 className="md:text-5xl text-3xl mb-4">About ITinfinite</h1>
        <p>Our Expertise. Know more about what we do</p>
      </div>
 <motion.div
 onClick={goToAbout}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                animate={{ x: baseX + offsetX, y: baseY + offsetY }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="w-52 h-52 rounded-full cursor-pointer border hover:border-accent hover:text-accent border-white absolute pointer-events-auto md:left-90 right-70 top-0 md:top-180 z-50 flex items-center justify-center  shadow-lg"
                // style={{ left: 320, top: 700 }}
              >
                <data className="absolute border-1 border-white hover:border-accent left-1 top-1 w-full h-52 rounded-full"></data>
                <span className="text-lg font-semibold items-center flex  flex-col  ">
                  About Us
                  <FaArrowDown />
                </span>
              </motion.div>
      <div className="md:p-28 px-4 md:flex">
        <div className="">
          <div className="flex text-xl text-accent gap-4 py-2 px-2 items-center">
            <GiTwirlyFlower />
            ABOUT US
          </div>
          <h1 className="md:text-6xl text-3xl">Your experience is everything to us</h1>
          <div className="m-12 flex gap-8 ">
            <div className="md:w-1/2">
              <img src="/Images/about-03.jpg" alt="" className="hidden md:flex h-60" />
            </div>
            <div className="md:w-100">
              <p className="text-lg">
              At Dreamviewer Infotech, we believe in creating digital solutions that not only meet expectations but exceed them. From innovative web development to cutting-edge software design, our mission is to deliver seamless experiences that empower your business to grow and thrive. We combine technology, creativity, and strategy to bring your vision to life—because your success is our success.

              </p>
             
            </div>
          </div>
          <div className="mt-28">
            <div className="flex items-center gap-4">
              <p className="text-6xl font-semibold">{percentage}+</p>
              <div className="">
                {" "}
                <p className="text-xl block">Customer </p>
                <span> Satisfaction</span>
              </div>
            </div>
            <div className="w-60 h-1 bg-white relative overflow-hidden rounded">
              <span
                className={`absolute top-0 left-0 h-full bg-accent transition-all duration-[2000ms] ease-out`}
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
        </div>
        <div className=" md:w-1/2">
          <img
            src="/Images/coding.avif"
            alt=""
            className="w-full h-[90vh] rounded opacity-70"
          />
        </div>
      </div>

      <div className="w-full relative mb-8 border-l-0 overflow-hidden border-1 border-gray-400 top-2">
        <ul className="md:flex  ">
          {midNav.map((item, index) => (
            <motion.li
              key={index}
              animate={{ x: [200, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-gray-600 hover:text-white text-4xl w-1/4"
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="md:flex md:px-18 py-12 ">
        <div className="md:w-1/2">
          <div className="flex gap-2 items-center text-2xl text-accent">
            <GiTwirlyFlower /> Our History
          </div>
          <h1 className="md:text-6xl txt-3xl  font-bold ">Our History</h1>
          <p className="px-12 py-12 text-gray-400">
            From the beginning, our journey has been driven by purpose not fear. We believe that positive, pleasure-oriented goals create lasting impact. Combined with the awareness of real-world challenges, this balanced mindset has fueled our growth and shaped the success stories we’ve built with our clients.

          </p>

          <div className="md:mt-58"></div>
        </div>
        <div className="md:flex flex-col overflow-y-auto md:w-1/2 md:px-12 pr-12 w-full  overflow-x-hidden h-[70vh] justify-start">
          {cardData.map((data, index) => (
            <div
              key={index}
              className="border-1 m-6 border-gray-700 rounded-lg px-12 py-12 w-full"
            >
              <p className="text-accent text-2xl px-6 py-6"> {data.year} </p>
              <p className="text-lg">{data.textOne}</p>
              <p className="border-l-4 border-accent px-4 mt-6 text-lg">
                {data.texttwo}
              </p>

              <p className="mt-6 text-lg">{data.textthree}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="px-28 py-20">
        <div className="flex gap-2 text-2xl text-accent items-center">
          <GiTwirlyFlower />
          Our Staff
        </div>
        <div className="md:flex">
          <h1 className="md:w-1/2 md:text-6xl text-3xl font-bold">
            Our team is friendly, talkative, and fully reliable.
          </h1>
          <div className="md:w-1/2 md:px-18 pt-18 text-lg">
            <p>
             Our team is friendly, talkative, and fully reliable. We believe in building trust through real conversations and consistent results.

            </p>
            <p className="py-4">So, make the decision to move forward.</p>
          </div>
        </div>
        <div className="card">
          <div className="md:flex md:gap-10 md:mt-6">
            {staffData.map((data, index) => (
              <div key={index} className="">
                <div className="w-64 h-[46vh] relative group mt-10 md:mt-0 cursor-pointer overflow-hidden rounded-xl shadow-2xl transform transition-transform duration-300 hover:scale-105">
                  <img
                    src={data.img}
                    alt={data.name}
                    className="w-full h-full bg-white object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />

            

                  <div className="absolute inset-0 bg-gradient-to-t from-accent via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                    <p className="text-white text-lg font-semibold drop-shadow-md"></p>
                  </div>
                </div>
                <h1 className="m-6 mb-1 font-bold text-2xl">{data.name}</h1>
                <p className="text-lg ml-6 ">{data.position}</p>

                <div className="mt-6 md:flex gap-4">
                  {/* {data.profile.map((pro, index) => (
                    <div
                      key={index}
                      className="rounded-full flex items-center justify-center border-1 w-10 h-8 border-gray-700"
                    >
                      <div className="rounded-full border-1 w-10 h-8 relative top-1 left-1 border-gray-700">
                        {pro}
                      </div>
                    </div>
                  ))} */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
        <OurTest/>
      
    </motion.div>
  );
};

export default AboutUs;
