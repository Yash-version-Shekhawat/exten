import React, { useState, useEffect } from 'react';
import GoogleSlides from './components/GoogleSlides';
import Pomodoro from './components/Pomodoro';
import Announcement from './components/Announcement';
import Keep from './components/Keep';
import Meet from './components/Meet';
import Calender from './components/Calender';
import spotify from './assets/spotify.png';
import utube from './assets/youtube.png';
import chat from './assets/chatgpt.png';
import star from './assets/star.png';
import gmail from './assets/gmail.png';
import twitter from './assets/twitter.png';
import './App.css'
import Poll from './components/Poll';
import Todo from './components/Todo';
import Voice from './components/Voice';
import Issue from './components/Issue';

function App() {
  const [count, setCount] = useState(0)
  const openSpotify = () => {
    window.open('https://open.spotify.com', '_blank');
  };
  const openYouTube = () => {
    window.open('https://www.youtube.com', '_blank');
  };
  const openGemini = () => {
    window.open('https://gemini.google.com', '_blank');
  };
  const openChatGPT = () => {
    window.open('https://chat.openai.com', '_blank');
  };
  const mail = () => {
    window.open('https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox', '_blank');
  };
  const x = () => {
    window.open('https://x.com/home', '_blank');
  };

  return(
    <div className='flex h-screen w-[100%] relative bg-gradient-to-b from-[#2e2e2e] to-[#1e1e1e]'>
    <div className=' h-auto w-[5%] bg-gradient-to-b from-[#2e2e2e] to-[#1e1e1e] flex flex-col gap-11 justify-center items-center'>
      <button onClick={openSpotify}><img src={spotify} className='w-8 hover:w-10 animate-pulse'/></button>
      <button onClick={openYouTube}><img src={utube} className='w-8 hover:w-10 animate-pulse'/></button>
      <button onClick={openChatGPT}><img src={chat} className='w-8 hover:w-10 animate-pulse'/></button>
      <button onClick={openGemini}><img src={star} className='w-8 hover:w-10 animate-pulse'/></button>
    </div>
    <div className=' main w-[95%] bg-[#ffffff] overflow-hidden overflow-y-scroll scroll'>
      <div className=' pt-3 pl-9 pb-4 rounded-b-3xl flex bg-[#716af210]'>
      <p className='text-4xl text-[#1e1e1e] font-semibold font-sans mt-2'>Digi-Notice</p>
      <Voice/>
      <button onClick={mail}><div className='w-11 h-11 bg-red-400 flex justify-center items-center ml-2 mt-[10px]  rounded-xl'><img className='w-7' src={gmail}/></div></button>
      <button onClick={x}><div className='w-11 h-11 bg-[#000000] flex justify-center items-center ml-3 mt-[10px] rounded-xl'><img className='w-5' src={twitter}/></div></button>
      <div className='w-24 h-12 bg-[#] mt-2 rounded-3xl font-semibold ml-[5.8rem] flex justify-center items-center'>Login</div>
      <div className='w-24 h-12 bg-[#716af2] mt-2 rounded-3xl flex justify-center items-center text-white'>Sign up</div>
      
      </div>
      <div className='pl-9'><Announcement/></div>
      {/*popzucc<p className=' text-xs text-black font-normal mt-2 '>Control and Analyze all your work in the easiest way </p>*/}
    
  <div class="container mt-4 flex gap-4 pl-9">
     <div class="Google-slides rounded-md">
      <GoogleSlides/>
     </div>
     <div class="pomo">
      <Pomodoro/>
     </div>
     <div>
     <div className="Meet -mt-14"><Meet/></div>
     <div class="keep">
      <Keep/>
     </div>
     </div>
     
  </div>
  <div className='flex gap-4 -mt-[8.4rem] pl-9'>
  <Todo/>
  <div class="Poll"><Poll/></div>
  <Issue/>
  <div class="calender rounded-md ml-2 mt-[9.5rem] mb-7"><Calender/></div>
  </div>
  <div class="Steps"></div>

</div>
</div>
  )
}

export default App
