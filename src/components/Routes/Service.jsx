import React from "react";
import {motion} from 'framer-motion'
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
    <div>
      <div className="py-8 sm:py-16">
        <div className="bg-[url(/Images/aboutbgImg.jpg)] w-full h-[40vh] sm:h-[70vh] bg-cover bg-no-repeat opacity-20" />
        <div className="absolute top-16 sm:top-70 left-4 sm:left-120">
          <h1 className="text-3xl sm:text-5xl mb-2 sm:mb-4">Service Detail</h1>
          <p className="text-sm sm:text-lg">
            The best way is to develop and follow a plan.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row px-4 sm:px-20 py-6 sm:py-12 gap-6">
          {/* Sidebar */}
          <div className="w-full sm:w-[30%]">
            <div className="border border-gray-700 rounded-lg p-6 sm:p-8">
              <h1 className="text-xl sm:text-2xl font-bold">Categories</h1>
              {listData.map((data, index) => (
                <ul key={index}>
                  <li className="mt-4 sm:m-6 border-b py-2 sm:py-4 hover:text-accent cursor-pointer border-gray-700 hover:border-accent">
                    {data}
                  </li>
                </ul>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full sm:w-[70%] overflow-x-hidden max-h-[70vh] overflow-y-auto pl-0 sm:pl-12">
            <div>
              <img
                src="/Images/service.jpg"
                alt=""
                className="w-full rounded-lg opacity-70"
              />
              <div className="px-2 sm:px-10">
                <p className="mt-4 sm:mt-6 mb-2 sm:mb-4 text-xl sm:text-2xl">
                  Advanced Analytics
                </p>
                <p className="text-base sm:text-lg py-2 sm:py-4">
                  Success is a step-by-step process, not luck, chance, or magic.
                  It’s about understanding the steps, then executing them with
                  clarity and purpose. Advanced analytics empowers that process
                  by turning raw data into strategic insight, helping you move
                  forward with precision and confidence.
                </p>
                <p className="text-base sm:text-lg py-2 sm:py-4">
                  One of the key steps we guide our clients through is letting
                  go of limiting beliefs and embracing data-driven decisions
                  that support their goals and ambitions.
                </p>
                <p className="py-4">
                  Whether you're just starting or scaling fast:
                </p>
                <ul className="flex flex-wrap justify-between gap-2 sm:gap-4 text-base sm:text-lg">
                  {/* {Array(4).fill( */}
                  <li className="flex items-center gap-2">
                    <FaArrowRight />
                    You’re ready for more—and you deserve it
                  </li>
                  <li className="flex items-center gap-2">
                    <FaArrowRight />
                    This is the beginning of building the life and business you
                    truly want.
                  </li>
                  <li className="flex items-center gap-2">
                    <FaArrowRight />
                    Success is universal, and analytics helps bring it within
                    reach.
                  </li>
                  <li className="flex items-center gap-2">
                    <FaArrowRight />
                    It all starts with insight, clarity, and measurable action.
                  </li>
                  {/* )} */}
                </ul>

                <div className="border-l-4 border-accent m-4 px-4 sm:px-6 text-base sm:text-lg">
                  <p>
                    There are six core areas that drive high achievement. Some
                    say four, others say eight—but what matters is knowing your
                    key metrics and aligning every decision with your highest
                    goals.
                  </p>
                  <p className="text-lg sm:text-xl mt-2 sm:mt-4 mb-2 sm:mb-4">
                    At Dreamviewer Infotech, we help you measure what matters and act on what counts.
                  </p>
                </div>

                <h1 className="text-2xl sm:text-3xl px-4 sm:px-8 font-semibold">
                  We do things differently
                </h1>
                <p className="text-base sm:text-lg py-4">
                 We follow core values such as sincerity, determination, and humility in everything we do. Inspired by Franklin’s pursuit of personal growth through intention and discipline, we focus on creating purposeful and impactful solutions for software development and IT services.
                </p>
                <p className="py-4 px-4"> We do not follow trends. We build with meaning and stand by what matters most.
</p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <img
                    src="/Images/service2.jpg"
                    alt="img"
                    className="w-full sm:w-2/5 rounded-lg"
                  />
                  <ul className="w-full">
                   
                      <li className="flex text-lg gap-4 py-2">
                        <FaArrowRight />
                        Making the decision
                      </li>
                       <li className="flex text-lg gap-4 py-2">
                        <FaArrowRight />
                      Clarity developing the vision
                      </li>
                       <li className="flex text-lg gap-4 py-2">
                        <FaArrowRight />
                       Focus having a plan

                      </li>
                       <li className="flex text-lg gap-4 py-2">
                        <FaArrowRight />
                      From my perspective then
                      </li>
                       <li className="flex text-lg gap-4 py-2">
                        <FaArrowRight />
                        Just to bring it into focus
                      </li>
                    
                  </ul>
                </div>

                <div className="flex items-center text-accent text-xl sm:text-2xl py-6 px-2 sm:px-4 gap-2">
                  <GiTwirlyFlower /> FAQ
                </div>

                <h1 className="text-xl sm:text-3xl font-bold px-2 sm:px-0">
                  Frequently Asked Questions
                </h1>
                <p className="px-6 py-4 ">1. What services does Dreamviewer Infotech provide?
</p>
<p className="px-6 py-4 "> We offer a range of digital services including web and mobile development, data analytics, cloud solutions, content management, and IT consulting.  Our aim is to provide smart, customized solutions that fit your business requirements.
</p>
  <p className="px-6 py-4 ">2. How do I start a project with your team?

</p>
<p className="px-6 py-4 ">  You can easily reach us through our website or by sending an email. We will schedule a discovery call to understand your goals, then provide a customized plan and timeline based on your requirements.

</p>
  <p className="px-6 py-4 ">3. What industries do you work with?

</p>
<p className="px-6 py-4 ">  We work with clients across various sectors including healthcare, education, retail, finance, logistics, and technology. Our solutions are flexible and suitable for both startups and large businesses.

</p>
  <p className="px-6 py-4 ">4. Do you offer post-launch support and maintenance?

</p>
<p className="px-6 py-4 "> 
 Yes. We provide ongoing support, maintenance, and performance monitoring to ensure your solution stays up-to-date and secure.

</p>
  <p className="px-6 py-4 ">5.How long does it usually take to finish a project?

</p>
<p className="px-6 py-4 "> The time needed depends on how complex and large the project. Simple projects may take a few weeks, while larger ones may require several months. A basic website may take a few weeks, while larger platforms can span several months. We provide clear timelines before starting


</p>
              </div>
            </div>
          </div>
        </div>


        {/*services*/}

         <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="md:flex w-full pt-10 mb-0 pb-0 "
        >{/* <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-8 mt-12 px-4"> */}
        <div className=" w-full md:flex md:h-screen">
         <div className="border border-gray-800 mb-0 pb-0  w-full md:w-1/4 p-4 md:p-6 h-auto md:h-[70vh] flex flex-col items-center text-center rounded-lg shadow-sm">
  <img
    src="/Images/Information-Security.svg"
    className="w-24 sm:w-32 md:w-40 "
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
  <div className="border border-gray-800 w-full md:w-[45%] md:mt-12 lg:w-1/4 p-6 pb-0 rounded-lg shadow-sm md:h-[70vh] flex flex-col items-center text-center">
    <img
      src="/Images/Data-Synchronization.svg"
      className="w-24 sm:w-32 md:w-36 "
      alt="mobile-img"
    />
    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold ">Mobile Development</h2>
    <ul className="space-y-3 text-sm sm:text-base md:text-lg">
      <li className="flex gap-3 items-center justify-center"><FaArrowRight /> iOS</li>
      <li className="flex gap-3 items-center justify-center"><FaArrowRight /> Android</li>
      <li className="flex gap-3 items-center justify-center"><FaArrowRight /> Hybrid Platform</li>
    </ul>
  </div>

  {/* Branding Services Card */}
  <div className="border border-gray-800 w-full md:w-[45%] lg:w-1/4 p-6 pb-0 rounded-lg md:h-[70vh] shadow-sm flex flex-col items-center text-center">
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
  <div className="border border-gray-800 md:mt-12 w-full md:w-[45%] lg:w-1/4 p-6 pb-0 md:h-[70vh] rounded-lg shadow-sm flex flex-col items-center text-center">
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
<div className="md:flex justify-center ">
   <div className="border border-gray-800 w-full mt-12 md:w-1/4 p-4 md:p-6 h-auto md:h-[70vh] flex flex-col items-center text-center rounded-lg shadow-sm">
  <img
    src="/Images/Information-Security.svg"
    className="w-24 sm:w-32 md:w-40 "
    alt="information-img"
  />

  <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
    Block Chain development
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
 <div className="border border-gray-800 w-full md:w-1/4 p-4 md:p-6 h-auto md:h-[70vh] flex flex-col items-center text-center rounded-lg shadow-sm">
  <img
    src="/Images/Information-Security.svg"
    className="w-24 sm:w-32 md:w-40 mb-6"
    alt="information-img"
  />

  <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
  ERP Support System
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
</div>
        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row px-4 sm:px-20 gap-6">
          {/* Contact Info Box */}
          <div className="border border-gray-700 p-6 sm:p-8 rounded-lg mt-4 sm:mt-6 w-full sm:w-1/2">
            <h1 className="text-xl sm:text-3xl font-extrabold">
              For those of you who are serious about having more.
            </h1>
          <div className=" flex-col sm:flex-row gap-4 sm:gap-8 items-start sm:items-center pt-6 sm:pt-12 font-bold text-sm sm:text-2xl text-white">
  <div className="flex items-center gap-2">
    <MdOutlinePhoneInTalk className="text-accent text-xl sm:text-3xl" />
    <span>01204343839</span>
  </div>
  <div className="flex items-center gap-2">
    <MdOutlinePhoneInTalk className="text-accent text-xl sm:text-3xl" />
    <span>+91 9667169498</span>
  </div>
  <div className="flex items-center gap-2">
    <MdOutlinePhoneInTalk className="text-accent text-xl sm:text-3xl" />
    <span>+91 9142050882
</span>
  </div>
</div>

            <p className="flex gap-4 items-center py-4 font-bold text-lg sm:text-2xl">
              <FiMail />infotechdreamviewer@gmail.com
            </p>
          </div>

          <div className="bg-gradient-to-r from-sky-800 to-accent p-6 sm:px-12 sm:py-8 text-lg sm:text-2xl flex justify-between items-center w-full sm:w-1/2 rounded-lg">
            01. It turned out to be the Hope Diamond?
            <div className="border border-white rounded-full h-10 w-10 flex justify-center items-center ml-4">
              <RiSubtractFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
