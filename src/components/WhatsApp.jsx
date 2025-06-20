import React from 'react'
import {motion} from 'framer-motion'
import { FaWhatsappSquare } from "react-icons/fa";

const WhatsApp = () => {
    const PhoneNum = "919142050882";
    const message ="hello";
    const enCoded = encodeURIComponent(message);
    const whatsAppLink =`https://wa.me/${PhoneNum}?text=${enCoded}`
  return (
    <div>
         <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      className="fixed top-1/2 right-6 transform -translate-y-1/2 z-50"
    >
      <a href={whatsAppLink} target="_blank" rel="noopener noreferrer">
        <FaWhatsappSquare className="text-6xl text-green-600 cursor-pointer hover:scale-110 transition-transform duration-300" />
      </a>
    </motion.div>
    </div>
  )
}

export default WhatsApp