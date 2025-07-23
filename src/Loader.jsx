import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useState, useEffect } from "react";


const Loader = () => {
const [count, setCount] = useState(0);
 useEffect(() => {
    if (count < 100) {
      const timer = setTimeout(() => setCount(prev => prev + 1), 35);
      return () => clearTimeout(timer);
    }
  }, [count]);

  const paddedCount = count.toString().padStart(2, '0');
          useGSAP(()=>{
            var tl =  gsap.timeline();
                    tl.from(".lines h1",{
                              y:150,
                              stagger:0.25,
                              duration:0.9,
                              delay:0.5
                    })

                    tl.to(".loader",{
                      opacity:0,
                      duration:0.4,
                      delay:3,
                      zIndex:-1,
                      ease:"power4"
                    })
          })
  return (
    <div className=' loader w-full h-screen bg-[#ac5c16] z-99 px-[10rem] py-[10rem] font-[Helvetica_Now_Display] fixed'>
      <div className="line1-part1 flex items-center justify-center gap-[2rem] -ml-[29rem] mt-1">
                              <h5 className='timer1 text-white text-[4rem] italic font-light font-serif text-right w-[5vw]'>{paddedCount}</h5>
                              <h6 className='text-white text-[4rem] italic font-light font-serif'>- 100</h6>
                    </div>
          <div className="lines overflow-hidden flex items-center justify-start gap-[2rem] h-[9rem]">
                   <h1 className='text-8xl font-bold text-white tracking-tight ml-[14rem]'>ખજૂરભાઈ સિંગતેલ</h1>
          </div>
          <div className="lines overflow-hidden">
                    <h1 className='text-3xl font-bold text-white tracking-tight capitalize -mt-1 ml-[16rem]'>A mixture of health, taste and tradition</h1>
          </div>
          
    </div>
  )
}

export default Loader
