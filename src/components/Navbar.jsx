import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { use, useRef } from 'react';

const Navbar = () => {
          const logoRef = useRef();
          useGSAP(()=>{
                    var tl = gsap.timeline();
                    tl.from(logoRef.current,{
                              y:-50,
                              duration:1,
                              scale:0.4,
                              opacity:0,
                              delay:4.5
                    })
                    tl.from('.links a',{
                              y:-70,
                              duration:0.8,
                              opacity:0,
                              stagger:0.4,
                    })

          })
          return (
                    <nav className="backdrop-blur-lg bg-[#FEE685] shadow-lg px-[1.6rem] py-3 flex items-center justify-between">
                              {/* Logo */}
                              <div ref={logoRef} className=" logo1 flex items-center">
                                        <img
                                                  src="/Logo.png"
                                                  alt="Logo"
                                                  className="h-14 w-40 mr-4"
                                        />
                              </div>
                              {/* Menu */}
                              <div className=" links flex gap-[2.4rem]">
                                        <a href="#home" className="text-[#6C3D05] font-bold text-[1.2rem] rounded-lg">Home</a>
                                        <a href="#product" className="text-[#6C3D05] font-bold text-[1.2rem] rounded-lg">Product</a>
                                        <a href="#contact" className="text-[#6C3D05] font-bold text-[1.2rem] rounded-lg">Contact</a>
                                        <a href="#about" className="text-[#6C3D05] font-bold text-[1.2rem]  rounded-lg">About</a>
                              </div>
                    </nav>
          );
};

export default Navbar;
