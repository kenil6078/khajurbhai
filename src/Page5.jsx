import React from 'react'

const Page5 = () => {
  return (
  <>
  <div className='capsules flex items-start justify-between gap-10 w-full h-screen mt-60 px-32'>
    <div className="left w-1/4 h-full flex flex-col justify-between">
    <h1 className='text-3xl leading-[2.5rem]'>Stay up-to-date on the latest healthcare innovations and thought leadership.</h1>
    <div className="heading">
      <h1 className='text-8xl font-medium tracking-tighter'>Explore Our Insights</h1>
      <button className='px-8 py-3 mt-8 text-1xl border-2'>Our Products</button>
    </div>
    </div>
    <div className="right flex h-full gap-15 items-center">
      <div className="capsul -rotate-[16deg] flex flex-col items-center px-6 py-10 rounded-full border-[1px] border-black">
        <div className='w-[16rem] h-[16rem] rounded-full overflow-hidden bg-purple-200'>
          <img className='h-full w-full object-contain' src="./true-story-logo.svg" alt="" />
        </div>
        <div className="text text-center mt-14">
          <h3 className='text-2xl font-medium'>Equity in Tech: An</h3>
          <h3 className='text-2xl font-medium'>International Empower's</h3>
          <h3 className='text-2xl font-medium'>Social-Media</h3>
        </div>
        <button className='px-8 py-3 mt-8 text-1xl border-[1px] font-bold text-white bg-yellow-500 rounded-[15px]'>Join Youtube</button>
      </div>
     <div className="capsul -rotate-[16deg] flex flex-col-reverse items-center py-10 px-6 rounded-full border-[1px] border-black">
        <div className='w-[16rem] h-[16rem] rounded-full overflow-hidden bg-purple-200'>
          <img className='h-full w-full object-contain' src="./true-story-logo.svg" alt="" />
        </div>
        <div className="text text-center mt-14">
          <h3 className='text-2xl font-medium'>Equity in Tech: An</h3>
          <h3 className='text-2xl font-medium'>International Empower's</h3>
          <h3 className='text-2xl font-medium'>Social-Media</h3>
        </div>
        <button className='px-8 py-3 mt-8 text-1xl border-[1px] font-bold text-white bg-yellow-500 rounded-[15px]'>Join Youtube</button>
      </div>
    </div>
  </div>
  </>
  )
}

export default Page5
