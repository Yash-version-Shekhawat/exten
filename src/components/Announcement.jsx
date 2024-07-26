import React from 'react';
import Marquee from "react-fast-marquee";
const Announcement = () => {
  return (
    <div className="widget -mt-5">
      <h3 className="text-base font-medium mt-6 mb-1 font-sans text-[#23234f]">Announcements</h3>
      <div className="flex py-2 bg-[#716af230] capitalize rounded-lg text-[#000000] font-mid w-[845px]">
      <Marquee >
        <p>The Company had a great progress in the 3rd quater</p>
        <div className='text-[1vw] font-sans font-bold text-[#e0e1dd] px-2'>●</div>
        <p>Need a team for the upcoming project with google</p>
        <div className='text-[1vw] font-sans font-bold text-[#e0e1dd] px-2'>●</div>
        <p>Holiday on 1st August</p>
        <div className='text-[1vw] font-sans font-bold text-[#e0e1dd] px-2'>●</div>

      </Marquee>
      </div>
    </div>
  );
};

export default Announcement;