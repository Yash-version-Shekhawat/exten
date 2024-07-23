import React, { useState, useEffect } from 'react';
import GoogleSlides from './components/GoogleSlides';
import Pomodoro from './components/Pomodoro';
import Announcement from './components/Announcement';
import Music from './components/Music';
import Keep from './components/Keep';
import Meet from './components/Meet';
import Spreadsheet from './components/Spreadsheet';
import Calender from './components/Calender';

function App() {
  const [count, setCount] = useState(0)

  return(
    <div className='flex h-[100%] w-[100%] relative bg-'>
    <div className=' h-auto w-[5%] bg-[#1B263B]'></div>
    <div className=' mx-9 mt-10 h-screen w-[95%]'>
      <p className='text-5xl text-[#1B263B] font-medium font-sans'>NoticeIt</p>
      <p className='text-xl text-[#1B263B] font-medium font-sans'>Your Dynamic Digital Bulletin</p>
      {/*<p className=' text-xs text-black font-normal mt-2 '>Control and Analyze all your work in the easiest way </p>*/}
    
  <div class="calender rounded-md absolute right-0 mr-8 -mt-[5rem]"><Calender/></div>
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
  </div>
  <Announcement/>
  <div class="Spreadsheet"><Spreadsheet/></div>
  <div class="Music"><Music/></div>
  
  <div class="Quote"></div>
  <div class="Poll"></div>
  <div class="Steps"></div>

  <div class="gOOGLE-MEET"><Meet/></div>

</div>
</div>
  )
}

export default App
