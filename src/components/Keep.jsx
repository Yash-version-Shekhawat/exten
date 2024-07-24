import React from 'react';

const Keep = () => {
  return (
    <div className="google-keep-container bg-white rounded-xl">
      <iframe
        src="https://quicknote.io/"
        title="Notes"
        className='w-[260px] h-[220px] overflow-hidden border-gray-400 border-2 rounded-3xl'
      ></iframe>
    </div>
  );
};

export default Keep;