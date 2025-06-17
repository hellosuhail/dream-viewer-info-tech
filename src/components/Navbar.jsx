import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";    
const Navbar = () => {
     const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);

   
  return (
    <div>
      <nav className="navbar flex menu-horizontal justify-between px-10 h-20 border-b-1 border-gray-300 ">
           <img src="/Logo/Logo.png" className="w-26 cursor-pointer" alt="logo" />
        <ul className="flex  justify-center gap-6">
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Service Single</a>
          </li>
          <li>
            <a href="#">Case Studio</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
            <div className="relative z-50">
      {/* Hamburger Button with Hover Animation */}
      <motion.button
        onClick={toggleMenu}
        whileHover={{ x:10, rotate: 2 }}
        whileTap={{ scale: 0.95 }}
        className="w-10 h-10 flex flex-col cursor-pointer justify-center items-center gap-1"
      >
        <motion.span
          animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          className="w-8 h-1 bg-white rounded origin-center"
          transition={{ duration: 0.3 }}
        />
        <motion.span
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          className="w-8 h-1 bg-white rounded"
          transition={{ duration: 0.2 }}
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          className="w-8 h-1 bg-white rounded origin-center"
          transition={{ duration: 0.3 }}
        />
      </motion.button>

      {/* Slide-in Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 w-64 h-full bg-white shadow p-6 z-40"
          >
            <ul className="flex flex-col gap-4 text-black text-lg">
              <li><a href="#" onClick={toggleMenu}>Home</a></li>
              <li><a href="#" onClick={toggleMenu}>About</a></li>
              <li><a href="#" onClick={toggleMenu}>Services</a></li>
              <li><a href="#" onClick={toggleMenu}>Contact</a></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
      </nav>
    </div>
  );
};

export default Navbar;
