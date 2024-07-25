import React, { useState } from 'react';

function Poll() {
  // Poll question and options
  const [poll, setPoll] = useState({
    question: 'What is your favorite programming language?',
    options: [
      { text: 'JavaScript', selected: false },
      { text: 'Python', selected: false },
      { text: 'Java', selected: false },
      { text: 'C++', selected: false }
    ]
  });

  // Handle option selection
  const handleSelect = (index) => {
    setPoll({
      ...poll,
      options: poll.options.map((option, i) => ({
        ...option,
        selected: i === index
      }))
    });
  };

  return (
    <div className="p-4 w-[270px] h-[300px] rounded-3xl bg-[#D2EDF6] shadow-xl ">
      <h1 className="text-xl mb-4">{poll.question}</h1>
      <div className="space-y-1">
        {poll.options.map((option, index) => (
          <div key={index} className="flex items-center">
            <input
              type="radio"
              id={`option-${index}`}
              name="poll-option"
              checked={option.selected}
              onChange={() => handleSelect(index)}
              className="mr-2"
            />
            <label htmlFor={`option-${index}`} className="text-lg">
              {option.text}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Poll;