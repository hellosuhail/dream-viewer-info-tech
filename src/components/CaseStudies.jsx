import React from 'react'
import { GiTwirlyFlower } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";
const CaseStudies = () => {
  const cardData =[
    {
      title:"titleOne",
      dis:"Some people will tell you there are four while others may tell you there are eight."
    },
      {
      title:"titleOne",
      dis:"Some people will tell you there are four while others may tell you there are eight."
    },
      {
      title:"titleOne",
      dis:"Some people will tell you there are four while others may tell you there are eight."
    },
  ]
  return (
    <div>
     <div className="flex flex-col justify-center items-center py-28">
        <div className="flex items-center gap-2 text-2xl text-accent"><GiTwirlyFlower/> Case Studies</div>
        <h1 className="text-7xl w-[60%] text-center">What's next? our latest client stories</h1>
        <div className="flex">
          {cardData.map((data, index)=>(
            <div key={index} className="w-64 h-80 relative group cursor-pointer overflow-hidden rounded-xl shadow-2xl transform transition-transform duration-300 hover:scale-105">
  <img
    src="/Images/card1.png"
    alt="Card Image"
    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
  />

  <div className="absolute top-0 left-4 w-full p-4">
    <h3 className="text-white text-xl font-bold drop-shadow-md">{data.title}</h3>
    <div className="w-16 h-16 rounded-full border-1 relative top-2 left-4 ">
      <div className='w-16 h-16 rounded-full border-1 flex justify-center items-center '>
    <FaArrowRight/></div>
    </div>
  </div>


  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
    <p className="text-white text-lg font-semibold drop-shadow-md">
{data.dis}
</p>
  </div>
</div>
    ))}
        </div>
     </div>
    </div>
  )
}

export default CaseStudies