import React from 'react';
import '../index.css';  // Import the TailwindCSS styles

function Notificationbar() {
  return(
    <div class="flex justify-center text-center bg-green-100 border border-green-400 dark:border-green-200 dark:text-green-500 text-green-800 px-4 py-3 " role="alert">
        <strong class="font-extrabold">Success!</strong>
        <span class="block sm:inline">Your animal has been added.</span>
        <span class="absolute top-1 right-2 text-xl cursor-pointer">×</span>
    </div>

  )
}

export default Notificationbar;
