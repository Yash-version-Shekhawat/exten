import React, { useState, useEffect } from 'react';
import GoogleSlides from './components/GoogleSlides';
import Pomodoro from './components/Pomodoro';
import Announcement from './components/Announcement';


function App() {
  const [count, setCount] = useState(0)

  return(
    <div className='mx-24 mt-6 h-screen '>
    <p className='text-center text-7xl text-white font-bold'>Digital Notice Board</p>
    <Announcement/>
    <div class="container mt-10">
  <div class="Google-slides rounded-md"><GoogleSlides/></div>
  <div class="keep"></div>
  <div class="Pomodoro rounded-md"><Pomodoro/></div>
  <div class="Spreadsheet"></div>
  <div class="Forma"></div>
  <div class="Quote"></div>
  <div class="Poll"></div>
  <div class="Steps"></div>
  <div class="Google-Calender"></div>
  <div class="gOOGLE-MEET"></div>
</div>
</div>
  )
}

export default App
