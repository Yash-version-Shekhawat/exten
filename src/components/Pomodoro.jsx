import React, { useState, useEffect } from 'react';
import Pomo from '/images/pomodoro.png';

const Pomodoro = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev > 0) return prev - 1;
          clearInterval(timer);
          return 0;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isRunning]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="widget bg-gradient-to-b from-[#95D9EF90] via-[#95D9EF90] to-[#81A9F5] h-[220px] rounded-3xl w-[415px]">
      <div className="flex items-center flex-col gap-2 w-[415px]">
        <span className="text-xl font-bold mt-5 flex gap-2 text-[#1b263b] space-grotesk "><img src={Pomo} alt="Pomodoro" className="w-6 h-6 mb-3" />Pomodoro</span>
        <span className="text-5xl font-bold text-[#1b263b] ">{`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}</span>
        <button onClick={() => setIsRunning(!isRunning)} className="px-2 py-1 text-extrabold font-medium bg-white rounded-xl w-36 h-9">
          {isRunning ? 'STOP' : 'START'}
        </button>
        <button onClick={() => setTimeLeft(25 * 60)} className="px-2 py-1 text-bold bg-red-400 text-white rounded-xl w-44 h-9 mb-4">RESET</button>
      </div>
    </div>
  );
};

export default Pomodoro;

/*{
    "name": "Extensions",
    "description": "making a digital notice board",
    "manifest_version": 3,
    "version": "1.0.0",
    "action": {
        "default_title": "DMB",
        "default_popup": "main.jsx",
        "default_icon": {
                "16": "./icon/16.png",
                "32": "./icon/32.png",
                "48": "./icon/48.png",
                "96": "./icon/96.png",
                "128": "./icon/128.png"
        }
    }
}*/