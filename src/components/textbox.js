import React, { useState } from 'react';
import '../index.css';  // Import the TailwindCSS styles

function Textbox() {
  const [inputValue, setInputValue] = useState(''); 
  const [displayValue, setDisplayValue] = useState('')
  const [error, setError] = useState(false);
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      if (inputValue.trim() === '') {
        setError(true); 
        setDisplayValue('');
      } else {
        setError(false);
        setDisplayValue(inputValue);
      }
    }
  };

  return (
    <div>
    <input
      type='text'
      placeholder="type the animal name"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)} 
      onKeyDown={handleKeyDown} 
      className='px-3 py-2 border-4 border-gray-300 rounded text-gray-800 dark:text-white hover:border-blue-400 focus:ring-4 focus:ring-blue-400'
    />
      {error && (
      <p className="text-sm text-red-500 dark:text-red-400">
        This field is required. Please type something!
      </p>
    )}
    <p>{displayValue}</p>
    </div>
  );
}

export default Textbox;
