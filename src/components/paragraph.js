import React from 'react';
import '../index.css';  // Import the TailwindCSS styles

function Paragraph() {
  return (
    <div className="flex justify-center">
      <p className='text-amber-800 text-center font-extrabold text-lg leading-wide tracking-wider sm:text-sm md:text-base lg:text-lg dark:text-gray-800'>
        The Animal Kingdom is a vast and diverse realm of living beings, ranging from the tiniest insects to the largest mammals on 
        Earth. It includes creatures of all shapes, sizes, and colors—each playing a unique role in nature’s balance. From the 
        graceful birds soaring through the skies to the powerful predators ruling the wild, the animal kingdom is a beautiful reminder 
        of life’s richness and wonder. Observing these animals teaches us about survival, adaptation, and the beauty of coexistence.
      </p>
    </div>
  );
}

export default Paragraph;