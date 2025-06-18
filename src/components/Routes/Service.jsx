import React from "react";
import { GiTwirlyFlower } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa6";
import { RiSubtractFill } from "react-icons/ri";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FiMail } from "react-icons/fi";

const listData = [
  "Automotive",
  "Utilities",
  "Education",
  "Publishing",
  "Healtcare",
];

const Service = () => {
  return (
    <div className="">
      <div className="py-16">
        <div className="bg-[url(/Images/aboutbgImg.jpg)] w-full h-[70vh] bg-cover bg-no-repeat opacity-20 ">
          {" "}
        </div>
        <div className=" absolute top-70 left-120">
          <h1 className="text-5xl mb-4">Service Detail</h1>
          <p>The best way is to develop and follow a plan.</p>
        </div>

        <div className="flex px-20 py-12 ">
          <div className="w-[30%]">
            <div className="border-1 border-gray-700 rounded-lg p-8">
              <h1 className="text-2xl font-bold">Categories</h1>
              {listData.map((data, index) => (
                <ul key={index}>
                  <li className="m-6 border-b-1 py-4 hover:text-accent cursor-pointer border-gray-700 hover:border-accent">
                    {data}
                  </li>
                </ul>
              ))}
            </div>
          </div>
          <div className="md:flex flex-col overflow-y-auto  pl-12 w-[70%] overflow-x-hidden h-[70vh] justify-start">
            <div className="w-full">
              <img
                src="/Images/service.jpg"
                alt=""
                className="w-[100%] rounded-lg  opacity-70 "
              />
              <div className="px-10">
                <p className="mt-6 mb-4 text-2xl">Advanced Analytics</p>
                <p className="text-lg py-4">
                  The first thing to remember about success is that it is a
                  process – nothing more, nothing less. There is really no magic
                  to it and it’s not reserved only for a select few people. As
                  such, success really has nothing to do with luck, coincidence
                  or fate. It really comes down to understanding the steps in
                  the process and then executing on those steps.
                </p>
                <p className="text-lg py-4">
                  One of the main areas that I work on with my clients is
                  shedding these non-supportive beliefs and replacing them with
                  beliefs that will help them to accomplish their desires.
                </p>

                <ul className="flex flex-wrap justify-between w-full">
                  <li>
                    {" "}
                    <FaArrowRight />
                    For those of you who are serious about having more.{" "}
                  </li>
                  <li>
                    {" "}
                    <FaArrowRight />
                    For those of you who are serious about having more.{" "}
                  </li>
                  <li>
                    {" "}
                    <FaArrowRight />
                    For those of you who are serious about having more.{" "}
                  </li>
                  <li>
                    {" "}
                    <FaArrowRight />
                    For those of you who are serious about having more.{" "}
                  </li>
                </ul>
                <div className="border-l-4 border-accent m-4 px-6 text-lg">
                  <p>
                    There are basically six key areas to higher achievement.
                    Some people will tell you there are four while others may
                    tell you there are eight.
                  </p>
                  <p className="text-xl mt-4 mb-4">- InVisionApp Inc</p>
                </div>
                <h1 className="text-3xl px-8">We do things differently</h1>
                <p className="text-lg py-4">
                  The other virtues practice in succession by Franklin were
                  silence, order, resolution, frugality, industry, sincerity,
                  Justice, moderation, cleanliness, tranquility, chastity and
                  humility.
                </p>

                <div className="flex">
                  <img src="/Images/service2.jpg" alt="img" className="w-70" />
                  <ul>
                    <li className="flex text-xl gap-4 py-4 ">
                      <FaArrowRight />
                      Making the decision
                    </li>
                    <li className="flex text-xl gap-4 py-4 ">
                      <FaArrowRight />
                      Making the decision
                    </li>
                    <li className="flex text-xl gap-4 py-4 ">
                      <FaArrowRight />
                      Making the decision
                    </li>
                    <li className="flex text-xl gap-4 py-4 ">
                      <FaArrowRight />
                      Making the decision
                    </li>
                  </ul>
                </div>

                <div className="flex items-center text-accent text-2xl py-4 px-4 gap-2">
                  <GiTwirlyFlower /> FAQ
                </div>

                <h1 className="text-3xl font-bold">
                  Frequently Asked Questions
                </h1>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="border-1 m4 border-gray-700 p-8 rounded-lg mt-6 ml-24">
            <h1 className="text-3xl font-extrabold w-90">For those of you who are serious about having more.</h1>
            <p className="flex gap-4 items-center pt-12 font-bold text-2xl"><MdOutlinePhoneInTalk/> +(123) 456-7890</p>
            <p className="flex gap-4 items-center py-4 font-bold text-2xl"><FiMail/> letstalk@worthy.com</p>
        </div>
        <div className=""><div className="px-12 py-8 bg-gradient-to-r from-sky-800 to-accent m-4 text-2xl flex justify-between">
                  01. It turned out to be the Hope Diamond?
                  <div className="border-1 w-10 border-white rounded-full h-10 flex justify-center items-center">
                    <RiSubtractFill />
                  </div>
                </div></div>
      </div>
    </div>
  );
};

export default Service;
