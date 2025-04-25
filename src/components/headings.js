import React from 'react';
import '../index.css';  // Import the TailwindCSS styles

function Headings() {
  return (
    <div className="flex justify-center items-center ">
      <div className="text-center">
      <h1 className="text-green-600 sm:text-3xl md:text-4xl lg:text-5xl text-2xl font-black leading-loose tracking-widest dark:text-green-400" aria-label="Welcome to the Animal Kingdom">Welcome to the Animal Kingdom</h1>
      <h2 className="text-red-600 sm:text-2xl md:text-3xl lg:text-4xl text-xl font-extrabold leading-relaxed tracking-wider dark:text-red-400" aria-label="Mammals">Mammals</h2>
      <h3 className="text-orange-600 sm:text-xl md:text-2xl lg:text-3xl text-lg font-bold leading-bold tracking-wide dark:text-orange-400" aria-label="Big Cats">Big Cats</h3>
      <h4 className="text-blue-600 sm:text-lg md:text-xl lg:text-2xl text-base font-semibold leading-normal tracking-normal dark:text-blue-400" aria-label="Reptiles" >Reptiles</h4>
      <h5 className="text-purple-600 sm:text-base md:text-lg lg:text-xl text-sm font-medium leading-snug tracking-tight dark:text-purple-400" aria-label="Birds of Paradise">Birds of Paradise</h5>
      <h6 className="text-yellow-600 sm:text-sm md:text-base lg:text-lg text-xsm font-normal leading-tight tracking-tighter dark:text-yellow-400" aria-label="Insects & Tiny Creatures">Insects & Tiny Creatures</h6>
      </div>
    </div>
  );
}

export default Headings;