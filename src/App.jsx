import Loader from './Loader'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'
import Page5 from './Page5'
import Penut from './Penut'
import React, { useState, useEffect } from 'react';
import ParticalCursor from './components/ParticalCursor'


const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 3000); // 3s fake load
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
       <Loader />
      <main className='w-full font-[PP_Neue_Machina] px-[0.4rem] py-[0.2rem] bg-[#FEE685]'>
        <ParticalCursor/>
        <Page1 />
        <Penut />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
        
      </main>
    </>
  )
}

export default App
