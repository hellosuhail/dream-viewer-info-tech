import React, { useEffect, useState } from 'react'
import { motion} from "framer-motion";  

const LineAnimation = () => {
     const [key, setKey] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setKey(prev => prev + 1);
    }, 3000); // 3000ms = 3 seconds
    return () => clearInterval(interval);
  }, []); 
  return (
    <div>
         <div className="w-0.5 h-screen absolute left-30 bg-gray-400 opacity-10"/>
   <motion.div
      key={key}
      initial={{ top: 0, opacity:20 }}
      animate={{ top: "calc(100vh - 40px)", opacity: 20 }}
      transition={{ duration: 3, ease: "easeInOut" }}
      className="w-0.5 h-10 bg-gradient-to-b from-black to-white absolute left-30"
    />
    <div className="w-0.5 h-screen absolute left-100 bg-gray-400 opacity-10"/>
   <motion.div
      key={key}
      initial={{ top: 0, opacity:20 }}
      animate={{ top: "calc(100vh - 40px)", opacity: 20 }}
      transition={{ duration: 3, ease: "easeInOut" }}
      className="w-0.5 h-10 bg-gradient-to-b from-black to-white absolute left-100"
    />
    <div className="w-0.5 h-screen absolute right-170 bg-gray-400 opacity-10"/>
   <motion.div
      key={key}
      initial={{ top: 0, opacity:20 }}
      animate={{ top: "calc(100vh - 40px)", opacity: 20 }}
      transition={{ duration: 3, ease: "easeInOut" }}
      className="w-0.5 h-10 bg-gradient-to-b from-black to-white absolute right-170"
    />
 <div className="w-0.5 h-screen absolute right-30 bg-gray-400 opacity-10"/>
   <motion.div
      key={key}
      initial={{ top: 0, opacity:20 }}
      animate={{ top: "calc(100vh - 40px)", opacity: 20 }}
      transition={{ duration: 3, ease: "easeInOut" }}
      className="w-0.5 h-10 bg-gradient-to-b from-black to-white absolute right-30"
    />
    <div className="w-0.5 h-screen absolute right-100 bg-gray-400 opacity-10"/>
   <motion.div
      key={key}
      initial={{ top: 0, opacity:20 }}
      animate={{ top: "calc(100vh - 40px)", opacity: 20 }}
      transition={{ duration: 3, ease: "easeInOut" }}
      className="w-0.5 h-10 bg-gradient-to-b from-black to-white absolute right-100"
    />
      
    </div>
  )
}

export default LineAnimation