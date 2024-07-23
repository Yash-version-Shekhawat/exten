import React, { useState } from 'react';

const Music = () => {
  const [service, setService] = useState('spotify');

  const handleToggle = () => {
    setService((prevService) => (prevService === 'spotify' ? 'youtube' : 'spotify'));
  };

  return (
    <div className="music-player">
      <button onClick={handleToggle} className="text-white text-bold rounded-lg ">
      {service === 'spotify' ? <div className=" rounded-md bg-red-600 ring-red-500 h-7 w-5 mt-5 mb-2 px-20 flex justify-center ">Youtube</div> : <div className=" absolute rounded-full bg-green-400 ring-3 ring-green-500 h-10 w-10"></div>}
      </button>
      {service === 'spotify' ? (
        <iframe
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M"
          width="400"
          height="350"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
          title="Spotify Player"
        ></iframe>
      ) : (
        <iframe width="450" height="260" src="https://www.youtube.com/embed/6bvqH0t7j2Y?si=3bJ05nRFsLTXVb_W" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      )}
    </div>
  );
};

export default Music;