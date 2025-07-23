import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const Page3 = () => {

  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".two",
        start: "0% 90%",
        end:"50% 50%",
        scrub: true,
      }
    })

    tl.to(".can1",{
      top:"150%",
      left:"9%"
    })

    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".three",
        start: "0% 100%",
        end:"50% 50%",
        scrub: true,
      }
    })
    tl2.from(".bean1",{
      rotate:"-90deg",
      left:"-50%",
      top:"50%"
    },"anime")

   tl2.to(".can1",{
      top:"250%",
      left:"39%",
      width:"20rem",
      height:"26rem"
    },"anime")
  })

  return (
    <>
     <div className='one h-[50rem] w-full bg-amber-200 text-white flex items-center justify-center relative'>
        <h1 className='text-center text-[12rem] font-bold capitalize'>Groundnut oil</h1>
        <img className='can1 h-[32rem] w-[25rem] z-10 absolute' src="./can-1.png" alt="" />
        <img className='h-[10rem] w-[20rem] absolute left-[20rem] top-30' src="./beans2.svg" alt="" />
        <img className='h-[10rem] w-[20rem] absolute right-[20rem] top-30' src="./beans3.svg" alt="" />
        <img className='h-[10rem] w-[20rem] absolute right-[20rem] bottom-30' src="./beans4.svg" alt="" />
      </div>
      <div className="two h-[70rem] w-full bg-[#FEE685] flex ">
        <div className="left w-[50%] h-full flex items-center">
          <svg className='w-[40rem] h-[40rem] mt-[40rem] rotate-x-60' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#00A0DD" d="M41,-42.8C54.5,-27.5,67.8,-13.8,70.7,2.9C73.5,19.5,66,39,52.5,53.6C39,68.3,19.5,78,-1.3,79.3C-22.1,80.6,-44.2,73.4,-56.7,58.8C-69.3,44.2,-72.3,22.1,-72.4,-0.2C-72.6,-22.5,-70,-44.9,-57.5,-60.2C-44.9,-75.5,-22.5,-83.6,-4.4,-79.3C13.8,-74.9,27.5,-58.1,41,-42.8Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="right w-[50%] h-full flex flex-col gap-[2rem] mt-[18rem]">
          <h1 className='text-center text-[3.4rem] text-white font-bold tracking-tight mt-[2rem] font-[Helvetica_Now_Display] '>The Story of Khajurbhai Singtel</h1>
          <h4 className='text-center text-[2.6rem] text-white font-medium'>In the heart of Gujarat,</h4>
          <p className='w-[80%] text-white font-medium text-center ml-[4rem] text-[26px]'>where traditions meet innovation, a humble yet profound journey began. Nitin Jani, fondly known as Khajurbhai, has always been a symbol of kindness, resilience, and dedication. From building homes for the homeless to spreading joy through his social work, Khajurbhai's name has become synonymous with trust and compassion.</p>
        </div>
      </div>
      <div className="three h-[50rem] w-full bg-[#FEE685] px-[5rem] py-[5rem] flex items-center justify-between gap-[5rem] relative">
        <div className="card w-[29rem] h-[35rem] bg-[#7BB542] rounded-[20px] flex flex-col justify-center gap-[1rem]">
          <img className='absolute z-[1] h-[25rem] w-[50rem] left-0 top-10 rotate-20' src="./sunflower.svg" alt="" />
          <img className='h-[26rem] w-[20rem] absolute top-[10%] ml-[2.6rem]  z-2' src="./can-2.png" alt="" />
          <h1 className='text-center text-white text-[2rem] font-medium uppercase mt-[24rem]'>Sunflower oil</h1>
          <button className='px-[3rem] py-[1rem] w-[14rem] bg-amber-200 rounded-[10px] text-white text-1.4xl font-medium ml-20'>Add To Cart</button>
        </div>
        <div className="card w-[29rem] h-[35rem] bg-[#E0B909] rounded-[20px] flex flex-col justify-center gap-[1rem]">
          <img className='bean1 absolute z-[1] h-[20rem] w-[30rem] top-12 left-[38rem]' src="./beans4.svg" alt="" />
          <h1 className='text-center text-white text-[2rem] font-medium uppercase mt-[24rem]'>Groundnut oil</h1>
          <button className='px-[3rem] py-[1rem] w-[14rem] bg-amber-200 rounded-[10px] text-white text-1.4xl font-medium ml-20'>Add To Cart</button>
        </div>
        <div className="card w-[29rem] h-[35rem] bg-[#F3A41E] rounded-[20px] flex flex-col justify-center gap-[1rem]">
          <img className='absolute z-[1] h-[25rem] w-[20rem] -top-[6rem] left-[68rem] rotate-65' src="./cottonseed2.svg" alt="" />
          <img className='h-[26rem] w-[20rem] absolute top-[10%] right-[8%] z-2' src="./can-3.png" alt="" />
          <h1 className='text-center text-white text-[2rem] font-medium uppercase mt-[24rem]'>Cottonseed oil</h1>
          <button className='px-[3rem] py-[1rem] w-[14rem] bg-amber-200 rounded-[10px] text-white text-1.4xl font-medium ml-20'>Add To Cart</button>
        </div>
      </div>
    </>
  )
}

export default Page3