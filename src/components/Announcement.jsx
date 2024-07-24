import React from 'react';

const Announcement = () => {
  return (
    <div className="widget">
      <h3 className="text-base font-medium mt-6 mb-1 font-sans text-[#1E1E1E]">Announcements</h3>
      <marquee behavior="scroll" direction="left" className="block py-2 bg-[#6E94DC35] capitalize rounded-lg text-[#1E1E1E] font-mid w-[838px]">
        The Company had a great progress in the 3rd quater .  Company would provide incentives this week .
      </marquee>
    </div>
  );
};

export default Announcement;