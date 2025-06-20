import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { GiTwirlyFlower } from "react-icons/gi";
import HoverCircle from "../Hover";
import WhatWeDo from "../WhatWeDo";
import CaseStudies from "../CaseStudies";
import HowItWork from "../HowItWork";
import Awards from "../Awards";

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="overflow-hidden">
      <div className="w-full  h-screen relative overflow-hidden">
        <div className="flex w-1/2 pl-20 text-lg items-center pt-20 z-10 overflow-hidden relative">
          <GiTwirlyFlower className="text-xl text-accent" />
          <h1 className="ml-2">DREAMVIEWER INFOTECH</h1>
        </div>

        <motion.span
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative md:text-8xl z-1 overflow-auto w-70 md:w-full text-5xl left-20 cursor-context-menu font-bold md:left-40  block"
        >
          Creativity
        </motion.span>

        <motion.span
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute cursor-context-menu z-1 left-50 text-5xl md:text-8xl md:top-30 md:left-156 font-bold "
        >
          Is
        </motion.span>

        <motion.span
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative md:text-8xl text-4xl  w-70 md:w-full  overflow-hidden left-20 cursor-context-menu md:left-140 top-10 md:top-0 font-bold z-10 block"
        >
          Collective.
        </motion.span>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute left-10 md:left-50 w-90 top-70 md:top-60 cursor-context-menu text-lg z-10"
        >
          Innovation thrives where diverse minds meet—combining perspectives to
          create ideas greater than any one alone.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          transition={{ duration: 2, delay: 1 }}
          className="bg-[url(/Images/homebg.jpg)]  bg-cover absolute z-0 right-0 w-4xl h-screen top-0 md:top-50"
        />

        <HoverCircle />
      </div>
      <div>
        <WhatWeDo ref={ref} />
      </div>
      <CaseStudies />
      <HowItWork />
    </div>
  );
};

export default Home;
