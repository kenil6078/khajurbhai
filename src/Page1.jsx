import React, { useRef } from 'react'
import Navbar from './components/Navbar'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger);


const Page1 = () => {

   const imageRef = useRef(null);
   const HomeRef = useRef(null);

   const realRef = useRef(null);

   useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: HomeRef.current,
        scrub: 1,
        pin: true,
        start: "top top",
        end: "bottom 0%",
      }
    });

    // Set initial state
    gsap.set(".slidesm", { scale: 5 });

    // Timeline animations
    tl.to(imageRef.current, {
      clipPath: "circle(0% at center)",
      duration: 2,
      ease: "power2.out",
    });

    tl.to(".slidesm", {
      scale: 1,
      duration: 2,
      ease: "power2.out",
    }, "<");
    
    // "<" means both animations start together
     tl.to(".lft", {
      xPercent: -15,
      duration:2,
      ease: "power4.out",
    },"anim");
    // "<" means both animations start together
     tl.to(".rgt", {
      xPercent: 25,
      duration:2,
      ease: "power4.out",
    },"anim");

    gsap.to(".slides",{
      scrollTrigger:{
        trigger:realRef.current,
        start:"top top",
        end:"bottom 0%",
        scrub:1,
      },
      xPercent:-200,
      ease:"power4.out",
      duration:1.2,
    })


  }, []);
  return (
  <>
   <Navbar />
    <div className="main1 text-white bg-[#FEE685] w-full">
      <div ref={HomeRef} className="home w-full h-screen relative">
        <div className="btmtext absolute bottom-[7%] z-4 w-52 left-[3%]">
          <h1>we buildings big ideas. software. Apps. Tools. For real People. Real lives.</h1>
        </div>
       <div style={{clipPath: "circle(100% at center)"}} ref={imageRef} className="vdodiv w-full h-full absolute top-0 left-0 z-3 bg-black overflow-hidden">
        <img className='w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="./public/new-banner-1.jpg" alt="" />
       </div>
        <div className="marquee w-full h-screen relative overflow-hidden">
          <div className='heading absolute top-[7%] left-1/2 -translate-x-1/2 w-60 text-center'>
            <h1 className='text-xl font-regular'>Crafting a new product healthcare, one that is</h1>
          </div>
          <div className='slidesm w-[90%] scale-[1] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <div className="row lft w-full flex items-center gap-10 whitespace-nowrap -translate-x-1/2">
                <div className='elem flex items-center gap-10'>
                  <h1 className='text-7xl font-normal'>Penuts</h1>
                  <div className="imgdiv w-[3.5rem] overflow-hidden h-[3rem] rounded-full">
                    <img className='h-full w-full object-cover' src="./cottonseed1.svg" alt="" />
                  </div>
                </div>
                 <div className='elem flex items-center gap-10'>
                  <h1 className='text-7xl font-normal'>Sunflower</h1>
                  <div className="imgdiv w-[3.5rem] overflow-hidden h-[3rem] rounded-full">
                    <img className='h-full w-full object-cover' src="./sunflower.svg" alt="" />
                  </div>
                </div>
                 <div className='elem flex items-center gap-10'>
                  <h1 className='text-7xl font-normal'>Cottonseed</h1>
                  <div className="imgdiv w-[3.5rem] overflow-hidden h-[3rem] rounded-full">
                    <img className='h-full w-full object-cover' src="./beans4.svg" alt="" />
                  </div>
                </div>
                <div className='elem flex items-center gap-10'>
                  <h1 className='text-7xl font-normal'>Penuts</h1>
                  <div className="imgdiv w-[3.5rem] overflow-hidden h-[3rem] rounded-full">
                    <img className='h-full w-full object-cover' src="./cottonseed1.svg" alt="" />
                  </div>
                </div>
                 <div className='elem flex items-center gap-10'>
                  <h1 className='text-7xl font-normal'>Sunflower</h1>
                  <div className="imgdiv w-[3.5rem] overflow-hidden h-[3rem] rounded-full">
                    <img className='h-full w-full object-cover' src="./sunflower.svg" alt="" />
                  </div>
                </div>
                 <div className='elem flex items-center gap-10'>
                  <h1 className='text-7xl font-normal'>Cottonseed</h1>
                </div>
          </div>
          <div className="row rgt w-full flex items-center gap-10 whitespace-nowrap -translate-x-1/3">
                <div className='elem flex items-center gap-10'>
                  <h1 className='text-7xl font-normal'>Penuts</h1>
                  <div className="imgdiv w-[3.5rem] overflow-hidden h-[3rem] rounded-full">
                    <img className='h-full w-full object-cover' src="./beans4.svg" alt="" />
                  </div>
                </div>
                 <div className='elem flex items-center gap-10'>
                  <h1 className='text-7xl font-normal'>Sunflower</h1>
                  <div className="imgdiv w-[3.5rem] overflow-hidden h-[3rem] rounded-full">
                    <img className='h-full w-full object-cover' src="./cottonseed1.svg" alt="" />
                  </div>
                </div>
                 <div className='elem flex items-center gap-10'>
                  <h1 className='text-7xl font-normal'>Cottonseed</h1>
                  <div className="imgdiv w-[3.5rem] overflow-hidden h-[3rem] rounded-full">
                    <img className='h-full w-full object-cover' src="./sunflower.svg" alt="" />
                  </div>
                </div>
                <div className='elem flex items-center gap-10'>
                  <h1 className='text-7xl font-normal'>Penuts</h1>
                  <div className="imgdiv w-[3.5rem] overflow-hidden h-[3rem] rounded-full">
                    <img className='h-full w-full object-cover' src="./beans4.svg" alt="" />
                  </div>
                </div>
                 <div className='elem flex items-center gap-10'>
                  <h1 className='text-7xl font-normal'>Sunflower</h1>
                  <div className="imgdiv w-[3.5rem] overflow-hidden h-[3rem] rounded-full">
                    <img className='h-full w-full object-cover' src="./cottonseed1.svg" alt="" />
                  </div>
                </div>
                 <div className='elem flex items-center gap-10'>
                  <h1 className='text-7xl font-normal'>Cottonseed</h1>
                </div>
          </div>
          <div className="row lft w-full flex items-center gap-10 whitespace-nowrap -translate-x-1/2">
                <div className='elem flex items-center gap-10'>
                  <h1 className='text-7xl font-normal'>Penuts</h1>
                  <div className="imgdiv w-[3.5rem] overflow-hidden h-[3rem] rounded-full">
                    <img className='h-full w-full object-cover' src="./sunflower.svg" alt="" />
                  </div>
                </div>
                 <div className='elem flex items-center gap-10'>
                  <h1 className='text-7xl font-normal'>Sunflower</h1>
                  <div className="imgdiv w-[3.5rem] overflow-hidden h-[3rem] rounded-full">
                    <img className='h-full w-full object-cover' src="./beans4.svg" alt="" />
                  </div>
                </div>
                 <div className='elem flex items-center gap-10'>
                  <h1 className='text-7xl font-normal'>Cottonseed</h1>
                  <div className="imgdiv w-[3.5rem] overflow-hidden h-[3rem] rounded-full">
                    <img className='h-full w-full object-cover' src="./cottonseed1.svg" alt="" />
                  </div>
                </div>
                <div className='elem flex items-center gap-10'>
                  <h1 className='text-7xl font-normal'>Penuts</h1>
                  <div className="imgdiv w-[3.5rem] overflow-hidden h-[3rem] rounded-full">
                    <img className='h-full w-full object-cover' src="./sunflower.svg" alt="" />
                  </div>
                </div>
                 <div className='elem flex items-center gap-10'>
                  <h1 className='text-7xl font-normal'>Sunflower</h1>
                  <div className="imgdiv w-[3.5rem] overflow-hidden h-[3rem] rounded-full">
                    <img className='h-full w-full object-cover' src="./beans4.svg" alt="" />
                  </div>
                </div>
                 <div className='elem flex items-center gap-10'>
                  <h1 className='text-7xl font-normal'>Cottonseed</h1>
                </div>
          </div>
          <div className="row rgt w-full flex items-center gap-10 whitespace-nowrap -translate-x-1/3">
                <div className='elem flex items-center gap-10'>
                  <h1 className='text-7xl font-normal'>Penuts</h1>
                  <div className="imgdiv w-[3.5rem] overflow-hidden h-[3rem] rounded-full">
                    <img className='h-full w-full object-cover' src="./cottonseed1.svg" alt="" />
                  </div>
                </div>
                 <div className='elem flex items-center gap-10'>
                  <h1 className='text-7xl font-normal'>Sunflower</h1>
                  <div className="imgdiv w-[3.5rem] overflow-hidden h-[3rem] rounded-full">
                    <img className='h-full w-full object-cover' src="./sunflower.svg" alt="" />
                  </div>
                </div>
                 <div className='elem flex items-center gap-10'>
                  <h1 className='text-7xl font-normal'>Cottonseed</h1>
                  <div className="imgdiv w-[3.5rem] overflow-hidden h-[3rem] rounded-full">
                    <img className='h-full w-full object-cover' src="./beans4.svg" alt="" />
                  </div>
                </div>
                <div className='elem flex items-center gap-10'>
                  <h1 className='text-7xl font-normal'>Penuts</h1>
                  <div className="imgdiv w-[3.5rem] overflow-hidden h-[3rem] rounded-full">
                    <img className='h-full w-full object-cover' src="./cottonseed1.svg" alt="" />
                  </div>
                </div>
                 <div className='elem flex items-center gap-10'>
                  <h1 className='text-7xl font-normal'>Sunflower</h1>
                  <div className="imgdiv w-[3.5rem] overflow-hidden h-[3rem] rounded-full">
                    <img className='h-full w-full object-cover' src="./sunflower.svg" alt="" />
                  </div>
                </div>
                 <div className='elem flex items-center gap-10'>
                  <h1 className='text-7xl font-normal'>Cottonseed</h1>
                </div>
          </div>
          
          
          </div>
        </div>
      </div>
      <div ref={realRef} className='real w-full'>
        <div className='cont h-[400vh] relative'>
          <div  className="slides flex w-full h-[100vh] sticky top-0 left-0">
            <div className="slide-1 w-full h-screen flex items-center justify-center flex-shrink-0">
              <div className="text">
                <h1 className='text-8xl font-medium tracking-tight font-[Helvetica_Now_Display]'>Real talk,</h1>
                <h1 className='text-8xl font-medium tracking-tight font-[Helvetica_Now_Display]'>Real impact</h1>

              </div>
              <div className="image w-[20rem] h-[20rem] overflow-hidden absolute top-1/2 right-0 rounded-full translate-x-1/2 -translate-y-1/2">
                <img className='w-full h-full object-cover' src="./new-banner-1.jpg" alt="" />
              </div>
            </div>
            <div className="slide-2 w-full h-screen flex-shrink-0 flex justify-center items-center bg-[#FEE685]">
                    <div className='img-1 w-[15rem] h-[15rem] absolute left-[155rem] top-[35rem] -translate-y-1/2 rounded-full overflow-hidden'>
                      <img className='w-full h-full object-cover' src="./new-banner-2.jpg" alt="" />
                    </div>
                     <div className='img-1 w-[20rem] h-[20rem] absolute left-[190rem] top-[14rem] -translate-y-1/2 rounded-full overflow-hidden'>
                      <img className='w-full h-full object-cover' src="./new-banner-3.jpg" alt="" />
                    </div>
                     <div className='img-1 w-[14rem] h-[14rem] absolute left-[255rem] top-[24rem] -translate-y-1/2 rounded-full overflow-hidden'>
                      <img className='w-full h-full object-cover' src="./new-banner-4.jpg" alt="" />
                    </div>
                    <div className='w-[60%] text-center relative'>
                      <h3 className='absolute top-0 left-0 -translate-y-1/2 -translate-x-1/3 w-1/3 text-left text-[1.5rem] font-semibold leadind-7 tracking-tight'>we're on a mission to impact as many lives as possible and build a better company while we do it. Here's our process.</h3>
                      <h1 className='font-bold text-[12rem] tracking-tighter'>1.75M</h1>
                      <h3 className='text-4xl leading-none tracking-tight'>Real people - real lives - we have we have built products and solutions for.</h3>

                    </div>
            </div>
            <div className="slide-3 w-full h-screen flex-shrink-0 bg-[#FEE685] flex  items-center justify-center">
                 <div className='w-[60%] text-center relative'>
                      <h3 className='absolute top-0 left-0 -translate-y-1/2 -translate-x-1/3 w-1/3 text-left text-[1.3rem] font-medium leadind-7 tracking-tight'>Inspired by his roots and the vision</h3>
                      <h1 className='font-bold text-[12rem] tracking-tighter font-[Helvetica_Now_Display]'>2.95M</h1>
                      <h3 className='text-2xl leading-none tracking-tight'>where traditions meet innovation, a humble yet profound journey began. Nitin Jani, fondly known as Khajurbhai, has always been a symbol of kindness, resilience, and dedication. From building homes for the homeless to spreading joy through his social work, Khajurbhai's name has become synonymous with trust and compassion.</h3>

                    </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Page1
