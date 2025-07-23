import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React from 'react'

gsap.registerPlugin(ScrollTrigger)

const Page2 = () => {
  useGSAP(() => {
    // Animate .top1
    gsap.from('.top1', {
      x: -100,
      duration: 2,
      opacity: 0,
      scrollTrigger: {
        trigger: '.top1',
        start: 'top 50%',
        scrub: 2,
      },
    })

    // Animate .top2
    gsap.from('.top2', {
      x: 100,
      duration: 2,
      opacity: 0,
      scrollTrigger: {
        trigger: '.top2',
        start: 'top 50%',
        scrub: 2,
      },
    })

    // Animate first video
    gsap.to('video', {
      width: "30rem",
      duration: 1,
      scrollTrigger: {
        trigger: 'video',
        start: 'top 50%',
        scrub: 2,
      }
    })

    // Animate .video1
    gsap.to('.video1', {
      width: "30rem",
      duration: 1,
      scrollTrigger: {
        trigger: '.video1',
        start: 'top 40%',
        scrub: 2,
      }
    })

    ScrollTrigger.refresh()
  })

  return (
    <>
      <div className="main w-full -mt-[4rem] bg-[#FEE685] text-white">
        <h1 className='top1 text-left text-[8rem] font-medium font-[Helvetica_Now_Display] tracking-tight ml-[12rem]'>Digitally Crafted</h1>
        <h1 className='top2 text-center text-[8rem] font-medium tracking-tight ml-[20rem] font-[Helvetica_Now_Display] leading-[3.8rem]'>Brand Experience</h1>
        <div className="w-full flex justify-between px-[5rem] py-[5rem]">
          <video className='h-[40rem] w-[4rem] mt-[5rem]' autoPlay muted loop src="./vid-1.mp4"></video>
          <div className="details h-[34rem] w-[28rem] mt-[8rem] flex flex-col gap-2 px-2 py-2">
            <div className='h-full w-full flex flex-col items-center py-[14px]'>
              <img className='h-[3.4rem] w-[5rem]' src="./pg-1.svg" alt="" />
              <h2 className='text-[1.2rem] font-bold'>100% pure mold oil</h2>
              <p className='text-center px-[2rem] font-medium'>Uncooked and nutritious oil made of ancient wounds</p>
            </div>
            <div className='h-full w-full flex flex-col items-center py-[14px]'>
              <img className='h-[3.4rem] w-[5rem]' src="./pg-2.svg" alt="" />
              <h2 className='text-[1.2rem] font-bold'>G-20 Peanut's Best Material</h2>
              <p className='text-center px-[2rem] font-medium'>Oil made using only the best quality sing</p>
            </div>
            <div className='h-full w-full flex flex-col items-center py-[14px]'>
              <img className='h-[3.4rem] w-[5rem]' src="./pg-3.svg" alt="" />
              <h2 className='text-[1.2rem] font-bold'>Nutritious properties</h2>
              <p className='text-center px-[2rem] font-medium'>Filled with vitamins, proteins and healthy fats, which are excellent for the heart</p>
            </div>
            <div className='h-full w-full flex flex-col items-center py-[14px]'>
              <img className='h-[3.4rem] w-[5rem]' src="./pg-5.svg" alt="" />
              <h2 className='text-[1.2rem] font-bold'>Taste and aroma</h2>
              <p className='text-center px-[2rem] font-medium'>Bring to meals flavors and fragrances that make dishes special</p>
            </div>
          </div>
          <video className='video1 h-[40rem] w-[4rem] mt-[5rem]' autoPlay muted loop src="./vid-2.mp4"></video>
        </div>
      </div>
    </>
  )
}

export default Page2
