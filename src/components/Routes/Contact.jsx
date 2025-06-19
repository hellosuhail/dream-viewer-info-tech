import React from "react";
import { motion } from "framer-motion";
import { IoLocationOutline } from "react-icons/io5";
import { GiTwirlyFlower } from "react-icons/gi";
import { PiPhoneCallDuotone } from "react-icons/pi";
import { MdMailOutline } from "react-icons/md";

const cardData = [
  {
    name: "Dreamviewer InfoTech",
    location: "Address - Noida sector-16, A Block",
    num: "01204343839",
    email: "letstalk@worthy.com",
  },
  {
    name: "Frankfurt",
    location: "214 West Arnold St. New York, NY 10002",
    num: "+(123) 456-7890",
    email: "letstalk@worthy.com",
  },
 
];

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Background Image */}
      <div className="relative">
        <div className="bg-[url(/Images/aboutbgImg.jpg)] w-full h-[70vh] bg-cover bg-no-repeat opacity-20" />
        <div className="absolute top-[25%] left-6 sm:left-[10%]">
          <h1 className="text-3xl sm:text-5xl mb-2 sm:mb-4 text-black">Contact us</h1>
          <p className="text-black text-sm sm:text-base">Let success motivate you.</p>
        </div>
      </div>

      {/* Info + Cards */}
      <div className="flex flex-col lg:flex-row px-4 sm:px-10 lg:px-18 py-12 gap-10">
        {/* Left */}
        <div className="w-full lg:w-1/2">
          <div className="flex gap-2 items-center text-xl sm:text-2xl text-accent mb-4">
            <GiTwirlyFlower />
            Our Direction
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6">
            Get in touch with us. We love talking about digital strategy
          </h1>
          <p className="px-0 sm:px-6 lg:px-12 py-4 sm:py-12 text-gray-400 text-sm sm:text-base">
            So, make the decision to move forward. Commit your decision to paper, just to bring it into focus. Then, go for it!
          </p>
        </div>

        {/* Cards */}
        <div className="w-full lg:w-1/2 flex flex-wrap gap-4 sm:gap-6 overflow-y-auto max-h-[70vh] p-2 sm:p-6">
          {cardData.map((data, index) => (
            <div
              key={index}
              className="shadow-lg border border-gray-200 rounded-xl p-4 sm:p-6 w-full sm:w-[45%] flex flex-col items-start"
            >
              <img
                src="/Images/contactImg.png"
                alt="Office"
                className="w-full h-32 sm:h-40 object-cover rounded-md mb-3 sm:mb-4"
              />
              <h1 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{data.name}</h1>

              <div className="flex items-start gap-2 sm:gap-3 mb-2 text-xs sm:text-sm">
                <IoLocationOutline className="text-xl sm:text-2xl text-blue-600" />
                <span>{data.location}</span>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 mb-2 text-xs sm:text-sm">
                <PiPhoneCallDuotone className="text-lg sm:text-xl text-green-600" />
                <span>{data.num}</span>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                <MdMailOutline className="text-lg sm:text-xl" />
                <span>{data.email}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-[#010205] py-12 px-4 sm:px-10">
        <div className="flex gap-2 justify-center items-center text-lg sm:text-2xl text-accent">
          <GiTwirlyFlower />
          CONTACT US
        </div>
        <p className="text-2xl sm:text-4xl lg:text-6xl font-extrabold text-center py-6 text-white">
          Need assistance? please fill the form
        </p>

        <form action="submit" className="w-full max-w-screen-xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-7 px-0 sm:px-10 py-4 sm:py-12">
            <input
              type="text"
              placeholder="Name"
              className="input w-full bg-transparent border border-gray-700 text-white h-12 sm:h-14 px-4"
            />
            <input
              type="email"
              placeholder="Email"
              className="input w-full bg-transparent border border-gray-700 text-white h-12 sm:h-14 px-4"
            />
            <input
              type="text"
              placeholder="Subject"
              className="input w-full bg-transparent border border-gray-700 text-white h-12 sm:h-14 px-4"
            />
          </div>

          <div className="flex justify-center px-0 sm:px-10">
            <textarea
              placeholder="Message"
              className="textarea bg-transparent border border-gray-700 w-full text-white h-40 sm:h-48 p-4"
            ></textarea>
          </div>
          <div className="p-4 md:px-50  w-full">
          <button className="btn btn-accent w-full text-xl">Submit</button></div>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
