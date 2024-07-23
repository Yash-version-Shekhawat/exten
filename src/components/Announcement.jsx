import React from 'react';

const Announcement = () => {
  return (
    <div className="widget">
      <h3 className="text-2xl font-bold mb-2">Announcements</h3>
      <marquee behavior="scroll" direction="left" className="block p-2 bg-yellow-200 border capitalize border-gray-400 rounded-full text-black font-bold text-xl ">
        The Company had a great progress in the 3rd quater .  Company would provide incentives this week .
      </marquee>
    </div>
  );
};

export default Announcement;