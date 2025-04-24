import React from 'react';
import '../index.css'; 

const Captionlabel: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
        {/* Label */}
      <label className='text-gray-800	dark:text-gray-100 sm:text-xs md:text-sm lg:text-base text-base font-black leading-snug tracking-tight' aria-label="Choose your favorite animal">
        Choose your favorite animal
        </label>
        {/* caption */}
      <span className='text-blue-600	dark:text-blue-400 sm:text-xs md:text-xs lg:text-sm text-sm font-black leading-snug tracking-tight' aria-label="Click to explore more animals">
        Click to explore more animals
        </span>
        {/* helper text */}
      <span className='text-green-600	dark:text-green-400 sm:text-xs md:text-xs lg:text-sm text-sm font-black leading-snug tracking-tight' aria-label="Required field — don’t leave blank">
        Required field — don’t leave blank
        </span>
    </div>
  );
}

export default Captionlabel;