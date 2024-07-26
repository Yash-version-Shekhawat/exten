import React, { useState } from 'react';

function Voice() {
  const [query, setQuery] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState(null);

  const startListening = () => {
    if (!('webkitSpeechRecognition' in window)) {
      setError('Browser does not support Speech Recognition');
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setIsListening(true);
      setError(null);
    };

    recognition.onerror = (event) => {
      setError(event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setQuery(transcript);
      window.open(`https://www.google.com/search?q=${transcript}`, '_blank');
    };

    recognition.start();
  };

  return (
    <div className="flex flex-col items-center justify-center mt-3 w-[12rem] ml-[21.3rem]  ">
      <button
        onClick={startListening}
        className={`px-4 font-semibold py-2 rounded-lg text-black ${isListening ? 'bg-red-500' : 'bg-[#ffffff]'} hover:bg-opacity-80`}
      >
        {isListening ? 'Listening...' : 'Start Voice Search'}
      </button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {query && <p className="mt-4">Search Query: {query}</p>}
    </div>
  );
}

export default Voice;