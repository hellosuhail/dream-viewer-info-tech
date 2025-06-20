import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoCloseSharp } from 'react-icons/io5';
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
  
import { FaInstagram } from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";
import { FaDribbble } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';
import { MdOutlinePhoneInTalk } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full  bg-black/90 border-b border-gray-700">
        <nav className="flex items-center justify-between px-6 md:px-12 h-20">
   
          <img src="/Logo/Logo.png" className="w-28 cursor-pointer" alt="logo" />

          <ul className="hidden lg:flex gap-8 text-white font-medium">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/service">Service</NavLink></li>
            <li><NavLink to="/casestudies">Case Studies</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>

          
          <motion.button
            onClick={toggleSidebar}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="text-white z-[60] p-2 rounded-lg focus:outline-none"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isOpen ? 'close' : 'menu'}
                initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="block text-3xl cursor-pointer"
              >
                {isOpen ? <IoCloseSharp size={32} /> : <RiMenu3Line size={32} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </nav>
      </header>

    
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-80 sm:w-96 bg-gradient-to-b from-gray-900 to-blue-900 text-white z-50 overflow-y-auto"
            >
              <div className="px-6 py-10 space-y-6">
                <h2 className="text-2xl mt-12 font-bold">Scalable Business for Startups</h2>
                <p className="text-sm">At Dream Viewer Infotech, we help startups grow faster with smart, scalable solutions.
</p>
  <p className="text-sm"> From idea to execution, we turn your vision into reality—efficiently and effectively.
</p>
                <ul className="space-y-6 md:hidden border-t pt-6">
                  <li><NavLink to="/" onClick={toggleSidebar}>Home</NavLink></li>
                  <li><NavLink to="/about" onClick={toggleSidebar}>About Us</NavLink></li>
                  <li><NavLink to="/service" onClick={toggleSidebar}>Service Single</NavLink></li>
                  <li><NavLink to="/casestudies" onClick={toggleSidebar}>Case Studies</NavLink></li>
                  <li><NavLink to="/contact" onClick={toggleSidebar}>Contact</NavLink></li>
                </ul>

                <div className="pt-6 border-t space-y-4 text-sm">
                  <h3 className="text-lg font-semibold">Follow us</h3>
                  <ul className="space-y-2">
                    <li><a href="https://www.facebook.com/DreamViewerInfotech" target="_blank" className="flex gap-2 items-center"> <RiFacebookCircleLine/> Facebook</a></li>
                    <li><a href="https://www.instagram.com/dreamviewer.infrotech/" target="_blank" className="flex gap-2 items-center"><FaInstagram/>Instagram</a></li>
                
                    <li><a href="https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Aorganization%3A91001670&keywords=Dream%20Viewer%20Infotech&origin=ENTITY_SEARCH_HOME_HISTORY&sid=uJj" target="_blank" className="flex gap-2 items-center"><FaLinkedin/>Linked in</a></li>
                  </ul>
                </div>

                <div className="pt-6 border-t text-sm">
                  <h4 className="text-lg font-semibold">Contact</h4>
                   <div className=" flex-col sm:flex-row gap-4 sm:gap-8 items-start sm:items-center pt-6 sm:pt-12 font-bold text-sm sm:text-2xl text-white">
                    <div className="flex items-center gap-2">
                      <MdOutlinePhoneInTalk className="text-accent text-sm sm:text-3xl" />
                      <span>01204343839</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MdOutlinePhoneInTalk className="text-accent text-sm sm:text-3xl" />
                      <span>+91 9667169498</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MdOutlinePhoneInTalk className="text-accent text-sm sm:text-3xl" />
                      <span>+91 9142050882
                  </span>
                    </div>
                  </div>
                  <a href="mailto:info@gmail.com">infotechdreamviewer@gmail.com</a>
                  <p className="pt-2">Looking for collaboration?</p>
                </div>
              </div>
            </motion.aside>

            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              onClick={toggleSidebar}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
