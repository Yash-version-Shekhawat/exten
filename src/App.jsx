import React, { useState, useEffect } from 'react';
import GoogleSlides from './components/GoogleSlides';
import Pomodoro from './components/Pomodoro';
import Announcement from './components/Announcement';
import Music from './components/Music';
import Keep from './components/Keep';
import Meet from './components/Meet';
import Spreadsheet from './components/Spreadsheet';
import Calender from './components/Calender';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return(
    <div className='flex h-screen w-[100%] relative bg-[#1e1e1e]'>
    <div className=' h-auto w-[5%] bg-[#1E1E1E]'></div>
    <div className=' main pl-9 my-3 mr-3 pt-12 rounded-3xl w-[95%] bg-[#ffffff] overflow-hidden overflow-y-scroll scroll'>
      <p className='text-5xl text-[#1E1E1E] font-medium font-sans'>NoticeIt</p>
      <p className='text-xl text-[#1E1E1E] font-medium font-sans'>Your Dynamic Digital Bulletin</p>
      {/*<p className=' text-xs text-black font-normal mt-2 '>Control and Analyze all your work in the easiest way </p>*/}
    
  <div class="container mt-6 flex gap-4">
     <div class="Google-slides rounded-md">
      <GoogleSlides/>
     </div>
     <div class="keep">
      <Keep/>
     </div>
     <div class="pomo">
      <Pomodoro/>
     </div>
     <div class="calender rounded-md ml-2 -mt-[6.5rem]"><Calender/></div>
  </div>
  <Announcement/>
  <div className='flex'>
  <div class="Spreadsheet"><Spreadsheet/></div>
  <div className="Meet"><Meet/></div>
  </div>
  <div class="Music"><Music/></div>
  

  <div class="Poll"></div>
  <div class="Steps"></div>

</div>
</div>
  )
}

export default App
