import React from 'react';

const ProgressBar = ({ hidden = true, progress = 0, finish = 0, className }) => {
  // Calculate the circumference and offset based on the progress
  const radius = 60; // Adjusted from 120 to 60 to be 50% smaller
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / finish * circumference);

  return (
    <div className={`${className}`} hidden={hidden}>
      <div className="flex items-center justify-center relative">
        <svg className="transform -rotate-90" width="144" height="144">
          <circle
            cx="72" 
            cy="72" 
            r="60" 
            strokeWidth="15" 
            fill="transparent"
            className="stroke-neutral-200"
          />
            
          <circle
            cx="72"
            cy="72"
            r="60" 
            strokeWidth="15"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="stroke-neutral-900"
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute text-2xl stroke-neutral-950">{progress}/{finish}</span>
      </div>
    </div>
  );
};

export default ProgressBar;