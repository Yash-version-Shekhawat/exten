import React from 'react';

const Announcement = () => {
  return (
    <div className="widget">
      <h3 className="text-base font-medium mt-6 mb-1 font-sans text-[#1B263B]">Announcements</h3>
      <marquee behavior="scroll" direction="left" className="block py-2 bg-[#DCF6FF] capitalize rounded-lg text-[#1B263B] font-mid w-[838px]">
        The Company had a great progress in the 3rd quater .  Company would provide incentives this week .
      </marquee>
    </div>
  );
};

export default Announcement;