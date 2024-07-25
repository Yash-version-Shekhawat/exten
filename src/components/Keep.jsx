import React from 'react';

const Keep = () => {
  return (
    <div className="google-keep-container bg-white rounded-3xl mt-[1rem]">
      <iframe
        src="https://quicknote.io/"
        title="Notes"
        className='w-[280px] h-[265px] overflow-hidden border-2 rounded-3xl'
      ></iframe>
    </div>
  );
};

export default Keep;