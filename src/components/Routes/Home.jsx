import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GiTwirlyFlower } from "react-icons/gi";
import HoverCircle from "../Hover";
import WhatWeDo from "../WhatWeDo";
import CaseStudies from "../CaseStudies";

const Home = () => {
  return (
    <div className="">
      <div className="w-full h-screen relative overflow-hidden">
        <div className="flex w-1/2 pl-20 text-lg items-center pt-20 z-10 relative">
          <GiTwirlyFlower className="text-xl text-accent" />
          <h1 className="ml-2">DREAMVIEWER INFITECH</h1>
        </div>

        {/* Text Animations */}
        <motion.span
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-8xl cursor-context-menu font-bold left-40 z-10 block"
        >
          Creativity
        </motion.span>

        <motion.span
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute cursor-context-menu text-8xl top-30 left-156 font-bold "
        >
          Is
        </motion.span>

        <motion.span
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative text-8xl cursor-context-menu left-140 top- font-bold z-10 block"
        >
          Collective.
        </motion.span>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute left-50 w-90 top-60 cursor-context-menu text-lg z-10"
        >
          it emerges when diverse minds converge, synergizing their unique
          perspectives to foster innovation that surpasses the boundaries of
          individual imagination.
        </motion.p>

        {/* Background Image Fade In */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2, delay: 1 }}
          className="bg-[url(/Images/Creativity.jpg)] absolute z-0 right-0 w-4xl h-screen top-50"
        />

        <HoverCircle />
      </div>
      <div >
        <WhatWeDo />
      </div>
      <CaseStudies/>
    </div>
  );
};

export default Home;
